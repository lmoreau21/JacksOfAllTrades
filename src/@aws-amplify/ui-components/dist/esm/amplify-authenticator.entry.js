import { r as registerInstance, h, H as Host, g as getElement } from './index-83f2275b.js';
import { Logger, Hub } from '@aws-amplify/core';
import { A as AuthState } from './auth-types-78df304e.js';
import { appendToCognitoUserAgent, Auth } from '@aws-amplify/auth';
import './Translations-c833f663.js';
import { T as TOAST_AUTH_ERROR_EVENT, U as UI_AUTH_CHANNEL, A as AUTH_CHANNEL, N as NO_AUTH_MODULE_FOUND } from './constants-c8ecaa24.js';
import { d as dispatchAuthStateChangeEvent, o as onAuthUIStateChange } from './helpers-9703fe65.js';
import { c as checkContact } from './auth-helpers-475f7fa4.js';

const authSlotNames = {
    [AuthState.SignIn]: 'sign-in',
    [AuthState.ConfirmSignIn]: 'confirm-sign-in',
    [AuthState.SignUp]: 'sign-up',
    [AuthState.ConfirmSignUp]: 'confirm-sign-up',
    [AuthState.ForgotPassword]: 'forgot-password',
    [AuthState.ResetPassword]: 'require-new-password',
    [AuthState.VerifyContact]: 'verify-contact',
    [AuthState.TOTPSetup]: 'totp-setup',
    [AuthState.Loading]: 'loading',
};

const amplifyAuthenticatorCss = ":host{--background-color:var(--amplify-background-color);--width:28.75rem;--min-width:20rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;--box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.15);--border-radius:6px;--padding:35px 40px;--margin-bottom:20px;--container-height:100vh;--container-display:flex;--container-justify:center;--container-align:center}.auth-container{display:var(--container-display);-ms-flex-pack:var(--container-justify);justify-content:var(--container-justify);-ms-flex-align:var(--container-align);align-items:var(--container-align);min-height:var(--container-height)}";

const logger = new Logger('Authenticator');
const AmplifyAuthenticator = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, null, !this.hideToast && this.toastMessage && (h("amplify-toast", { message: this.toastMessage, handleClose: () => {
                this.toastMessage = '';
            }, "data-test": "authenticator-error" })), this.authState === AuthState.SignedIn ? ([h("slot", { name: "greetings" }), h("slot", null)]) : (h("div", { class: "auth-container" }, this.getSlotWithAuthComponent(this.authState)))));
    }
    get el() { return getElement(this); }
};
AmplifyAuthenticator.style = amplifyAuthenticatorCss;

export { AmplifyAuthenticator as amplify_authenticator };