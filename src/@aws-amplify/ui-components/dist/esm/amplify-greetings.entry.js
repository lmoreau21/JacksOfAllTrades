import { r as registerInstance, h } from './index-83f2275b.js';
import '@aws-amplify/core';
import './auth-types-78df304e.js';
import '@aws-amplify/auth';
import './Translations-c833f663.js';
import './constants-c8ecaa24.js';
import { d as dispatchAuthStateChangeEvent } from './helpers-9703fe65.js';

const amplifyGreetingsCss = ":host{--background-color:var(--amplify-white);--border-color:var(--amplify-light-grey);--font-family:var(--amplify-font-family)}.greetings{display:-ms-flexbox;display:flex;border:1px solid transparent;background-color:var(--background-color);border-color:var(--border-color);padding:0.625rem;font-family:var(--font-family);-ms-flex-pack:justify;justify-content:space-between}.nav{display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center}.logo{display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center;justify-self:flex-start}amplify-sign-out{margin-left:1rem}";

const AmplifyGreetings = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** Username displayed in the greetings */
        this.username = null;
        /** Logo displayed inside of the header */
        this.logo = null;
        /** Auth state change handler for this component */
        this.handleAuthStateChange = dispatchAuthStateChangeEvent;
    }
    render() {
        return (h("header", { class: "greetings" }, h("span", { class: "logo" }, h("slot", { name: "logo" }, this.logo && h("span", null, this.logo))), h("span", { class: "nav" }, h("slot", { name: "nav" }, h("amplify-nav", null, this.username && (h("slot", { name: "greetings-message" }, h("span", null, "Hello, ", this.username))), h("amplify-sign-out", { handleAuthStateChange: this.handleAuthStateChange }))))));
    }
};
AmplifyGreetings.style = amplifyGreetingsCss;

export { AmplifyGreetings as amplify_greetings };