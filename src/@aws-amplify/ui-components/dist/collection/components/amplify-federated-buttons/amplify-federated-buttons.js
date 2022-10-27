import { Auth } from '@aws-amplify/auth';
import { isEmpty } from '@aws-amplify/core';
import { Component, h, Prop } from '@stencil/core';
import { dispatchAuthStateChangeEvent } from '../../common/helpers';
import { NO_AUTH_MODULE_FOUND } from '../../common/constants';
import { AuthState, } from '../../common/types/auth-types';
export class AmplifyFederatedButtons {
    constructor() {
        /** The current authentication state. */
        this.authState = AuthState.SignIn;
        /** Federated credentials & configuration. */
        this.federated = {};
        /** Auth state change handler for this component
         * e.g. SignIn -> 'Create Account' link -> SignUp
         */
        this.handleAuthStateChange = dispatchAuthStateChangeEvent;
    }
    componentWillLoad() {
        if (!Auth || typeof Auth.configure !== 'function') {
            throw new Error(NO_AUTH_MODULE_FOUND);
        }
        const { oauth = {} } = Auth.configure();
        // backward compatibility
        if (oauth['domain']) {
            this.federated.oauthConfig = Object.assign(Object.assign({}, this.federated.oauthConfig), oauth);
        }
        else if (oauth['awsCognito']) {
            this.federated.oauthConfig = Object.assign(Object.assign({}, this.federated.oauthConfig), oauth['awsCognito']);
        }
        if (oauth['auth0']) {
            this.federated.auth0Config = Object.assign(Object.assign({}, this.federated.auth0Config), oauth['auth0']);
        }
    }
    render() {
        if (!Object.values(AuthState).includes(this.authState)) {
            return null;
        }
        if (isEmpty(this.federated)) {
            return null;
        }
        const { amazonClientId, auth0Config, facebookAppId, googleClientId, oauthConfig, } = this.federated;
        return (h("div", null,
            googleClientId && (h("div", null,
                h("amplify-google-button", { clientId: googleClientId, handleAuthStateChange: this.handleAuthStateChange }))),
            facebookAppId && (h("div", null,
                h("amplify-facebook-button", { appId: facebookAppId, handleAuthStateChange: this.handleAuthStateChange }))),
            amazonClientId && (h("div", null,
                h("amplify-amazon-button", { clientId: amazonClientId, handleAuthStateChange: this.handleAuthStateChange }))),
            oauthConfig && (h("div", null,
                h("amplify-oauth-button", { config: oauthConfig }))),
            auth0Config && (h("div", null,
                h("amplify-auth0-button", { config: auth0Config, handleAuthStateChange: this.handleAuthStateChange })))));
    }
    static get is() { return "amplify-federated-buttons"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "authState": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "AuthState",
                "resolved": "AuthState.ConfirmSignIn | AuthState.ConfirmSignUp | AuthState.CustomConfirmSignIn | AuthState.ForgotPassword | AuthState.Loading | AuthState.ResetPassword | AuthState.SettingMFA | AuthState.SignIn | AuthState.SignOut | AuthState.SignUp | AuthState.SignedIn | AuthState.SignedOut | AuthState.SigningUp | AuthState.TOTPSetup | AuthState.VerifyContact | AuthState.VerifyingAttributes | AuthState.confirmingSignInCustomFlow | AuthState.confirmingSignUpCustomFlow",
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
                "text": "The current authentication state."
            },
            "attribute": "auth-state",
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
            },
            "defaultValue": "{}"
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
                "text": "Auth state change handler for this component\ne.g. SignIn -> 'Create Account' link -> SignUp"
            },
            "defaultValue": "dispatchAuthStateChangeEvent"
        }
    }; }
}