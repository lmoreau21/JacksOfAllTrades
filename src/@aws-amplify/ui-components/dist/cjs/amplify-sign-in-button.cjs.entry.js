'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6d44143a.js');
const icons = require('./icons-bb14c572.js');

const amplifySignInButtonCss = ".sc-amplify-sign-in-button-h{--button-color:var(--amplify-secondary-color);--amazon-button-background:var(--amplify-primary-color);--amazon-button-color:var(--amplify-primary-contrast);--auth0-button-background:#eb5424;--auth0--button-border-color:#e14615;--auth0-button-color:var(--amplify-white);--facebook-button-background:#4267b2;--facebook--button-border-color:#4267b2;--facebook-button-color:var(--amplify-white);--google-button-background:#4285f4;--google--button-border-color:#4285f4;--google-button-color:var(--amplify-white);--oauth-button-background:var(--amplify-white);--oauth--button-color:#152939}.sign-in-button.sc-amplify-sign-in-button button.sc-amplify-sign-in-button{position:relative;width:100%;border-radius:4px;margin-bottom:10px;cursor:pointer;padding:0;color:var(--button-color);font-size:var(--amplify-text-sm);-webkit-box-sizing:content-box;box-sizing:content-box}.sign-in-button.sc-amplify-sign-in-button button.sc-amplify-sign-in-button:hover{opacity:0.8}.sign-in-button.amazon.sc-amplify-sign-in-button button.sc-amplify-sign-in-button{background-color:var(--amazon-button-background);border:none;color:var(--amazon-button-color);font-family:\"Amazon Ember\"}.sign-in-button.auth0.sc-amplify-sign-in-button button.sc-amplify-sign-in-button{background-color:var(--auth0-button-background);font-family:Roboto;border:1px solid var(--auth0--button-border-color);color:var(--auth0-button-color)}.sign-in-button.facebook.sc-amplify-sign-in-button button.sc-amplify-sign-in-button{background-color:var(--facebook-button-background);border-color:var(--facebook--button-border-color);font-family:\"Helvetica Neue\";color:var(--facebook-button-color)}.sign-in-button.google.sc-amplify-sign-in-button button.sc-amplify-sign-in-button{background-color:var(--google-button-background);font-family:Roboto;border:1px solid var(--google--button-border-color);color:var(--google-button-color)}.sign-in-button.oauth.sc-amplify-sign-in-button button.sc-amplify-sign-in-button{background-color:var(--oauth-button-background);color:var(--oauth--button-color)}.sign-in-button.sc-amplify-sign-in-button .icon.sc-amplify-sign-in-button{position:absolute;left:0}.sign-in-button.amazon.sc-amplify-sign-in-button .icon.sc-amplify-sign-in-button{padding:10px;height:32px;width:32px}.sign-in-button.auth0.sc-amplify-sign-in-button .icon.sc-amplify-sign-in-button{border-radius:4px 0 0 4px;height:28px;width:28px;padding:12px;color:#fff}.sign-in-button.facebook.sc-amplify-sign-in-button .icon.sc-amplify-sign-in-button{height:33px;width:18px;padding:10px 14px}.sign-in-button.google.sc-amplify-sign-in-button .icon.sc-amplify-sign-in-button{background-color:#fff;border-radius:4px 0 0 4px;height:28px;width:28px;padding:12px}.sign-in-button.sc-amplify-sign-in-button .content.sc-amplify-sign-in-button{text-align:center;display:block;padding:18px 0;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}";

const AmplifySignInButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { class: `sign-in-button ${this.provider}` }, index.h("button", null, this.provider in icons.icons && (index.h("span", { class: "icon" }, index.h("amplify-icon", { name: this.provider }))), index.h("span", { class: "content" }, index.h("slot", null)))));
    }
};
AmplifySignInButton.style = amplifySignInButtonCss;

exports.amplify_sign_in_button = AmplifySignInButton;