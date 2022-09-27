import { r as registerInstance, h } from './index-83f2275b.js';
import { I18n } from '@aws-amplify/core';
import { A as AuthState } from './auth-types-78df304e.js';
import { Auth } from '@aws-amplify/auth';
import { T as Translations } from './Translations-c833f663.js';
import { N as NO_AUTH_MODULE_FOUND } from './constants-c8ecaa24.js';
import { d as dispatchAuthStateChangeEvent, a as dispatchToastHubEvent } from './helpers-9703fe65.js';

const amplifyNavCss = ".nav{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center}.nav>*{margin:0 0.5em}";

const AmplifyNav = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("nav", { class: "nav" }, h("slot", null)));
    }
};
AmplifyNav.style = amplifyNavCss;

const AmplifySignOut = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** Auth state change handler for this component */
        this.handleAuthStateChange = dispatchAuthStateChangeEvent;
        /** Text inside of the Sign Out button */
        this.buttonText = Translations.SIGN_OUT;
    }
    async signOut(event) {
        if (event)
            event.preventDefault();
        // TODO: Federated Sign Out
        if (!Auth || typeof Auth.signOut !== 'function') {
            throw new Error(NO_AUTH_MODULE_FOUND);
        }
        try {
            await Auth.signOut();
            this.handleAuthStateChange(AuthState.SignedOut);
        }
        catch (error) {
            dispatchToastHubEvent(error);
        }
    }
    render() {
        return (h("amplify-button", { slot: "sign-out", onClick: event => this.signOut(event), "data-test": "sign-out-button" }, I18n.get(this.buttonText)));
    }
};

export { AmplifyNav as amplify_nav, AmplifySignOut as amplify_sign_out };
