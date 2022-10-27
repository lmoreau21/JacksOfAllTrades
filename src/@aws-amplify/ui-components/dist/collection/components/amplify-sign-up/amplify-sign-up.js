import { I18n } from '@aws-amplify/core';
import { Auth } from '@aws-amplify/auth';
import { Component, Prop, h, State, Watch, Host } from '@stencil/core';
import { COUNTRY_DIAL_CODE_DEFAULT, NO_AUTH_MODULE_FOUND, } from '../../common/constants';
import { AuthState, UsernameAlias, } from '../../common/types/auth-types';
import { dispatchAuthStateChangeEvent, dispatchToastHubEvent, composePhoneNumberInput, checkUsernameAlias, handlePhoneNumberChange, } from '../../common/helpers';
import { Translations } from '../../common/Translations';
import { handleSignIn } from '../../common/auth-helpers';
/**
 * @slot header-subtitle - Subtitle content placed below header text
 * @slot footer - Content placed in the footer of the component
 * @slot primary-footer-content - Content placed on the right side of the footer
 * @slot secondary-footer-content - Content placed on the left side of the footer
 */
export class AmplifySignUp {
    constructor() {
        /** Fires when sign up form is submitted */
        this.handleSubmit = event => this.signUp(event);
        /** Override for handling the Auth.SignUp API call */
        this.handleSignUp = params => this.authSignUp(params);
        /** Used for header text in sign up component */
        this.headerText = Translations.SIGN_UP_HEADER_TEXT;
        /** Used for the submit button text in sign up component */
        this.submitButtonText = Translations.SIGN_UP_SUBMIT_BUTTON_TEXT;
        /** Used for the submit button text in sign up component */
        this.haveAccountText = Translations.SIGN_UP_HAVE_ACCOUNT_TEXT;
        /** Text used for the sign in hyperlink */
        this.signInText = Translations.SIGN_IN_TEXT;
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
        /** Auth state change handler for this component
         * e.g. SignIn -> 'Create Account' link -> SignUp
         */
        // prettier-ignore
        this.handleAuthStateChange = dispatchAuthStateChangeEvent;
        /** Username Alias is used to setup authentication with `username`, `email` or `phone_number`  */
        this.usernameAlias = 'username';
        // private userInput: string | PhoneNumberInterface;
        this.newFormFields = [];
        this.phoneNumber = {
            countryDialCodeValue: COUNTRY_DIAL_CODE_DEFAULT,
            phoneNumberValue: null,
        };
        this.loading = false;
        this.signUpAttributes = {
            username: '',
            password: '',
            attributes: {},
        };
    }
    handleFormFieldInputChange(fieldType) {
        switch (fieldType) {
            case 'username':
                return event => (this.signUpAttributes.username = event.target.value);
            case 'password':
                return event => (this.signUpAttributes.password = event.target.value);
            case 'email':
                return event => (this.signUpAttributes.attributes.email = event.target.value);
            case 'phone_number':
                return event => handlePhoneNumberChange(event, this.phoneNumber);
            default:
                return event => (this.signUpAttributes.attributes[fieldType] = event.target.value);
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
    async authSignUp(params) {
        const data = await Auth.signUp(params);
        if (!data) {
            throw new Error(Translations.SIGN_UP_FAILED);
        }
        return data;
    }
    assignPhoneNumberToSignUpAttributes() {
        if (this.phoneNumber.phoneNumberValue) {
            try {
                this.signUpAttributes.attributes.phone_number = composePhoneNumberInput(this.phoneNumber);
            }
            catch (error) {
                dispatchToastHubEvent(error);
            }
        }
    }
    assignUserNameAliasToSignUpAttributes() {
        switch (this.usernameAlias) {
            case 'email':
            case 'phone_number':
                this.signUpAttributes.username = this.signUpAttributes.attributes[this.usernameAlias];
                break;
            case 'username':
            default:
                break;
        }
    }
    assignFormInputToSignUpAttributes() {
        this.assignPhoneNumberToSignUpAttributes();
        this.assignUserNameAliasToSignUpAttributes();
    }
    validateSignUpAttributes() {
        if (!this.signUpAttributes.username) {
            if (this.usernameAlias === UsernameAlias.email) {
                throw new Error(Translations.EMPTY_EMAIL);
            }
            else if (this.usernameAlias === UsernameAlias.phone_number) {
                throw new Error(Translations.EMPTY_PHONE);
            }
            else {
                throw new Error(Translations.EMPTY_USERNAME);
            }
        }
        if (this.signUpAttributes.username.indexOf(' ') >= 0) {
            throw new Error(Translations.USERNAME_REMOVE_WHITESPACE);
        }
        if (this.signUpAttributes.password !== this.signUpAttributes.password.trim()) {
            throw new Error(Translations.PASSWORD_REMOVE_WHITESPACE);
        }
    }
    // TODO: Add validation
    // TODO: Prefix
    async signUp(event) {
        if (event) {
            event.preventDefault();
        }
        if (!Auth || typeof Auth.signUp !== 'function') {
            throw new Error(NO_AUTH_MODULE_FOUND);
        }
        this.loading = true;
        this.assignFormInputToSignUpAttributes();
        try {
            this.validateSignUpAttributes();
            const data = await this.handleSignUp(this.signUpAttributes);
            if (data.userConfirmed) {
                await handleSignIn(this.signUpAttributes.username, this.signUpAttributes.password, this.handleAuthStateChange);
            }
            else {
                const signUpAttrs = Object.assign({}, this.signUpAttributes);
                this.handleAuthStateChange(AuthState.ConfirmSignUp, Object.assign(Object.assign({}, data.user), { signUpAttrs }));
            }
        }
        catch (error) {
            dispatchToastHubEvent(error);
        }
        finally {
            this.loading = false;
        }
    }
    buildDefaultFormFields() {
        switch (this.usernameAlias) {
            case 'email':
                this.newFormFields = [
                    {
                        type: 'email',
                        placeholder: I18n.get(Translations.SIGN_UP_EMAIL_PLACEHOLDER),
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('email'),
                        inputProps: {
                            'data-test': 'sign-up-email-input',
                            autocomplete: 'username',
                        },
                    },
                    {
                        type: 'password',
                        placeholder: I18n.get(Translations.SIGN_UP_PASSWORD_PLACEHOLDER),
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('password'),
                        inputProps: {
                            'data-test': 'sign-up-password-input',
                            autocomplete: 'new-password',
                        },
                    },
                    {
                        type: 'phone_number',
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('phone_number'),
                        inputProps: {
                            'data-test': 'sign-up-phone-number-input',
                            autocomplete: 'tel-national',
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
                            'data-test': 'sign-up-phone-number-input',
                            autocomplete: 'username',
                        },
                    },
                    {
                        type: 'password',
                        placeholder: I18n.get(Translations.SIGN_UP_PASSWORD_PLACEHOLDER),
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('password'),
                        inputProps: {
                            'data-test': 'sign-up-password-input',
                            autocomplete: 'new-password',
                        },
                    },
                    {
                        type: 'email',
                        placeholder: I18n.get(Translations.SIGN_UP_EMAIL_PLACEHOLDER),
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('email'),
                        inputProps: {
                            'data-test': 'sign-up-email-input',
                            autocomplete: 'email',
                        },
                    },
                ];
                break;
            case 'username':
            default:
                this.newFormFields = [
                    {
                        type: 'username',
                        placeholder: I18n.get(Translations.SIGN_UP_USERNAME_PLACEHOLDER),
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('username'),
                        inputProps: {
                            'data-test': 'sign-up-username-input',
                            autocomplete: 'username',
                        },
                    },
                    {
                        type: 'password',
                        placeholder: I18n.get(Translations.SIGN_UP_PASSWORD_PLACEHOLDER),
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('password'),
                        inputProps: {
                            'data-test': 'sign-up-password-input',
                            autocomplete: 'new-password',
                        },
                    },
                    {
                        type: 'email',
                        placeholder: I18n.get(Translations.SIGN_UP_EMAIL_PLACEHOLDER),
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('email'),
                        inputProps: {
                            'data-test': 'sign-up-email-input',
                        },
                    },
                    {
                        type: 'phone_number',
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('phone_number'),
                        inputProps: {
                            'data-test': 'sign-up-phone-number-input',
                        },
                    },
                ];
                break;
        }
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
                this.setFieldValue(field, this.signUpAttributes);
                newFields.push(newField);
            });
            this.newFormFields = newFields;
        }
    }
    setFieldValue(field, formAttributes) {
        switch (field.type) {
            case 'username':
                if (field.value === undefined) {
                    formAttributes.username = '';
                }
                else {
                    formAttributes.username = field.value;
                }
                break;
            case 'password':
                if (field.value === undefined) {
                    formAttributes.password = '';
                }
                else {
                    formAttributes.password = field.value;
                }
                break;
            case 'email':
                formAttributes.attributes.email = field.value;
                break;
            case 'phone_number':
                if (field.dialCode) {
                    this.phoneNumber.countryDialCodeValue = field.dialCode;
                }
                this.phoneNumber.phoneNumberValue = field.value;
                break;
            default:
                formAttributes.attributes[field.type] = field.value;
                break;
        }
    }
    componentWillLoad() {
        checkUsernameAlias(this.usernameAlias);
        this.buildFormFields();
    }
    formFieldsHandler() {
        this.buildFormFields();
    }
    render() {
        return (h(Host, null,
            h("amplify-form-section", { headerText: I18n.get(this.headerText), handleSubmit: this.handleSubmit, testDataPrefix: 'sign-up' },
                h("div", { slot: "subtitle" },
                    h("slot", { name: "header-subtitle" })),
                h("amplify-auth-fields", { formFields: this.newFormFields }),
                h("div", { class: "sign-up-form-footer", slot: "amplify-form-section-footer" },
                    h("slot", { name: "footer" },
                        h("slot", { name: "secondary-footer-content" },
                            h("span", null,
                                I18n.get(this.haveAccountText),
                                ' ',
                                h("amplify-button", { variant: "anchor", onClick: () => this.handleAuthStateChange(AuthState.SignIn), "data-test": "sign-up-sign-in-link" }, I18n.get(this.signInText)))),
                        h("slot", { name: "primary-footer-content" },
                            h("amplify-button", { type: "submit", "data-test": "sign-up-create-account-button", disabled: this.loading }, this.loading ? (h("amplify-loading-spinner", null)) : (h("span", null, I18n.get(this.submitButtonText))))))))));
    }
    static get is() { return "amplify-sign-up"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["amplify-sign-up.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["amplify-sign-up.css"]
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
                "text": "Fires when sign up form is submitted"
            },
            "defaultValue": "event => this.signUp(event)"
        },
        "handleSignUp": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(\n\t\tparams: SignUpParams\n\t) => Promise<ISignUpResult>",
                "resolved": "(params: SignUpParams) => Promise<ISignUpResult>",
                "references": {
                    "SignUpParams": {
                        "location": "import",
                        "path": "@aws-amplify/auth"
                    },
                    "Promise": {
                        "location": "global"
                    },
                    "ISignUpResult": {
                        "location": "import",
                        "path": "amazon-cognito-identity-js"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Override for handling the Auth.SignUp API call"
            },
            "defaultValue": "params => this.authSignUp(params)"
        },
        "validationErrors": {
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
                "text": "Engages when invalid actions occur, such as missing field, etc."
            },
            "attribute": "validation-errors",
            "reflect": false
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
                "text": "Used for header text in sign up component"
            },
            "attribute": "header-text",
            "reflect": false,
            "defaultValue": "Translations.SIGN_UP_HEADER_TEXT"
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
                "text": "Used for the submit button text in sign up component"
            },
            "attribute": "submit-button-text",
            "reflect": false,
            "defaultValue": "Translations.SIGN_UP_SUBMIT_BUTTON_TEXT"
        },
        "haveAccountText": {
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
                "text": "Used for the submit button text in sign up component"
            },
            "attribute": "have-account-text",
            "reflect": false,
            "defaultValue": "Translations.SIGN_UP_HAVE_ACCOUNT_TEXT"
        },
        "signInText": {
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
                "text": "Text used for the sign in hyperlink"
            },
            "attribute": "sign-in-text",
            "reflect": false,
            "defaultValue": "Translations.SIGN_IN_TEXT"
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
                "text": "Auth state change handler for this component\ne.g. SignIn -> 'Create Account' link -> SignUp"
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
        "loading": {},
        "signUpAttributes": {}
    }; }
    static get watchers() { return [{
            "propName": "formFields",
            "methodName": "formFieldsHandler"
        }]; }
}