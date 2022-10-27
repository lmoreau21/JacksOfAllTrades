import { r as registerInstance, h } from './index-83f2275b.js';
import { isEmpty } from '@aws-amplify/core';
import { A as AuthState } from './auth-types-78df304e.js';
import { Auth } from '@aws-amplify/auth';
import './Translations-c833f663.js';
import { N as NO_AUTH_MODULE_FOUND } from './constants-c8ecaa24.js';
import { d as dispatchAuthStateChangeEvent } from './helpers-9703fe65.js';

const AmplifyFederatedButtons = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("div", null, googleClientId && (h("div", null, h("amplify-google-button", { clientId: googleClientId, handleAuthStateChange: this.handleAuthStateChange }))), facebookAppId && (h("div", null, h("amplify-facebook-button", { appId: facebookAppId, handleAuthStateChange: this.handleAuthStateChange }))), amazonClientId && (h("div", null, h("amplify-amazon-button", { clientId: amazonClientId, handleAuthStateChange: this.handleAuthStateChange }))), oauthConfig && (h("div", null, h("amplify-oauth-button", { config: oauthConfig }))), auth0Config && (h("div", null, h("amplify-auth0-button", { config: auth0Config, handleAuthStateChange: this.handleAuthStateChange })))));
    }
};

const amplifyStrikeCss = ".sc-amplify-strike-h{--color:var(--amplify-grey);--border-color:var(--amplify-light-grey);--content-background:var(--amplify-white);display:block;width:100%;text-align:center;border-bottom:1px solid var(--border-color);line-height:0.1em;margin:32px 0;color:var(--color)}.strike-content.sc-amplify-strike{background:var(--content-background);padding:0 25px;font-size:var(--amplify-text-sm);font-weight:500}";

const AmplifyStrike = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("span", { class: "strike-content" }, h("slot", null)));
    }
};
AmplifyStrike.style = amplifyStrikeCss;

export { AmplifyFederatedButtons as amplify_federated_buttons, AmplifyStrike as amplify_strike };