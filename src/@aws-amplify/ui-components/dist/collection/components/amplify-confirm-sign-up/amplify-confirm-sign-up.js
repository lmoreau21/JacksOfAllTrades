import { I18n } from '@aws-amplify/core';
import { Component, Prop, h, State, Watch, Host } from '@stencil/core';
import { NO_AUTH_MODULE_FOUND, COUNTRY_DIAL_CODE_DEFAULT, } from '../../common/constants';
import { Translations } from '../../common/Translations';
import { AuthState, } from '../../common/types/auth-types';
import { Auth } from '@aws-amplify/auth';
import { dispatchToastHubEvent, dispatchAuthStateChangeEvent, checkUsernameAlias, isHintValid, composePhoneNumberInput, handlePhoneNumberChange, } from '../../common/helpers';
import { handleSignIn } from '../../common/auth-helpers';
export class AmplifyConfirmSignUp {
    constructor() {
        /** Fires when sign up form is submitted */
        this.handleSubmit = event => this.confirmSignUp(event);
        /** Used for header text in confirm sign up component */
        this.headerText = Translations.CONFIRM_SIGN_UP_HEADER_TEXT;
        /** Used for the submit button text in confirm sign up component */
        this.submitButtonText = Translations.CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT;
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
        /** Auth state change handler for this components
         * e.g. SignIn -> 'Create Account' link -> SignUp
         */
        this.handleAuthStateChange = dispatchAuthStateChangeEvent;
        /** Username Alias is used to setup authentication with `username`, `email` or `phone_number`  */
        this.usernameAlias = 'username';
        this.loading = false;
        this.newFormFields = [];
        this.phoneNumber = {
            countryDialCodeValue: COUNTRY_DIAL_CODE_DEFAULT,
            phoneNumberValue: null,
        };
    }
    componentWillLoad() {
        this.setup();
    }
    formFieldsHandler() {
        this.buildFormFields();
    }
    userHandler() {
        this.setup();
    }
    setup() {
        // TODO: Use optional chaining instead
        this.userInput = this.user && this.user.username;
        this._signUpAttrs = this.user && this.user.signUpAttrs;
        checkUsernameAlias(this.usernameAlias);
        this.buildFormFields();
    }
    buildDefaultFormFields() {
        this.newFormFields = [
            {
                type: `${this.usernameAlias}`,
                required: true,
                handleInputChange: this.handleFormFieldInputChange(`${this.usernameAlias}`),
                value: this.userInput,
                disabled: this.userInput ? true : false,
                inputProps: { autocomplete: 'username' },
            },
            {
                type: 'code',
                label: I18n.get(Translations.CONFIRM_SIGN_UP_CODE_LABEL),
                placeholder: I18n.get(Translations.CONFIRM_SIGN_UP_CODE_PLACEHOLDER),
                required: true,
                hint: (h("div", null,
                    I18n.get(Translations.CONFIRM_SIGN_UP_LOST_CODE),
                    ' ',
                    h("amplify-button", { variant: "anchor", onClick: () => this.resendConfirmCode() }, I18n.get(Translations.CONFIRM_SIGN_UP_RESEND_CODE)))),
                handleInputChange: this.handleFormFieldInputChange('code'),
            },
        ];
    }
    buildFormFields() {
        if (this.formFields.length === 0) {
            this.buildDefaultFormFields();
        }
        else {
            const newFields = [];
            this.formFields.forEach(field => {
                const newField = Object.assign({}, field);
                if (newField.type === 'code') {
                    newField['hint'] = isHintValid(newField) ? (h("div", null,
                        I18n.get(Translations.CONFIRM_SIGN_UP_LOST_CODE),
                        ' ',
                        h("amplify-button", { variant: "anchor", onClick: () => this.resendConfirmCode() }, I18n.get(Translations.CONFIRM_SIGN_UP_RESEND_CODE)))) : (newField['hint']);
                }
                newField['handleInputChange'] = event => this.handleFormFieldInputWithCallback(event, field);
                newFields.push(newField);
            });
            this.newFormFields = newFields;
        }
    }
    handleFormFieldInputChange(fieldType) {
        switch (fieldType) {
            case 'username':
            case 'email':
                return event => (this.userInput = event.target.value);
            case 'phone_number':
                return event => handlePhoneNumberChange(event, this.phoneNumber);
            case 'code':
                return event => (this.code = event.target.value);
            default:
                return;
        }
    }
    setFieldValue(field) {
        switch (field.type) {
            case 'username':
            case 'email':
                if (field.value === undefined) {
                    this.userInput = '';
                }
                else {
                    this.userInput = field.value;
                }
                break;
            case 'phone_number':
                if (field.dialCode) {
                    this.phoneNumber.countryDialCodeValue = field.dialCode;
                }
                this.phoneNumber.phoneNumberValue = field.value;
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
    /**
     * Returns the username of the user to confirm. If a valid `user.username` has been passed as a prop, we return that.
     * Otherwise, we return the `userInput` on the form.
     */
    getUsername() {
        if (this.user && this.user.username)
            return this.user.username;
        switch (this.usernameAlias) {
            case 'username':
            case 'email':
                return this.userInput;
            case 'phone_number':
                return composePhoneNumberInput(this.phoneNumber);
        }
    }
    async resendConfirmCode() {
        if (event) {
            event.preventDefault();
        }
        if (!Auth || typeof Auth.resendSignUp !== 'function') {
            throw new Error(NO_AUTH_MODULE_FOUND);
        }
        try {
            const username = this.getUsername();
            if (!username)
                throw new Error(Translations.EMPTY_USERNAME);
            await Auth.resendSignUp(username.trim());
        }
        catch (error) {
            dispatchToastHubEvent(error);
        }
    }
    // TODO: Add validation
    // TODO: Prefix
    async confirmSignUp(event) {
        if (event) {
            event.preventDefault();
        }
        if (!Auth || typeof Auth.confirmSignUp !== 'function') {
            throw new Error(NO_AUTH_MODULE_FOUND);
        }
        this.loading = true;
        try {
            let username = this.getUsername();
            if (!username)
                throw new Error(Translations.EMPTY_USERNAME);
            username = username.trim();
            const confirmSignUpResult = await Auth.confirmSignUp(username, this.code);
            if (!confirmSignUpResult) {
                throw new Error(I18n.get(Translations.CONFIRM_SIGN_UP_FAILED));
            }
            if (this._signUpAttrs &&
                this._signUpAttrs.password &&
                this._signUpAttrs.password !== '') {
                // Auto sign in user if password is available from previous workflow
                await handleSignIn(username, this._signUpAttrs.password, this.handleAuthStateChange);
            }
            else {
                this.handleAuthStateChange(AuthState.SignIn);
            }
        }
        catch (error) {
            dispatchToastHubEvent(error);
        }
        finally {
            this.loading = false;
        }
    }
    render() {
        return (h(Host, null,
            h("amplify-form-section", { headerText: I18n.get(this.headerText), submitButtonText: I18n.get(this.submitButtonText), handleSubmit: this.handleSubmit, loading: this.loading, secondaryFooterContent: h("div", null,
                    h("span", null,
                        h("amplify-button", { variant: "anchor", onClick: () => this.handleAuthStateChange(AuthState.SignIn) }, I18n.get(Translations.BACK_TO_SIGN_IN)))) },
                h("amplify-auth-fields", { formFields: this.newFormFields }))));
    }
    static get is() { return "amplify-confirm-sign-up"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "handleSubmit": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(submitEvent: Event) => void",
                "resolved": "(submitEvent: Event) => void",
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
                "text": "Fires when sign up form is submitted"
            },
            "defaultValue": "event =>\n\t\tthis.confirmSignUp(event)"
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
                "text": "Used for header text in confirm sign up component"
            },
            "attribute": "header-text",
            "reflect": false,
            "defaultValue": "Translations.CONFIRM_SIGN_UP_HEADER_TEXT"
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
                "text": "Used for the submit button text in confirm sign up component"
            },
            "attribute": "submit-button-text",
            "reflect": false,
            "defaultValue": "Translations.CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT"
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
                "text": "Form fields allows you to utilize our pre-built components such as username field, code field, password field, email field, etc.\nby passing an array of strings that you would like the order of the form to be in. If you need more customization, such as changing\ntext for a label or adjust a placeholder, you can follow the structure below in order to do just that.\n```\n[\n  {\n    type: string,\n    label: string,\n    placeholder: string,\n    hint: string | Functional Component | null,\n    required: boolean\n  }\n]\n```"
            },
            "defaultValue": "[]"
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
                "text": "Auth state change handler for this components\ne.g. SignIn -> 'Create Account' link -> SignUp"
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
                "text": "Used for the username to be passed to resend code"
            }
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
        "code": {},
        "loading": {},
        "userInput": {}
    }; }
    static get watchers() { return [{
            "propName": "formFields",
            "methodName": "formFieldsHandler"
        }, {
            "propName": "user",
            "methodName": "userHandler"
        }]; }
}