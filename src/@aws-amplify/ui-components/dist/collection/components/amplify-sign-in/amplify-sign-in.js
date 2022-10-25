import { I18n, isEmpty } from '@aws-amplify/core';
import { Component, Prop, State, h, Watch, Host } from '@stencil/core';
import { AuthState, } from '../../common/types/auth-types';
import { Translations } from '../../common/Translations';
import { COUNTRY_DIAL_CODE_DEFAULT } from '../../common/constants';
import { dispatchToastHubEvent, dispatchAuthStateChangeEvent, composePhoneNumberInput, checkUsernameAlias, isHintValid, handlePhoneNumberChange, } from '../../common/helpers';
import { handleSignIn } from '../../common/auth-helpers';
/**
 * @slot header-subtitle - Subtitle content placed below header text
 * @slot federated-buttons - Content above form fields used for sign in federation buttons
 * @slot footer - Content is place in the footer of the component
 * @slot primary-footer-content - Content placed on the right side of the footer
 * @slot secondary-footer-content - Content placed on the left side of the footer
 */
export class AmplifySignIn {
    constructor() {
        /** Fires when sign in form is submitted */
        this.handleSubmit = event => this.signIn(event);
        /** Used for header text in sign in component */
        this.headerText = Translations.SIGN_IN_HEADER_TEXT;
        /** Used for the submit button text in sign in component */
        this.submitButtonText = Translations.SIGN_IN_ACTION;
        /** Auth state change handler for this component */
        // prettier-ignore
        this.handleAuthStateChange = dispatchAuthStateChangeEvent;
        /** Username Alias is used to setup authentication with `username`, `email` or `phone_number`  */
        this.usernameAlias = 'username';
        /**
         * Form fields allows you to utilize our pre-built components such as username field, code field, password field, email field, etc.
         * by passing an array of strings that you would like the order of the form to be in. If you need more customization, such as changing
         * text for a label or adjust a placeholder, you can follow the structure below in order to do just that.
         * ```
         * [
         *  {
         *    type: string,
         *    label: string,
         *    placeholder: string,
         *    hint: string | Functional Component | null,
         *    required: boolean
         *  }
         * ]
         * ```
         */
        this.formFields = [];
        /** Hides the sign up link */
        this.hideSignUp = false;
        this.newFormFields = [];
        /* Whether or not the sign-in component is loading */
        this.loading = false;
        this.phoneNumber = {
            countryDialCodeValue: COUNTRY_DIAL_CODE_DEFAULT,
            phoneNumberValue: null,
        };
        this.signInAttributes = {
            userInput: '',
            password: '',
        };
    }
    componentWillLoad() {
        checkUsernameAlias(this.usernameAlias);
        this.buildFormFields();
    }
    formFieldsHandler() {
        this.buildFormFields();
    }
    handleFormFieldInputChange(fieldType) {
        switch (fieldType) {
            case 'username':
            case 'email':
                return event => (this.signInAttributes.userInput = event.target.value);
            case 'phone_number':
                return event => handlePhoneNumberChange(event, this.phoneNumber);
            case 'password':
                return event => (this.signInAttributes.password = event.target.value);
            default:
                return () => { };
        }
    }
    handleFormFieldInputWithCallback(event, field) {
        const fnToCall = field['handleInputChange']
            ? field['handleInputChange']
            : (event, cb) => {
                cb(event);
            };
        const callback = this.handleFormFieldInputChange(field.type);
        fnToCall(event, callback.bind(this));
    }
    async signIn(event) {
        // avoid submitting the form
        if (event) {
            event.preventDefault();
        }
        this.loading = true;
        switch (this.usernameAlias) {
            case 'phone_number':
                try {
                    this.signInAttributes.userInput = composePhoneNumberInput(this.phoneNumber);
                }
                catch (error) {
                    dispatchToastHubEvent(error);
                }
            default:
                break;
        }
        const username = this.signInAttributes.userInput.trim();
        await handleSignIn(username, this.signInAttributes.password, this.handleAuthStateChange, this.usernameAlias);
        this.loading = false;
    }
    buildDefaultFormFields() {
        const formFieldInputs = [];
        switch (this.usernameAlias) {
            case 'email':
                formFieldInputs.push({
                    type: 'email',
                    required: true,
                    handleInputChange: this.handleFormFieldInputChange('email'),
                    inputProps: {
                        'data-test': 'sign-in-email-input',
                        autocomplete: 'username',
                    },
                });
                break;
            case 'phone_number':
                formFieldInputs.push({
                    type: 'phone_number',
                    required: true,
                    handleInputChange: this.handleFormFieldInputChange('phone_number'),
                    inputProps: {
                        'data-test': 'sign-in-phone-number-input',
                        autocomplete: 'username',
                    },
                });
                break;
            case 'username':
            default:
                formFieldInputs.push({
                    type: 'username',
                    required: true,
                    handleInputChange: this.handleFormFieldInputChange('username'),
                    inputProps: {
                        'data-test': 'sign-in-username-input',
                        autocomplete: 'username',
                    },
                });
                break;
        }
        formFieldInputs.push({
            type: 'password',
            hint: (h("div", null,
                I18n.get(Translations.FORGOT_PASSWORD_TEXT),
                ' ',
                h("amplify-button", { variant: "anchor", onClick: () => this.handleAuthStateChange(AuthState.ForgotPassword), "data-test": "sign-in-forgot-password-link" }, I18n.get(Translations.RESET_PASSWORD_TEXT)))),
            required: true,
            handleInputChange: this.handleFormFieldInputChange('password'),
            inputProps: {
                'data-test': 'sign-in-password-input',
            },
        });
        this.newFormFields = [...formFieldInputs];
    }
    buildFormFields() {
        if (this.formFields.length === 0) {
            this.buildDefaultFormFields();
        }
        else {
            const newFields = [];
            this.formFields.forEach(field => {
                const newField = Object.assign({}, field);
                // TODO: handle hint better
                if (newField.type === 'password') {
                    newField['hint'] = isHintValid(newField) ? (h("div", null,
                        I18n.get(Translations.FORGOT_PASSWORD_TEXT),
                        ' ',
                        h("amplify-button", { variant: "anchor", onClick: () => this.handleAuthStateChange(AuthState.ForgotPassword), "data-test": "sign-in-forgot-password-link" }, I18n.get(Translations.RESET_PASSWORD_TEXT)))) : (newField['hint']);
                }
                newField['handleInputChange'] = event => this.handleFormFieldInputWithCallback(event, field);
                this.setFieldValue(newField, this.signInAttributes);
                newFields.push(newField);
            });
            this.newFormFields = newFields;
        }
    }
    setFieldValue(field, formAttributes) {
        switch (field.type) {
            case 'username':
            case 'email':
                if (field.value === undefined) {
                    formAttributes.userInput = '';
                }
                else {
                    formAttributes.userInput = field.value;
                }
                break;
            case 'phone_number':
                if (field.dialCode) {
                    this.phoneNumber.countryDialCodeValue = field.dialCode;
                }
                this.phoneNumber.phoneNumberValue = field.value;
                break;
            case 'password':
                if (field.value === undefined) {
                    formAttributes.password = '';
                }
                else {
                    formAttributes.password = field.value;
                }
                break;
        }
    }
    render() {
        return (h(Host, null,
            h("amplify-form-section", { headerText: I18n.get(this.headerText), handleSubmit: this.handleSubmit, testDataPrefix: 'sign-in' },
                h("div", { slot: "subtitle" },
                    h("slot", { name: "header-subtitle" })),
                h("slot", { name: "federated-buttons" },
                    h("amplify-federated-buttons", { handleAuthStateChange: this.handleAuthStateChange, federated: this.federated })),
                !isEmpty(this.federated) && h("amplify-strike", null, "or"),
                h("amplify-auth-fields", { formFields: this.newFormFields }),
                h("div", { slot: "amplify-form-section-footer", class: "sign-in-form-footer" },
                    h("slot", { name: "footer" },
                        !this.hideSignUp && (h("slot", { name: "secondary-footer-content" },
                            h("span", null,
                                I18n.get(Translations.NO_ACCOUNT_TEXT),
                                ' ',
                                h("amplify-button", { variant: "anchor", onClick: () => this.handleAuthStateChange(AuthState.SignUp), "data-test": "sign-in-create-account-link" }, I18n.get(Translations.CREATE_ACCOUNT_TEXT))))),
                        h("div", { class: this.hideSignUp ? 'full-width-footer-content' : '' },
                            h("slot", { name: "primary-footer-content" },
                                h("amplify-button", { type: "submit", disabled: this.loading, "data-test": "sign-in-sign-in-button" }, this.loading ? (h("amplify-loading-spinner", null)) : (h("span", null, I18n.get(this.submitButtonText)))))))))));
    }
    static get is() { return "amplify-sign-in"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["amplify-sign-in.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["amplify-sign-in.css"]
    }; }
    static get properties() { return {
        "handleSubmit": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(event: Event) => void",
                "resolved": "(event: Event) => void",
                "references": {
                    "Event": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Fires when sign in form is submitted"
            },
            "defaultValue": "event => this.signIn(event)"
        },
        "headerText": {
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
                "text": "Used for header text in sign in component"
            },
            "attribute": "header-text",
            "reflect": false,
            "defaultValue": "Translations.SIGN_IN_HEADER_TEXT"
        },
        "submitButtonText": {
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
                "text": "Used for the submit button text in sign in component"
            },
            "attribute": "submit-button-text",
            "reflect": false,
            "defaultValue": "Translations.SIGN_IN_ACTION"
        },
        "federated": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "FederatedConfig",
                "resolved": "FederatedConfig",
                "references": {
                    "FederatedConfig": {
                        "location": "import",
                        "path": "../../common/types/auth-types"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Federated credentials & configuration."
            }
        },
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
        "usernameAlias": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "UsernameAliasStrings",
                "resolved": "\"email\" | \"phone_number\" | \"username\"",
                "references": {
                    "UsernameAliasStrings": {
                        "location": "import",
                        "path": "../../common/types/auth-types"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Username Alias is used to setup authentication with `username`, `email` or `phone_number`"
            },
            "attribute": "username-alias",
            "reflect": false,
            "defaultValue": "'username'"
        },
        "formFields": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "FormFieldTypes | string[]",
                "resolved": "FormFieldTypes | string[]",
                "references": {
                    "FormFieldTypes": {
                        "location": "import",
                        "path": "../../components/amplify-auth-fields/amplify-auth-fields-interface"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Form fields allows you to utilize our pre-built components such as username field, code field, password field, email field, etc.\nby passing an array of strings that you would like the order of the form to be in. If you need more customization, such as changing\ntext for a label or adjust a placeholder, you can follow the structure below in order to do just that.\n```\n[\n  {\n    type: string,\n    label: string,\n    placeholder: string,\n    hint: string | Functional Component | null,\n    required: boolean\n  }\n]\n```"
            },
            "defaultValue": "[]"
        },
        "hideSignUp": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Hides the sign up link"
            },
            "attribute": "hide-sign-up",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "loading": {},
        "signInAttributes": {}
    }; }
    static get watchers() { return [{
            "propName": "formFields",
            "methodName": "formFieldsHandler"
        }]; }
}
