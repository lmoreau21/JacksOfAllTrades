import { Auth } from '@aws-amplify/auth';
import { I18n } from '@aws-amplify/core';
import { Component, Prop, h } from '@stencil/core';
import { NO_AUTH_MODULE_FOUND } from '../../common/constants';
import { AuthState } from '../../common/types/auth-types';
import { dispatchToastHubEvent, dispatchAuthStateChangeEvent, } from '../../common/helpers';
import { Translations } from '../../common/Translations';
/**
 * @slot sign-out - The sign out button element
 */
export class AmplifySignOut {
    constructor() {
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
    static get is() { return "amplify-sign-out"; }
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
                "text": "Auth state change handler for this component"
            },
            "defaultValue": "dispatchAuthStateChangeEvent"
        },
        "buttonText": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Text inside of the Sign Out button"
            },
            "attribute": "button-text",
            "reflect": false,
            "defaultValue": "Translations.SIGN_OUT"
        }
    }; }
}