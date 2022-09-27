import { Auth } from '@aws-amplify/auth';
import { I18n, ConsoleLogger as Logger } from '@aws-amplify/core';
import { Component, h, Prop } from '@stencil/core';
import { dispatchAuthStateChangeEvent } from '../../common/helpers';
import { AUTH_SOURCE_KEY, NO_AUTH_MODULE_FOUND } from '../../common/constants';
import { Translations } from '../../common/Translations';
import { AuthState, } from '../../common/types/auth-types';
const logger = new Logger('amplify-google-button');
export class AmplifyGoogleButton {
    constructor() {
        /** Auth state change handler for this component
         * e.g. SignIn -> 'Create Account' link -> SignUp
         */
        this.handleAuthStateChange = dispatchAuthStateChangeEvent;
        this.handleError = error => {
            console.error(error);
        };
        /**
         * @see https://developers.google.com/identity/sign-in/web/build-button#building_a_button_with_a_custom_graphic
         */
        this.handleLoad = () => {
            window['gapi'].load('auth2');
        };
        this.handleUser = async (user) => {
            if (!Auth ||
                typeof Auth.federatedSignIn !== 'function' ||
                typeof Auth.currentAuthenticatedUser !== 'function') {
                throw new Error(NO_AUTH_MODULE_FOUND);
            }
            try {
                window.localStorage.setItem(AUTH_SOURCE_KEY, JSON.stringify({ provider: 'google' }));
            }
            catch (e) {
                logger.debug('Failed to cache auth source into localStorage', e);
            }
            const { id_token, expires_at } = user.getAuthResponse();
            const profile = user.getBasicProfile();
            await Auth.federatedSignIn('google', { token: id_token, expires_at }, {
                email: profile.getEmail(),
                name: profile.getName(),
                picture: profile.getImageUrl(),
            });
            const authenticatedUser = await Auth.currentAuthenticatedUser();
            try {
                this.handleAuthStateChange(AuthState.SignedIn, authenticatedUser);
            }
            catch (error) {
                this.handleError(error);
            }
        };
    }
    getAuthInstance() {
        if (window['gapi'] && window['gapi'].auth2) {
            return (window['gapi'].auth2.getAuthInstance() ||
                window['gapi'].auth2.init({
                    client_id: this.clientId,
                    cookiepolicy: 'single_host_origin',
                    scope: 'profile email openid',
                }));
        }
        return null;
    }
    signInWithGoogle(event) {
        event.preventDefault();
        this.getAuthInstance()
            .signIn()
            .then(this.handleUser)
            .catch(this.handleError);
    }
    render() {
        return (h("amplify-sign-in-button", { onClick: event => this.signInWithGoogle(event), provider: "google" },
            h("script", { onLoad: this.handleLoad, src: "https://apis.google.com/js/api:client.js" }),
            I18n.get(Translations.SIGN_IN_WITH_GOOGLE)));
    }
    static get is() { return "amplify-google-button"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
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
        },
        "clientId": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "FederatedConfig['googleClientId']",
                "resolved": "string",
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
                "text": "App-specific client ID from Google"
            },
            "attribute": "client-id",
            "reflect": false
        }
    }; }
}
