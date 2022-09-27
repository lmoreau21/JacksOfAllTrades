import { Component, State, Prop, h, Host, Element } from '@stencil/core';
import { AuthState, } from '../../common/types/auth-types';
import { AUTH_CHANNEL, NO_AUTH_MODULE_FOUND, UI_AUTH_CHANNEL, TOAST_AUTH_ERROR_EVENT, } from '../../common/constants';
import { authSlotNames } from './auth-slot-names';
import { Auth, appendToCognitoUserAgent } from '@aws-amplify/auth';
import { Hub, Logger } from '@aws-amplify/core';
import { dispatchAuthStateChangeEvent, onAuthUIStateChange, } from '../../common/helpers';
import { checkContact } from '../../common/auth-helpers';
const logger = new Logger('Authenticator');
/**
 * @slot sign-in - Content placed inside of the sign in workflow for when a user wants to sign into their account
 * @slot confirm-sign-in - Content placed inside of the confirm sign in workflow for when a user needs to confirm the account they signed in with
 * @slot sign-up - Content placed inside of the sign up workflow for when a user wants to register a new account
 * @slot confirm-sign-up - Content placed inside of the confirm sign up workflow for when a user needs to confirm the account they signed up with
 * @slot forgot-password - Content placed inside of the forgot password workflow for when a user wants to reset their password
 * @slot require-new-password - Content placed inside of the require new password workflow for when a user is required to update their password
 * @slot verify-contact - Content placed inside of the verify-contact workflow for when a user must verify their contact information
 * @slot totp-setup - Content placed inside of the totp-setup workflow for when a user opts to use TOTP MFA
 * @slot greetings - Content placed inside of the greetings navigation for when a user is signed in
 * @slot loading - Content placed inside of the loading workflow for when the app is loading
 */
export class AmplifyAuthenticator {
    constructor() {
        /** Initial starting state of the Authenticator component. E.g. If `signup` is passed the default component is set to AmplifySignUp */
        this.initialAuthState = AuthState.SignIn;
        /** Callback for Authenticator state machine changes */
        this.handleAuthStateChange = () => { };
        /** Hide amplify-toast for auth errors */
        this.hideToast = false;
        this.authState = AuthState.Loading;
        this.toastMessage = '';
        this.handleExternalAuthEvent = ({ payload }) => {
            switch (payload.event) {
                case 'cognitoHostedUI':
                case 'signIn':
                    checkContact(payload.data, dispatchAuthStateChangeEvent);
                    break;
                case 'cognitoHostedUI_failure':
                case 'parsingUrl_failure':
                case 'signOut':
                case 'customGreetingSignOut':
                    return dispatchAuthStateChangeEvent(this.initialAuthState);
            }
        };
        this.handleToastEvent = ({ payload }) => {
            switch (payload.event) {
                case TOAST_AUTH_ERROR_EVENT:
                    if (payload.message)
                        this.toastMessage = payload.message;
                    break;
            }
        };
    }
    async componentWillLoad() {
        onAuthUIStateChange((authState, authData) => {
            this.onAuthStateChange(authState, authData);
            this.toastMessage = '';
        });
        if (!this.hideToast)
            Hub.listen(UI_AUTH_CHANNEL, this.handleToastEvent);
        Hub.listen(AUTH_CHANNEL, this.handleExternalAuthEvent);
        appendToCognitoUserAgent('amplify-authenticator');
        await this.checkUser();
    }
    async checkUser() {
        if (!Auth || typeof Auth.currentAuthenticatedUser !== 'function') {
            throw new Error(NO_AUTH_MODULE_FOUND);
        }
        return Auth.currentAuthenticatedUser()
            .then(user => {
            dispatchAuthStateChangeEvent(AuthState.SignedIn, user);
        })
            .catch(() => {
            dispatchAuthStateChangeEvent(this.initialAuthState);
        });
    }
    async onAuthStateChange(nextAuthState, data) {
        if (nextAuthState === undefined)
            return logger.error('nextAuthState cannot be undefined');
        logger.info('Inside onAuthStateChange Method current authState:', this.authState);
        if (nextAuthState === AuthState.SignedOut) {
            this.authState = this.initialAuthState;
        }
        else {
            this.authState = nextAuthState;
        }
        this.authData = data;
        if (this.authData)
            logger.log('Auth Data was set:', this.authData);
        if (this.authState === nextAuthState) {
            this.handleAuthStateChange(this.authState, this.authData);
            logger.info(`authState has been updated to ${this.authState}`);
        }
    }
    // Returns the auth component corresponding to the given authState.
    getAuthComponent(authState) {
        switch (authState) {
            case AuthState.SignIn:
                return (h("amplify-sign-in", { federated: this.federated, usernameAlias: this.usernameAlias }));
            case AuthState.ConfirmSignIn:
                return h("amplify-confirm-sign-in", { user: this.authData });
            case AuthState.SignUp:
                return h("amplify-sign-up", { usernameAlias: this.usernameAlias });
            case AuthState.ConfirmSignUp:
                return (h("amplify-confirm-sign-up", { user: this.authData, usernameAlias: this.usernameAlias }));
            case AuthState.ForgotPassword:
                return h("amplify-forgot-password", { usernameAlias: this.usernameAlias });
            case AuthState.ResetPassword:
                return h("amplify-require-new-password", { user: this.authData });
            case AuthState.VerifyContact:
                return h("amplify-verify-contact", { user: this.authData });
            case AuthState.TOTPSetup:
                return h("amplify-totp-setup", { user: this.authData });
            case AuthState.Loading:
                return h("div", null, "Loading...");
            default:
                throw new Error(`Unhandled auth state: ${authState}`);
        }
    }
    // Returns a slot containing the Auth component corresponding to the given authState
    getSlotWithAuthComponent(authState) {
        const authComponent = this.getAuthComponent(authState);
        const slotName = authSlotNames[authState];
        const slotIsEmpty = this.el.querySelector(`[slot="${slotName}"]`) === null; // true if no element has been inserted to the slot
        /**
         * Connect the inner auth component to DOM only if the slot hasn't been overwritten. This prevents
         * the overwritten component from calling its lifecycle methods.
         */
        return h("slot", { name: slotName }, slotIsEmpty && authComponent);
    }
    disconnectedCallback() {
        Hub.remove(AUTH_CHANNEL, this.handleExternalAuthEvent);
        if (!this.hideToast)
            Hub.remove(UI_AUTH_CHANNEL, this.handleToastEvent);
        return onAuthUIStateChange;
    }
    render() {
        return (h(Host, null,
            !this.hideToast && this.toastMessage && (h("amplify-toast", { message: this.toastMessage, handleClose: () => {
                    this.toastMessage = '';
                }, "data-test": "authenticator-error" })),
            this.authState === AuthState.SignedIn ? ([h("slot", { name: "greetings" }), h("slot", null)]) : (h("div", { class: "auth-container" }, this.getSlotWithAuthComponent(this.authState)))));
    }
    static get is() { return "amplify-authenticator"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["amplify-authenticator.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["amplify-authenticator.css"]
    }; }
    static get properties() { return {
        "initialAuthState": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "| AuthState.SignIn\n\t\t| AuthState.SignUp\n\t\t| AuthState.ForgotPassword",
                "resolved": "AuthState.ForgotPassword | AuthState.SignIn | AuthState.SignUp",
                "references": {
                    "AuthState": {
                        "location": "import",
                        "path": "../../common/types/auth-types"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Initial starting state of the Authenticator component. E.g. If `signup` is passed the default component is set to AmplifySignUp"
            },
            "attribute": "initial-auth-state",
            "reflect": false,
            "defaultValue": "AuthState.SignIn"
        },
        "federated": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "FederatedConfig",
                "resolved": "FederatedConfig",
                "references": {
                    "FederatedConfig": {
                        "location": "import",
                        "path": "../../common/types/auth-types"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Federated credentials & configuration."
            }
        },
        "usernameAlias": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "UsernameAliasStrings",
                "resolved": "\"email\" | \"phone_number\" | \"username\"",
                "references": {
                    "UsernameAliasStrings": {
                        "location": "import",
                        "path": "../../common/types/auth-types"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Username Alias is used to setup authentication with `username`, `email` or `phone_number`"
            },
            "attribute": "username-alias",
            "reflect": false
        },
        "handleAuthStateChange": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "AuthStateHandler",
                "resolved": "(nextAuthState: AuthState, data?: object) => void",
                "references": {
                    "AuthStateHandler": {
                        "location": "import",
                        "path": "../../common/types/auth-types"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Callback for Authenticator state machine changes"
            },
            "defaultValue": "() => {}"
        },
        "hideToast": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Hide amplify-toast for auth errors"
            },
            "attribute": "hide-toast",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "authState": {},
        "authData": {},
        "toastMessage": {}
    }; }
    static get elementRef() { return "el"; }
}
