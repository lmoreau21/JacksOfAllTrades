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

const amplifyNavCss = ".nav{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center}.nav>*{margin:0 0.5em}";

const AmplifyNav = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("nav", { class: "nav" }, index.h("slot", null)));
    }
};
AmplifyNav.style = amplifyNavCss;

const AmplifySignOut = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Auth state change handler for this component */
        this.handleAuthStateChange = helpers.dispatchAuthStateChangeEvent;
        /** Text inside of the Sign Out button */
        this.buttonText = Translations.Translations.SIGN_OUT;
    }
    async signOut(event) {
        if (event)
            event.preventDefault();
        // TODO: Federated Sign Out
        if (!Auth.Auth || typeof Auth.Auth.signOut !== 'function') {
            throw new Error(constants.NO_AUTH_MODULE_FOUND);
        }
        try {
            await Auth.Auth.signOut();
            this.handleAuthStateChange(authTypes.AuthState.SignedOut);
        }
        catch (error) {
            helpers.dispatchToastHubEvent(error);
        }
    }
    render() {
        return (index.h("amplify-button", { slot: "sign-out", onClick: event => this.signOut(event), "data-test": "sign-out-button" }, core.I18n.get(this.buttonText)));
    }
};

exports.amplify_nav = AmplifyNav;
exports.amplify_sign_out = AmplifySignOut;