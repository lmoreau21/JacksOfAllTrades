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

const AmplifyFederatedButtons = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** The current authentication state. */
        this.authState = authTypes.AuthState.SignIn;
        /** Federated credentials & configuration. */
        this.federated = {};
        /** Auth state change handler for this component
         * e.g. SignIn -> 'Create Account' link -> SignUp
         */
        this.handleAuthStateChange = helpers.dispatchAuthStateChangeEvent;
    }
    componentWillLoad() {
        if (!Auth.Auth || typeof Auth.Auth.configure !== 'function') {
            throw new Error(constants.NO_AUTH_MODULE_FOUND);
        }
        const { oauth = {} } = Auth.Auth.configure();
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
        if (!Object.values(authTypes.AuthState).includes(this.authState)) {
            return null;
        }
        if (core.isEmpty(this.federated)) {
            return null;
        }
        const { amazonClientId, auth0Config, facebookAppId, googleClientId, oauthConfig, } = this.federated;
        return (index.h("div", null, googleClientId && (index.h("div", null, index.h("amplify-google-button", { clientId: googleClientId, handleAuthStateChange: this.handleAuthStateChange }))), facebookAppId && (index.h("div", null, index.h("amplify-facebook-button", { appId: facebookAppId, handleAuthStateChange: this.handleAuthStateChange }))), amazonClientId && (index.h("div", null, index.h("amplify-amazon-button", { clientId: amazonClientId, handleAuthStateChange: this.handleAuthStateChange }))), oauthConfig && (index.h("div", null, index.h("amplify-oauth-button", { config: oauthConfig }))), auth0Config && (index.h("div", null, index.h("amplify-auth0-button", { config: auth0Config, handleAuthStateChange: this.handleAuthStateChange })))));
    }
};

const amplifyStrikeCss = ".sc-amplify-strike-h{--color:var(--amplify-grey);--border-color:var(--amplify-light-grey);--content-background:var(--amplify-white);display:block;width:100%;text-align:center;border-bottom:1px solid var(--border-color);line-height:0.1em;margin:32px 0;color:var(--color)}.strike-content.sc-amplify-strike{background:var(--content-background);padding:0 25px;font-size:var(--amplify-text-sm);font-weight:500}";

const AmplifyStrike = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("span", { class: "strike-content" }, index.h("slot", null)));
    }
};
AmplifyStrike.style = amplifyStrikeCss;

exports.amplify_federated_buttons = AmplifyFederatedButtons;
exports.amplify_strike = AmplifyStrike;