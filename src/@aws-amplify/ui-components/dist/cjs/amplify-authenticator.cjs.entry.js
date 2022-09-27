'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

const index = require('./index-6d44143a.js');
const core = require('@aws-amplify/core');
const authTypes = require('./auth-types-cd1f71d2.js');
const Auth = require('@aws-amplify/auth');
const Auth__default = _interopDefault(Auth);
require('./Translations-5f4bb72c.js');
const constants = require('./constants-1335fef8.js');
const helpers = require('./helpers-0d7ea2c5.js');
const authHelpers = require('./auth-helpers-ed56b901.js');

const authSlotNames = {
    [authTypes.AuthState.SignIn]: 'sign-in',
    [authTypes.AuthState.ConfirmSignIn]: 'confirm-sign-in',
    [authTypes.AuthState.SignUp]: 'sign-up',
    [authTypes.AuthState.ConfirmSignUp]: 'confirm-sign-up',
    [authTypes.AuthState.ForgotPassword]: 'forgot-password',
    [authTypes.AuthState.ResetPassword]: 'require-new-password',
    [authTypes.AuthState.VerifyContact]: 'verify-contact',
    [authTypes.AuthState.TOTPSetup]: 'totp-setup',
    [authTypes.AuthState.Loading]: 'loading',
};

const amplifyAuthenticatorCss = ":host{--background-color:var(--amplify-background-color);--width:28.75rem;--min-width:20rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;--box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.15);--border-radius:6px;--padding:35px 40px;--margin-bottom:20px;--container-height:100vh;--container-display:flex;--container-justify:center;--container-align:center}.auth-container{display:var(--container-display);-ms-flex-pack:var(--container-justify);justify-content:var(--container-justify);-ms-flex-align:var(--container-align);align-items:var(--container-align);min-height:var(--container-height)}";

const logger = new core.Logger('Authenticator');
const AmplifyAuthenticator = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Initial starting state of the Authenticator component. E.g. If `signup` is passed the default component is set to AmplifySignUp */
        this.initialAuthState = authTypes.AuthState.SignIn;
        /** Callback for Authenticator state machine changes */
        this.handleAuthStateChange = () => { };
        /** Hide amplify-toast for auth errors */
        this.hideToast = false;
        this.authState = authTypes.AuthState.Loading;
        this.toastMessage = '';
        this.handleExternalAuthEvent = ({ payload }) => {
            switch (payload.event) {
                case 'cognitoHostedUI':
                case 'signIn':
                    authHelpers.checkContact(payload.data, helpers.dispatchAuthStateChangeEvent);
                    break;
                case 'cognitoHostedUI_failure':
                case 'parsingUrl_failure':
                case 'signOut':
                case 'customGreetingSignOut':
                    return helpers.dispatchAuthStateChangeEvent(this.initialAuthState);
            }
        };
        this.handleToastEvent = ({ payload }) => {
            switch (payload.event) {
                case constants.TOAST_AUTH_ERROR_EVENT:
                    if (payload.message)
                        this.toastMessage = payload.message;
                    break;
            }
        };
    }
    async componentWillLoad() {
        helpers.onAuthUIStateChange((authState, authData) => {
            this.onAuthStateChange(authState, authData);
            this.toastMessage = '';
        });
        if (!this.hideToast)
            core.Hub.listen(constants.UI_AUTH_CHANNEL, this.handleToastEvent);
        core.Hub.listen(constants.AUTH_CHANNEL, this.handleExternalAuthEvent);
        Auth.appendToCognitoUserAgent('amplify-authenticator');
        await this.checkUser();
    }
    async checkUser() {
        if (!Auth.Auth || typeof Auth.Auth.currentAuthenticatedUser !== 'function') {
            throw new Error(constants.NO_AUTH_MODULE_FOUND);
        }
        return Auth.Auth.currentAuthenticatedUser()
            .then(user => {
            helpers.dispatchAuthStateChangeEvent(authTypes.AuthState.SignedIn, user);
        })
            .catch(() => {
            helpers.dispatchAuthStateChangeEvent(this.initialAuthState);
        });
    }
    async onAuthStateChange(nextAuthState, data) {
        if (nextAuthState === undefined)
            return logger.error('nextAuthState cannot be undefined');
        logger.info('Inside onAuthStateChange Method current authState:', this.authState);
        if (nextAuthState === authTypes.AuthState.SignedOut) {
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
            case authTypes.AuthState.SignIn:
                return (index.h("amplify-sign-in", { federated: this.federated, usernameAlias: this.usernameAlias }));
            case authTypes.AuthState.ConfirmSignIn:
                return index.h("amplify-confirm-sign-in", { user: this.authData });
            case authTypes.AuthState.SignUp:
                return index.h("amplify-sign-up", { usernameAlias: this.usernameAlias });
            case authTypes.AuthState.ConfirmSignUp:
                return (index.h("amplify-confirm-sign-up", { user: this.authData, usernameAlias: this.usernameAlias }));
            case authTypes.AuthState.ForgotPassword:
                return index.h("amplify-forgot-password", { usernameAlias: this.usernameAlias });
            case authTypes.AuthState.ResetPassword:
                return index.h("amplify-require-new-password", { user: this.authData });
            case authTypes.AuthState.VerifyContact:
                return index.h("amplify-verify-contact", { user: this.authData });
            case authTypes.AuthState.TOTPSetup:
                return index.h("amplify-totp-setup", { user: this.authData });
            case authTypes.AuthState.Loading:
                return index.h("div", null, "Loading...");
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
        return index.h("slot", { name: slotName }, slotIsEmpty && authComponent);
    }
    disconnectedCallback() {
        core.Hub.remove(constants.AUTH_CHANNEL, this.handleExternalAuthEvent);
        if (!this.hideToast)
            core.Hub.remove(constants.UI_AUTH_CHANNEL, this.handleToastEvent);
        return helpers.onAuthUIStateChange;
    }
    render() {
        return (index.h(index.Host, null, !this.hideToast && this.toastMessage && (index.h("amplify-toast", { message: this.toastMessage, handleClose: () => {
                this.toastMessage = '';
            }, "data-test": "authenticator-error" })), this.authState === authTypes.AuthState.SignedIn ? ([index.h("slot", { name: "greetings" }), index.h("slot", null)]) : (index.h("div", { class: "auth-container" }, this.getSlotWithAuthComponent(this.authState)))));
    }
    get el() { return index.getElement(this); }
};
AmplifyAuthenticator.style = amplifyAuthenticatorCss;

exports.amplify_authenticator = AmplifyAuthenticator;
