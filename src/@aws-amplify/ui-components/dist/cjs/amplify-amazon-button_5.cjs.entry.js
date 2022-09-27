'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

const index = require('./index-6d44143a.js');
const core = require('@aws-amplify/core');
const authTypes = require('./auth-types-cd1f71d2.js');
const Auth = require('@aws-amplify/auth');
const Auth__default = _interopDefault(Auth);
const Translations = require('./Translations-5f4bb72c.js');
const constants = require('./constants-1335fef8.js');
const helpers = require('./helpers-0d7ea2c5.js');

const logger = new core.ConsoleLogger('amplify-amazon-button');
const AmplifyAmazonButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Auth state change handler for this component
         * e.g. SignIn -> 'Create Account' link -> SignUp
         */
        this.handleAuthStateChange = helpers.dispatchAuthStateChangeEvent;
        this.federatedSignIn = response => {
            const { access_token, expires_in } = response;
            if (!access_token) {
                return;
            }
            if (!Auth.Auth ||
                typeof Auth.Auth.federatedSignIn !== 'function' ||
                typeof Auth.Auth.currentAuthenticatedUser !== 'function') {
                throw new Error(constants.NO_AUTH_MODULE_FOUND);
            }
            const date = new Date();
            const expires_at = expires_in * 1000 + date.getTime();
            window['amazon'].Login.retrieveProfile(async (userInfo) => {
                if (!userInfo.success) {
                    return logger.debug('Get user Info failed');
                }
                const user = {
                    name: userInfo.profile.Name,
                    email: userInfo.profile.PrimaryEmail,
                };
                await Auth.Auth.federatedSignIn('amazon', { token: access_token, expires_at }, user);
                const authenticatedUser = await Auth.Auth.currentAuthenticatedUser();
                this.handleAuthStateChange(authTypes.AuthState.SignedIn, authenticatedUser);
            });
        };
    }
    /**
     * @see https://developer.amazon.com/docs/login-with-amazon/install-sdk-javascript.html
     */
    signInWithAmazon(event) {
        event.preventDefault();
        window['amazon'].Login.setClientId(this.clientId);
        window['amazon'].Login.authorize({ scope: 'profile' }, response => {
            if (response.error) {
                return logger.debug('Failed to login with amazon: ' + response.error);
            }
            try {
                window.localStorage.setItem(constants.AUTH_SOURCE_KEY, JSON.stringify({ provider: 'amazon' }));
            }
            catch (e) {
                logger.debug('Failed to cache auth source into localStorage', e);
            }
            this.federatedSignIn(response);
        });
    }
    render() {
        return (index.h("amplify-sign-in-button", { onClick: event => this.signInWithAmazon(event), provider: "amazon" }, index.h("script", { src: "https://assets.loginwithamazon.com/sdk/na/login1.js" }), core.I18n.get(Translations.Translations.SIGN_IN_WITH_AMAZON)));
    }
};

const logger$1 = new core.ConsoleLogger('amplify-auth0-button');
const AmplifyAuth0Button = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Auth state change handler for this component */
        this.handleAuthStateChange = helpers.dispatchAuthStateChangeEvent;
        this.handleLoad = () => {
            // @ts-ignore Property 'auth0' does not exist on type '{}'.
            const { oauth = {} } = Auth.Auth.configure();
            // @ts-ignore Property 'auth0' does not exist on type '{}'.
            const { config = oauth.auth0 } = this;
            if (!config) {
                logger$1.debug('Auth0 is not configured');
                return;
            }
            logger$1.debug('auth0 configuration', config);
            if (!this._auth0) {
                this._auth0 = new window['auth0'].WebAuth(config);
            }
            this._auth0.parseHash((err, authResult) => {
                if (err) {
                    logger$1.debug('Failed to parse the url for Auth0', err);
                    return;
                }
                if (!authResult) {
                    logger$1.debug('Auth0 found no authResult in hash');
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
                    localStorage.setItem(constants.AUTH_SOURCE_KEY, JSON.stringify(payload));
                }
                catch (e) {
                    logger$1.debug('Failed to cache auth source into localStorage', e);
                }
                this._auth0.client.userInfo(authResult.accessToken, async (err, user) => {
                    let username = undefined;
                    let email = undefined;
                    if (err) {
                        logger$1.debug('Failed to get the user info', err);
                    }
                    else {
                        username = user.name;
                        email = user.email;
                    }
                    await Auth.Auth.federatedSignIn(config.domain, {
                        token: authResult.idToken,
                        expires_at: authResult.expiresIn * 1000 + new Date().getTime(),
                    }, { name: username, email });
                    const authenticatedUser = await Auth.Auth.currentAuthenticatedUser();
                    this.handleAuthStateChange(authTypes.AuthState.SignedIn, authenticatedUser);
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
        return (index.h("amplify-sign-in-button", { onClick: event => this.signInWithAuth0(event), provider: "auth0" }, index.h("script", { onLoad: this.handleLoad, src: "https://cdn.auth0.com/js/auth0/9.11/auth0.min.js" }), core.I18n.get(Translations.Translations.SIGN_IN_WITH_AUTH0)));
    }
};

const logger$2 = new core.ConsoleLogger('amplify-facebook-button');
const AmplifyFacebookButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Auth state change handler for this component
         * e.g. SignIn -> 'Create Account' link -> SignUp
         */
        this.handleAuthStateChange = helpers.dispatchAuthStateChangeEvent;
        this.federatedSignIn = authResponse => {
            const { accessToken, expiresIn } = authResponse;
            if (!accessToken) {
                return;
            }
            if (!Auth.Auth ||
                typeof Auth.Auth.federatedSignIn !== 'function' ||
                typeof Auth.Auth.currentAuthenticatedUser !== 'function') {
                throw new Error(constants.NO_AUTH_MODULE_FOUND);
            }
            const date = new Date();
            const expires_at = expiresIn * 1000 + date.getTime();
            const fields = 'name,email';
            window['FB'].api('/me', { fields }, async (response) => {
                const user = {
                    name: response.name,
                    email: response.email,
                };
                await Auth.Auth.federatedSignIn('facebook', { token: accessToken, expires_at }, user);
                const authenticatedUser = await Auth.Auth.currentAuthenticatedUser();
                this.handleAuthStateChange(authTypes.AuthState.SignedIn, authenticatedUser);
            });
        };
        this.getLoginStatus = () => {
            window['FB'].getLoginStatus(response => {
                try {
                    window.localStorage.setItem(constants.AUTH_SOURCE_KEY, JSON.stringify({ provider: 'facebook' }));
                }
                catch (e) {
                    logger$2.debug('Failed to cache auth source into localStorage', e);
                }
                if (response.status === 'connected') {
                    return this.federatedSignIn(response.authResponse);
                }
                this.login();
            });
        };
        this.login = () => {
            const scope = 'public_profile,email';
            window['FB'].login(response => {
                if (response && response.authResponse) {
                    this.federatedSignIn(response.authResponse);
                }
            }, { scope });
        };
    }
    /**
     * @see https://developers.facebook.com/docs/javascript/reference/FB.init/v5.0
     */
    signInWithFacebook(event) {
        event.preventDefault();
        window['FB'].init({
            appId: this.appId,
            cookie: true,
            xfbml: false,
            version: 'v5.0',
        });
        this.getLoginStatus();
    }
    render() {
        return (index.h("amplify-sign-in-button", { onClick: event => this.signInWithFacebook(event), provider: "facebook" }, index.h("script", { async: true, defer: true, src: "https://connect.facebook.net/en_US/sdk.js" }), core.I18n.get(Translations.Translations.SIGN_IN_WITH_FACEBOOK)));
    }
};

const logger$3 = new core.ConsoleLogger('amplify-google-button');
const AmplifyGoogleButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Auth state change handler for this component
         * e.g. SignIn -> 'Create Account' link -> SignUp
         */
        this.handleAuthStateChange = helpers.dispatchAuthStateChangeEvent;
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
            if (!Auth.Auth ||
                typeof Auth.Auth.federatedSignIn !== 'function' ||
                typeof Auth.Auth.currentAuthenticatedUser !== 'function') {
                throw new Error(constants.NO_AUTH_MODULE_FOUND);
            }
            try {
                window.localStorage.setItem(constants.AUTH_SOURCE_KEY, JSON.stringify({ provider: 'google' }));
            }
            catch (e) {
                logger$3.debug('Failed to cache auth source into localStorage', e);
            }
            const { id_token, expires_at } = user.getAuthResponse();
            const profile = user.getBasicProfile();
            await Auth.Auth.federatedSignIn('google', { token: id_token, expires_at }, {
                email: profile.getEmail(),
                name: profile.getName(),
                picture: profile.getImageUrl(),
            });
            const authenticatedUser = await Auth.Auth.currentAuthenticatedUser();
            try {
                this.handleAuthStateChange(authTypes.AuthState.SignedIn, authenticatedUser);
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
        return (index.h("amplify-sign-in-button", { onClick: event => this.signInWithGoogle(event), provider: "google" }, index.h("script", { onLoad: this.handleLoad, src: "https://apis.google.com/js/api:client.js" }), core.I18n.get(Translations.Translations.SIGN_IN_WITH_GOOGLE)));
    }
};

const AmplifyOAuthButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Federated credentials & configuration. */
        this.config = {};
    }
    signInWithOAuth(event) {
        event.preventDefault();
        Auth.Auth.federatedSignIn();
    }
    render() {
        return (index.h("amplify-sign-in-button", { onClick: event => this.signInWithOAuth(event), provider: "oauth" }, this.config.label || core.I18n.get(Translations.Translations.SIGN_IN_WITH_AWS)));
    }
};

exports.amplify_amazon_button = AmplifyAmazonButton;
exports.amplify_auth0_button = AmplifyAuth0Button;
exports.amplify_facebook_button = AmplifyFacebookButton;
exports.amplify_google_button = AmplifyGoogleButton;
exports.amplify_oauth_button = AmplifyOAuthButton;
