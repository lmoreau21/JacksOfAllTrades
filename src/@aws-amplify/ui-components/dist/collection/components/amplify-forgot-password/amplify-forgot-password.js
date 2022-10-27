import { Auth } from '@aws-amplify/auth';
import { I18n, Logger } from '@aws-amplify/core';
import { Component, Prop, State, h, Watch, Host } from '@stencil/core';
import { AuthState, } from '../../common/types/auth-types';
import { NO_AUTH_MODULE_FOUND, COUNTRY_DIAL_CODE_DEFAULT, } from '../../common/constants';
import { Translations } from '../../common/Translations';
import { dispatchToastHubEvent, dispatchAuthStateChangeEvent, composePhoneNumberInput, checkUsernameAlias, handlePhoneNumberChange, } from '../../common/helpers';
const logger = new Logger('ForgotPassword');
export class AmplifyForgotPassword {
    constructor() {
        /** The header text of the forgot password section */
        this.headerText = Translations.RESET_YOUR_PASSWORD;
        /** The text displayed inside of the send code button for the form */
        this.sendButtonText = Translations.SEND_CODE;
        /** The text displayed inside of the submit button for the form */
        this.submitButtonText = Translations.SUBMIT;
        /** The form fields displayed inside of the forgot password form */
        this.formFields = [];
        /** The function called when making a request to reset password */
        this.handleSend = event => this.send(event);
        /** The function called when submitting a new password */
        this.handleSubmit = event => this.submit(event);
        /** Auth state change handler for this component */
        this.handleAuthStateChange = dispatchAuthStateChangeEvent;
        /** Username Alias is used to setup authentication with `username`, `email` or `phone_number`  */
        this.usernameAlias = 'username';
        this.delivery = null;
        this.loading = false;
        this.phoneNumber = {
            countryDialCodeValue: COUNTRY_DIAL_CODE_DEFAULT,
            phoneNumberValue: null,
        };
        this.newFormFields = [];
        this.forgotPasswordAttrs = {
            userInput: '',
            password: '',
            code: '',
        };
    }
    componentWillLoad() {
        checkUsernameAlias(this.usernameAlias);
        this.buildFormFields();
    }
    formFieldsHandler() {
        this.buildFormFields();
    }
    buildFormFields() {
        if (this.formFields.length === 0) {
            this.buildDefaultFormFields();
        }
        else {
            const newFields = [];
            this.formFields.forEach(field => {
                const newField = Object.assign({}, field);
                newField['handleInputChange'] = event => this.handleFormFieldInputWithCallback(event, field);
                newFields.push(newField);
            });
            this.newFormFields = newFields;
        }
    }
    buildDefaultFormFields() {
        switch (this.usernameAlias) {
            case 'email':
                this.newFormFields = [
                    {
                        type: 'email',
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('email'),
                        inputProps: {
                            'data-test': 'forgot-password-email-input',
                        },
                    },
                ];
                break;
            case 'phone_number':
                this.newFormFields = [
                    {
                        type: 'phone_number',
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('phone_number'),
                        inputProps: {
                            'data-test': 'forgot-password-phone-number-input',
                        },
                    },
                ];
                break;
            case 'username':
            default:
                this.newFormFields = [
                    {
                        type: 'username',
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('username'),
                        inputProps: {
                            'data-test': 'forgot-password-username-input',
                        },
                    },
                ];
                break;
        }
    }
    handleFormFieldInputChange(fieldType) {
        switch (fieldType) {
            case 'username':
            case 'email':
                return event => (this.forgotPasswordAttrs.userInput = event.target.value);
            case 'phone_number':
                return event => handlePhoneNumberChange(event, this.phoneNumber);
            case 'password':
            case 'code':
                return event => (this.forgotPasswordAttrs[fieldType] = event.target.value);
            default:
                return;
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
            case 'code':
                if (field.value === undefined) {
                    formAttributes[field.type] = '';
                }
                else {
                    formAttributes[field.type] = field.value;
                }
                break;
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
    async send(event) {
        if (event) {
            event.preventDefault();
        }
        if (!Auth || typeof Auth.forgotPassword !== 'function') {
            throw new Error(NO_AUTH_MODULE_FOUND);
        }
        this.loading = true;
        switch (this.usernameAlias) {
            case 'phone_number':
                try {
                    this.forgotPasswordAttrs.userInput = composePhoneNumberInput(this.phoneNumber);
                }
                catch (error) {
                    dispatchToastHubEvent(error);
                }
                break;
            default:
                break;
        }
        try {
            const data = await Auth.forgotPassword(this.forgotPasswordAttrs.userInput.trim());
            logger.debug(data);
            this.newFormFields = [
                {
                    type: 'code',
                    required: true,
                    handleInputChange: this.handleFormFieldInputChange('code'),
                    inputProps: {
                        'data-test': 'forgot-password-code-input',
                    },
                },
                {
                    type: 'password',
                    required: true,
                    handleInputChange: this.handleFormFieldInputChange('password'),
                    label: I18n.get(Translations.NEW_PASSWORD_LABEL),
                    placeholder: I18n.get(Translations.NEW_PASSWORD_PLACEHOLDER),
                },
            ];
            this.delivery = data.CodeDeliveryDetails;
        }
        catch (error) {
            dispatchToastHubEvent(error);
        }
        finally {
            this.loading = false;
        }
    }
    async submit(event) {
        if (event) {
            event.preventDefault();
        }
        if (!Auth || typeof Auth.forgotPasswordSubmit !== 'function') {
            throw new Error(NO_AUTH_MODULE_FOUND);
        }
        this.loading = true;
        try {
            const { userInput, code, password } = this.forgotPasswordAttrs;
            const data = await Auth.forgotPasswordSubmit(userInput.trim(), code, password);
            logger.debug(data);
            this.handleAuthStateChange(AuthState.SignIn);
            this.delivery = null;
        }
        catch (error) {
            dispatchToastHubEvent(error);
        }
        finally {
            this.loading = false;
        }
    }
    render() {
        const submitFn = this.delivery
            ? event => this.handleSubmit(event)
            : event => this.handleSend(event);
        const submitButtonText = this.delivery
            ? this.submitButtonText
            : this.sendButtonText;
        return (h(Host, null,
            h("amplify-form-section", { headerText: I18n.get(this.headerText), handleSubmit: submitFn, loading: this.loading, secondaryFooterContent: h("amplify-button", { variant: "anchor", onClick: () => this.handleAuthStateChange(AuthState.SignIn), "data-test": "forgot-password-back-to-sign-in-link" }, I18n.get(Translations.BACK_TO_SIGN_IN)), testDataPrefix: 'forgot-password', submitButtonText: I18n.get(submitButtonText) },
                h("amplify-auth-fields", { formFields: this.newFormFields }))));
    }
    static get is() { return "amplify-forgot-password"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
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
                "text": "The header text of the forgot password section"
            },
            "attribute": "header-text",
            "reflect": false,
            "defaultValue": "Translations.RESET_YOUR_PASSWORD"
        },
        "sendButtonText": {
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
                "text": "The text displayed inside of the send code button for the form"
            },
            "attribute": "send-button-text",
            "reflect": false,
            "defaultValue": "Translations.SEND_CODE"
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
                "text": "The text displayed inside of the submit button for the form"
            },
            "attribute": "submit-button-text",
            "reflect": false,
            "defaultValue": "Translations.SUBMIT"
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
                        "path": "../amplify-auth-fields/amplify-auth-fields-interface"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The form fields displayed inside of the forgot password form"
            },
            "defaultValue": "[]"
        },
        "handleSend": {
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
                "text": "The function called when making a request to reset password"
            },
            "defaultValue": "event => this.send(event)"
        },
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
                "text": "The function called when submitting a new password"
            },
            "defaultValue": "event => this.submit(event)"
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
        }
    }; }
    static get states() { return {
        "delivery": {},
        "loading": {},
        "forgotPasswordAttrs": {}
    }; }
    static get watchers() { return [{
            "propName": "formFields",
            "methodName": "formFieldsHandler"
        }]; }
}