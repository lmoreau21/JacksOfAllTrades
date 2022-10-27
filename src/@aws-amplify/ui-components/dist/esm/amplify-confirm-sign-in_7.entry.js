import { r as registerInstance, h, H as Host } from './index-83f2275b.js';
import { I18n, Logger, ConsoleLogger, isEmpty } from '@aws-amplify/core';
import { M as MfaOption, C as ChallengeName, A as AuthState, a as AuthFormField, U as UsernameAlias } from './auth-types-78df304e.js';
import { Auth } from '@aws-amplify/auth';
import { T as Translations } from './Translations-c833f663.js';
import { N as NO_AUTH_MODULE_FOUND, g as COUNTRY_DIAL_CODE_DEFAULT, b as PHONE_SUFFIX } from './constants-c8ecaa24.js';
import { d as dispatchAuthStateChangeEvent, a as dispatchToastHubEvent, c as checkUsernameAlias, i as isHintValid, h as handlePhoneNumberChange, b as composePhoneNumberInput, g as getRequiredAttributesMap } from './helpers-9703fe65.js';
import { c as checkContact, h as handleSignIn } from './auth-helpers-475f7fa4.js';

const AmplifyConfirmSignIn = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** Fires when confirm sign in form is submitted */
        this.handleSubmit = event => this.confirm(event);
        /** Used for header text in confirm sign in component */
        this.headerText = Translations.CONFIRM_SMS_CODE;
        /** Used for the submit button text in confirm sign in component */
        this.submitButtonText = Translations.CONFIRM;
        /** Auth state change handler for this component */
        this.handleAuthStateChange = dispatchAuthStateChangeEvent;
        /** Default form field */
        this.defaultFormFields = [
            {
                type: 'code',
                required: true,
                handleInputChange: event => this.handleCodeChange(event),
            },
        ];
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
        this.formFields = this.defaultFormFields;
        /** The MFA option to confirm with */
        this.mfaOption = MfaOption.SMS;
        /* Whether or not the confirm-sign-in component is loading */
        this.loading = false;
    }
    componentWillLoad() {
        this.setup();
    }
    userHandler() {
        this.setup();
    }
    setup() {
        if (this.user &&
            this.user['challengeName'] === ChallengeName.SoftwareTokenMFA) {
            this.mfaOption = MfaOption.TOTP;
            // If header text is using default use TOTP string
            if (this.headerText === Translations.CONFIRM_SMS_CODE) {
                this.headerText = Translations.CONFIRM_TOTP_CODE;
            }
        }
        this.constructedFormFieldOptions = this.constructFormFieldOptions(this.formFields);
    }
    handleCodeChange(event) {
        this.code = event.target.value;
    }
    async confirm(event) {
        if (event) {
            event.preventDefault();
        }
        const mfaType = this.user['challengeName'] === ChallengeName.SoftwareTokenMFA
            ? ChallengeName.SoftwareTokenMFA
            : null;
        if (!Auth || typeof Auth.confirmSignIn !== 'function') {
            throw new Error(NO_AUTH_MODULE_FOUND);
        }
        this.loading = true;
        try {
            await Auth.confirmSignIn(this.user, this.code, mfaType);
            await checkContact(this.user, this.handleAuthStateChange);
        }
        catch (error) {
            dispatchToastHubEvent(error);
        }
        finally {
            this.loading = false;
        }
    }
    constructFormFieldOptions(formFields) {
        const content = [];
        if (formFields === undefined)
            return undefined;
        if (formFields.length <= 0)
            return this.defaultFormFields;
        formFields.forEach((formField) => {
            if (typeof formField === 'string' || formField.type !== 'code') {
                // This is either a `string`, and/or a custom field that isn't `code`. Pass this directly.
                content.push(formField);
            }
            else {
                // This is a code input field. Attach input handler.
                content.push(Object.assign({ handleInputChange: event => this.handleCodeChange(event) }, formField));
            }
        });
        return content;
    }
    render() {
        return (h(Host, null, h("amplify-form-section", { headerText: I18n.get(this.headerText), handleSubmit: this.handleSubmit, submitButtonText: I18n.get(this.submitButtonText), loading: this.loading, secondaryFooterContent: h("span", null, h("amplify-button", { variant: "anchor", onClick: () => this.handleAuthStateChange(AuthState.SignIn) }, I18n.get(Translations.BACK_TO_SIGN_IN))) }, h("amplify-auth-fields", { formFields: this.constructedFormFieldOptions }))));
    }
    static get watchers() { return {
        "user": ["userHandler"]
    }; }
};

const AmplifyConfirmSignUp = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
                hint: (h("div", null, I18n.get(Translations.CONFIRM_SIGN_UP_LOST_CODE), ' ', h("amplify-button", { variant: "anchor", onClick: () => this.resendConfirmCode() }, I18n.get(Translations.CONFIRM_SIGN_UP_RESEND_CODE)))),
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
                    newField['hint'] = isHintValid(newField) ? (h("div", null, I18n.get(Translations.CONFIRM_SIGN_UP_LOST_CODE), ' ', h("amplify-button", { variant: "anchor", onClick: () => this.resendConfirmCode() }, I18n.get(Translations.CONFIRM_SIGN_UP_RESEND_CODE)))) : (newField['hint']);
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
        return (h(Host, null, h("amplify-form-section", { headerText: I18n.get(this.headerText), submitButtonText: I18n.get(this.submitButtonText), handleSubmit: this.handleSubmit, loading: this.loading, secondaryFooterContent: h("div", null, h("span", null, h("amplify-button", { variant: "anchor", onClick: () => this.handleAuthStateChange(AuthState.SignIn) }, I18n.get(Translations.BACK_TO_SIGN_IN)))) }, h("amplify-auth-fields", { formFields: this.newFormFields }))));
    }
    static get watchers() { return {
        "formFields": ["formFieldsHandler"],
        "user": ["userHandler"]
    }; }
};

const logger = new Logger('ForgotPassword');
const AmplifyForgotPassword = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, null, h("amplify-form-section", { headerText: I18n.get(this.headerText), handleSubmit: submitFn, loading: this.loading, secondaryFooterContent: h("amplify-button", { variant: "anchor", onClick: () => this.handleAuthStateChange(AuthState.SignIn), "data-test": "forgot-password-back-to-sign-in-link" }, I18n.get(Translations.BACK_TO_SIGN_IN)), testDataPrefix: 'forgot-password', submitButtonText: I18n.get(submitButtonText) }, h("amplify-auth-fields", { formFields: this.newFormFields }))));
    }
    static get watchers() { return {
        "formFields": ["formFieldsHandler"]
    }; }
};

const logger$1 = new ConsoleLogger('amplify-require-new-password');
const AmplifyRequireNewPassword = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** The header text of the forgot password section */
        this.headerText = Translations.CHANGE_PASSWORD;
        /** The text displayed inside of the submit button for the form */
        this.submitButtonText = Translations.CHANGE_PASSWORD_ACTION;
        /** The function called when submitting a new password */
        this.handleSubmit = event => this.completeNewPassword(event);
        /** Auth state change handler for this component */
        this.handleAuthStateChange = dispatchAuthStateChangeEvent;
        /** The form fields displayed inside of the forgot password form */
        this.formFields = [
            {
                type: AuthFormField.Password,
                required: true,
                handleInputChange: event => this.handlePasswordChange(event),
                label: I18n.get(Translations.NEW_PASSWORD_LABEL),
                placeholder: I18n.get(Translations.NEW_PASSWORD_PLACEHOLDER),
                inputProps: {
                    'data-test': 'require-new-password-password-input',
                },
            },
        ];
        this.loading = false;
        this.requiredAttributes = {};
        this.newFormFields = this.formFields;
        this.phoneNumber = {
            countryDialCodeValue: COUNTRY_DIAL_CODE_DEFAULT,
            phoneNumberValue: ' ',
        };
    }
    userHandler() {
        this.setCurrentUser();
    }
    handleRequiredAttributeInputChange(attribute, event) {
        if (attribute === 'phone_number') {
            this.formatPhoneNumber(event);
        }
        else {
            this.requiredAttributes[attribute] = event.target.value;
        }
    }
    async setCurrentUser() {
        if (!this.user) {
            // Check for authenticated user
            try {
                const user = await Auth.currentAuthenticatedUser();
                if (user)
                    this.currentUser = user;
            }
            catch (error) {
                dispatchToastHubEvent(error);
            }
        }
        else {
            this.currentUser = this.user;
        }
        if (this.currentUser &&
            this.currentUser.challengeParam &&
            this.currentUser.challengeParam.requiredAttributes) {
            const userRequiredAttributes = this.currentUser.challengeParam
                .requiredAttributes;
            const requiredAttributesMap = getRequiredAttributesMap();
            userRequiredAttributes.forEach((attribute) => {
                const formField = {
                    type: attribute,
                    required: true,
                    label: requiredAttributesMap[attribute].label,
                    placeholder: requiredAttributesMap[attribute].placeholder,
                    handleInputChange: event => this.handleRequiredAttributeInputChange(attribute, event),
                    inputProps: {
                        'data-test': `require-new-password-${attribute}-input`,
                    },
                };
                this.newFormFields = [...this.newFormFields, formField];
            });
        }
    }
    componentWillLoad() {
        return this.setCurrentUser();
    }
    handlePasswordChange(event) {
        this.password = event.target.value;
    }
    formatPhoneNumber(event) {
        handlePhoneNumberChange(event, this.phoneNumber);
        /**
         * composePhoneNumberInput will throw an error if the phoneNumberValue it receives
         * is empty. Adding a check here to try and make sure that doesn't happen...but will
         * wrap it in a try/catch block just in case as well
         */
        try {
            if (event.target.name === PHONE_SUFFIX &&
                this.phoneNumber.phoneNumberValue) {
                const composedInput = composePhoneNumberInput(this.phoneNumber);
                this.requiredAttributes['phone_number'] = composedInput;
            }
        }
        catch (err) {
            logger$1.error(`error in phone number field - ${err}`);
        }
    }
    async completeNewPassword(event) {
        if (event) {
            event.preventDefault();
        }
        if (!Auth || typeof Auth.completeNewPassword !== 'function') {
            throw new Error(NO_AUTH_MODULE_FOUND);
        }
        this.loading = true;
        try {
            const user = await Auth.completeNewPassword(this.currentUser, this.password, this.requiredAttributes);
            logger$1.debug('complete new password', user);
            switch (user.challengeName) {
                case ChallengeName.SMSMFA:
                    this.handleAuthStateChange(AuthState.ConfirmSignIn, user);
                    break;
                case ChallengeName.MFASetup:
                    logger$1.debug('TOTP setup', user.challengeParam);
                    this.handleAuthStateChange(AuthState.TOTPSetup, user);
                    break;
                default:
                    await checkContact(user, this.handleAuthStateChange);
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
        return (h(Host, null, h("amplify-form-section", { headerText: I18n.get(this.headerText), handleSubmit: this.handleSubmit, loading: this.loading, secondaryFooterContent: h("amplify-button", { variant: "anchor", onClick: () => this.handleAuthStateChange(AuthState.SignIn) }, I18n.get(Translations.BACK_TO_SIGN_IN)), submitButtonText: I18n.get(this.submitButtonText) }, h("amplify-auth-fields", { formFields: this.newFormFields }))));
    }
    static get watchers() { return {
        "user": ["userHandler"]
    }; }
};

const amplifySignInCss = ":host{--footer-size:var(--amplify-text-sm);--footer-color:var(--amplify-grey);--footer-font-family:var(--amplify-font-family);--font-weight:var(--amplify-font-weight)}.sign-in-form-footer{font-family:var(--footer-font-family);font-size:var(--footer-size);color:var(--footer-color);font-weight:--font-weight;display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.sign-in-form-footer amplify-button{margin-bottom:0.625rem}@media (min-width: 672px){.sign-in-form-footer{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:baseline;align-items:baseline}.sign-in-form-footer amplify-button{margin-bottom:0}}.sign-in-form-footer *+*{margin-bottom:15px}.full-width-footer-content{width:100%}";

const AmplifySignIn = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
            hint: (h("div", null, I18n.get(Translations.FORGOT_PASSWORD_TEXT), ' ', h("amplify-button", { variant: "anchor", onClick: () => this.handleAuthStateChange(AuthState.ForgotPassword), "data-test": "sign-in-forgot-password-link" }, I18n.get(Translations.RESET_PASSWORD_TEXT)))),
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
                    newField['hint'] = isHintValid(newField) ? (h("div", null, I18n.get(Translations.FORGOT_PASSWORD_TEXT), ' ', h("amplify-button", { variant: "anchor", onClick: () => this.handleAuthStateChange(AuthState.ForgotPassword), "data-test": "sign-in-forgot-password-link" }, I18n.get(Translations.RESET_PASSWORD_TEXT)))) : (newField['hint']);
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
        return (h(Host, null, h("amplify-form-section", { headerText: I18n.get(this.headerText), handleSubmit: this.handleSubmit, testDataPrefix: 'sign-in' }, h("div", { slot: "subtitle" }, h("slot", { name: "header-subtitle" })), h("slot", { name: "federated-buttons" }, h("amplify-federated-buttons", { handleAuthStateChange: this.handleAuthStateChange, federated: this.federated })), !isEmpty(this.federated) && h("amplify-strike", null, "or"), h("amplify-auth-fields", { formFields: this.newFormFields }), h("div", { slot: "amplify-form-section-footer", class: "sign-in-form-footer" }, h("slot", { name: "footer" }, !this.hideSignUp && (h("slot", { name: "secondary-footer-content" }, h("span", null, I18n.get(Translations.NO_ACCOUNT_TEXT), ' ', h("amplify-button", { variant: "anchor", onClick: () => this.handleAuthStateChange(AuthState.SignUp), "data-test": "sign-in-create-account-link" }, I18n.get(Translations.CREATE_ACCOUNT_TEXT))))), h("div", { class: this.hideSignUp ? 'full-width-footer-content' : '' }, h("slot", { name: "primary-footer-content" }, h("amplify-button", { type: "submit", disabled: this.loading, "data-test": "sign-in-sign-in-button" }, this.loading ? (h("amplify-loading-spinner", null)) : (h("span", null, I18n.get(this.submitButtonText)))))))))));
    }
    static get watchers() { return {
        "formFields": ["formFieldsHandler"]
    }; }
};
AmplifySignIn.style = amplifySignInCss;

const amplifySignUpCss = "amplify-sign-up{--footer-font-family:var(--amplify-font-family);--footer-font-size:var(--amplify-text-sm);--footer-color:var(--amplify-grey);--font-weight:var(--amplify-font-weight)}.sign-up-form-footer{font-family:var(--footer-font-family);font-size:var(--footer-font-size);color:var(--footer-color);font-weight:--font-weight;display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.sign-up-form-footer amplify-button{margin-bottom:0.625rem}@media (min-width: 672px){.sign-up-form-footer{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:baseline;align-items:baseline}.sign-up-form-footer amplify-button{margin-bottom:0}}.sign-up-form-footer *+*{margin-bottom:15px}";

const AmplifySignUp = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, null, h("amplify-form-section", { headerText: I18n.get(this.headerText), handleSubmit: this.handleSubmit, testDataPrefix: 'sign-up' }, h("div", { slot: "subtitle" }, h("slot", { name: "header-subtitle" })), h("amplify-auth-fields", { formFields: this.newFormFields }), h("div", { class: "sign-up-form-footer", slot: "amplify-form-section-footer" }, h("slot", { name: "footer" }, h("slot", { name: "secondary-footer-content" }, h("span", null, I18n.get(this.haveAccountText), ' ', h("amplify-button", { variant: "anchor", onClick: () => this.handleAuthStateChange(AuthState.SignIn), "data-test": "sign-up-sign-in-link" }, I18n.get(this.signInText)))), h("slot", { name: "primary-footer-content" }, h("amplify-button", { type: "submit", "data-test": "sign-up-create-account-button", disabled: this.loading }, this.loading ? (h("amplify-loading-spinner", null)) : (h("span", null, I18n.get(this.submitButtonText))))))))));
    }
    static get watchers() { return {
        "formFields": ["formFieldsHandler"]
    }; }
};
AmplifySignUp.style = amplifySignUpCss;

const logger$2 = new Logger('AmplifyVerifyContact');
const AmplifyVerifyContact = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
            logger$2.debug(data);
            this.handleAuthStateChange(AuthState.SignedIn, this.user);
            this.verifyAttr = null;
        }
        catch (error) {
            dispatchToastHubEvent(error);
            logger$2.error(error);
        }
        finally {
            this.loading = false;
        }
    }
    async verify(contact) {
        if (!contact) {
            logger$2.error('Neither Email nor Phone Number selected');
            return;
        }
        if (!Auth || typeof Auth.verifyCurrentUserAttribute !== 'function') {
            throw new Error(NO_AUTH_MODULE_FOUND);
        }
        this.loading = true;
        try {
            const data = await Auth.verifyCurrentUserAttribute(contact);
            logger$2.debug(data);
            this.verifyAttr = contact;
        }
        catch (error) {
            dispatchToastHubEvent(error);
            logger$2.error(error);
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
        return (h("div", null, h("amplify-input", { inputProps: {
                autocomplete: 'off',
                'data-test': 'verify-contact-code-input',
            }, name: "code", placeholder: I18n.get(Translations.CODE_PLACEHOLDER), handleInputChange: event => this.handleInputChange(event) })));
    }
    renderVerify() {
        const user = this.user;
        if (!user) {
            logger$2.debug('No user to verify');
            return null;
        }
        const { unverified } = user;
        if (!unverified) {
            logger$2.debug('Unverified variable does not exist on user');
            return null;
        }
        const { email, phone_number } = unverified;
        return (h("div", null, email && (h("amplify-radio-button", { label: I18n.get(Translations.VERIFY_CONTACT_EMAIL_LABEL), key: "email", name: "contact", value: "email", handleInputChange: event => this.handleInputChange(event), inputProps: {
                'data-test': 'verify-contact-email-radio',
            } })), phone_number && (h("amplify-radio-button", { label: I18n.get(Translations.VERIFY_CONTACT_PHONE_LABEL), key: "phone_number", name: "contact", value: "phone_number", handleInputChange: event => this.handleInputChange(event), inputProps: {
                'data-test': 'verify-contact-phone-number-radio',
            } }))));
    }
    render() {
        return (h(Host, null, h("amplify-form-section", { handleSubmit: event => this.handleSubmit(event), headerText: I18n.get(Translations.VERIFY_CONTACT_HEADER_TEXT), loading: this.loading, secondaryFooterContent: h("span", null, h("amplify-button", { variant: "anchor", onClick: () => this.handleAuthStateChange(AuthState.SignedIn, this.user), "data-test": "verify-contact-skip-link" }, "Skip")), submitButtonText: this.verifyAttr
                ? I18n.get(Translations.VERIFY_CONTACT_SUBMIT_LABEL)
                : I18n.get(Translations.VERIFY_CONTACT_VERIFY_LABEL) }, this.verifyAttr ? this.renderSubmit() : this.renderVerify())));
    }
};

export { AmplifyConfirmSignIn as amplify_confirm_sign_in, AmplifyConfirmSignUp as amplify_confirm_sign_up, AmplifyForgotPassword as amplify_forgot_password, AmplifyRequireNewPassword as amplify_require_new_password, AmplifySignIn as amplify_sign_in, AmplifySignUp as amplify_sign_up, AmplifyVerifyContact as amplify_verify_contact };