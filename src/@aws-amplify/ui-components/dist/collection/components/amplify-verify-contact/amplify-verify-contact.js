import { Auth } from '@aws-amplify/auth';
import { I18n, Logger } from '@aws-amplify/core';
import { Component, h, Prop, State, Host } from '@stencil/core';
import { AuthState, } from '../../common/types/auth-types';
import { NO_AUTH_MODULE_FOUND } from '../../common/constants';
import { dispatchAuthStateChangeEvent, dispatchToastHubEvent, } from '../../common/helpers';
import { Translations } from '../../common/Translations';
const logger = new Logger('AmplifyVerifyContact');
export class AmplifyVerifyContact {
    constructor() {
        /** Authentication state handler */
        this.handleAuthStateChange = dispatchAuthStateChangeEvent;
        this.loading = false;
    }
    handleSubmit(event) {
        event.preventDefault();
        this.verifyAttr ? this.submit(this.code) : this.verify(this.contact);
    }
    async submit(code) {
        const attr = this.verifyAttr;
        if (!Auth || typeof Auth.verifyCurrentUserAttributeSubmit !== 'function') {
            throw new Error(NO_AUTH_MODULE_FOUND);
        }
        this.loading = true;
        try {
            const data = await Auth.verifyCurrentUserAttributeSubmit(attr, code);
            logger.debug(data);
            this.handleAuthStateChange(AuthState.SignedIn, this.user);
            this.verifyAttr = null;
        }
        catch (error) {
            dispatchToastHubEvent(error);
            logger.error(error);
        }
        finally {
            this.loading = false;
        }
    }
    async verify(contact) {
        if (!contact) {
            logger.error('Neither Email nor Phone Number selected');
            return;
        }
        if (!Auth || typeof Auth.verifyCurrentUserAttribute !== 'function') {
            throw new Error(NO_AUTH_MODULE_FOUND);
        }
        this.loading = true;
        try {
            const data = await Auth.verifyCurrentUserAttribute(contact);
            logger.debug(data);
            this.verifyAttr = contact;
        }
        catch (error) {
            dispatchToastHubEvent(error);
            logger.error(error);
        }
        finally {
            this.loading = false;
        }
    }
    handleInputChange(event) {
        const inputName = event.target.name;
        if (inputName === 'code') {
            this.code = event.target.value;
        }
        else if (inputName === 'contact') {
            this.contact = event.target.value;
        }
    }
    renderSubmit() {
        return (h("div", null,
            h("amplify-input", { inputProps: {
                    autocomplete: 'off',
                    'data-test': 'verify-contact-code-input',
                }, name: "code", placeholder: I18n.get(Translations.CODE_PLACEHOLDER), handleInputChange: event => this.handleInputChange(event) })));
    }
    renderVerify() {
        const user = this.user;
        if (!user) {
            logger.debug('No user to verify');
            return null;
        }
        const { unverified } = user;
        if (!unverified) {
            logger.debug('Unverified variable does not exist on user');
            return null;
        }
        const { email, phone_number } = unverified;
        return (h("div", null,
            email && (h("amplify-radio-button", { label: I18n.get(Translations.VERIFY_CONTACT_EMAIL_LABEL), key: "email", name: "contact", value: "email", handleInputChange: event => this.handleInputChange(event), inputProps: {
                    'data-test': 'verify-contact-email-radio',
                } })),
            phone_number && (h("amplify-radio-button", { label: I18n.get(Translations.VERIFY_CONTACT_PHONE_LABEL), key: "phone_number", name: "contact", value: "phone_number", handleInputChange: event => this.handleInputChange(event), inputProps: {
                    'data-test': 'verify-contact-phone-number-radio',
                } }))));
    }
    render() {
        return (h(Host, null,
            h("amplify-form-section", { handleSubmit: event => this.handleSubmit(event), headerText: I18n.get(Translations.VERIFY_CONTACT_HEADER_TEXT), loading: this.loading, secondaryFooterContent: h("span", null,
                    h("amplify-button", { variant: "anchor", onClick: () => this.handleAuthStateChange(AuthState.SignedIn, this.user), "data-test": "verify-contact-skip-link" }, "Skip")), submitButtonText: this.verifyAttr
                    ? I18n.get(Translations.VERIFY_CONTACT_SUBMIT_LABEL)
                    : I18n.get(Translations.VERIFY_CONTACT_VERIFY_LABEL) }, this.verifyAttr ? this.renderSubmit() : this.renderVerify())));
    }
    static get is() { return "amplify-verify-contact"; }
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
                "text": "Authentication state handler"
            },
            "defaultValue": "dispatchAuthStateChangeEvent"
        },
        "user": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "CognitoUserInterface",
                "resolved": "CognitoUserInterface",
                "references": {
                    "CognitoUserInterface": {
                        "location": "import",
                        "path": "../../common/types/auth-types"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "User with unverified contact information"
            }
        }
    }; }
    static get states() { return {
        "verifyAttr": {},
        "loading": {},
        "code": {},
        "contact": {}
    }; }
}