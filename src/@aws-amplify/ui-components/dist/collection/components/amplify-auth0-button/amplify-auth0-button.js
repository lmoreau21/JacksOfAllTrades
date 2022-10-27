import { Auth } from '@aws-amplify/auth';
import { I18n, ConsoleLogger as Logger } from '@aws-amplify/core';
import { Component, h, Prop } from '@stencil/core';
import { AUTH_SOURCE_KEY } from '../../common/constants';
import { AuthState, } from '../../common/types/auth-types';
import { dispatchAuthStateChangeEvent } from '../../common/helpers';
import { Translations } from '../../common/Translations';
const logger = new Logger('amplify-auth0-button');
export class AmplifyAuth0Button {
    constructor() {
        /** Auth state change handler for this component */
        this.handleAuthStateChange = dispatchAuthStateChangeEvent;
        this.handleLoad = () => {
            // @ts-ignore Property 'auth0' does not exist on type '{}'.
            const { oauth = {} } = Auth.configure();
            // @ts-ignore Property 'auth0' does not exist on type '{}'.
            const { config = oauth.auth0 } = this;
            if (!config) {
                logger.debug('Auth0 is not configured');
                return;
            }
            logger.debug('auth0 configuration', config);
            if (!this._auth0) {
                this._auth0 = new window['auth0'].WebAuth(config);
            }
            this._auth0.parseHash((err, authResult) => {
                if (err) {
                    logger.debug('Failed to parse the url for Auth0', err);
                    return;
                }
                if (!authResult) {
                    logger.debug('Auth0 found no authResult in hash');
                    return;
                }
                const payload = {
                    provider: 'auth0',
                    opts: {
                        returnTo: config.returnTo,
                        clientID: config.clientID,
                        federated: config.federated,
                    },
                };
                try {
                    localStorage.setItem(AUTH_SOURCE_KEY, JSON.stringify(payload));
                }
                catch (e) {
                    logger.debug('Failed to cache auth source into localStorage', e);
                }
                this._auth0.client.userInfo(authResult.accessToken, async (err, user) => {
                    let username = undefined;
                    let email = undefined;
                    if (err) {
                        logger.debug('Failed to get the user info', err);
                    }
                    else {
                        username = user.name;
                        email = user.email;
                    }
                    await Auth.federatedSignIn(config.domain, {
                        token: authResult.idToken,
                        expires_at: authResult.expiresIn * 1000 + new Date().getTime(),
                    }, { name: username, email });
                    const authenticatedUser = await Auth.currentAuthenticatedUser();
                    this.handleAuthStateChange(AuthState.SignedIn, authenticatedUser);
                });
            });
        };
    }
    signInWithAuth0(event) {
        event.preventDefault();
        if (!this._auth0) {
            throw new Error('the auth0 client is not configured');
        }
        this._auth0.authorize();
    }
    render() {
        return (h("amplify-sign-in-button", { onClick: event => this.signInWithAuth0(event), provider: "auth0" },
            h("script", { onLoad: this.handleLoad, src: "https://cdn.auth0.com/js/auth0/9.11/auth0.min.js" }),
            I18n.get(Translations.SIGN_IN_WITH_AUTH0)));
    }
    static get is() { return "amplify-auth0-button"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "config": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "FederatedConfig['auth0Config']",
                "resolved": "{ audience?: string; clientID: string; domain: string; responseType: string; redirectUri: string; returnTo?: string; scope?: string; }",
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
                "text": "See: https://auth0.com/docs/libraries/auth0js/v9#available-parameters"
            }
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
                "text": "Auth state change handler for this component"
            },
            "defaultValue": "dispatchAuthStateChangeEvent"
        }
    }; }
}