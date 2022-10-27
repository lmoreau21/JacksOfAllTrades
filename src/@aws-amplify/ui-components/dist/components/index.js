import { attachShadow, h, Host, createEvent, proxyCustomElement } from '@stencil/core/internal/client';
import Auth, { AuthErrorStrings, Auth as Auth$1, CognitoUser, appendToCognitoUserAgent } from '@aws-amplify/auth';
import { Logger, Hub, I18n, browserOrNode, ConsoleLogger, isEmpty, filenameToContentType } from '@aws-amplify/core';
import { Interactions } from '@aws-amplify/interactions';
import { Storage } from '@aws-amplify/storage';
import buffer from 'buffer';

// TODO: Move these values to or extract them from the Cognito Provider in the Auth category for Auth V2
var AuthState;
(function (AuthState) {
    AuthState["SignUp"] = "signup";
    AuthState["SignOut"] = "signout";
    AuthState["SignIn"] = "signin";
    AuthState["Loading"] = "loading";
    AuthState["SignedOut"] = "signedout";
    AuthState["SignedIn"] = "signedin";
    AuthState["SigningUp"] = "signingup";
    AuthState["ConfirmSignUp"] = "confirmSignUp";
    AuthState["confirmingSignUpCustomFlow"] = "confirmsignupcustomflow";
    AuthState["ConfirmSignIn"] = "confirmSignIn";
    AuthState["confirmingSignInCustomFlow"] = "confirmingsignincustomflow";
    AuthState["VerifyingAttributes"] = "verifyingattributes";
    AuthState["ForgotPassword"] = "forgotpassword";
    AuthState["ResetPassword"] = "resettingpassword";
    AuthState["SettingMFA"] = "settingMFA";
    AuthState["TOTPSetup"] = "TOTPSetup";
    AuthState["CustomConfirmSignIn"] = "customConfirmSignIn";
    AuthState["VerifyContact"] = "verifyContact";
})(AuthState || (AuthState = {}));
var MfaOption;
(function (MfaOption) {
    MfaOption["TOTP"] = "TOTP";
    MfaOption["SMS"] = "SMS";
    MfaOption["NOMFA"] = "NOMFA";
})(MfaOption || (MfaOption = {}));
var ChallengeName;
(function (ChallengeName) {
    ChallengeName["SoftwareTokenMFA"] = "SOFTWARE_TOKEN_MFA";
    ChallengeName["SMSMFA"] = "SMS_MFA";
    ChallengeName["NewPasswordRequired"] = "NEW_PASSWORD_REQUIRED";
    ChallengeName["MFASetup"] = "MFA_SETUP";
    ChallengeName["CustomChallenge"] = "CUSTOM_CHALLENGE";
})(ChallengeName || (ChallengeName = {}));
var AuthFormField;
(function (AuthFormField) {
    AuthFormField["Password"] = "password";
})(AuthFormField || (AuthFormField = {}));
var UsernameAlias;
(function (UsernameAlias) {
    UsernameAlias["username"] = "username";
    UsernameAlias["email"] = "email";
    UsernameAlias["phone_number"] = "phone_number";
})(UsernameAlias || (UsernameAlias = {}));

var AccessLevel;
(function (AccessLevel) {
    AccessLevel["Public"] = "public";
    AccessLevel["Private"] = "private";
    AccessLevel["Protected"] = "protected";
})(AccessLevel || (AccessLevel = {}));

var AuthStrings;
(function (AuthStrings) {
    AuthStrings["BACK_TO_SIGN_IN"] = "Back to Sign In";
    AuthStrings["CHANGE_PASSWORD_ACTION"] = "Change";
    AuthStrings["CHANGE_PASSWORD"] = "Change Password";
    AuthStrings["CODE_LABEL"] = "Verification code";
    AuthStrings["CODE_PLACEHOLDER"] = "Enter code";
    AuthStrings["CONFIRM_SIGN_UP_CODE_LABEL"] = "Confirmation Code";
    AuthStrings["CONFIRM_SIGN_UP_CODE_PLACEHOLDER"] = "Enter your code";
    AuthStrings["CONFIRM_SIGN_UP_HEADER_TEXT"] = "Confirm Sign up";
    AuthStrings["CONFIRM_SIGN_UP_LOST_CODE"] = "Lost your code?";
    AuthStrings["CONFIRM_SIGN_UP_RESEND_CODE"] = "Resend Code";
    AuthStrings["CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT"] = "Confirm";
    AuthStrings["CONFIRM_SMS_CODE"] = "Confirm SMS Code";
    AuthStrings["CONFIRM_TOTP_CODE"] = "Confirm TOTP Code";
    AuthStrings["CONFIRM"] = "Confirm";
    AuthStrings["CREATE_ACCOUNT_TEXT"] = "Create account";
    AuthStrings["EMAIL_LABEL"] = "Email Address *";
    AuthStrings["EMAIL_PLACEHOLDER"] = "Enter your email address";
    AuthStrings["FORGOT_PASSWORD_TEXT"] = "Forgot your password?";
    AuthStrings["LESS_THAN_TWO_MFA_VALUES_MESSAGE"] = "Less than two MFA types available";
    AuthStrings["NEW_PASSWORD_LABEL"] = "New password";
    AuthStrings["NEW_PASSWORD_PLACEHOLDER"] = "Enter your new password";
    AuthStrings["NO_ACCOUNT_TEXT"] = "No account?";
    AuthStrings["USERNAME_REMOVE_WHITESPACE"] = "Username cannot contain whitespace";
    AuthStrings["PASSWORD_REMOVE_WHITESPACE"] = "Password cannot start or end with whitespace";
    AuthStrings["PASSWORD_LABEL"] = "Password *";
    AuthStrings["PASSWORD_PLACEHOLDER"] = "Enter your password";
    AuthStrings["PHONE_LABEL"] = "Phone Number *";
    AuthStrings["PHONE_PLACEHOLDER"] = "(555) 555-1212";
    AuthStrings["QR_CODE_ALT"] = "qrcode";
    AuthStrings["RESET_PASSWORD_TEXT"] = "Reset password";
    AuthStrings["RESET_YOUR_PASSWORD"] = "Reset your password";
    AuthStrings["SELECT_MFA_TYPE_HEADER_TEXT"] = "Select MFA Type";
    AuthStrings["SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT"] = "Verify";
    AuthStrings["SEND_CODE"] = "Send Code";
    AuthStrings["SUBMIT"] = "Submit";
    AuthStrings["SETUP_TOTP_REQUIRED"] = "TOTP needs to be configured";
    AuthStrings["SIGN_IN_ACTION"] = "Sign In";
    AuthStrings["SIGN_IN_HEADER_TEXT"] = "Sign in to your account";
    AuthStrings["SIGN_IN_TEXT"] = "Sign in";
    AuthStrings["SIGN_IN_WITH_AMAZON"] = "Sign in with Amazon";
    AuthStrings["SIGN_IN_WITH_AUTH0"] = "Sign in with Auth0";
    AuthStrings["SIGN_IN_WITH_AWS"] = "Sign in with AWS";
    AuthStrings["SIGN_IN_WITH_FACEBOOK"] = "Sign in with Facebook";
    AuthStrings["SIGN_IN_WITH_GOOGLE"] = "Sign in with Google";
    AuthStrings["SIGN_OUT"] = "Sign Out";
    AuthStrings["SIGN_UP_EMAIL_PLACEHOLDER"] = "Email";
    AuthStrings["SIGN_UP_HAVE_ACCOUNT_TEXT"] = "Have an account?";
    AuthStrings["SIGN_UP_HEADER_TEXT"] = "Create a new account";
    AuthStrings["SIGN_UP_PASSWORD_PLACEHOLDER"] = "Password";
    AuthStrings["SIGN_UP_SUBMIT_BUTTON_TEXT"] = "Create Account";
    AuthStrings["SIGN_UP_USERNAME_PLACEHOLDER"] = "Username";
    AuthStrings["SUCCESS_MFA_TYPE"] = "Success! Your MFA Type is now:";
    AuthStrings["TOTP_HEADER_TEXT"] = "Scan then enter verification code";
    AuthStrings["TOTP_LABEL"] = "Enter Security Code:";
    AuthStrings["TOTP_ISSUER"] = "AWSCognito";
    AuthStrings["TOTP_SETUP_FAILURE"] = "TOTP Setup has failed";
    AuthStrings["TOTP_SUBMIT_BUTTON_TEXT"] = "Verify Security Token";
    AuthStrings["TOTP_SUCCESS_MESSAGE"] = "Setup TOTP successfully!";
    AuthStrings["UNABLE_TO_SETUP_MFA_AT_THIS_TIME"] = "Failed! Unable to configure MFA at this time";
    AuthStrings["USERNAME_LABEL"] = "Username *";
    AuthStrings["USERNAME_PLACEHOLDER"] = "Enter your username";
    AuthStrings["VERIFY_CONTACT_EMAIL_LABEL"] = "Email";
    AuthStrings["VERIFY_CONTACT_HEADER_TEXT"] = "Account recovery requires verified contact information";
    AuthStrings["VERIFY_CONTACT_PHONE_LABEL"] = "Phone Number";
    AuthStrings["VERIFY_CONTACT_SUBMIT_LABEL"] = "Submit";
    AuthStrings["VERIFY_CONTACT_VERIFY_LABEL"] = "Verify";
    AuthStrings["ADDRESS_LABEL"] = "Address";
    AuthStrings["ADDRESS_PLACEHOLDER"] = "Enter your address";
    AuthStrings["NICKNAME_LABEL"] = "Nickname";
    AuthStrings["NICKNAME_PLACEHOLDER"] = "Enter your nickname";
    AuthStrings["BIRTHDATE_LABEL"] = "Birthday";
    AuthStrings["BIRTHDATE_PLACEHOLDER"] = "Enter your birthday";
    AuthStrings["PICTURE_LABEL"] = "Picture URL";
    AuthStrings["PICTURE_PLACEHOLDER"] = "Enter your picture URL";
    AuthStrings["FAMILY_NAME_LABEL"] = "Family Name";
    AuthStrings["FAMILY_NAME_PLACEHOLDER"] = "Enter your family name";
    AuthStrings["PREFERRED_USERNAME_LABEL"] = "Preferred Username";
    AuthStrings["PREFERRED_USERNAME_PLACEHOLDER"] = "Enter your preferred username";
    AuthStrings["GENDER_LABEL"] = "Gender";
    AuthStrings["GENDER_PLACEHOLDER"] = "Enter your gender";
    AuthStrings["PROFILE_LABEL"] = "Profile URL";
    AuthStrings["PROFILE_PLACEHOLDER"] = "Enter your profile URL";
    AuthStrings["GIVEN_NAME_LABEL"] = "First Name";
    AuthStrings["GIVEN_NAME_PLACEHOLDER"] = "Enter your first name";
    AuthStrings["ZONEINFO_LABEL"] = "Time zone";
    AuthStrings["ZONEINFO_PLACEHOLDER"] = "Enter your time zone";
    AuthStrings["LOCALE_LABEL"] = "Locale";
    AuthStrings["LOCALE_PLACEHOLDER"] = "Enter your locale";
    AuthStrings["UPDATED_AT_LABEL"] = "Updated At";
    AuthStrings["UPDATED_AT_PLACEHOLDER"] = "Enter the time the information was last updated";
    AuthStrings["MIDDLE_NAME_LABEL"] = "Middle Name";
    AuthStrings["MIDDLE_NAME_PLACEHOLDER"] = "Enter your middle name";
    AuthStrings["WEBSITE_LABEL"] = "Website";
    AuthStrings["WEBSITE_PLACEHOLDER"] = "Enter your website";
    AuthStrings["NAME_LABEL"] = "Full Name";
    AuthStrings["NAME_PLACEHOLDER"] = "Enter your full name";
    AuthStrings["PHOTO_PICKER_TITLE"] = "Picker Title";
    AuthStrings["PHOTO_PICKER_HINT"] = "Ancillary text or content may occupy this space here";
    AuthStrings["PHOTO_PICKER_PLACEHOLDER_HINT"] = "Placeholder hint";
    AuthStrings["PHOTO_PICKER_BUTTON_TEXT"] = "Button";
    AuthStrings["IMAGE_PICKER_TITLE"] = "Add Profile Photo";
    AuthStrings["IMAGE_PICKER_HINT"] = "Preview the image before upload";
    AuthStrings["IMAGE_PICKER_PLACEHOLDER_HINT"] = "Tap to image select";
    AuthStrings["IMAGE_PICKER_BUTTON_TEXT"] = "Upload";
    AuthStrings["PICKER_TEXT"] = "Pick a file";
    AuthStrings["TEXT_FALLBACK_CONTENT"] = "Fallback Content";
    AuthStrings["CONFIRM_SIGN_UP_FAILED"] = "Confirm Sign Up Failed";
    AuthStrings["SIGN_UP_FAILED"] = "Sign Up Failed";
})(AuthStrings || (AuthStrings = {}));
var InteractionsStrings;
(function (InteractionsStrings) {
    InteractionsStrings["CHATBOT_TITLE"] = "ChatBot Lex";
    InteractionsStrings["TEXT_INPUT_PLACEHOLDER"] = "Write a message";
    InteractionsStrings["VOICE_INPUT_PLACEHOLDER"] = "Click mic to speak";
    InteractionsStrings["CHAT_DISABLED_ERROR"] = "Error: Either voice or text must be enabled for the chatbot";
    InteractionsStrings["NO_BOT_NAME_ERROR"] = "Error: Bot name must be provided to ChatBot";
})(InteractionsStrings || (InteractionsStrings = {}));
const Translations = Object.assign(Object.assign(Object.assign({}, AuthStrings), AuthErrorStrings), InteractionsStrings);

// Dictionaries
// fieldId constants
const USERNAME_SUFFIX = 'username';
const EMAIL_SUFFIX = 'email';
const CODE_SUFFIX = 'code';
const PHONE_SUFFIX = 'phone';
const PASSWORD_SUFFIX = 'password';
// Country Dial Code common constants
const COUNTRY_DIAL_CODE_SUFFIX = 'country-dial-code-select';
const COUNTRY_DIAL_CODE_DEFAULT = '+1';
// Auth Keys
const AUTH_SOURCE_KEY = 'amplify-auth-source';
// Error message Common Constants
const PHONE_EMPTY_ERROR_MESSAGE = 'Phone number can not be empty';
const NO_AUTH_MODULE_FOUND = 'No Auth module found, please ensure @aws-amplify/auth is imported';
const NO_STORAGE_MODULE_FOUND = 'No Storage module found, please ensure @aws-amplify/storage is imported';
const NO_INTERACTIONS_MODULE_FOUND = 'No Interactions module found, please ensure @aws-amplify/interactions is imported';
// Select MFA Types Messages
const USER_NOT_SETUP_SOFTWARE_TOKEN_MFA = 'User has not set up software token mfa';
const USER_NOT_VERIFIED_SOFTWARE_TOKEN_MFA = 'User has not verified software token mfa';
// Hub Events and Channels
const AUTH_CHANNEL = 'auth';
const UI_AUTH_CHANNEL = 'UI Auth';
const TOAST_AUTH_ERROR_EVENT = 'ToastAuthError';
const AUTH_STATE_CHANGE_EVENT = 'AuthStateChange';

const logger = new Logger('helpers');
/**
 * Finds closest element that matches the selector from the ancestor tree.
 * Trasverses through shadow DOM and slots.
 *
 * Adpated from: https://stackoverflow.com/a/56105394
 */
const closestElement = (selector, base) => {
    function _closestFrom(el) {
        if (!el || el === document || el === window)
            return null;
        if (el.matches(selector))
            return base; // return if current element matches the selector
        if (el.assignedSlot)
            el = el.assignedSlot; // traverse up slots if slotted
        const found = el.closest(selector);
        return found ? found : _closestFrom(el.getRootNode().host); // try to traverse up shadows
    }
    return _closestFrom(base);
};
const dispatchToastHubEvent = (error) => {
    Hub.dispatch(UI_AUTH_CHANNEL, {
        event: TOAST_AUTH_ERROR_EVENT,
        message: I18n.get(error.message),
    });
};
const dispatchAuthStateChangeEvent = (nextAuthState, data) => {
    Hub.dispatch(UI_AUTH_CHANNEL, {
        event: AUTH_STATE_CHANGE_EVENT,
        message: nextAuthState,
        data,
    });
};
const composePhoneNumberInput = (phoneNumber) => {
    if (!phoneNumber.phoneNumberValue) {
        throw new Error(PHONE_EMPTY_ERROR_MESSAGE);
    }
    const sanitizedPhoneNumberValue = phoneNumber.phoneNumberValue.replace(/[-()\s]/g, '');
    return `${phoneNumber.countryDialCodeValue}${sanitizedPhoneNumberValue}`;
};
const checkUsernameAlias = (usernameAlias) => {
    if (!(usernameAlias in UsernameAlias)) {
        throw new Error(`Invalid username Alias - ${usernameAlias}. Instead use ${Object.values(UsernameAlias)}`);
    }
};
const onAuthUIStateChange = (authStateHandler) => {
    const authUIStateHandler = async (data) => {
        const { payload } = data;
        switch (payload.event) {
            case AUTH_STATE_CHANGE_EVENT:
                if (payload.message) {
                    if (payload.message === AuthState.SignedIn) {
                        // for AuthState.SignedIn, use an Auth Guard
                        try {
                            const user = await Auth.currentAuthenticatedUser();
                            authStateHandler(payload.message, user);
                        }
                        catch (e) {
                            logger.error('User is not authenticated');
                        }
                    }
                    else {
                        authStateHandler(payload.message, payload.data);
                    }
                }
                break;
        }
    };
    Hub.listen(UI_AUTH_CHANNEL, authUIStateHandler);
    const unsubscribe = () => {
        // Replace user's `authStateHandler` with a noop so that we don't trigger side-effects during the async `authUIStateHandler` when unsubscribed
        authStateHandler = () => { };
        Hub.remove(UI_AUTH_CHANNEL, authUIStateHandler);
    };
    return unsubscribe;
};
const isHintValid = field => {
    return !(field['hint'] === null || typeof field['hint'] === 'string');
};
// Required attributes come from https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims
const getRequiredAttributesMap = () => ({
    address: {
        label: I18n.get(Translations.ADDRESS_LABEL),
        placeholder: I18n.get(Translations.ADDRESS_PLACEHOLDER),
    },
    nickname: {
        label: I18n.get(Translations.NICKNAME_LABEL),
        placeholder: I18n.get(Translations.NICKNAME_PLACEHOLDER),
    },
    birthdate: {
        label: I18n.get(Translations.BIRTHDATE_LABEL),
        placeholder: I18n.get(Translations.BIRTHDATE_PLACEHOLDER),
    },
    phone_number: {
        label: I18n.get(Translations.PHONE_LABEL),
        placeholder: I18n.get(Translations.PHONE_PLACEHOLDER),
    },
    email: {
        lable: I18n.get(Translations.EMAIL_LABEL),
        placeholder: I18n.get(Translations.EMAIL_PLACEHOLDER),
    },
    picture: {
        label: I18n.get(Translations.PICTURE_LABEL),
        placeholder: I18n.get(Translations.PICTURE_PLACEHOLDER),
    },
    family_name: {
        label: I18n.get(Translations.FAMILY_NAME_LABEL),
        placeholder: I18n.get(Translations.FAMILY_NAME_PLACEHOLDER),
    },
    preferred_username: {
        label: I18n.get(Translations.PREFERRED_USERNAME_LABEL),
        placeholder: I18n.get(Translations.PREFERRED_USERNAME_PLACEHOLDER),
    },
    gender: {
        label: I18n.get(Translations.GENDER_LABEL),
        placeholder: I18n.get(Translations.GENDER_PLACEHOLDER),
    },
    profile: {
        label: I18n.get(Translations.PROFILE_LABEL),
        placeholder: I18n.get(Translations.PROFILE_PLACEHOLDER),
    },
    given_name: {
        label: I18n.get(Translations.GIVEN_NAME_LABEL),
        placeholder: I18n.get(Translations.GIVEN_NAME_PLACEHOLDER),
    },
    zoneinfo: {
        label: I18n.get(Translations.ZONEINFO_LABEL),
        placeholder: I18n.get(Translations.ZONEINFO_PLACEHOLDER),
    },
    locale: {
        label: I18n.get(Translations.LOCALE_LABEL),
        placeholder: I18n.get(Translations.LOCALE_PLACEHOLDER),
    },
    updated_at: {
        label: I18n.get(Translations.UPDATED_AT_LABEL),
        placeholder: I18n.get(Translations.UPDATED_AT_PLACEHOLDER),
    },
    middle_name: {
        label: I18n.get(Translations.MIDDLE_NAME_LABEL),
        placeholder: I18n.get(Translations.MIDDLE_NAME_PLACEHOLDER),
    },
    website: {
        label: I18n.get(Translations.WEBSITE_LABEL),
        placeholder: I18n.get(Translations.WEBSITE_PLACEHOLDER),
    },
    name: {
        label: I18n.get(Translations.NAME_LABEL),
        placeholder: I18n.get(Translations.NAME_PLACEHOLDER),
    },
});
function handlePhoneNumberChange(event, phoneNumber) {
    const name = event.target.name;
    const value = event.target.value;
    /** Cognito expects to have a string be passed when signing up. Since the Select input is separate
     * input from the phone number input, we need to first capture both components values and combined
     * them together.
     */
    if (name === COUNTRY_DIAL_CODE_SUFFIX) {
        phoneNumber.countryDialCodeValue = value;
    }
    if (name === PHONE_SUFFIX) {
        phoneNumber.phoneNumberValue = value;
    }
}

/* eslint-disable */
if (browserOrNode().isBrowser) {
    let customStyles = document.createElement('style');
    customStyles.appendChild(document.createTextNode(`
    :root {
      /* Typography */
      --amplify-font-family: 'Amazon Ember', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;

      --amplify-text-xxs: 0.75rem;
      --amplify-text-xs: 0.81rem;
      --amplify-text-sm: 0.875rem;
      --amplify-text-md: 1rem;
      --amplify-text-md-sub: 1.15rem;
      --amplify-text-lg: 1.5rem;
      --amplify-text-xl: 2rem;
      --amplify-text-xxl: 2.5rem;

      /* Colors */
      --amplify-primary-color: #ff9900;
      --amplify-primary-contrast: var(--amplify-white);
      --amplify-primary-tint: #ffac31;
      --amplify-primary-shade: #e88b01;

      --amplify-secondary-color: #152939;
      --amplify-secondary-contrast: var(--amplify-white);
      --amplify-secondary-tint: #31465f;
      --amplify-secondary-shade: #1F2A37;

      --amplify-tertiary-color: #5d8aff;
      --amplify-tertiary-contrast: var(--amplify-white);
      --amplify-tertiary-tint: #7da1ff;
      --amplify-tertiary-shade: #537BE5;

      --amplify-background-color: var(--amplify-white);

      /* Neutral */
      --amplify-grey: #828282;
      --amplify-light-grey: #c4c4c4;
      --amplify-white: #ffffff;
      --amplify-smoke-white: #f5f5f5;
      --amplify-red: #dd3f5b;
      --amplify-blue: #099ac8;
    }
  `));
    let parentElement = document.getElementsByTagName('head')[0];
    const firstChild = parentElement.firstChild;
    parentElement.insertBefore(customStyles, firstChild);
}

const logger$1 = new ConsoleLogger('amplify-amazon-button');
const AmplifyAmazonButton = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        attachShadow(this);
        /** Auth state change handler for this component
         * e.g. SignIn -> 'Create Account' link -> SignUp
         */
        this.handleAuthStateChange = dispatchAuthStateChangeEvent;
        this.federatedSignIn = response => {
            const { access_token, expires_in } = response;
            if (!access_token) {
                return;
            }
            if (!Auth$1 ||
                typeof Auth$1.federatedSignIn !== 'function' ||
                typeof Auth$1.currentAuthenticatedUser !== 'function') {
                throw new Error(NO_AUTH_MODULE_FOUND);
            }
            const date = new Date();
            const expires_at = expires_in * 1000 + date.getTime();
            window['amazon'].Login.retrieveProfile(async (userInfo) => {
                if (!userInfo.success) {
                    return logger$1.debug('Get user Info failed');
                }
                const user = {
                    name: userInfo.profile.Name,
                    email: userInfo.profile.PrimaryEmail,
                };
                await Auth$1.federatedSignIn('amazon', { token: access_token, expires_at }, user);
                const authenticatedUser = await Auth$1.currentAuthenticatedUser();
                this.handleAuthStateChange(AuthState.SignedIn, authenticatedUser);
            });
        };
    }
    /**
     * @see https://developer.amazon.com/docs/login-with-amazon/install-sdk-javascript.html
     */
    signInWithAmazon(event) {
        event.preventDefault();
        window['amazon'].Login.setClientId(this.clientId);
        window['amazon'].Login.authorize({ scope: 'profile' }, response => {
            if (response.error) {
                return logger$1.debug('Failed to login with amazon: ' + response.error);
            }
            try {
                window.localStorage.setItem(AUTH_SOURCE_KEY, JSON.stringify({ provider: 'amazon' }));
            }
            catch (e) {
                logger$1.debug('Failed to cache auth source into localStorage', e);
            }
            this.federatedSignIn(response);
        });
    }
    render() {
        return (h("amplify-sign-in-button", { onClick: event => this.signInWithAmazon(event), provider: "amazon" }, h("script", { src: "https://assets.loginwithamazon.com/sdk/na/login1.js" }), I18n.get(Translations.SIGN_IN_WITH_AMAZON)));
    }
};

const AmplifyAuthContainer = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, null, h("form", { autoComplete: "on", hidden: true }, h("input", { name: "username" }), h("input", { name: "password", type: "password" }), h("input", { type: "submit" })), h("slot", null)));
    }
};

const componentFieldMapping = {
    username: (ff) => (h("amplify-username-field", { label: ff.label, placeholder: ff.placeholder, required: ff.required, handleInputChange: ff.handleInputChange, value: ff.value, inputProps: ff.inputProps, disabled: ff.disabled, hint: ff.hint })),
    password: (ff) => (h("amplify-password-field", { label: ff.label, placeholder: ff.placeholder, hint: ff.hint, required: ff.required, handleInputChange: ff.handleInputChange, value: ff.value, inputProps: ff.inputProps, disabled: ff.disabled })),
    email: (ff) => (h("amplify-email-field", { label: ff.label, placeholder: ff.placeholder, required: ff.required, handleInputChange: ff.handleInputChange, value: ff.value, inputProps: ff.inputProps, disabled: ff.disabled, hint: ff.hint })),
    code: (ff) => (h("amplify-code-field", { label: ff.label, placeholder: ff.placeholder, hint: ff.hint, required: ff.required, handleInputChange: ff.handleInputChange, value: ff.value, inputProps: Object.assign(Object.assign({}, ff.inputProps), { min: '0' }), disabled: ff.disabled })),
    // TODO: Will create a phone field component once the dial country code component is in
    phone_number: (ff) => (h("amplify-phone-field", { label: ff.label, placeholder: ff.placeholder, required: ff.required, handleInputChange: ff.handleInputChange, value: ff.value, inputProps: ff.inputProps, disabled: ff.disabled, dialCode: ff.dialCode, hint: ff.hint })),
    default: (ff) => (h("amplify-form-field", { label: ff.label, type: ff.type, placeholder: ff.placeholder, required: ff.required, handleInputChange: ff.handleInputChange, value: ff.value, inputProps: ff.inputProps, disabled: ff.disabled, hint: ff.hint })),
};

const amplifyAuthFieldsCss = ".auth-fields{margin-bottom:2rem}";

const AmplifyAuthFields = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    constructFormFieldOptions(formFields) {
        const content = [];
        if (formFields === undefined)
            return '';
        formFields.forEach((formField) => {
            if (typeof formField === 'string') {
                content.push(componentFieldMapping[formField](formField));
            }
            else if (Object.keys(componentFieldMapping).includes(formField.type)) {
                content.push(componentFieldMapping[formField.type](formField));
            }
            else {
                content.push(componentFieldMapping['default'](formField));
            }
        });
        return content;
    }
    render() {
        return (h("div", { class: "auth-fields" }, this.constructFormFieldOptions(this.formFields)));
    }
    static get style() { return amplifyAuthFieldsCss; }
};

const logger$2 = new ConsoleLogger('amplify-auth0-button');
const AmplifyAuth0Button = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        attachShadow(this);
        /** Auth state change handler for this component */
        this.handleAuthStateChange = dispatchAuthStateChangeEvent;
        this.handleLoad = () => {
            // @ts-ignore Property 'auth0' does not exist on type '{}'.
            const { oauth = {} } = Auth$1.configure();
            // @ts-ignore Property 'auth0' does not exist on type '{}'.
            const { config = oauth.auth0 } = this;
            if (!config) {
                logger$2.debug('Auth0 is not configured');
                return;
            }
            logger$2.debug('auth0 configuration', config);
            if (!this._auth0) {
                this._auth0 = new window['auth0'].WebAuth(config);
            }
            this._auth0.parseHash((err, authResult) => {
                if (err) {
                    logger$2.debug('Failed to parse the url for Auth0', err);
                    return;
                }
                if (!authResult) {
                    logger$2.debug('Auth0 found no authResult in hash');
                    return;
                }
                const payload = {
                    provider: 'auth0',
                    opts: {
                        returnTo: config.returnTo,
                        clientID: config.clientID,
                        federated: config.federated,
                    },
                };
                try {
                    localStorage.setItem(AUTH_SOURCE_KEY, JSON.stringify(payload));
                }
                catch (e) {
                    logger$2.debug('Failed to cache auth source into localStorage', e);
                }
                this._auth0.client.userInfo(authResult.accessToken, async (err, user) => {
                    let username = undefined;
                    let email = undefined;
                    if (err) {
                        logger$2.debug('Failed to get the user info', err);
                    }
                    else {
                        username = user.name;
                        email = user.email;
                    }
                    await Auth$1.federatedSignIn(config.domain, {
                        token: authResult.idToken,
                        expires_at: authResult.expiresIn * 1000 + new Date().getTime(),
                    }, { name: username, email });
                    const authenticatedUser = await Auth$1.currentAuthenticatedUser();
                    this.handleAuthStateChange(AuthState.SignedIn, authenticatedUser);
                });
            });
        };
    }
    signInWithAuth0(event) {
        event.preventDefault();
        if (!this._auth0) {
            throw new Error('the auth0 client is not configured');
        }
        this._auth0.authorize();
    }
    render() {
        return (h("amplify-sign-in-button", { onClick: event => this.signInWithAuth0(event), provider: "auth0" }, h("script", { onLoad: this.handleLoad, src: "https://cdn.auth0.com/js/auth0/9.11/auth0.min.js" }), I18n.get(Translations.SIGN_IN_WITH_AUTH0)));
    }
};

const authSlotNames = {
    [AuthState.SignIn]: 'sign-in',
    [AuthState.ConfirmSignIn]: 'confirm-sign-in',
    [AuthState.SignUp]: 'sign-up',
    [AuthState.ConfirmSignUp]: 'confirm-sign-up',
    [AuthState.ForgotPassword]: 'forgot-password',
    [AuthState.ResetPassword]: 'require-new-password',
    [AuthState.VerifyContact]: 'verify-contact',
    [AuthState.TOTPSetup]: 'totp-setup',
    [AuthState.Loading]: 'loading',
};

const logger$3 = new Logger('auth-helpers');
async function checkContact(user, handleAuthStateChange) {
    if (!Auth$1 || typeof Auth$1.verifiedContact !== 'function') {
        throw new Error(NO_AUTH_MODULE_FOUND);
    }
    // If `user` is a federated user, we shouldn't call `verifiedContact`
    // since `user` isn't `CognitoUser`
    if (!isCognitoUser(user)) {
        handleAuthStateChange(AuthState.SignedIn, user);
        return;
    }
    try {
        const data = await Auth$1.verifiedContact(user);
        if (!isEmpty(data.verified) || isEmpty(data.unverified)) {
            handleAuthStateChange(AuthState.SignedIn, user);
        }
        else {
            const newUser = Object.assign(user, data);
            handleAuthStateChange(AuthState.VerifyContact, newUser);
        }
    }
    catch (error) {
        dispatchToastHubEvent(error);
    }
}
const handleSignIn = async (username, password, handleAuthStateChange, usernameAlias) => {
    if (!Auth$1 || typeof Auth$1.signIn !== 'function') {
        throw new Error(NO_AUTH_MODULE_FOUND);
    }
    try {
        const user = await Auth$1.signIn(username, password);
        logger$3.debug(user);
        if (user.challengeName === ChallengeName.SMSMFA ||
            user.challengeName === ChallengeName.SoftwareTokenMFA) {
            logger$3.debug('confirm user with ' + user.challengeName);
            handleAuthStateChange(AuthState.ConfirmSignIn, user);
        }
        else if (user.challengeName === ChallengeName.NewPasswordRequired) {
            logger$3.debug('require new password', user.challengeParam);
            handleAuthStateChange(AuthState.ResetPassword, user);
        }
        else if (user.challengeName === ChallengeName.MFASetup) {
            logger$3.debug('TOTP setup', user.challengeParam);
            handleAuthStateChange(AuthState.TOTPSetup, user);
        }
        else if (user.challengeName === ChallengeName.CustomChallenge &&
            user.challengeParam &&
            user.challengeParam.trigger === 'true') {
            logger$3.debug('custom challenge', user.challengeParam);
            handleAuthStateChange(AuthState.CustomConfirmSignIn, user);
        }
        else {
            await checkContact(user, handleAuthStateChange);
        }
    }
    catch (error) {
        if (error.code === 'UserNotConfirmedException') {
            logger$3.debug('the user is not confirmed');
            handleAuthStateChange(AuthState.ConfirmSignUp, { username });
        }
        else if (error.code === 'PasswordResetRequiredException') {
            logger$3.debug('the user requires a new password');
            handleAuthStateChange(AuthState.ForgotPassword, { username });
        }
        else if (error.code === 'InvalidParameterException' && password === '') {
            logger$3.debug('Password cannot be empty');
            error.message = Translations.EMPTY_PASSWORD;
        }
        else if (error.message === Translations.EMPTY_USERNAME) {
            if (usernameAlias === UsernameAlias.email) {
                error.message = Translations.EMPTY_EMAIL;
            }
            if (usernameAlias === UsernameAlias.phone_number) {
                error.message = Translations.EMPTY_PHONE;
            }
        }
        dispatchToastHubEvent(error);
    }
};
const isCognitoUser = (user) => {
    return user instanceof CognitoUser;
};

const amplifyAuthenticatorCss = ":host{--background-color:var(--amplify-background-color);--width:28.75rem;--min-width:20rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;--box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.15);--border-radius:6px;--padding:35px 40px;--margin-bottom:20px;--container-height:100vh;--container-display:flex;--container-justify:center;--container-align:center}.auth-container{display:var(--container-display);-ms-flex-pack:var(--container-justify);justify-content:var(--container-justify);-ms-flex-align:var(--container-align);align-items:var(--container-align);min-height:var(--container-height)}";

const logger$4 = new Logger('Authenticator');
const AmplifyAuthenticator = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        attachShadow(this);
        /** Initial starting state of the Authenticator component. E.g. If `signup` is passed the default component is set to AmplifySignUp */
        this.initialAuthState = AuthState.SignIn;
        /** Callback for Authenticator state machine changes */
        this.handleAuthStateChange = () => { };
        /** Hide amplify-toast for auth errors */
        this.hideToast = false;
        this.authState = AuthState.Loading;
        this.toastMessage = '';
        this.handleExternalAuthEvent = ({ payload }) => {
            switch (payload.event) {
                case 'cognitoHostedUI':
                case 'signIn':
                    checkContact(payload.data, dispatchAuthStateChangeEvent);
                    break;
                case 'cognitoHostedUI_failure':
                case 'parsingUrl_failure':
                case 'signOut':
                case 'customGreetingSignOut':
                    return dispatchAuthStateChangeEvent(this.initialAuthState);
            }
        };
        this.handleToastEvent = ({ payload }) => {
            switch (payload.event) {
                case TOAST_AUTH_ERROR_EVENT:
                    if (payload.message)
                        this.toastMessage = payload.message;
                    break;
            }
        };
    }
    async componentWillLoad() {
        onAuthUIStateChange((authState, authData) => {
            this.onAuthStateChange(authState, authData);
            this.toastMessage = '';
        });
        if (!this.hideToast)
            Hub.listen(UI_AUTH_CHANNEL, this.handleToastEvent);
        Hub.listen(AUTH_CHANNEL, this.handleExternalAuthEvent);
        appendToCognitoUserAgent('amplify-authenticator');
        await this.checkUser();
    }
    async checkUser() {
        if (!Auth$1 || typeof Auth$1.currentAuthenticatedUser !== 'function') {
            throw new Error(NO_AUTH_MODULE_FOUND);
        }
        return Auth$1.currentAuthenticatedUser()
            .then(user => {
            dispatchAuthStateChangeEvent(AuthState.SignedIn, user);
        })
            .catch(() => {
            dispatchAuthStateChangeEvent(this.initialAuthState);
        });
    }
    async onAuthStateChange(nextAuthState, data) {
        if (nextAuthState === undefined)
            return logger$4.error('nextAuthState cannot be undefined');
        logger$4.info('Inside onAuthStateChange Method current authState:', this.authState);
        if (nextAuthState === AuthState.SignedOut) {
            this.authState = this.initialAuthState;
        }
        else {
            this.authState = nextAuthState;
        }
        this.authData = data;
        if (this.authData)
            logger$4.log('Auth Data was set:', this.authData);
        if (this.authState === nextAuthState) {
            this.handleAuthStateChange(this.authState, this.authData);
            logger$4.info(`authState has been updated to ${this.authState}`);
        }
    }
    // Returns the auth component corresponding to the given authState.
    getAuthComponent(authState) {
        switch (authState) {
            case AuthState.SignIn:
                return (h("amplify-sign-in", { federated: this.federated, usernameAlias: this.usernameAlias }));
            case AuthState.ConfirmSignIn:
                return h("amplify-confirm-sign-in", { user: this.authData });
            case AuthState.SignUp:
                return h("amplify-sign-up", { usernameAlias: this.usernameAlias });
            case AuthState.ConfirmSignUp:
                return (h("amplify-confirm-sign-up", { user: this.authData, usernameAlias: this.usernameAlias }));
            case AuthState.ForgotPassword:
                return h("amplify-forgot-password", { usernameAlias: this.usernameAlias });
            case AuthState.ResetPassword:
                return h("amplify-require-new-password", { user: this.authData });
            case AuthState.VerifyContact:
                return h("amplify-verify-contact", { user: this.authData });
            case AuthState.TOTPSetup:
                return h("amplify-totp-setup", { user: this.authData });
            case AuthState.Loading:
                return h("div", null, "Loading...");
            default:
                throw new Error(`Unhandled auth state: ${authState}`);
        }
    }
    // Returns a slot containing the Auth component corresponding to the given authState
    getSlotWithAuthComponent(authState) {
        const authComponent = this.getAuthComponent(authState);
        const slotName = authSlotNames[authState];
        const slotIsEmpty = this.el.querySelector(`[slot="${slotName}"]`) === null; // true if no element has been inserted to the slot
        /**
         * Connect the inner auth component to DOM only if the slot hasn't been overwritten. This prevents
         * the overwritten component from calling its lifecycle methods.
         */
        return h("slot", { name: slotName }, slotIsEmpty && authComponent);
    }
    disconnectedCallback() {
        Hub.remove(AUTH_CHANNEL, this.handleExternalAuthEvent);
        if (!this.hideToast)
            Hub.remove(UI_AUTH_CHANNEL, this.handleToastEvent);
        return onAuthUIStateChange;
    }
    render() {
        return (h(Host, null, !this.hideToast && this.toastMessage && (h("amplify-toast", { message: this.toastMessage, handleClose: () => {
                this.toastMessage = '';
            }, "data-test": "authenticator-error" })), this.authState === AuthState.SignedIn ? ([h("slot", { name: "greetings" }), h("slot", null)]) : (h("div", { class: "auth-container" }, this.getSlotWithAuthComponent(this.authState)))));
    }
    get el() { return this; }
    static get style() { return amplifyAuthenticatorCss; }
};

const amplifyButtonCss = "amplify-button{--background-color:var(--amplify-primary-color);--background-color-active:var(--amplify-primary-shade);--background-color-disable:var(--amplify-primary-tint);--color:var(--amplify-primary-contrast);--border-width:0;--border-color:initial;--border-style:initial;--border-radius:initial;--link-color:var(--amplify-primary-color);--link-hover:var(--amplify-primary-tint);--link-active:var(--amplify-primary-shade);--text-transform:uppercase;--icon-fill:var(--amplify-white);--icon-height:1.25rem;--padding:1rem;--width:100%;width:var(--width);text-align:center}@media (min-width: 672px){amplify-button{width:inherit}}.button{width:100%;min-width:153px;display:inline-block;margin-bottom:0;font-size:var(--amplify-text-sm);font-family:var(--amplify-font-family);font-weight:600;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;color:var(--color);padding:var(--padding);letter-spacing:0.75px;text-transform:var(--text-transform);background-color:var(--background-color);border-width:var(--border-width);border-color:var(--border-color);border-style:var(--border-style);border-radius:var(--border-radius)}.button:active{opacity:1;background-color:var(--background-color-active)}.button:hover{opacity:0.8}.button:disabled{opacity:0.65;cursor:auto;background-color:var(--background-color-disable)}.icon{background-color:inherit;border:none;font:inherit;cursor:pointer;padding:var(--padding)}.icon amplify-icon{--icon-fill-color:var(--icon-fill);--height:var(--icon-height)}.anchor{color:var(--link-color);background-color:inherit;padding:0;border:none;font:inherit;cursor:pointer}.anchor:link{color:var(--link-color);text-decoration:none}.anchor:hover{color:var(--link-hover);text-decoration:underline}.anchor:active{color:var(--link-active);text-decoration:underline}";

const AmplifyButton = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        /** Type of the button: 'button', 'submit' or 'reset' */
        this.type = 'button';
        /** Variant of a button: 'button' | 'anchor | 'icon' */
        this.variant = 'button';
        /** Disabled state of the button */
        this.disabled = false;
    }
    render() {
        return (h(Host, null, h("button", { class: {
                [this.variant]: true,
            }, type: this.type, disabled: this.disabled, onClick: this.handleButtonClick }, this.variant === 'icon' && (h("amplify-icon", { name: this.icon })), h("slot", null))));
    }
    get el() { return this; }
    static get style() { return amplifyButtonCss; }
};

// AudioRecorder settings
const RECORDER_EXPORT_MIME_TYPE = 'application/octet-stream';
const DEFAULT_EXPORT_SAMPLE_RATE = 16000;
const FFT_SIZE = 2048; // window size in samples for Fast Fourier Transform (FFT)
const FFT_MAX_DECIBELS = -10; // maximum power value in the scaling range for the FFT analysis data
const FFT_MIN_DECIBELS = -90; // minimum power value in the scaling range for the FFT analysis data
const FFT_SMOOTHING_TIME_CONSTANT = 0.85; // averaging constant with the last analysis frame

/**
 * Merges multiple buffers into one.
 */
const mergeBuffers = (bufferArray, recLength) => {
    const result = new Float32Array(recLength);
    let offset = 0;
    for (let i = 0; i < bufferArray.length; i++) {
        result.set(bufferArray[i], offset);
        offset += bufferArray[i].length;
    }
    return result;
};
/**
 * Downsamples audio to desired export sample rate.
 */
const downsampleBuffer = (buffer, recordSampleRate, exportSampleRate) => {
    if (exportSampleRate === recordSampleRate) {
        return buffer;
    }
    const sampleRateRatio = recordSampleRate / exportSampleRate;
    const newLength = Math.round(buffer.length / sampleRateRatio);
    const result = new Float32Array(newLength);
    let offsetResult = 0;
    let offsetBuffer = 0;
    while (offsetResult < result.length) {
        const nextOffsetBuffer = Math.round((offsetResult + 1) * sampleRateRatio);
        let accum = 0, count = 0;
        for (let i = offsetBuffer; i < nextOffsetBuffer && i < buffer.length; i++) {
            accum += buffer[i];
            count++;
        }
        result[offsetResult] = accum / count;
        offsetResult++;
        offsetBuffer = nextOffsetBuffer;
    }
    return result;
};
/**
 * converts raw audio values to 16 bit pcm.
 */
const floatTo16BitPCM = (output, offset, input) => {
    let byteOffset = offset;
    for (let i = 0; i < input.length; i++, byteOffset += 2) {
        const s = Math.max(-1, Math.min(1, input[i]));
        output.setInt16(byteOffset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
    }
};
/**
 * Write given strings in big-endian order.
 */
const writeString = (view, offset, string) => {
    for (let i = 0; i < string.length; i++) {
        view.setUint8(offset + i, string.charCodeAt(i));
    }
};
/**
 * Encodes raw pcm audio into a wav file.
 */
const encodeWAV = (samples, exportSampleRate) => {
    /**
     * WAV file consists of three parts: RIFF header, WAVE subchunk, and data subchunk. We precompute the size of them.
     */
    const audioSize = samples.length * 2; // We use 16-bit samples, so we have (2 * sampleLength) bytes.
    const fmtSize = 24; // Byte size of the fmt subchunk: 24 bytes that the audio information that we'll set below.
    const dataSize = 8 + audioSize; // Byte size of the data subchunk: raw sound data plus 8 bytes for the subchunk descriptions.
    const totalByteSize = 12 + fmtSize + dataSize; // Byte size of the whole file, including the chunk header / descriptor.
    // create DataView object to write byte values into
    const buffer = new ArrayBuffer(totalByteSize); // buffer to write the chunk values in.
    const view = new DataView(buffer);
    /**
     * Start writing the .wav file. We write top to bottom, so byte offset (first numeric argument) increases strictly.
     */
    // RIFF header
    writeString(view, 0, 'RIFF'); // At offset 0, write the letters "RIFF"
    view.setUint32(4, fmtSize + dataSize, true); // At offset 4, write the size of fmt and data chunk size combined.
    writeString(view, 8, 'WAVE'); // At offset 8, write the format type "WAVE"
    // fmt subchunk
    writeString(view, 12, 'fmt '); //chunkdId 'fmt '
    view.setUint32(16, fmtSize - 8, true); // fmt subchunk size below this value. We set 8 bytes already, so subtract 8 bytes from fmtSize.
    view.setUint16(20, 1, true); // Audio format code, which is 1 for PCM.
    view.setUint16(22, 1, true); // Number of audio channels. We use mono, ie 1.
    view.setUint32(24, exportSampleRate, true); // Sample rate of the audio file.
    view.setUint32(28, exportSampleRate * 2, true); // Data rate, or # of data bytes per second. Since each sample is 2 bytes, this is 2 * sampleRate.
    view.setUint16(32, 2, true); // block align, # of bytes per sample including all channels, ie. 2 bytes.
    view.setUint16(34, 16, true); // bits per sample, ie. 16 bits
    // data subchunk
    writeString(view, 36, 'data'); // write the chunkId 'data'
    view.setUint32(40, audioSize, true); // Audio byte size
    floatTo16BitPCM(view, 44, samples); // raw pcm values then go here.
    return view;
};
/**
 * Given arrays of raw pcm audio, downsamples the audio to desired sample rate and encodes it to a wav audio file.
 *
 * @param recBuffer {Float32Array[]} - 2d float array containing the recorded raw audio
 * @param recLength {number} - total length of recorded audio
 * @param recordSampleRate {number} - sample rate of the recorded audio
 * @param exportSampleRate {number} - desired sample rate of the exported file
 */
const exportBuffer = (recBuffer, recLength, recordSampleRate, exportSampleRate) => {
    const mergedBuffers = mergeBuffers(recBuffer, recLength);
    const downsampledBuffer = downsampleBuffer(mergedBuffers, recordSampleRate, exportSampleRate);
    const encodedWav = encodeWAV(downsampledBuffer, exportSampleRate);
    const audioBlob = new Blob([encodedWav], {
        type: RECORDER_EXPORT_MIME_TYPE,
    });
    return audioBlob;
};

const logger$5 = new Logger('AudioRecorder');
class AudioRecorder {
    constructor(options) {
        // input mic stream is stored in a buffer
        this.streamBuffer = [];
        this.streamBufferLength = 0;
        this.recording = false;
        this.options = options;
    }
    /**
     * This must be called first to enable audio context and request microphone access.
     * Once access granted, it connects all the necessary audio nodes to the context so that it can begin recording or playing.
     */
    async init() {
        if (browserOrNode().isBrowser) {
            window.AudioContext =
                window.AudioContext || window.webkitAudioContext;
            this.audioContext = new AudioContext();
            await navigator.mediaDevices
                .getUserMedia({ audio: true })
                .then(stream => {
                this.audioSupported = true;
                this.setupAudioNodes(stream);
            })
                .catch(() => {
                this.audioSupported = false;
                return Promise.reject('Audio is not supported');
            });
        }
        else {
            this.audioSupported = false;
            return Promise.reject('Audio is not supported');
        }
    }
    /**
     * Setup audio nodes after successful `init`.
     */
    async setupAudioNodes(stream) {
        try {
            await this.audioContext.resume();
        }
        catch (err) {
            logger$5.error(err);
        }
        const sourceNode = this.audioContext.createMediaStreamSource(stream);
        const processorNode = this.audioContext.createScriptProcessor(4096, 1, 1);
        processorNode.onaudioprocess = audioProcessingEvent => {
            if (!this.recording)
                return;
            const stream = audioProcessingEvent.inputBuffer.getChannelData(0);
            this.streamBuffer.push(new Float32Array(stream)); // set to a copy of the stream
            this.streamBufferLength += stream.length;
            this.analyse();
        };
        const analyserNode = this.audioContext.createAnalyser();
        analyserNode.minDecibels = FFT_MIN_DECIBELS;
        analyserNode.maxDecibels = FFT_MAX_DECIBELS;
        analyserNode.smoothingTimeConstant = FFT_SMOOTHING_TIME_CONSTANT;
        sourceNode.connect(analyserNode);
        analyserNode.connect(processorNode);
        processorNode.connect(sourceNode.context.destination);
        this.analyserNode = analyserNode;
    }
    /**
     * Start recording audio and listen for silence.
     *
     * @param onSilence {SilenceHandler} - called whenever silence is detected
     * @param visualizer {Visualizer} - called with audio data on each audio process to be used for visualization.
     */
    async startRecording(onSilence, visualizer) {
        if (this.recording || !this.audioSupported)
            return;
        this.onSilence = onSilence || function () { };
        this.visualizer = visualizer || function () { };
        const context = this.audioContext;
        try {
            await context.resume();
        }
        catch (err) {
            logger$5.error(err);
        }
        this.start = Date.now();
        this.recording = true;
    }
    /**
     * Pause recording
     */
    stopRecording() {
        if (!this.audioSupported)
            return;
        this.recording = false;
    }
    /**
     * Pause recording and clear audio buffer
     */
    clear() {
        this.stopRecording();
        this.streamBufferLength = 0;
        this.streamBuffer = [];
    }
    /**
     * Plays given audioStream with audioContext
     *
     * @param buffer {Uint8Array} - audioStream to be played
     */
    play(buffer) {
        if (!buffer || !this.audioSupported)
            return;
        const myBlob = new Blob([buffer]);
        return new Promise((res, rej) => {
            const fileReader = new FileReader();
            fileReader.onload = () => {
                if (this.playbackSource)
                    this.playbackSource.disconnect(); // disconnect previous playback source
                this.playbackSource = this.audioContext.createBufferSource();
                const successCallback = (buf) => {
                    this.playbackSource.buffer = buf;
                    this.playbackSource.connect(this.audioContext.destination);
                    this.playbackSource.onended = () => {
                        return res();
                    };
                    this.playbackSource.start(0);
                };
                const errorCallback = err => {
                    return rej(err);
                };
                this.audioContext.decodeAudioData(fileReader.result, successCallback, errorCallback);
            };
            fileReader.onerror = () => rej();
            fileReader.readAsArrayBuffer(myBlob);
        });
    }
    /**
     * Stops playing audio if there's a playback source connected.
     */
    stop() {
        if (this.playbackSource) {
            this.playbackSource.stop();
        }
    }
    /**
     * Called after each audioProcess. Check for silence and give fft time domain data to visualizer.
     */
    analyse() {
        if (!this.audioSupported)
            return;
        const analyser = this.analyserNode;
        analyser.fftSize = FFT_SIZE;
        const bufferLength = analyser.fftSize;
        const dataArray = new Uint8Array(bufferLength);
        const amplitude = this.options.amplitude;
        const time = this.options.time;
        analyser.getByteTimeDomainData(dataArray);
        this.visualizer(dataArray, bufferLength);
        for (let i = 0; i < bufferLength; i++) {
            // Normalize between -1 and 1.
            const curr_value_time = dataArray[i] / 128 - 1.0;
            if (curr_value_time > amplitude || curr_value_time < -1 * amplitude) {
                this.start = Date.now();
            }
        }
        const newtime = Date.now();
        const elapsedTime = newtime - this.start;
        if (elapsedTime > time) {
            this.onSilence();
        }
    }
    /**
     * Encodes recorded buffer to a wav file and exports it to a blob.
     *
     * @param exportSampleRate {number} - desired sample rate of the exported buffer
     */
    async exportWAV(exportSampleRate = DEFAULT_EXPORT_SAMPLE_RATE) {
        if (!this.audioSupported)
            return;
        const recordSampleRate = this.audioContext.sampleRate;
        const blob = exportBuffer(this.streamBuffer, this.streamBufferLength, recordSampleRate, exportSampleRate);
        this.clear();
        return blob;
    }
}

const visualize = (dataArray, bufferLength, canvas) => {
    if (!canvas)
        return;
    if (!browserOrNode().isBrowser)
        throw new Error('Visualization is not supported on non-browsers.');
    const { width, height } = canvas.getBoundingClientRect();
    // need to update the default canvas width and height
    canvas.width = width;
    canvas.height = height;
    const canvasCtx = canvas.getContext('2d');
    canvasCtx.fillStyle = 'white';
    canvasCtx.clearRect(0, 0, width, height);
    const draw = () => {
        canvasCtx.fillRect(0, 0, width, height);
        canvasCtx.lineWidth = 1;
        const color = getComputedStyle(document.documentElement).getPropertyValue('--amplify-primary-color');
        canvasCtx.strokeStyle = !color || color === '' ? '#ff9900' : color; // TODO: try separate css variable
        canvasCtx.beginPath();
        const sliceWidth = (width * 1.0) / bufferLength;
        let x = 0;
        for (let i = 0; i < bufferLength || i % 3 === 0; i++) {
            const value = dataArray[i] / 128.0;
            const y = (value * height) / 2;
            if (i === 0) {
                canvasCtx.moveTo(x, y);
            }
            else {
                canvasCtx.lineTo(x, y);
            }
            x += sliceWidth;
        }
        canvasCtx.lineTo(canvas.width, canvas.height / 2);
        canvasCtx.stroke();
    };
    // Register our draw function with requestAnimationFrame.
    requestAnimationFrame(draw);
};

const amplifyChatbotCss = ".bot .dot{background-color:var(--bot-dot-color)}.user .dot{background-color:var(--user-dot-color)}.dot-flashing{width:2.625rem}.dot-flashing .dot{display:inline-block;width:0.625rem;height:0.625rem;border-radius:10rem;opacity:0.65}.dot-flashing .left{-webkit-animation:dot-flashing 1s infinite alternate;animation:dot-flashing 1s infinite alternate;-webkit-animation-delay:0s;animation-delay:0s}.dot-flashing .middle{margin-left:0.375rem;margin-right:0.375rem;-webkit-animation:dot-flashing 1s infinite linear alternate;animation:dot-flashing 1s infinite linear alternate;-webkit-animation-delay:0.5s;animation-delay:0.5s}.dot-flashing .right{-webkit-animation:dot-flashing 1s infinite alternate;animation:dot-flashing 1s infinite alternate;-webkit-animation-delay:1s;animation-delay:1s}@-webkit-keyframes dot-flashing{0%{opacity:0.65}50%,100%{opacity:0.1}}@keyframes dot-flashing{0%{opacity:0.65}50%,100%{opacity:0.1}}:host{--width:28.75rem;--height:37.5rem;--header-color:var(--amplify-secondary-color);--header-size:var(--amplify-text-lg);--bot-background-color:rgb(230, 230, 230);--bot-text-color:black;--bot-dot-color:var(--bot-text-color);--user-background-color:var(--amplify-blue);--user-text-color:var(--amplify-white);--user-dot-color:var(--user-text-color)}.amplify-chatbot{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column;background-color:var(--background-color);border-radius:0.375rem;-webkit-box-shadow:0.0625rem 0rem 0.25rem 0 rgba(0, 0, 0, 0.15);box-shadow:0.0625rem 0rem 0.25rem 0 rgba(0, 0, 0, 0.15);-webkit-box-sizing:border-box;box-sizing:border-box;font-family:var(--amplify-font-family);margin-bottom:1rem;width:100%;height:var(--height);max-width:var(--width)}@media (min-width: 672px){.amplify-chatbot{width:var(--width)}}.header{padding:1.25rem 0.375rem 1.25rem 0.375rem;color:var(--header-color);font-size:var(--header-size);font-weight:bold;text-align:center;word-wrap:break-word}.body{border-top:0.0625rem solid rgba(0, 0, 0, 0.05);padding:1.5rem 1rem 0 1rem;display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-direction:column;flex-direction:column;overflow:auto}.bubble{max-width:100%;padding:0.8em 1.4em;text-align:left;word-wrap:break-word;margin-bottom:0.625rem}.bot{margin-right:auto;background-color:var(--bot-background-color);color:var(--bot-text-color);border-radius:1.5rem 1.5rem 1.5rem 0}.user{margin-left:auto;background-color:var(--user-background-color);color:var(--user-text-color);border-radius:1.5rem 1.5rem 0 1.5rem}.footer{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border-top:0.062rem solid rgba(0, 0, 0, 0.05);padding-right:0.625rem;min-height:3.125rem}.footer amplify-input{--border:none;--margin:0;-ms-flex-positive:1;flex-grow:1}canvas{margin-left:0.625rem;margin-right:0.625rem;-ms-flex-positive:1;flex-grow:1;height:3.125rem}.icon-button{--icon-height:1.25rem;--icon-fill:var(--amplify-primary-color);--padding:0.625rem;--width:auto}";

// enum for possible bot states
var ChatState;
(function (ChatState) {
    ChatState[ChatState["Initial"] = 0] = "Initial";
    ChatState[ChatState["Listening"] = 1] = "Listening";
    ChatState[ChatState["SendingText"] = 2] = "SendingText";
    ChatState[ChatState["SendingVoice"] = 3] = "SendingVoice";
    ChatState[ChatState["Error"] = 4] = "Error";
})(ChatState || (ChatState = {}));
// Message types
var MessageFrom;
(function (MessageFrom) {
    MessageFrom["Bot"] = "bot";
    MessageFrom["User"] = "user";
})(MessageFrom || (MessageFrom = {}));
// Error types
var ChatErrorType;
(function (ChatErrorType) {
    ChatErrorType[ChatErrorType["Recoverable"] = 0] = "Recoverable";
    ChatErrorType[ChatErrorType["Unrecoverable"] = 1] = "Unrecoverable";
})(ChatErrorType || (ChatErrorType = {}));
const AmplifyChatbot = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        attachShadow(this);
        /** Clear messages when conversation finishes */
        this.clearOnComplete = false;
        /** Continue listening to users after they send the message */
        this.conversationModeOn = false;
        /** Text placed in the top header */
        this.botTitle = Translations.CHATBOT_TITLE;
        /** Whether voice chat is enabled */
        this.voiceEnabled = false;
        /** Whether text chat is enabled */
        this.textEnabled = true;
        /** Amount of silence (in ms) to wait for */
        this.silenceTime = 1500;
        /** Noise threshold between -1 and 1. Anything below is considered a silence. */
        this.silenceThreshold = 0.2;
        /** Messages in current session */
        this.messages = [];
        /** Text input box value  */
        this.text = '';
        /** Current app state */
        this.chatState = ChatState.Initial;
        /**
         * Rendering methods
         */
        this.messageJSX = (messages) => {
            const messageList = messages.map(message => (h("div", { class: `bubble ${message.from}` }, message.content)));
            if (this.chatState === ChatState.SendingText ||
                this.chatState === ChatState.SendingVoice) {
                // if waiting for voice message, show animation on user side because app is waiting for transcript. Else put it on bot side.
                const client = this.chatState === ChatState.SendingText
                    ? MessageFrom.Bot
                    : MessageFrom.User;
                messageList.push(h("div", { class: `bubble ${client}` }, h("div", { class: `dot-flashing ${client}` }, h("span", { class: "dot left" }), h("span", { class: "dot middle" }), h("span", { class: "dot right" }))));
            }
            return messageList;
        };
        this.chatCompleted = createEvent(this, "chatCompleted", 7);
    }
    // Occurs when user presses enter in input box
    submitHandler(_event) {
        this.sendTextMessage();
    }
    /**
     * Lifecycle functions
     */
    componentWillLoad() {
        if (!Interactions || typeof Interactions.onComplete !== 'function') {
            throw new Error(NO_INTERACTIONS_MODULE_FOUND);
        }
        this.validateProps();
    }
    componentDidRender() {
        // scroll to the bottom if necessary
        const body = this.element.shadowRoot.querySelector('.body');
        body.scrollTop = body.scrollHeight;
    }
    validateProps() {
        if (!this.voiceEnabled && !this.textEnabled) {
            this.setError(Translations.CHAT_DISABLED_ERROR, ChatErrorType.Unrecoverable);
            return;
        }
        else if (!this.botName) {
            this.setError(Translations.NO_BOT_NAME_ERROR, ChatErrorType.Unrecoverable);
            return;
        }
        if (this.welcomeMessage)
            this.appendToChat(this.welcomeMessage, MessageFrom.Bot);
        // Initialize AudioRecorder if voice is enabled
        if (this.voiceEnabled) {
            this.audioRecorder = new AudioRecorder({
                time: this.silenceTime,
                amplitude: this.silenceThreshold,
            });
            this.audioRecorder.init().catch(err => {
                this.setError(err, ChatErrorType.Recoverable);
            });
        }
        // Callback function to be called after chat is completed
        const onComplete = (err, data) => {
            this.chatCompleted.emit({
                data,
                err,
            });
            if (this.clearOnComplete) {
                this.reset();
            }
            else {
                this.chatState = ChatState.Initial;
            }
        };
        try {
            Interactions.onComplete(this.botName, onComplete);
        }
        catch (err) {
            this.setError(err, ChatErrorType.Unrecoverable);
        }
    }
    /**
     * Handlers
     */
    handleSubmit(event) {
        event.preventDefault();
        this.sendTextMessage();
    }
    handleMicButton() {
        if (this.chatState !== ChatState.Initial)
            return;
        this.audioRecorder.stop();
        this.chatState = ChatState.Listening;
        this.audioRecorder.startRecording(() => this.handleSilence(), (data, length) => this.visualizer(data, length));
    }
    handleSilence() {
        this.chatState = ChatState.SendingVoice;
        this.audioRecorder.stopRecording();
        this.audioRecorder.exportWAV().then(blob => {
            this.sendVoiceMessage(blob);
        });
    }
    handleTextChange(event) {
        const target = event.target;
        this.text = target.value;
    }
    handleCancelButton() {
        this.audioRecorder.clear();
        this.chatState = ChatState.Initial;
    }
    handleToastClose(errorType) {
        this.error = undefined; // clear error
        // if error is recoverable, reset the app state to initial
        if (errorType === ChatErrorType.Recoverable) {
            this.chatState = ChatState.Initial;
        }
    }
    /**
     * Visualization
     */
    visualizer(dataArray, bufferLength) {
        const canvas = this.element.shadowRoot.querySelector('canvas');
        visualize(dataArray, bufferLength, canvas);
    }
    /**
     * Interactions helpers
     */
    async sendTextMessage() {
        if (this.text.length === 0 || this.chatState !== ChatState.Initial)
            return;
        const text = this.text;
        this.text = '';
        this.appendToChat(text, MessageFrom.User);
        this.chatState = ChatState.SendingText;
        let response;
        try {
            response = await Interactions.send(this.botName, text);
        }
        catch (err) {
            this.setError(err, ChatErrorType.Recoverable);
            return;
        }
        if (response.message) {
            this.appendToChat(response.message, MessageFrom.Bot);
        }
        this.chatState = ChatState.Initial;
    }
    async sendVoiceMessage(audioInput) {
        const interactionsMessage = {
            content: audioInput,
            options: {
                messageType: 'voice',
            },
        };
        let response;
        try {
            response = await Interactions.send(this.botName, interactionsMessage);
        }
        catch (err) {
            this.setError(err, ChatErrorType.Recoverable);
            return;
        }
        this.chatState = ChatState.Initial;
        const dialogState = response.dialogState;
        if (response.inputTranscript)
            this.appendToChat(response.inputTranscript, MessageFrom.User);
        this.appendToChat(response.message, MessageFrom.Bot);
        await this.audioRecorder
            .play(response.audioStream)
            .then(() => {
            // if conversationMode is on, chat is incomplete, and mic button isn't pressed yet, resume listening.
            if (this.conversationModeOn &&
                dialogState !== 'Fulfilled' &&
                dialogState !== 'Failed' &&
                this.chatState === ChatState.Initial) {
                this.handleMicButton();
            }
        })
            .catch(err => this.setError(err, ChatErrorType.Recoverable));
    }
    appendToChat(content, from) {
        this.messages = [
            ...this.messages,
            {
                content,
                from,
            },
        ];
    }
    /**
     * State control methods
     */
    setError(error, errorType) {
        const message = typeof error === 'string' ? error : error.message;
        this.chatState = ChatState.Error;
        this.error = { message, errorType };
    }
    reset() {
        this.chatState = ChatState.Initial;
        this.text = '';
        this.error = undefined;
        this.messages = [];
        if (this.welcomeMessage)
            this.appendToChat(this.welcomeMessage, MessageFrom.Bot);
        this.audioRecorder && this.audioRecorder.clear();
    }
    listeningFooterJSX() {
        const visualization = h("canvas", { height: "50" });
        const cancelButton = (h("amplify-button", { "data-test": "chatbot-cancel-button", handleButtonClick: () => this.handleCancelButton(), class: "icon-button", variant: "icon", icon: "ban" }));
        return [visualization, cancelButton];
    }
    footerJSX() {
        if (this.chatState === ChatState.Listening)
            return this.listeningFooterJSX();
        const inputPlaceholder = this.textEnabled
            ? Translations.TEXT_INPUT_PLACEHOLDER
            : Translations.VOICE_INPUT_PLACEHOLDER;
        const textInput = (h("amplify-input", { placeholder: I18n.get(inputPlaceholder), description: "text", handleInputChange: evt => this.handleTextChange(evt), value: this.text, disabled: this.chatState === ChatState.Error || !this.textEnabled }));
        const micButton = this.voiceEnabled && (h("amplify-button", { "data-test": "chatbot-mic-button", handleButtonClick: () => this.handleMicButton(), class: "icon-button", variant: "icon", icon: "microphone", disabled: this.chatState === ChatState.Error ||
                this.chatState !== ChatState.Initial }));
        const sendButton = this.textEnabled && (h("amplify-button", { "data-test": "chatbot-send-button", class: "icon-button", variant: "icon", icon: "send", handleButtonClick: () => this.sendTextMessage(), disabled: this.chatState === ChatState.Error ||
                this.chatState !== ChatState.Initial }));
        return [textInput, micButton, sendButton];
    }
    errorToast() {
        if (!this.error)
            return;
        const { message, errorType } = this.error;
        return (h("amplify-toast", { message: I18n.get(message), handleClose: () => this.handleToastClose(errorType) }));
    }
    render() {
        return (h(Host, null, h("div", { class: "amplify-chatbot" }, h("slot", { name: "header" }, h("div", { class: "header", "data-test": "chatbot-header" }, I18n.get(this.botTitle))), h("div", { class: "body", "data-test": "chatbot-body" }, this.messageJSX(this.messages)), h("form", { onSubmit: e => this.handleSubmit(e) }, h("div", { class: "footer", "data-test": "chatbot-footer" }, this.footerJSX())), this.errorToast())));
    }
    get element() { return this; }
    static get style() { return amplifyChatbotCss; }
};

const amplifyCheckboxCss = ":host{--font-family:var(--amplify-font-family)}.checkbox{margin-bottom:22px;display:block;width:100%;padding:16px;font-size:var(--amplify-text-sm);font-family:var(--font-family)}.checkbox input{margin-right:12px}";

const AmplifyCheckbox = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        attachShadow(this);
        /** If `true`, the checkbox is selected. */
        this.checked = false;
        /** If `true`, the checkbox is disabled */
        this.disabled = false;
        this.onClick = () => {
            this.checked = !this.checked;
        };
    }
    render() {
        return (h("span", { class: "checkbox" }, h("input", { onClick: this.onClick, type: "checkbox", name: this.name, value: this.value, id: this.fieldId, checked: this.checked, disabled: this.disabled }), h("amplify-label", { htmlFor: this.fieldId }, this.label)));
    }
    static get style() { return amplifyCheckboxCss; }
};

const AmplifyCodeField = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        /** Based on the type of field e.g. sign in, sign up, forgot password, etc. */
        this.fieldId = CODE_SUFFIX;
        /** Used for the code label */
        this.label = Translations.CODE_LABEL;
        /** Used for the placeholder label */
        this.placeholder = Translations.CODE_PLACEHOLDER;
        /** The required flag in order to make an input required prior to submitting a form */
        this.required = false;
    }
    render() {
        return (h("amplify-form-field", { fieldId: this.fieldId, label: I18n.get(this.label), placeholder: I18n.get(this.placeholder), type: "number", hint: this.hint, required: this.required, handleInputChange: this.handleInputChange, value: this.value, inputProps: this.inputProps, disabled: this.disabled }));
    }
};

const AmplifyConfirmSignIn = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        attachShadow(this);
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
        if (!Auth$1 || typeof Auth$1.confirmSignIn !== 'function') {
            throw new Error(NO_AUTH_MODULE_FOUND);
        }
        this.loading = true;
        try {
            await Auth$1.confirmSignIn(this.user, this.code, mfaType);
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

const AmplifyConfirmSignUp = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        attachShadow(this);
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
        if (!Auth$1 || typeof Auth$1.resendSignUp !== 'function') {
            throw new Error(NO_AUTH_MODULE_FOUND);
        }
        try {
            const username = this.getUsername();
            if (!username)
                throw new Error(Translations.EMPTY_USERNAME);
            await Auth$1.resendSignUp(username.trim());
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
        if (!Auth$1 || typeof Auth$1.confirmSignUp !== 'function') {
            throw new Error(NO_AUTH_MODULE_FOUND);
        }
        this.loading = true;
        try {
            let username = this.getUsername();
            if (!username)
                throw new Error(Translations.EMPTY_USERNAME);
            username = username.trim();
            const confirmSignUpResult = await Auth$1.confirmSignUp(username, this.code);
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

const amplifyContainerCss = "amplify-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100vh}";

const AmplifyContainer = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    static get style() { return amplifyContainerCss; }
};

const countryDialCodes = [
    { label: '+1', value: '+1' },
    { label: '+7', value: '+7' },
    { label: '+20', value: '+20' },
    { label: '+27', value: '+27' },
    { label: '+30', value: '+30' },
    { label: '+31', value: '+31' },
    { label: '+32', value: '+32' },
    { label: '+33', value: '+33' },
    { label: '+34', value: '+34' },
    { label: '+36', value: '+36' },
    { label: '+39', value: '+39' },
    { label: '+40', value: '+40' },
    { label: '+41', value: '+41' },
    { label: '+43', value: '+43' },
    { label: '+44', value: '+44' },
    { label: '+45', value: '+45' },
    { label: '+46', value: '+46' },
    { label: '+47', value: '+47' },
    { label: '+48', value: '+48' },
    { label: '+49', value: '+49' },
    { label: '+51', value: '+51' },
    { label: '+52', value: '+52' },
    { label: '+53', value: '+53' },
    { label: '+54', value: '+54' },
    { label: '+55', value: '+55' },
    { label: '+56', value: '+56' },
    { label: '+57', value: '+57' },
    { label: '+58', value: '+58' },
    { label: '+60', value: '+60' },
    { label: '+61', value: '+61' },
    { label: '+62', value: '+62' },
    { label: '+63', value: '+63' },
    { label: '+64', value: '+64' },
    { label: '+65', value: '+65' },
    { label: '+66', value: '+66' },
    { label: '+81', value: '+81' },
    { label: '+82', value: '+82' },
    { label: '+84', value: '+84' },
    { label: '+86', value: '+86' },
    { label: '+90', value: '+90' },
    { label: '+91', value: '+91' },
    { label: '+92', value: '+92' },
    { label: '+93', value: '+93' },
    { label: '+94', value: '+94' },
    { label: '+95', value: '+95' },
    { label: '+98', value: '+98' },
    { label: '+212', value: '+212' },
    { label: '+213', value: '+213' },
    { label: '+216', value: '+216' },
    { label: '+218', value: '+218' },
    { label: '+220', value: '+220' },
    { label: '+221', value: '+221' },
    { label: '+222', value: '+222' },
    { label: '+223', value: '+223' },
    { label: '+224', value: '+224' },
    { label: '+225', value: '+225' },
    { label: '+226', value: '+226' },
    { label: '+227', value: '+227' },
    { label: '+228', value: '+228' },
    { label: '+229', value: '+229' },
    { label: '+230', value: '+230' },
    { label: '+231', value: '+231' },
    { label: '+232', value: '+232' },
    { label: '+233', value: '+233' },
    { label: '+234', value: '+234' },
    { label: '+235', value: '+235' },
    { label: '+236', value: '+236' },
    { label: '+237', value: '+237' },
    { label: '+238', value: '+238' },
    { label: '+239', value: '+239' },
    { label: '+240', value: '+240' },
    { label: '+241', value: '+241' },
    { label: '+242', value: '+242' },
    { label: '+243', value: '+243' },
    { label: '+244', value: '+244' },
    { label: '+245', value: '+245' },
    { label: '+246', value: '+246' },
    { label: '+248', value: '+248' },
    { label: '+249', value: '+249' },
    { label: '+250', value: '+250' },
    { label: '+251', value: '+251' },
    { label: '+252', value: '+252' },
    { label: '+253', value: '+253' },
    { label: '+254', value: '+254' },
    { label: '+255', value: '+255' },
    { label: '+256', value: '+256' },
    { label: '+257', value: '+257' },
    { label: '+258', value: '+258' },
    { label: '+260', value: '+260' },
    { label: '+261', value: '+261' },
    { label: '+262', value: '+262' },
    { label: '+263', value: '+263' },
    { label: '+264', value: '+264' },
    { label: '+265', value: '+265' },
    { label: '+266', value: '+266' },
    { label: '+267', value: '+267' },
    { label: '+268', value: '+268' },
    { label: '+269', value: '+269' },
    { label: '+290', value: '+290' },
    { label: '+291', value: '+291' },
    { label: '+297', value: '+297' },
    { label: '+298', value: '+298' },
    { label: '+299', value: '+299' },
    { label: '+345', value: '+345' },
    { label: '+350', value: '+350' },
    { label: '+351', value: '+351' },
    { label: '+352', value: '+352' },
    { label: '+353', value: '+353' },
    { label: '+354', value: '+354' },
    { label: '+355', value: '+355' },
    { label: '+356', value: '+356' },
    { label: '+357', value: '+357' },
    { label: '+358', value: '+358' },
    { label: '+359', value: '+359' },
    { label: '+370', value: '+370' },
    { label: '+371', value: '+371' },
    { label: '+372', value: '+372' },
    { label: '+373', value: '+373' },
    { label: '+374', value: '+374' },
    { label: '+375', value: '+375' },
    { label: '+376', value: '+376' },
    { label: '+377', value: '+377' },
    { label: '+378', value: '+378' },
    { label: '+379', value: '+379' },
    { label: '+380', value: '+380' },
    { label: '+381', value: '+381' },
    { label: '+382', value: '+382' },
    { label: '+385', value: '+385' },
    { label: '+386', value: '+386' },
    { label: '+387', value: '+387' },
    { label: '+389', value: '+389' },
    { label: '+420', value: '+420' },
    { label: '+421', value: '+421' },
    { label: '+423', value: '+423' },
    { label: '+500', value: '+500' },
    { label: '+501', value: '+501' },
    { label: '+502', value: '+502' },
    { label: '+503', value: '+503' },
    { label: '+504', value: '+504' },
    { label: '+505', value: '+505' },
    { label: '+506', value: '+506' },
    { label: '+507', value: '+507' },
    { label: '+508', value: '+508' },
    { label: '+509', value: '+509' },
    { label: '+537', value: '+537' },
    { label: '+590', value: '+590' },
    { label: '+591', value: '+591' },
    { label: '+593', value: '+593' },
    { label: '+594', value: '+594' },
    { label: '+595', value: '+595' },
    { label: '+596', value: '+596' },
    { label: '+597', value: '+597' },
    { label: '+598', value: '+598' },
    { label: '+599', value: '+599' },
    { label: '+670', value: '+670' },
    { label: '+672', value: '+672' },
    { label: '+673', value: '+673' },
    { label: '+674', value: '+674' },
    { label: '+675', value: '+675' },
    { label: '+676', value: '+676' },
    { label: '+677', value: '+677' },
    { label: '+678', value: '+678' },
    { label: '+679', value: '+679' },
    { label: '+680', value: '+680' },
    { label: '+681', value: '+681' },
    { label: '+682', value: '+682' },
    { label: '+683', value: '+683' },
    { label: '+685', value: '+685' },
    { label: '+686', value: '+686' },
    { label: '+687', value: '+687' },
    { label: '+688', value: '+688' },
    { label: '+689', value: '+689' },
    { label: '+690', value: '+690' },
    { label: '+691', value: '+691' },
    { label: '+692', value: '+692' },
    { label: '+850', value: '+850' },
    { label: '+852', value: '+852' },
    { label: '+853', value: '+853' },
    { label: '+855', value: '+855' },
    { label: '+856', value: '+856' },
    { label: '+872', value: '+872' },
    { label: '+880', value: '+880' },
    { label: '+886', value: '+886' },
    { label: '+960', value: '+960' },
    { label: '+961', value: '+961' },
    { label: '+962', value: '+962' },
    { label: '+963', value: '+963' },
    { label: '+964', value: '+964' },
    { label: '+965', value: '+965' },
    { label: '+966', value: '+966' },
    { label: '+967', value: '+967' },
    { label: '+968', value: '+968' },
    { label: '+970', value: '+970' },
    { label: '+971', value: '+971' },
    { label: '+972', value: '+972' },
    { label: '+973', value: '+973' },
    { label: '+974', value: '+974' },
    { label: '+975', value: '+975' },
    { label: '+976', value: '+976' },
    { label: '+977', value: '+977' },
    { label: '+992', value: '+992' },
    { label: '+993', value: '+993' },
    { label: '+994', value: '+994' },
    { label: '+995', value: '+995' },
    { label: '+996', value: '+996' },
    { label: '+998', value: '+998' },
];

const AmplifyCountryDialCode = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        attachShadow(this);
        /** The ID of the field.  Should match with its corresponding input's ID. */
        this.fieldId = COUNTRY_DIAL_CODE_SUFFIX;
        /** The options of the country dial code select input. */
        this.options = countryDialCodes;
        /** Default selected dial code */
        this.dialCode = '+1';
    }
    componentWillLoad() {
        this.setSelectedDialCode();
    }
    watchDialCodeHandler() {
        this.setSelectedDialCode();
    }
    setSelectedDialCode() {
        if (typeof this.dialCode === 'number') {
            this.selectedDialCode = `+${this.dialCode}`;
        }
        else {
            this.selectedDialCode = this.dialCode;
        }
    }
    render() {
        return (h("amplify-select", { fieldId: this.fieldId, options: this.options, handleInputChange: this.handleInputChange, selected: this.selectedDialCode }));
    }
    static get watchers() { return {
        "dialCode": ["watchDialCodeHandler"]
    }; }
};

const AmplifyEmailField = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        /** Based on the type of field e.g. sign in, sign up, forgot password, etc. */
        this.fieldId = EMAIL_SUFFIX;
        /** Used for the EMAIL label */
        this.label = Translations.EMAIL_LABEL;
        /** Used for the placeholder label */
        this.placeholder = Translations.EMAIL_PLACEHOLDER;
        /** The required flag in order to make an input required prior to submitting a form */
        this.required = false;
    }
    render() {
        return (h("amplify-form-field", { fieldId: this.fieldId, label: I18n.get(this.label), placeholder: I18n.get(this.placeholder), type: "email", name: "email", required: this.required, handleInputChange: this.handleInputChange, value: this.value, inputProps: this.inputProps, disabled: this.disabled, hint: this.hint }));
    }
};

const logger$6 = new ConsoleLogger('amplify-facebook-button');
const AmplifyFacebookButton = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        attachShadow(this);
        /** Auth state change handler for this component
         * e.g. SignIn -> 'Create Account' link -> SignUp
         */
        this.handleAuthStateChange = dispatchAuthStateChangeEvent;
        this.federatedSignIn = authResponse => {
            const { accessToken, expiresIn } = authResponse;
            if (!accessToken) {
                return;
            }
            if (!Auth$1 ||
                typeof Auth$1.federatedSignIn !== 'function' ||
                typeof Auth$1.currentAuthenticatedUser !== 'function') {
                throw new Error(NO_AUTH_MODULE_FOUND);
            }
            const date = new Date();
            const expires_at = expiresIn * 1000 + date.getTime();
            const fields = 'name,email';
            window['FB'].api('/me', { fields }, async (response) => {
                const user = {
                    name: response.name,
                    email: response.email,
                };
                await Auth$1.federatedSignIn('facebook', { token: accessToken, expires_at }, user);
                const authenticatedUser = await Auth$1.currentAuthenticatedUser();
                this.handleAuthStateChange(AuthState.SignedIn, authenticatedUser);
            });
        };
        this.getLoginStatus = () => {
            window['FB'].getLoginStatus(response => {
                try {
                    window.localStorage.setItem(AUTH_SOURCE_KEY, JSON.stringify({ provider: 'facebook' }));
                }
                catch (e) {
                    logger$6.debug('Failed to cache auth source into localStorage', e);
                }
                if (response.status === 'connected') {
                    return this.federatedSignIn(response.authResponse);
                }
                this.login();
            });
        };
        this.login = () => {
            const scope = 'public_profile,email';
            window['FB'].login(response => {
                if (response && response.authResponse) {
                    this.federatedSignIn(response.authResponse);
                }
            }, { scope });
        };
    }
    /**
     * @see https://developers.facebook.com/docs/javascript/reference/FB.init/v5.0
     */
    signInWithFacebook(event) {
        event.preventDefault();
        window['FB'].init({
            appId: this.appId,
            cookie: true,
            xfbml: false,
            version: 'v5.0',
        });
        this.getLoginStatus();
    }
    render() {
        return (h("amplify-sign-in-button", { onClick: event => this.signInWithFacebook(event), provider: "facebook" }, h("script", { async: true, defer: true, src: "https://connect.facebook.net/en_US/sdk.js" }), I18n.get(Translations.SIGN_IN_WITH_FACEBOOK)));
    }
};

const AmplifyFederatedButtons = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        attachShadow(this);
        /** The current authentication state. */
        this.authState = AuthState.SignIn;
        /** Federated credentials & configuration. */
        this.federated = {};
        /** Auth state change handler for this component
         * e.g. SignIn -> 'Create Account' link -> SignUp
         */
        this.handleAuthStateChange = dispatchAuthStateChangeEvent;
    }
    componentWillLoad() {
        if (!Auth$1 || typeof Auth$1.configure !== 'function') {
            throw new Error(NO_AUTH_MODULE_FOUND);
        }
        const { oauth = {} } = Auth$1.configure();
        // backward compatibility
        if (oauth['domain']) {
            this.federated.oauthConfig = Object.assign(Object.assign({}, this.federated.oauthConfig), oauth);
        }
        else if (oauth['awsCognito']) {
            this.federated.oauthConfig = Object.assign(Object.assign({}, this.federated.oauthConfig), oauth['awsCognito']);
        }
        if (oauth['auth0']) {
            this.federated.auth0Config = Object.assign(Object.assign({}, this.federated.auth0Config), oauth['auth0']);
        }
    }
    render() {
        if (!Object.values(AuthState).includes(this.authState)) {
            return null;
        }
        if (isEmpty(this.federated)) {
            return null;
        }
        const { amazonClientId, auth0Config, facebookAppId, googleClientId, oauthConfig, } = this.federated;
        return (h("div", null, googleClientId && (h("div", null, h("amplify-google-button", { clientId: googleClientId, handleAuthStateChange: this.handleAuthStateChange }))), facebookAppId && (h("div", null, h("amplify-facebook-button", { appId: facebookAppId, handleAuthStateChange: this.handleAuthStateChange }))), amazonClientId && (h("div", null, h("amplify-amazon-button", { clientId: amazonClientId, handleAuthStateChange: this.handleAuthStateChange }))), oauthConfig && (h("div", null, h("amplify-oauth-button", { config: oauthConfig }))), auth0Config && (h("div", null, h("amplify-auth0-button", { config: auth0Config, handleAuthStateChange: this.handleAuthStateChange })))));
    }
};

const logger$7 = new ConsoleLogger('amplify-federated-sign-in');
const AmplifyFederatedSignIn = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        attachShadow(this);
        /** The current authentication state. */
        this.authState = AuthState.SignIn;
        /** Federated credentials & configuration. */
        this.federated = {};
    }
    componentWillLoad() {
        if (!Auth$1 || typeof Auth$1.configure !== 'function') {
            throw new Error(NO_AUTH_MODULE_FOUND);
        }
        const { oauth = {} } = Auth$1.configure();
        // backward compatibility
        if (oauth['domain']) {
            this.federated.oauth_config = Object.assign(Object.assign({}, this.federated.oauth_config), oauth);
        }
        else if (oauth['awsCognito']) {
            this.federated.oauth_config = Object.assign(Object.assign({}, this.federated.oauth_config), oauth['awsCognito']);
        }
        if (oauth['auth0']) {
            this.federated.auth0 = Object.assign(Object.assign({}, this.federated.auth0), oauth['auth0']);
        }
    }
    render() {
        if (!this.federated) {
            logger$7.debug('federated prop is empty. show nothing');
            logger$7.debug('federated={google_client_id: , facebook_app_id: , amazon_client_id}');
            return null;
        }
        if (!Object.values(AuthState).includes(this.authState)) {
            return null;
        }
        logger$7.debug('federated Config is', this.federated);
        return (h("amplify-form-section", { "data-test": "federated-sign-in-section" }, h("amplify-section", { "data-test": "federated-sign-in-body-section" }, h("amplify-federated-buttons", { authState: this.authState, "data-test": "federated-sign-in-buttons", federated: this.federated }))));
    }
};

const logger$8 = new Logger('ForgotPassword');
const AmplifyForgotPassword = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        attachShadow(this);
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
        if (!Auth$1 || typeof Auth$1.forgotPassword !== 'function') {
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
            const data = await Auth$1.forgotPassword(this.forgotPasswordAttrs.userInput.trim());
            logger$8.debug(data);
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
        if (!Auth$1 || typeof Auth$1.forgotPasswordSubmit !== 'function') {
            throw new Error(NO_AUTH_MODULE_FOUND);
        }
        this.loading = true;
        try {
            const { userInput, code, password } = this.forgotPasswordAttrs;
            const data = await Auth$1.forgotPasswordSubmit(userInput.trim(), code, password);
            logger$8.debug(data);
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

const amplifyFormFieldCss = "amplify-form-field{--label-font-size:var(--amplify-text-md);--description-font-size:var(--amplify-text-sm)}.form-field{margin-bottom:15px}.form-field-label{display:block;font-size:var(--label-font-size);padding-bottom:0.5em}.form-field-description{font-size:var(--description-font-size);padding-top:0.5em}";

const AmplifyFormField = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        /** The input type.  Can be any HTML input type. */
        this.type = 'text';
        /** The required flag in order to make an input required prior to submitting a form */
        this.required = false;
        /** (Optional) The placeholder for the input element.  Using hints is recommended, but placeholders can also be useful to convey information to users. */
        this.placeholder = '';
    }
    render() {
        return (h("div", { class: "form-field" }, this.label && (h("div", { class: "form-field-label" }, h("amplify-label", { htmlFor: this.fieldId }, this.label))), this.description && (h("div", { id: `${this.fieldId}-description`, class: "form-field-description", "data-test": "form-field-description" }, this.description)), h("div", null, h("slot", { name: "input" }, h("amplify-input", { fieldId: this.fieldId, description: this.description, type: this.type, handleInputChange: this.handleInputChange, placeholder: this.placeholder, name: this.name, value: this.value, inputProps: this.inputProps, disabled: this.disabled, required: this.required }))), this.hint && (h("amplify-hint", { id: `${this.fieldId}-hint` }, this.hint))));
    }
    static get style() { return amplifyFormFieldCss; }
};

const amplifyFormSectionCss = "amplify-form-section{--header-color:var(--amplify-secondary-color);--header-size:var(--amplify-text-md-sub);--subtitle-size:var(--amplify-grey);--subtitle-color:var(--amplify-grey);--footer-color:var(--amplify-grey);--footer-size:var(--amplify-text-sm);--font-family:var(--amplify-font-family);--font-weight:var(--amplify-font-weight)}.form-section-header{margin:1rem 0 1.5rem 0}.form-section-header .header{color:var(--header-color);font-size:var(--header-size);font-weight:700;margin-bottom:0.75rem}.form-section-header .subtitle{font-weight:400;font-size:var(--amplify-text-sm);color:var(--subtitle-color)}.form-section-footer{font-family:var(--font-family);font-weight:var(--font-weight);font-size:var(--footer-size);color:var(--footer-color);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:distribute;justify-content:space-around}@media (min-width: 672px){.form-section-footer{display:-ms-flexbox;display:flex;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:baseline;align-items:baseline}}.form-section-footer *+*{margin-top:15px}";

const AmplifyFormSection = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        /** (Optional) Used as a the default value within the default footer slot */
        this.submitButtonText = 'Submit';
        /** String prefix for the data-test attributes in this component primarily used for testing purposes */
        this.testDataPrefix = 'form-section';
        /** Loading state for the form */
        this.loading = false;
        /** Secondary footer component or text */
        this.secondaryFooterContent = null;
    }
    // eslint-disable-next-line
    handleFormSubmit(ev) {
        this.handleSubmit(ev.detail);
    }
    render() {
        return (h("form", { onSubmit: this.handleSubmit }, h("amplify-section", null, h("div", null, h("slot", { name: "amplify-form-section-header" }, h("div", { class: "form-section-header" }, h("h3", { class: "header", "data-test": this.testDataPrefix + '-header-section' }, this.headerText), h("div", { class: "subtitle" }, h("slot", { name: "subtitle" }))))), h("slot", null), h("div", null, h("slot", { name: "amplify-form-section-footer" }, h("div", { class: "form-section-footer" }, h("amplify-button", { type: "submit", "data-test": this.testDataPrefix + '-' + this.testDataPrefix + '-button' }, this.loading ? (h("amplify-loading-spinner", null)) : (h("span", null, this.submitButtonText))), this.secondaryFooterContent))))));
    }
    static get style() { return amplifyFormSectionCss; }
};

const logger$9 = new ConsoleLogger('amplify-google-button');
const AmplifyGoogleButton = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        attachShadow(this);
        /** Auth state change handler for this component
         * e.g. SignIn -> 'Create Account' link -> SignUp
         */
        this.handleAuthStateChange = dispatchAuthStateChangeEvent;
        this.handleError = error => {
            console.error(error);
        };
        /**
         * @see https://developers.google.com/identity/sign-in/web/build-button#building_a_button_with_a_custom_graphic
         */
        this.handleLoad = () => {
            window['gapi'].load('auth2');
        };
        this.handleUser = async (user) => {
            if (!Auth$1 ||
                typeof Auth$1.federatedSignIn !== 'function' ||
                typeof Auth$1.currentAuthenticatedUser !== 'function') {
                throw new Error(NO_AUTH_MODULE_FOUND);
            }
            try {
                window.localStorage.setItem(AUTH_SOURCE_KEY, JSON.stringify({ provider: 'google' }));
            }
            catch (e) {
                logger$9.debug('Failed to cache auth source into localStorage', e);
            }
            const { id_token, expires_at } = user.getAuthResponse();
            const profile = user.getBasicProfile();
            await Auth$1.federatedSignIn('google', { token: id_token, expires_at }, {
                email: profile.getEmail(),
                name: profile.getName(),
                picture: profile.getImageUrl(),
            });
            const authenticatedUser = await Auth$1.currentAuthenticatedUser();
            try {
                this.handleAuthStateChange(AuthState.SignedIn, authenticatedUser);
            }
            catch (error) {
                this.handleError(error);
            }
        };
    }
    getAuthInstance() {
        if (window['gapi'] && window['gapi'].auth2) {
            return (window['gapi'].auth2.getAuthInstance() ||
                window['gapi'].auth2.init({
                    client_id: this.clientId,
                    cookiepolicy: 'single_host_origin',
                    scope: 'profile email openid',
                }));
        }
        return null;
    }
    signInWithGoogle(event) {
        event.preventDefault();
        this.getAuthInstance()
            .signIn()
            .then(this.handleUser)
            .catch(this.handleError);
    }
    render() {
        return (h("amplify-sign-in-button", { onClick: event => this.signInWithGoogle(event), provider: "google" }, h("script", { onLoad: this.handleLoad, src: "https://apis.google.com/js/api:client.js" }), I18n.get(Translations.SIGN_IN_WITH_GOOGLE)));
    }
};

const amplifyGreetingsCss = ":host{--background-color:var(--amplify-white);--border-color:var(--amplify-light-grey);--font-family:var(--amplify-font-family)}.greetings{display:-ms-flexbox;display:flex;border:1px solid transparent;background-color:var(--background-color);border-color:var(--border-color);padding:0.625rem;font-family:var(--font-family);-ms-flex-pack:justify;justify-content:space-between}.nav{display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center}.logo{display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center;justify-self:flex-start}amplify-sign-out{margin-left:1rem}";

const AmplifyGreetings = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        attachShadow(this);
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
    static get style() { return amplifyGreetingsCss; }
};

const amplifyHintCss = ":host{--color:var(--amplify-grey);--font-family:var(--amplify-font-family);--font-size:var(--amplify-text-xs);--font-weight:var(--amplify-font-weight)}.hint{color:var(--color);font-family:var(--font-family);font-weight:var(--font-weight);font-size:var(--font-size);margin-bottom:2.625rem}";

const AmplifyHint = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        attachShadow(this);
    }
    render() {
        return (h("div", { class: "hint" }, h("slot", null)));
    }
    static get style() { return amplifyHintCss; }
};

const icons = {
    amazon() {
        return (h("svg", { viewBox: "0 0 248 268", xmlns: "http://www.w3.org/2000/svg" },
            h("g", { id: "Artboard-Copy-2", fill: "none", "fill-rule": "evenodd" },
                h("path", { d: "M139.056521,147.024612 C133.548808,156.744524 124.782731,162.726926 115.087401,162.726926 C101.790721,162.726926 93.9937779,152.612964 93.9937779,137.68681 C93.9937779,108.224571 120.447551,102.879017 145.533369,102.879017 L145.533369,110.365976 C145.533369,123.831358 145.876354,135.063787 139.056521,147.024612 M207.206992,162.579655 C209.400505,165.692256 209.887066,169.437725 207.063416,171.770186 C199.996315,177.653081 187.429476,188.590967 180.513926,194.716661 L180.46208,194.621133 C178.176838,196.663031 174.862638,196.810303 172.27828,195.445057 C160.780281,185.9162 158.686473,181.494078 152.405048,172.403055 C133.405233,191.751331 119.909143,197.534719 95.309886,197.534719 C66.1281801,197.534719 43.4791563,179.599451 43.4791563,143.669212 C43.4791563,115.616003 58.6782107,96.5105248 80.4019706,87.1727225 C99.2063636,78.9096034 125.464714,77.4528107 145.533369,75.1641337 L145.533369,70.694248 C145.533369,62.4749122 146.167493,52.7510201 141.297893,45.6541312 C137.110277,39.2856386 129.018206,36.6586354 121.859376,36.6586354 C108.658413,36.6586354 96.9171331,43.4171982 94.0416364,57.4199213 C93.4593582,60.532522 91.1701278,63.5933787 88.003492,63.7406501 L54.4387473,60.1424518 C51.6150972,59.5095829 48.4484614,57.2248862 49.2740201,52.8982915 C56.9712583,12.2553679 93.7983558,0 126.732964,0 C143.587124,0 165.606011,4.47386604 178.902691,17.2148315 C195.760839,32.917146 194.149604,53.8694866 194.149604,76.6726704 L194.149604,130.542157 C194.149604,146.734049 200.87372,153.830938 207.206992,162.579655 Z M233.826346,208.038962 C230.467669,203.683255 211.550709,205.9821 203.056405,206.998432 C200.470662,207.321077 200.076227,205.042397 202.406981,203.404973 C217.475208,192.664928 242.201125,195.766353 245.081698,199.363845 C247.966255,202.981502 244.336653,228.071183 230.172839,240.049379 C228.001452,241.888455 225.929671,240.904388 226.89783,238.468418 C230.077218,230.430525 237.204944,212.418868 233.826346,208.038962 Z M126.768855,264 C74.0234043,264 42.0764048,241.955028 17.7852554,217.541992 C12.9733903,212.705982 6.71799208,206.295994 3.31151296,200.690918 C1.90227474,198.372135 5.59096074,195.021875 8.0442063,196.84375 C38.2390146,219.267578 82.1011654,239.538304 125.529506,239.538304 C154.819967,239.538304 191.046475,227.469543 220.66851,214.867659 C225.146771,212.966167 225.146771,219.180222 224.511585,221.060516 C224.183264,222.03242 209.514625,236.221149 189.247207,247.047411 C170.304273,257.166172 146.397132,264 126.768855,264 Z", id: "Fill-6", fill: "#FFF" }))));
    },
    auth0() {
        return (h("svg", { id: "artwork", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 193.7 216.6" },
            h("path", { d: "M189,66.9L167.2,0H96.8l21.8,66.9H189z M96.8,0H26.5L4.8,66.9h70.4L96.8,0z M4.8,66.9L4.8,66.9\tc-13,39.9,1.2,83.6,35.2,108.3l21.7-66.9L4.8,66.9z M189,66.9L189,66.9l-57,41.4l21.7,66.9l0,0C187.7,150.6,201.9,106.8,189,66.9\tL189,66.9z M39.9,175.2L39.9,175.2l56.9,41.4l56.9-41.4l-56.9-41.4L39.9,175.2z", fill: "#FFF" })));
    },
    facebook() {
        return (h("svg", { viewBox: "0 0 279 538", xmlns: "http://www.w3.org/2000/svg" },
            h("g", { id: "Page-1", fill: "none", "fill-rule": "evenodd" },
                h("g", { id: "Artboard", fill: "#FFF" },
                    h("path", { d: "M82.3409742,538 L82.3409742,292.936652 L0,292.936652 L0,196.990154 L82.2410458,196.990154 L82.2410458,126.4295 C82.2410458,44.575144 132.205229,0 205.252865,0 C240.227794,0 270.306232,2.59855099 279,3.79788222 L279,89.2502322 L228.536175,89.2502322 C188.964542,89.2502322 181.270057,108.139699 181.270057,135.824262 L181.270057,196.89021 L276.202006,196.89021 L263.810888,292.836708 L181.16913,292.836708 L181.16913,538 L82.3409742,538 Z", id: "Fill-1" })))));
    },
    google() {
        return (h("svg", { viewBox: "0 0 256 262", xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "xMidYMid" },
            h("path", { d: "M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027", fill: "#4285F4" }),
            h("path", { d: "M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1", fill: "#34A853" }),
            h("path", { d: "M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782", fill: "#FBBC05" }),
            h("path", { d: "M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251", fill: "#EB4335" })));
    },
    'sound-mute'() {
        return (h("svg", { width: "19", height: "19", viewBox: "0 0 19 19", xmlns: "http://www.w3.org/2000/svg" },
            h("g", { id: "icons/minis/volumeOff", "fill-rule": "evenodd" },
                h("path", { d: "M3.48026899,12.9630494 C3.63825091,12.9630494 3.79237961,13.0108921 3.92264322,13.1003479 L8.77467683,16.8113609 C9.29423971,17.1679383 10,16.7950396 10,16.1637406 L10,3.78619489 C10,3.15489596 9.29423971,2.78199725 8.77467683,3.13857463 L3.92264322,6.84545211 C3.79237961,6.93490793 3.63825091,6.9827506 3.48026899,6.9827506 L1.78294894,6.9827506 C1.3505185,6.9827506 1,7.33409518 1,7.76754476 L1,12.1781306 C1,12.6117048 1.3505185,12.9630494 1.78294894,12.9630494 L3.48026899,12.9630494 Z M17.2118156,7 L15.0918385,9.11997713 L12.9718614,7 L12,7.97174685 L14.1200917,10.091724 L12,12.2118156 L12.9718614,13.1835625 L15.0918385,11.0635854 L17.2118156,13.1835625 L18.1835625,12.2118156 L16.0635854,10.091724 L18.1835625,7.97174685 L17.2118156,7 Z", id: "Fill-2" }))));
    },
    sound() {
        return (h("svg", { width: "19", height: "19", viewBox: "0 0 19 19", xmlns: "http://www.w3.org/2000/svg" },
            h("g", { id: "icons/minis/volumeOn", "fill-rule": "evenodd" },
                h("path", { d: "M3.48026899,12.9630494 L1.78294894,12.9630494 C1.3505185,12.9630494 1,12.6117048 1,12.1781306 L1,7.76754476 C1,7.33409518 1.3505185,6.9827506 1.78294894,6.9827506 L3.48026899,6.9827506 C3.63825091,6.9827506 3.79237961,6.93490793 3.92264322,6.84545211 L8.77467683,3.13857463 C9.29423971,2.78199725 10,3.15489596 10,3.78619489 L10,16.1637406 C10,16.7950396 9.29423971,17.1679383 8.77467683,16.8113609 L3.92264322,13.1003479 C3.79237961,13.0108921 3.63825091,12.9630494 3.48026899,12.9630494 Z M14.9270376,3.03232286 C15.1729267,3.03232286 15.4040399,3.12815658 15.5777627,3.3022351 C17.3699891,5.09889099 18.3570052,7.48235058 18.3570052,10.0135053 C18.3570052,12.54466 17.3699891,14.9281196 15.5777627,16.7247755 C15.4041045,16.898854 15.1729914,16.9947524 14.9270052,16.9947524 C14.6820861,16.9947524 14.4515549,16.899436 14.2777674,16.7263598 C13.9192316,16.3684383 13.9185203,15.7852882 14.2762477,15.4264291 C15.7222893,13.9769926 16.5186727,12.0545954 16.5186727,10.0135053 C16.5186727,7.97241524 15.7222893,6.05001801 14.2762154,4.60058152 C13.9184879,4.24175473 13.9191992,3.65857229 14.277832,3.30065081 C14.4514256,3.1275746 14.6819567,3.03232286 14.9270376,3.03232286 Z M13.5730665,6.11570485 C14.6133991,7.15574642 15.1862998,8.54003279 15.1862998,10.0134924 C15.1862998,11.4892799 14.6113945,12.8741159 13.5675376,13.9128965 C13.3942351,14.0855848 13.1639626,14.1806425 12.9191727,14.1806425 C12.6727016,14.1806425 12.4412975,14.0844531 12.2677039,13.9097926 C12.0944984,13.7358111 11.9994406,13.5047303 11.9999903,13.2592291 C12.0005723,13.0136956 12.096794,12.7831644 12.2708079,12.6100882 C12.9654406,11.9185917 13.3479995,10.996467 13.3479995,10.0134924 C13.3479995,9.03119677 12.966346,8.1086194 12.2733298,7.4157649 C11.9150203,7.05745543 11.9149233,6.47436998 12.2731358,6.11589885 C12.4467617,5.94224065 12.6775838,5.84666559 12.923085,5.84666559 C13.1685538,5.84666559 13.3993436,5.94220831 13.5730665,6.11570485 Z", id: "Fill-2" }))));
    },
    maximize() {
        return (h("svg", { width: "19", height: "19", viewBox: "0 0 19 19", xmlns: "http://www.w3.org/2000/svg" },
            h("g", { id: "icons/minis/screenfull", "fill-rule": "evenodd" },
                h("path", { d: "M2.04162598,3 L2.04162598,16 L17.0147705,16 L17.0147705,3 L2.04162598,3 Z M1,2 L18,2 L18,17 L1,17 L1,2 Z M3,4 L16,4 L16,15 L3,15 L3,4 Z", id: "Rectangle-Copy", "fill-rule": "nonzero" }))));
    },
    minimize() {
        return (h("svg", { width: "19", height: "19", viewBox: "0 0 19 19", xmlns: "http://www.w3.org/2000/svg" },
            h("g", { id: "icons/minis/screensmall", "fill-rule": "evenodd" },
                h("path", { d: "M11,16 L17.0147705,16 L17.0147705,3 L2.04162598,3 L2.04162598,10 L11,10 L11,16 Z M1,2 L18,2 L18,17 L1,17 L1,2 Z", id: "Rectangle", "fill-rule": "nonzero" }))));
    },
    'enter-vr'() {
        return (h("svg", { width: "19", height: "19", viewBox: "0 0 17 10", xmlns: "http://www.w3.org/2000/svg" },
            h("g", { id: "Page-1", "fill-rule": "evenodd" },
                h("g", { id: "VRon", "fill-rule": "nonzero" },
                    h("path", { d: "M15.7856977,0.02395184 L15.8915734,0.02395184 C16.5037405,0.02395184 17,0.520211324 17,1.13237842 L17,1.54663675 L17,8.8915038 C17,9.5034193 16.4560011,10 15.7856977,10 L12.0095825,10 C9.98324439,7.1593807 8.80676009,5.741338 8.48012959,5.74587199 C8.16206045,5.75028714 7.01003321,7.1683298 5.02404785,10 L1.21426911,10 C0.543965735,10 3.32031236e-05,9.5034193 3.32031236e-05,8.8915038 L3.32031236e-05,1.54663675 L3.32031236e-05,1.13237842 L3.32031236e-05,1.13237842 C3.32031236e-05,0.520211324 0.496292687,0.02395184 1.10845978,0.02395184 L1.21426911,0.02395184 L15.7856977,0.02395184 Z M4.5,6 C5.32842712,6 6,5.32842712 6,4.5 C6,3.67157288 5.32842712,3 4.5,3 C3.67157288,3 3,3.67157288 3,4.5 C3,5.32842712 3.67157288,6 4.5,6 Z M12.5,6 C13.3284271,6 14,5.32842712 14,4.5 C14,3.67157288 13.3284271,3 12.5,3 C11.6715729,3 11,3.67157288 11,4.5 C11,5.32842712 11.6715729,6 12.5,6 Z", id: "Fill-1" })))));
    },
    'exit-vr'() {
        return (h("svg", { width: "19", height: "19", viewBox: "0 0 19 19", xmlns: "http://www.w3.org/2000/svg" },
            h("g", { id: "icons/minis/VRon-Copy", "fill-rule": "evenodd" },
                h("g", { id: "Group-7-Copy", transform: "translate(1 3)" },
                    h("path", { d: "M15.7856977,3.02395184 L17,3.02395184 L17,4.13237842 L17,4.54663675 L17,11.8915038 C17,12.5034193 16.4560011,13 15.7856977,13 L12.0095825,13 C9.98324439,10.1593807 8.80676009,8.741338 8.48012959,8.74587199 C8.16206045,8.75028714 7.01003321,10.1683298 5.02404785,13 L1.21426911,13 C0.543965735,13 3.32031236e-05,12.5034193 3.32031236e-05,11.8915038 L3.32031236e-05,4.54663675 L3.32031236e-05,4.13237842 L3.32031236e-05,3.02395184 L1.21426911,3.02395184 L15.7856977,3.02395184 Z M4.5,9 C5.32842712,9 6,8.32842712 6,7.5 C6,6.67157288 5.32842712,6 4.5,6 C3.67157288,6 3,6.67157288 3,7.5 C3,8.32842712 3.67157288,9 4.5,9 Z M12.5,9 C13.3284271,9 14,8.32842712 14,7.5 C14,6.67157288 13.3284271,6 12.5,6 C11.6715729,6 11,6.67157288 11,7.5 C11,8.32842712 11.6715729,9 12.5,9 Z M2.5486669,0 L14.420089,0 C14.7977406,0 15.1613805,0.149260956 15.4374308,0.417695511 L16.9999668,2.00634766 L0,2.00634766 L1.58537972,0.395493117 C1.84682061,0.141306827 2.19106994,0 2.5486669,0 Z", id: "Fill-1" })))));
    },
    warning() {
        return (h("svg", { width: "21", height: "18", viewBox: "0 0 21 18", xmlns: "http://www.w3.org/2000/svg" },
            h("g", { id: "02-Basic-Inputs", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
                h("g", { id: "Bits-&-Loaders-1312px-/-16-Copy-2", transform: "translate(-287.000000, -2242.000000)", fill: "#FFFFFF" },
                    h("path", { d: "M307.648967,2256.27828 L299.66725,2243.21184 C299.202561,2242.45466 298.384621,2242 297.500172,2242 C296.615722,2242 295.797783,2242.45466 295.333093,2243.18986 L287.351377,2256.27836 C286.886687,2257.03555 286.886687,2257.96598 287.32892,2258.74506 C287.771145,2259.52423 288.589084,2260 289.517579,2260 L305.481676,2260 C306.388591,2260 307.20653,2259.52423 307.670336,2258.74506 C308.113423,2257.96589 308.113423,2257.03549 307.648742,2256.27836 L307.648967,2256.27828 Z M296.482789,2248.23069 C296.482789,2247.68984 296.947479,2247.23518 297.50026,2247.23518 C298.053041,2247.23518 298.517731,2247.68984 298.517731,2248.23069 L298.517731,2252.36319 C298.517731,2252.90404 298.053041,2253.3587 297.50026,2253.3587 C296.947479,2253.3587 296.482789,2252.90404 296.482789,2252.36319 L296.482789,2248.23069 Z M297.50026,2256.81913 C296.814458,2256.81913 296.261677,2256.27828 296.261677,2255.60728 C296.261677,2254.93629 296.814458,2254.39544 297.50026,2254.39544 C298.186062,2254.39544 298.738844,2254.93629 298.738844,2255.60728 C298.738844,2256.27828 298.186062,2256.81913 297.50026,2256.81913 Z", id: "Fill-1" })))));
    },
    loading() {
        return (h("svg", { width: "20px", height: "20px", viewBox: "0 0 20 20", version: "1.1" },
            h("g", { id: "02-Basic-Inputs", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
                h("g", { id: "Bits-&-Loaders-1312px-/-16-Copy-2", transform: "translate(-392.000000, -448.000000)" },
                    h("g", { id: "AmpBasicSmall", transform: "translate(392.000000, 448.000000)" },
                        h("path", { d: "M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M10,4 C6.6862915,4 4,6.6862915 4,10 C4,13.3137085 6.6862915,16 10,16 C13.3137085,16 16,13.3137085 16,10 C16,6.6862915 13.3137085,4 10,4 Z", id: "spinner-circle", fill: "#E1E1E1" }),
                        h("path", { d: "M10,0 L10,4 C6.6862915,4 4,6.6862915 4,10 C4,12.0133587 4.99166921,13.7951006 6.51321137,14.8834295 L4.18685298,18.1377379 C1.65198576,16.3237368 0,13.3547894 0,10 C0,4.4771525 4.4771525,0 10,0 Z", id: "spinner-bar", fill: "#FF9900" }))))));
    },
    photoPlaceholder() {
        return (h("svg", { style: { padding: '64px 0px 64px', fill: 'black' }, xmlns: "http://www.w3.org/2000/svg", width: "64", height: "64", viewBox: "0 0 24 24" },
            h("circle", { cx: "12", cy: "12", r: "3.2" }),
            h("path", { d: "M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" }),
            h("path", { d: "M0 0h24v24H0z", fill: "none" })));
    },
    microphone() {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 352 512", height: "20px" },
            h("path", { d: "M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z" })));
    },
    send() {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: "20px" },
            h("path", { d: "M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z" })));
    },
    ban() {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" },
            h("path", { d: "M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248 248-111.034 248-248S392.967 8 256 8zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676zM125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676z" })));
    },
};

const amplifyIconCss = ".sc-amplify-icon-h{--width:auto;--height:auto;--icon-fill-color:var(--amplify-white)}svg.sc-amplify-icon{fill:var(--icon-fill-color);width:var(--width);height:var(--height)}";

const AmplifyIcon = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    validateName(newValue) {
        const isBlank = typeof newValue == null;
        if (isBlank) {
            throw new Error('name: required');
        }
    }
    // https://stenciljs.com/docs/templating-jsx#avoid-shared-jsx-nodes
    render() {
        return icons[this.name]();
    }
    static get watchers() { return {
        "name": ["validateName"]
    }; }
    static get style() { return amplifyIconCss; }
};

const amplifyIconButtonCss = ":host{--button-color:var(--amplify-secondary-contrast);--button-background-hover:var(--amplify-secondary-color)}.action-button button{position:relative;padding:0;background:none;height:54px;width:54px;cursor:pointer;outline:none;text-decoration:none;border:none;border-radius:30px;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;color:var(--button-color);fill:currentColor}.action-button button:hover{background-color:var(--button-background-hover);-webkit-box-shadow:0.3px 0.3px 0.3px rgba(0, 0, 0, 0.3);box-shadow:0.3px 0.3px 0.3px rgba(0, 0, 0, 0.3)}.action-button button:hover>.tooltip{display:block}.action-button button:hover>svg{-webkit-filter:none;filter:none}.action-button button:focus{outline:none}.action-button button svg{width:1.8em;height:1.8em;-webkit-filter:drop-shadow(1px 1px 1px var(--amplify-grey));filter:drop-shadow(1px 1px 1px var(--amplify-grey))}";

const AmplifyIconButton = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        attachShadow(this);
        /** (Optional) The tooltip that will show on hover of the button */
        this.tooltip = null;
        /** (Optional) Whether or not to show the tooltip automatically */
        this.autoShowTooltip = false;
    }
    render() {
        return (h("span", { class: "action-button" }, h("amplify-tooltip", { text: this.tooltip, shouldAutoShow: this.autoShowTooltip }, h("button", null, h("amplify-icon", { name: this.name })))));
    }
    static get style() { return amplifyIconButtonCss; }
};

const amplifyInputCss = "amplify-input{--color:var(--amplify-secondary-color);--background-color:var(--amplify-secondary-contrast);--border-color:var(--amplify-light-grey);--border-color-focus:var(--amplify-primary-color);--border:1px solid var(--border-color);--margin:0 0 0.625rem 0}[data-autocompleted]{background-color:#e8f0fe !important}.input-host{width:100%}.input{display:block;width:100%;padding:1rem;font-size:var(--amplify-text-sm);color:var(--color);background-color:var(--background-color);background-image:none;border:var(--border);border-radius:3px;-webkit-box-sizing:border-box;box-sizing:border-box;margin:var(--margin);height:3.125rem;line-height:1.1;-webkit-box-shadow:none;box-shadow:none}.input:focus{outline:none;border-color:var(--border-color-focus)}.input:disabled{opacity:0.5}";

const AmplifyInput = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        /** The input type.  Can be any HTML input type. */
        this.type = 'text';
        /** The callback, called when the input is modified by the user. */
        this.handleInputChange = () => void 0;
        /** (Optional) The placeholder for the input element.  Using hints is recommended, but placeholders can also be useful to convey information to users. */
        this.placeholder = '';
        /** Whether the input is a required field */
        this.required = false;
        /** Whether the input has been autocompleted */
        this.autoCompleted = false;
    }
    /**
     * Sets the value of this input to the value in autofill input event.
     */
    setAutoCompleteValue(value) {
        const input = this.el.querySelector('input');
        if (!input)
            return;
        input.value = value;
        // dispatch an input event from this element to the parent form
        input.dispatchEvent(new Event('input'));
        this.autoCompleted = true;
    }
    /**
     * Checks if the target dummy input in `amplify-auth-container` is present have been autofilled.
     * If so, we update this.value with the autofilled value.
     */
    checkAutoCompletion(targetInput) {
        if (!targetInput)
            return;
        if (targetInput.value) {
            // if value is already set, we set the value directly
            this.setAutoCompleteValue(targetInput.value);
        }
        else {
            // if value is not set, we start listening for it
            targetInput.addEventListener('input', e => {
                const value = e.target.value;
                this.setAutoCompleteValue(value);
            });
        }
    }
    disconnectedCallback() {
        this.removeHubListener && this.removeHubListener(); // stop listening to `onAuthUIStateChange`
    }
    componentWillLoad() {
        // the below behaviors are only applicable if `amplify-input` is used by `amplify-authenticator`.
        if (!closestElement('amplify-authenticator', this.el))
            return;
        this.removeHubListener = onAuthUIStateChange(() => {
            /**
             * When we're using slots, autofilled data will persist between different authState,
             * even though input events are not triggered. This ends up in parent components
             * not picking up input values. For now, we're emptying the input on authState change
             * which is the existing behavior.
             */
            const input = this.el.querySelector('input');
            if (input)
                input.value = '';
            this.autoCompleted = false;
        });
    }
    componentDidLoad() {
        // no-op if this field already has been autofilled or already has an value
        if (this.autoCompleted || this.value)
            return;
        if (/Firefox/.test(navigator.userAgent))
            return; // firefox autofill works
        const container = closestElement('amplify-auth-container', this.el);
        const signIn = closestElement('amplify-sign-in', this.el);
        // only autocomplete if `amplify-auth-container` is present and input is under `sign-in`.
        if (!container || !signIn)
            return;
        const username = container.querySelector("input[name='username']");
        const password = container.querySelector("input[name='password']");
        if (this.name === 'username' ||
            this.name === 'email' ||
            this.name === 'phone') {
            this.checkAutoCompletion(username);
        }
        else if (this.name === 'password') {
            this.checkAutoCompletion(password);
        }
    }
    render() {
        return (h(Host, { class: "input-host" }, h("input", Object.assign({ id: this.fieldId, "aria-describedby": this.fieldId && this.description
                ? `${this.fieldId}-description`
                : null, "data-autocompleted": this.autoCompleted, type: this.type, onInput: event => {
                this.autoCompleted = false;
                this.handleInputChange(event);
            }, placeholder: this.placeholder, name: this.name, class: "input", value: this.value, disabled: this.disabled, required: this.required }, this.inputProps))));
    }
    get el() { return this; }
    static get style() { return amplifyInputCss; }
};

const amplifyLabelCss = ":host{--label-color:var(--amplify-secondary-color)}.label{color:var(--label-color);font-size:var(--amplify-text-sm);margin-bottom:16px}";

const AmplifyLabel = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h("label", { class: "label", htmlFor: this.htmlFor }, h("slot", null)));
    }
    static get style() { return amplifyLabelCss; }
};

const amplifyLinkCss = ":host{--link-color:var(--amplify-primary-color);--link-hover:var(--amplify-primary-tint);--link-active:var(--amplify-primary-shade)}.link{color:var(--link-color);cursor:pointer}.link:link{color:var(--link-color);text-decoration:none}.link:hover{color:var(--link-hover);text-decoration:underline}.link:active{color:var(--link-active);text-decoration:underline}";

const AmplifyLink = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        attachShadow(this);
        /** The link role is used to identify an element that creates a hyperlink to a resource that is in the application or external */
        this.role = 'navigation';
    }
    render() {
        return (h("a", { class: "link", role: this.role }, h("slot", null)));
    }
    get el() { return this; }
    static get style() { return amplifyLinkCss; }
};

const amplifyLoadingSpinnerCss = ":host{--spinner-circle-fill:var(--amplify-smoke-white);--spinner-bar-fill:var(--amplify-primary-color);--width:0.875rem;--height:0.875rem}.loading-spinner svg{-webkit-animation:loading-spinner 1s linear infinite;animation:loading-spinner 1s linear infinite;width:var(--width);height:var(--height)}.loading-spinner svg #spinner-circle{fill:var(--spinner-circle-fill)}.loading-spinner svg #spinner-bar{fill:var(--spinner-bar-fill)}@-webkit-keyframes loading-spinner{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loading-spinner{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}";

const AmplifyLoadingSpinner = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        attachShadow(this);
    }
    render() {
        return h("amplify-icon", { class: "loading-spinner", name: "loading" });
    }
    static get style() { return amplifyLoadingSpinnerCss; }
};

const amplifyNavCss = ".nav{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center}.nav>*{margin:0 0.5em}";

const AmplifyNav = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        attachShadow(this);
    }
    render() {
        return (h("nav", { class: "nav" }, h("slot", null)));
    }
    static get style() { return amplifyNavCss; }
};

const AmplifyOAuthButton = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        attachShadow(this);
        /** Federated credentials & configuration. */
        this.config = {};
    }
    signInWithOAuth(event) {
        event.preventDefault();
        Auth$1.federatedSignIn();
    }
    render() {
        return (h("amplify-sign-in-button", { onClick: event => this.signInWithOAuth(event), provider: "oauth" }, this.config.label || I18n.get(Translations.SIGN_IN_WITH_AWS)));
    }
};

const AmplifyPasswordField = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        /** Based on the type of field e.g. sign in, sign up, forgot password, etc. */
        this.fieldId = PASSWORD_SUFFIX;
        /** Used for the password label */
        this.label = Translations.PASSWORD_LABEL;
        /** Used for the placeholder label */
        this.placeholder = Translations.PASSWORD_PLACEHOLDER;
        /** The required flag in order to make an input required prior to submitting a form */
        this.required = false;
    }
    render() {
        return (h("amplify-form-field", { type: "password", name: "password", fieldId: this.fieldId, label: I18n.get(this.label), placeholder: I18n.get(this.placeholder), hint: this.hint, required: this.required, handleInputChange: this.handleInputChange, value: this.value, inputProps: this.inputProps, disabled: this.disabled }));
    }
};

const amplifyPhoneFieldCss = ".phone-field{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:start;align-items:flex-start;width:100%}.phone-field input{border-left:none;border-radius:0 3px 3px 0}";

const AmplifyPhoneField = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        /** Based on the type of field e.g. sign in, sign up, forgot password, etc. */
        this.fieldId = PHONE_SUFFIX;
        /** Used for the Phone label */
        this.label = Translations.PHONE_LABEL;
        /** Used for the placeholder label */
        this.placeholder = Translations.PHONE_PLACEHOLDER;
        /** The required flag in order to make an input required prior to submitting a form */
        this.required = false;
    }
    render() {
        return (h("div", null, h("amplify-form-field", { label: I18n.get(this.label), hint: this.hint }, h("div", { class: "phone-field", slot: "input" }, h("amplify-country-dial-code", { dialCode: this.dialCode, handleInputChange: this.handleInputChange }), h("amplify-input", { fieldId: this.fieldId, type: "tel", handleInputChange: this.handleInputChange, placeholder: I18n.get(this.placeholder), name: this.fieldId, value: this.value, inputProps: this.inputProps, disabled: this.disabled, required: this.required })))));
    }
    static get style() { return amplifyPhoneFieldCss; }
};

const amplifyPhotoPickerCss = ":host{--object-fit:cover;--hint-color:var(--amplify-grey);--header-color:var(--amplify-secondary-color);--header-size:var(--amplify-text-lg);--header-hint-size:var(--amplify-text-md);--placeholder-hint-size:var(--amplify-text-sm);--placeholder-border-color:var(--amplify-grey)}.photo-picker-container{max-width:50rem}img{-o-object-fit:var(--object-fit);object-fit:var(--object-fit);width:100%;height:100%}input[type=file]{width:100%;height:100%;display:inline-block;position:absolute;left:0;top:0;opacity:0;cursor:pointer}.header{color:var(--header-color);font-size:var(--header-size);font-weight:bold;margin-bottom:24px}.header-hint{color:var(--hint-color);font-size:var(--header-hint-size);word-break:break-word;margin-bottom:24px}.picker-body{position:relative;width:25rem;height:16rem;border:2px dotted var(--placeholder-border-color);padding:10px;margin-bottom:8px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;overflow:hidden}.placeholder-hint{color:var(--hint-color);font-family:Helvetica;font-style:italic;font-size:var(--placeholder-hint-size);word-break:break-word;margin-bottom:30px}";

const AmplifyPhotoPicker = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        attachShadow(this);
        /** Title string value */
        this.headerTitle = Translations.PHOTO_PICKER_TITLE;
        /** Header Hint value in string */
        this.headerHint = Translations.PHOTO_PICKER_HINT;
        /** Placeholder hint that goes under the placeholder image */
        this.placeholderHint = Translations.PHOTO_PICKER_PLACEHOLDER_HINT;
        /** Picker button text as string */
        this.buttonText = Translations.PHOTO_PICKER_BUTTON_TEXT;
        /** Function that handles file pick onClick */
        this.handleClick = () => { };
        this.handleInput = (ev) => {
            this.file = ev.target.files[0];
            const reader = new FileReader();
            reader.onload = (_e) => {
                const url = reader.result;
                this.previewState = url;
            };
            reader.readAsDataURL(this.file);
        };
    }
    componentWillLoad() {
        this.previewState = this.previewSrc;
    }
    render() {
        return (h("div", { class: "photo-picker-container" }, h("amplify-section", null, h("div", { class: "header" }, I18n.get(this.headerTitle)), h("div", { class: "header-hint" }, I18n.get(this.headerHint)), h("amplify-picker", { acceptValue: 'image/*', inputHandler: this.handleInput }, h("div", { class: "picker-body", slot: "picker" }, this.previewState ? (h("img", { src: `${this.previewState}` })) : (h("amplify-icon", { name: "photoPlaceholder" })))), h("div", { class: "placeholder-hint" }, I18n.get(this.placeholderHint)), h("amplify-button", { handleButtonClick: () => this.handleClick(this.file) }, I18n.get(this.buttonText)))));
    }
    static get style() { return amplifyPhotoPickerCss; }
};

const amplifyPickerCss = ".picker{position:relative;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}input[type=file]{width:100%;height:100%;display:inline-block;position:absolute;left:0;top:0;opacity:0;cursor:pointer}";

const AmplifyPicker = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        attachShadow(this);
        /** Picker button text */
        this.pickerText = Translations.PICKER_TEXT;
        /** File input accept value */
        this.acceptValue = '*/*';
    }
    render() {
        return (h("div", { class: "picker" }, h("slot", { name: "picker" }, h("amplify-button", null, I18n.get(this.pickerText))), h("input", { title: I18n.get(this.pickerText), type: "file", accept: this.acceptValue, onChange: e => this.inputHandler(e) })));
    }
    static get style() { return amplifyPickerCss; }
};

const amplifyRadioButtonCss = ":host{--font-family:var(--amplify-font-family)}.radio-button{display:block;width:100%;padding:16px;font-size:var(--amplify-text-sm);font-family:var(--font-family)}.radio-button input{margin-right:12px}";

const AmplifyRadioButton = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        /** (Optional) The placeholder for the input element.  Using hints is recommended, but placeholders can also be useful to convey information to users. */
        this.placeholder = '';
        /** If `true`, the radio button is selected. */
        this.checked = false;
        /** If `true`, the checkbox is disabled */
        this.disabled = false;
    }
    render() {
        return (h("span", { class: "radio-button" }, h("input", Object.assign({ type: "radio", name: this.name, value: this.value, onInput: this.handleInputChange, placeholder: this.placeholder, id: this.fieldId, checked: this.checked, disabled: this.disabled }, this.inputProps)), h("amplify-label", { htmlFor: this.fieldId }, this.label)));
    }
    static get style() { return amplifyRadioButtonCss; }
};

const logger$a = new ConsoleLogger('amplify-require-new-password');
const AmplifyRequireNewPassword = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        attachShadow(this);
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
                const user = await Auth$1.currentAuthenticatedUser();
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
            logger$a.error(`error in phone number field - ${err}`);
        }
    }
    async completeNewPassword(event) {
        if (event) {
            event.preventDefault();
        }
        if (!Auth$1 || typeof Auth$1.completeNewPassword !== 'function') {
            throw new Error(NO_AUTH_MODULE_FOUND);
        }
        this.loading = true;
        try {
            const user = await Auth$1.completeNewPassword(this.currentUser, this.password, this.requiredAttributes);
            logger$a.debug('complete new password', user);
            switch (user.challengeName) {
                case ChallengeName.SMSMFA:
                    this.handleAuthStateChange(AuthState.ConfirmSignIn, user);
                    break;
                case ChallengeName.MFASetup:
                    logger$a.debug('TOTP setup', user.challengeParam);
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

const imageFileType = new Set([
    'apng',
    'bmp',
    'gif',
    'ico',
    'cur',
    'jpg',
    'jpeg',
    'jfif',
    'pjpeg',
    'pjp',
    'png',
    'svg',
    'tif',
    'tiff',
    'webp',
]);
const calcKey = (file, fileToKey) => {
    const { name, size, type } = file;
    let key = encodeURI(name);
    if (fileToKey) {
        if (typeof fileToKey === 'string') {
            key = fileToKey;
        }
        else if (typeof fileToKey === 'function') {
            key = fileToKey({ name, size, type });
        }
        else {
            key = encodeURI(JSON.stringify(fileToKey));
        }
        if (!key) {
            key = 'empty_key';
        }
    }
    return key.replace(/\s/g, '_');
};
const getStorageObject = async (key, level, track, identityId, logger) => {
    if (!Storage || typeof Storage.get !== 'function') {
        throw new Error(NO_STORAGE_MODULE_FOUND);
    }
    try {
        const src = await Storage.get(key, { level, track, identityId });
        logger.debug('Storage image get', src);
        return src;
    }
    catch (error) {
        throw new Error(error);
    }
};
const readFileAsync = (blob) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            resolve(reader.result);
        };
        reader.onerror = () => {
            reject('Failed to read file!');
            reader.abort();
        };
        reader.readAsText(blob);
    });
};
const getTextSource = async (key, level, track, identityId, logger) => {
    if (!Storage || typeof Storage.get !== 'function') {
        throw new Error(NO_STORAGE_MODULE_FOUND);
    }
    try {
        const textSrc = await Storage.get(key, {
            download: true,
            level,
            track,
            identityId,
        });
        logger.debug(textSrc);
        const text = (await readFileAsync(textSrc['Body']));
        return text;
    }
    catch (error) {
        throw new Error(error);
    }
};
const putStorageObject = async (key, body, level, track, contentType, logger) => {
    if (!Storage || typeof Storage.put !== 'function') {
        throw new Error(NO_STORAGE_MODULE_FOUND);
    }
    try {
        const data = await Storage.put(key, body, {
            contentType,
            level,
            track,
        });
        logger.debug('Upload data', data);
    }
    catch (error) {
        throw new Error(error);
    }
};

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

const REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return stringify(rnds);
}

const amplifyS3AlbumCss = ":host{--overlay-bg-color:rgba(0, 0, 0, 0.15)}.album-container{-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%;margin:0 auto;padding:0 2rem}.grid-row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:-1rem -1rem;padding-bottom:3rem}.grid-item{position:relative;-ms-flex:1 0 22rem;flex:1 0 22rem;-ms-flex-positive:1;flex-grow:1;margin:1rem;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}amplify-s3-image{--width:22rem;--height:20rem;border-radius:5px;-o-object-fit:cover;object-fit:cover}.img-overlay{display:none;width:100%;height:21rem;position:absolute;top:0;left:0;background-color:var(--overlay-bg-color)}.grid-item:hover .img-overlay{display:block}";

const logger$b = new Logger('S3Album');
const AmplifyS3Album = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        attachShadow(this);
        /** The content type header used when uploading to S3 */
        this.contentType = 'binary/octet-stream';
        /** The access level of the files */
        this.level = AccessLevel.Public;
        /** Boolean to enable or disable picker */
        this.picker = true;
        /** Picker button text */
        this.pickerText = Translations.PICKER_TEXT;
        this.albumItems = [];
        this.imgArr = {};
        this.list = async () => {
            const { path = '', level, track, identityId } = this;
            logger$b.debug('Album path: ' + path);
            if (!Storage || typeof Storage.list !== 'function') {
                throw new Error(NO_STORAGE_MODULE_FOUND);
            }
            try {
                const data = await Storage.list(path, {
                    level,
                    track,
                    identityId,
                });
                this.marshal(data);
            }
            catch (error) {
                logger$b.warn(error);
            }
        };
        this.marshal = (list) => {
            list.forEach((item) => {
                const name = item.key.toLowerCase();
                const ext = name.split('.')[1];
                if (imageFileType.has(ext)) {
                    if (!item.contentType ||
                        (item.contentType && item.contentType === 'binary/octet-stream')) {
                        item.contentType = this.getContentType(item);
                    }
                }
            });
            const filtered = list.filter((item) => item.contentType && item.contentType.startsWith('image/'));
            let items = this.filter ? this.filter(filtered) : filtered;
            items = this.sort ? this.sort(items) : items;
            this.albumItems = items;
            logger$b.debug('album items', this.albumItems);
            this.constructImgArray(this.albumItems);
        };
        this.constructImgArray = (list) => {
            list.map(item => {
                this.imgArr[`${item['key']}`] = item['key'];
            });
        };
        this.handlePick = async (event) => {
            const file = event.target.files[0];
            const { path = '', level, track, fileToKey } = this;
            const key = path + calcKey(file, fileToKey);
            try {
                await putStorageObject(key, file, level, track, file['type'], logger$b);
            }
            catch (error) {
                logger$b.error(error);
                throw new Error(error);
            }
            if (Object.keys(this.imgArr).includes(key)) {
                this.albumItems = [...this.albumItems];
                this.imgArr[key] = `${key}-${v4()}`;
            }
            else {
                const filtered = [
                    ...this.albumItems,
                    ...(this.filter ? this.filter([{ key }]) : [{ key }]),
                ];
                this.albumItems = this.sort ? this.sort(filtered) : filtered;
            }
        };
    }
    getContentType(item) {
        return filenameToContentType(item.key, 'image/*');
    }
    componentWillLoad() {
        this.list();
    }
    render() {
        return (h("div", null, h("div", { class: "album-container" }, h("div", { class: "grid-row" }, this.albumItems.map(item => {
            return (h("div", { class: "grid-item", key: `key-${item.key}` }, h("amplify-s3-image", { key: this.imgArr[item.key], imgKey: item.key, level: this.level, path: this.path, identityId: this.identityId, track: this.track, handleOnError: this.handleOnError, handleOnLoad: this.handleOnLoad }), h("span", { class: "img-overlay" })));
        }))), this.picker && (h("amplify-picker", { pickerText: I18n.get(this.pickerText), inputHandler: e => this.handlePick(e), acceptValue: "image/*" }))));
    }
    static get style() { return amplifyS3AlbumCss; }
};

const amplifyS3ImageCss = ":host{height:inherit;width:inherit;--height:inherit;--width:inherit}img{height:var(--height);width:var(--width)}";

const logger$c = new Logger('S3Image');
const AmplifyS3Image = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        attachShadow(this);
        /** The content type header used when uploading to S3 */
        this.contentType = 'binary/octet-stream';
        /** The access level of the image */
        this.level = AccessLevel.Public;
    }
    async watchHandler() {
        await this.load();
    }
    async componentWillLoad() {
        await this.load();
    }
    async load() {
        const { imgKey, path, body, contentType, level, track, identityId } = this;
        if (!imgKey && !path) {
            logger$c.debug('empty imgKey and path');
            return;
        }
        const key = imgKey || path;
        logger$c.debug('loading ' + key + '...');
        try {
            if (body) {
                await putStorageObject(imgKey, body, level, track, contentType, logger$c);
            }
            this.src = await getStorageObject(key, level, track, identityId, logger$c);
        }
        catch (err) {
            logger$c.debug(err);
            throw new Error(err);
        }
    }
    render() {
        return (h(Host, null, this.src && (h("img", Object.assign({ src: this.src, alt: this.alt, onLoad: this.handleOnLoad, onError: this.handleOnError }, this.imgProps)))));
    }
    static get watchers() { return {
        "body": ["watchHandler"]
    }; }
    static get style() { return amplifyS3ImageCss; }
};

const logger$d = new Logger('S3ImagePicker');
const AmplifyS3ImagePicker = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        /** The content type header used when uploading to S3 */
        this.contentType = 'binary/octet-stream';
        /** The access level of the image */
        this.level = AccessLevel.Public;
        /** Title string value */
        this.headerTitle = Translations.IMAGE_PICKER_TITLE;
        /** Header Hint value in string */
        this.headerHint = Translations.IMAGE_PICKER_HINT;
        /** Placeholder hint that goes under the placeholder image */
        this.placeholderHint = Translations.IMAGE_PICKER_PLACEHOLDER_HINT;
        /** Upload Button Text as string */
        this.buttonText = Translations.IMAGE_PICKER_BUTTON_TEXT;
        this.handlePick = async (file) => {
            const { path = '', level, track, identityId, fileToKey } = this;
            const key = path + calcKey(file, fileToKey);
            try {
                await putStorageObject(key, file, level, track, file['type'], logger$d);
                this.src = await getStorageObject(key, level, track, identityId, logger$d);
            }
            catch (error) {
                logger$d.error(error);
                throw new Error(error);
            }
        };
    }
    render() {
        return (h(Host, null, h("slot", { name: "photo-picker" }, h("amplify-photo-picker", { previewSrc: this.src, handleClick: this.handlePick, headerTitle: I18n.get(this.headerTitle), headerHint: I18n.get(this.headerHint), placeholderHint: I18n.get(this.placeholderHint), buttonText: I18n.get(this.buttonText) }))));
    }
};

const amplifyS3TextCss = ":host{--container-color:var(--amplify-smoke-white);--border-color:var(--amplify-light-grey);--font-size:var(--amplify-text-md);--text-color:var(--amplify-secondary-color)}.text-container{background-color:var(--container-color);border:1px solid var(--border-color);border-radius:5px;margin-bottom:10px}pre{display:block;margin:0.5rem 0;padding:0.5rem;line-height:1rem;max-height:50rem;font-size:var(--font-size);color:var(--text-color);word-break:break-all;overflow-y:scroll;overflow-x:auto}";

const logger$e = new Logger('S3Text');
const AmplifyS3Text = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        attachShadow(this);
        /** The content type header used when uploading to S3 */
        this.contentType = 'text/*';
        /** The access level of the text file */
        this.level = AccessLevel.Public;
        /** Fallback content */
        this.fallbackText = Translations.TEXT_FALLBACK_CONTENT;
    }
    async watchHandler() {
        await this.load();
    }
    async componentWillLoad() {
        await this.load();
    }
    async load() {
        const { path, textKey, body, contentType, level, track, identityId } = this;
        if (!textKey && !path) {
            logger$e.debug('empty textKey and path');
            return;
        }
        const key = textKey || path;
        logger$e.debug('loading ' + key + '...');
        if (body) {
            await putStorageObject(textKey, body, level, track, contentType, logger$e);
        }
        try {
            this.src = await getTextSource(key, level, track, identityId, logger$e);
        }
        catch (err) {
            logger$e.debug(err);
            throw new Error(err);
        }
    }
    render() {
        return (h("div", null, h("div", { class: "text-container" }, this.src ? (h("pre", null, this.src)) : (h("pre", null, I18n.get(this.fallbackText))))));
    }
    static get watchers() { return {
        "textKey": ["watchHandler"],
        "body": ["watchHandler"]
    }; }
    static get style() { return amplifyS3TextCss; }
};

const logger$f = new Logger('S3TextPicker');
const AmplifyS3TextPicker = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        attachShadow(this);
        /** The content type header used when uploading to S3 */
        this.contentType = 'text/*';
        /** The access level of the text file */
        this.level = AccessLevel.Public;
        /** Fallback content for aplify-s3-text */
        this.fallbackText = Translations.PICKER_TEXT;
    }
    async handleInput(event) {
        const file = event.target.files[0];
        const { path = '', level, fileToKey, track } = this;
        const key = path + calcKey(file, fileToKey);
        if (!file) {
            throw new Error('No file was selected');
        }
        try {
            await putStorageObject(key, file, level, track, file['type'], logger$f);
            this.src = key;
        }
        catch (error) {
            logger$f.debug(error);
            throw new Error(error);
        }
    }
    render() {
        return (h(Host, null, h("amplify-s3-text", { textKey: this.src, path: this.path, level: this.level, track: this.track, identityId: this.identityId, contentType: this.contentType, fallbackText: I18n.get(this.fallbackText) }), h("amplify-picker", { inputHandler: e => this.handleInput(e), acceptValue: 'text/*' })));
    }
};

const amplifySectionCss = "amplify-section{--font-family:var(--amplify-font-family);--background-color:var(--amplify-background-color)}.section{position:relative;margin-bottom:var(--margin-bottom, 20px);background-color:var(--background-color);padding:var(--padding, 35px 40px);text-align:left;display:inline-block;border-radius:var(--border-radius, 6px);-webkit-box-shadow:var(--box-shadow, 1px 1px 4px 0 rgba(0, 0, 0, 0.15));box-shadow:var(--box-shadow, 1px 1px 4px 0 rgba(0, 0, 0, 0.15));-webkit-box-sizing:border-box;box-sizing:border-box;font-family:var(--font-family);width:100%;min-width:var(--min-width, 20rem)}@media (min-width: 672px){.section{width:var(--width, 28.75rem)}}";

const AmplifySection = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        /** Equivalent to html section role */
        this.role = 'application';
    }
    render() {
        return (h("section", { class: "section", role: this.role }, h("slot", null)));
    }
    get el() { return this; }
    static get style() { return amplifySectionCss; }
};

const amplifySelectCss = ":host{--color:var(--amplify-secondary-color);--background-color:var(--amplify-secondary-contrast);--border-color:var(--amplify-light-grey);--border-focus:var(--amplify-primary-color);--background-image:linear-gradient(45deg, transparent 50%, gray 50%),\n  \tlinear-gradient(135deg, gray 50%, transparent 50%),\n  \tlinear-gradient(to right, #ccc, #ccc)}.select{padding:1rem 1.75rem 1rem 1rem;font-size:var(--amplify-text-sm);color:var(--color);background-color:var(--background-color);border:1px solid var(--border-color);border-radius:3px 0 0 3px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;-ms-flex-preferred-size:auto;flex-basis:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:0;height:3.125rem;background-image:var(--background-image);background-position:calc(100% - 1rem) calc(1em + 0.5rem), calc(100% - 0.7rem) calc(1em + 0.5rem), calc(100% - 2.5em) 0.5em;background-size:6px 5px, 6px 5px, 0px 1.5em;background-repeat:no-repeat}.select :focus{outline:none;border-color:var(--border-focus)}";

const DEFAULT_SELECT_OPTION = [{ label: '', value: 1 }];
const logger$g = new Logger('amplify-select');
const AmplifySelect = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        attachShadow(this);
        /** The options of the select input. Must be an Array of Objects with an Object shape of {label: string, value: string|number} */
        this.options = DEFAULT_SELECT_OPTION;
    }
    componentWillLoad() {
        this.selectOptions = this.contructSelectOptions(this.options);
    }
    handleSelectOptionsChange() {
        this.selectOptions = this.contructSelectOptions(this.options);
    }
    isSelectedOptionValid(selected) {
        if (selected && !this.options.some(option => option.value === selected)) {
            logger$g.warn('Selected option does not exist in options values, falling back to initial option');
            return false;
        }
        return true;
    }
    contructSelectOptions(opts) {
        this.isSelectedOptionValid(this.selected);
        const content = [];
        opts.forEach((opt) => {
            content.push(h("option", { value: opt.value, selected: opt.value === this.selected }, opt.label));
        });
        return content;
    }
    render() {
        return (h("select", { name: this.fieldId, id: this.fieldId, class: "select", onChange: this.handleInputChange }, this.selectOptions));
    }
    static get watchers() { return {
        "options": ["handleSelectOptionsChange"],
        "selected": ["handleSelectOptionsChange"]
    }; }
    static get style() { return amplifySelectCss; }
};

const logger$h = new Logger('SelectMFAType');
const AmplifySelectMFAType = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        attachShadow(this);
        /** Fires when Verify is clicked */
        this.handleSubmit = event => this.verify(event);
        this.TOTPSetup = false;
        this.selectMessage = null;
        this.MFAMethod = null;
        this.isTOTP = false;
        this.isNoMFA = false;
        this.isSMS = false;
        this.loading = false;
        this.isToastVisible = false;
    }
    handleRadioButtonChange(event) {
        this.TOTPSetup = false;
        this.selectMessage = null;
        // Reseting state values to default
        this.isNoMFA = false;
        this.isTOTP = false;
        this.isSMS = false;
        this.isToastVisible = false;
        const { value, type, checked } = event.target;
        const checkType = ['radio', 'checkbox'].includes(type);
        if (value === MfaOption.SMS && checkType) {
            this.isSMS = checked;
        }
        if (value === MfaOption.TOTP && checkType) {
            this.isTOTP = checked;
        }
        if (value === MfaOption.NOMFA && checkType) {
            this.isNoMFA = checked;
        }
    }
    async verify(event) {
        // avoid submitting the form
        if (event) {
            event.preventDefault();
        }
        logger$h.debug('MFA Type Values', {
            TOTP: this.isTOTP,
            SMS: this.isSMS,
            'No MFA': this.isNoMFA,
        });
        if (this.isTOTP) {
            this.MFAMethod = MfaOption.TOTP;
        }
        else if (this.isSMS) {
            this.MFAMethod = MfaOption.SMS;
        }
        else if (this.isNoMFA) {
            this.MFAMethod = MfaOption.NOMFA;
        }
        const user = this.authData;
        if (!Auth$1 || typeof Auth$1.setPreferredMFA !== 'function') {
            throw new Error(NO_AUTH_MODULE_FOUND);
        }
        this.loading = true;
        try {
            const preferredMFAData = await Auth$1.setPreferredMFA(user, this.MFAMethod);
            logger$h.debug('Set Preferred MFA Succeeded', preferredMFAData);
            this.selectMessage = `${I18n.get(Translations.SUCCESS_MFA_TYPE)} ${this.MFAMethod}`;
        }
        catch (error) {
            const { message } = error;
            if (message === USER_NOT_SETUP_SOFTWARE_TOKEN_MFA ||
                message === USER_NOT_VERIFIED_SOFTWARE_TOKEN_MFA) {
                this.TOTPSetup = true;
                this.selectMessage = I18n.get(Translations.SETUP_TOTP_REQUIRED);
            }
            else {
                logger$h.debug('Set Preferred MFA failed', error);
                this.selectMessage = I18n.get(Translations.UNABLE_TO_SETUP_MFA_AT_THIS_TIME);
            }
        }
        finally {
            this.loading = false;
            this.isToastVisible = true;
        }
    }
    contentBuilder() {
        if (!this.MFATypes || Object.keys(this.MFATypes).length < 2) {
            logger$h.debug(I18n.get(Translations.LESS_THAN_TWO_MFA_VALUES_MESSAGE));
            return (h("div", null, h("a", null, I18n.get(Translations.LESS_THAN_TWO_MFA_VALUES_MESSAGE))));
        }
        const { SMS, TOTP, Optional } = this.MFATypes;
        return (h("amplify-form-section", { submitButtonText: I18n.get(Translations.SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT), headerText: I18n.get(Translations.SELECT_MFA_TYPE_HEADER_TEXT), handleSubmit: event => this.handleSubmit(event), loading: this.loading }, SMS ? (h("amplify-radio-button", { key: "sms", name: "MFAType", value: "SMS", label: "SMS", handleInputChange: event => this.handleRadioButtonChange(event) })) : null, TOTP ? (h("amplify-radio-button", { key: "totp", name: "MFAType", value: "TOTP", label: "TOTP", handleInputChange: event => this.handleRadioButtonChange(event) })) : null, Optional ? (h("amplify-radio-button", { key: "noMFA", name: "MFAType", value: "NOMFA", label: "No MFA", handleInputChange: event => this.handleRadioButtonChange(event) })) : null));
    }
    renderToast() {
        if (this.isToastVisible && this.selectMessage) {
            return (h("amplify-toast", { message: this.selectMessage, handleClose: () => {
                    this.selectMessage = null;
                    this.isToastVisible = false;
                } }));
        }
        return null;
    }
    render() {
        return (h("div", null, this.contentBuilder(), this.TOTPSetup ? h("amplify-totp-setup", { user: this.authData }) : null, this.renderToast()));
    }
};

const amplifySignInCss = ":host{--footer-size:var(--amplify-text-sm);--footer-color:var(--amplify-grey);--footer-font-family:var(--amplify-font-family);--font-weight:var(--amplify-font-weight)}.sign-in-form-footer{font-family:var(--footer-font-family);font-size:var(--footer-size);color:var(--footer-color);font-weight:--font-weight;display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.sign-in-form-footer amplify-button{margin-bottom:0.625rem}@media (min-width: 672px){.sign-in-form-footer{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:baseline;align-items:baseline}.sign-in-form-footer amplify-button{margin-bottom:0}}.sign-in-form-footer *+*{margin-bottom:15px}.full-width-footer-content{width:100%}";

const AmplifySignIn = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        attachShadow(this);
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
    static get style() { return amplifySignInCss; }
};

const amplifySignInButtonCss = ".sc-amplify-sign-in-button-h{--button-color:var(--amplify-secondary-color);--amazon-button-background:var(--amplify-primary-color);--amazon-button-color:var(--amplify-primary-contrast);--auth0-button-background:#eb5424;--auth0--button-border-color:#e14615;--auth0-button-color:var(--amplify-white);--facebook-button-background:#4267b2;--facebook--button-border-color:#4267b2;--facebook-button-color:var(--amplify-white);--google-button-background:#4285f4;--google--button-border-color:#4285f4;--google-button-color:var(--amplify-white);--oauth-button-background:var(--amplify-white);--oauth--button-color:#152939}.sign-in-button.sc-amplify-sign-in-button button.sc-amplify-sign-in-button{position:relative;width:100%;border-radius:4px;margin-bottom:10px;cursor:pointer;padding:0;color:var(--button-color);font-size:var(--amplify-text-sm);-webkit-box-sizing:content-box;box-sizing:content-box}.sign-in-button.sc-amplify-sign-in-button button.sc-amplify-sign-in-button:hover{opacity:0.8}.sign-in-button.amazon.sc-amplify-sign-in-button button.sc-amplify-sign-in-button{background-color:var(--amazon-button-background);border:none;color:var(--amazon-button-color);font-family:\"Amazon Ember\"}.sign-in-button.auth0.sc-amplify-sign-in-button button.sc-amplify-sign-in-button{background-color:var(--auth0-button-background);font-family:Roboto;border:1px solid var(--auth0--button-border-color);color:var(--auth0-button-color)}.sign-in-button.facebook.sc-amplify-sign-in-button button.sc-amplify-sign-in-button{background-color:var(--facebook-button-background);border-color:var(--facebook--button-border-color);font-family:\"Helvetica Neue\";color:var(--facebook-button-color)}.sign-in-button.google.sc-amplify-sign-in-button button.sc-amplify-sign-in-button{background-color:var(--google-button-background);font-family:Roboto;border:1px solid var(--google--button-border-color);color:var(--google-button-color)}.sign-in-button.oauth.sc-amplify-sign-in-button button.sc-amplify-sign-in-button{background-color:var(--oauth-button-background);color:var(--oauth--button-color)}.sign-in-button.sc-amplify-sign-in-button .icon.sc-amplify-sign-in-button{position:absolute;left:0}.sign-in-button.amazon.sc-amplify-sign-in-button .icon.sc-amplify-sign-in-button{padding:10px;height:32px;width:32px}.sign-in-button.auth0.sc-amplify-sign-in-button .icon.sc-amplify-sign-in-button{border-radius:4px 0 0 4px;height:28px;width:28px;padding:12px;color:#fff}.sign-in-button.facebook.sc-amplify-sign-in-button .icon.sc-amplify-sign-in-button{height:33px;width:18px;padding:10px 14px}.sign-in-button.google.sc-amplify-sign-in-button .icon.sc-amplify-sign-in-button{background-color:#fff;border-radius:4px 0 0 4px;height:28px;width:28px;padding:12px}.sign-in-button.sc-amplify-sign-in-button .content.sc-amplify-sign-in-button{text-align:center;display:block;padding:18px 0;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}";

const AmplifySignInButton = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h("div", { class: `sign-in-button ${this.provider}` }, h("button", null, this.provider in icons && (h("span", { class: "icon" }, h("amplify-icon", { name: this.provider }))), h("span", { class: "content" }, h("slot", null)))));
    }
    static get style() { return amplifySignInButtonCss; }
};

const AmplifySignOut = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        attachShadow(this);
        /** Auth state change handler for this component */
        this.handleAuthStateChange = dispatchAuthStateChangeEvent;
        /** Text inside of the Sign Out button */
        this.buttonText = Translations.SIGN_OUT;
    }
    async signOut(event) {
        if (event)
            event.preventDefault();
        // TODO: Federated Sign Out
        if (!Auth$1 || typeof Auth$1.signOut !== 'function') {
            throw new Error(NO_AUTH_MODULE_FOUND);
        }
        try {
            await Auth$1.signOut();
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

const amplifySignUpCss = "amplify-sign-up{--footer-font-family:var(--amplify-font-family);--footer-font-size:var(--amplify-text-sm);--footer-color:var(--amplify-grey);--font-weight:var(--amplify-font-weight)}.sign-up-form-footer{font-family:var(--footer-font-family);font-size:var(--footer-font-size);color:var(--footer-color);font-weight:--font-weight;display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.sign-up-form-footer amplify-button{margin-bottom:0.625rem}@media (min-width: 672px){.sign-up-form-footer{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:baseline;align-items:baseline}.sign-up-form-footer amplify-button{margin-bottom:0}}.sign-up-form-footer *+*{margin-bottom:15px}";

const AmplifySignUp = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        attachShadow(this);
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
        const data = await Auth$1.signUp(params);
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
        if (!Auth$1 || typeof Auth$1.signUp !== 'function') {
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
    static get style() { return amplifySignUpCss; }
};

const amplifyStrikeCss = ".sc-amplify-strike-h{--color:var(--amplify-grey);--border-color:var(--amplify-light-grey);--content-background:var(--amplify-white);display:block;width:100%;text-align:center;border-bottom:1px solid var(--border-color);line-height:0.1em;margin:32px 0;color:var(--color)}.strike-content.sc-amplify-strike{background:var(--content-background);padding:0 25px;font-size:var(--amplify-text-sm);font-weight:500}";

const AmplifyStrike = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h("span", { class: "strike-content" }, h("slot", null)));
    }
    static get style() { return amplifyStrikeCss; }
};

const amplifyToastCss = ":host{--background-color:var(--amplify-secondary-tint);--color:var(--amplify-white);--font-size:var(--amplify-text-sm);--font-family:var(--amplify-font-family);--close-icon-color:var(--amplify-white);--close-icon-hover:var(--amplify-red)}.toast-icon{padding-right:5px}.toast{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;position:absolute;top:0;left:0;width:100%;z-index:99;-webkit-box-shadow:0 0 5px 0 rgba(0, 0, 0, 0.3);box-shadow:0 0 5px 0 rgba(0, 0, 0, 0.3);padding:16px;background-color:var(--background-color);font-size:var(--font-size);color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:5px;font-family:var(--font-family)}.toast>span{margin-right:10px}.toast-close{margin-left:auto;-ms-flex-item-align:center;align-self:center;position:relative;width:18px;height:18px;overflow:hidden;cursor:pointer;background:transparent;border:none}.toast-close::before,.toast-close::after{content:\"\";position:absolute;height:2px;width:100%;top:50%;left:0;margin-top:-1px;background:var(--close-icon-color)}.toast-close:hover::before,.toast-close:hover::after{background:var(--close-icon-hover)}.toast-close::before{-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg)}.toast-close::after{-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-ms-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg)}";

const AmplifyToast = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        attachShadow(this);
        /** Message to be displayed inside the toast*/
        this.message = '';
    }
    /*
  TODO #170365145: Work on a helper function that will populate and
  update class colors for success / warning / failure messages
  */
    render() {
        return (h("div", { class: "toast" }, h("amplify-icon", { class: "toast-icon", name: "warning" }), this.message ? h("span", null, this.message) : null, h("slot", null), h("button", { class: "toast-close", onClick: this.handleClose })));
    }
    static get style() { return amplifyToastCss; }
};

const amplifyTooltipCss = ":host{--font-family:var(--amplify-font-family);--background-color:var(--amplify-secondary-color);--color:var(--amplify-secondary-contrast);--border-color:var(--amplify-secondary-color)}.tooltip{display:inline;position:relative;font-size:var(--amplify-text-xxs);font-family:var(--font-family);margin:0 0 0 16px}.tooltip :after{background-color:var(--background-color);border-radius:2px;bottom:46px;color:var(--color);content:attr(data-text);text-decoration:none;padding:10px;left:50%;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%);position:absolute;white-space:nowrap;opacity:0;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out}.tooltip :before{border:solid;border-color:var(--border-color) transparent transparent transparent;border-width:5px;bottom:36px;content:\"\";left:50%;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%);position:absolute;font-size:var(--amplify-text-sm);opacity:0;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out}.tooltip :hover:after{opacity:1;-webkit-transition-delay:1s;transition-delay:1s}.tooltip :hover:before{opacity:1;-webkit-transition-delay:1s;transition-delay:1s}.auto-show-tooltip :after{opacity:1;-webkit-transition-delay:1s;transition-delay:1s}.auto-show-tooltip :before{opacity:1;-webkit-transition-delay:1s;transition-delay:1s}";

const AmplifyTooltip = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        attachShadow(this);
        /** (Optional) Whether or not the tooltip should be automatically shown, i.e. not disappear when not hovered */
        this.shouldAutoShow = false;
    }
    render() {
        return (h("div", { class: { tooltip: true, 'auto-show-tooltip': this.shouldAutoShow }, "data-text": this.text }, h("slot", null)));
    }
    static get style() { return amplifyTooltipCss; }
};

// can-promise has a crash in some versions of react native that dont have
// standard global objects
// https://github.com/soldair/node-qrcode/issues/157

var canPromise = function () {
  return typeof Promise === 'function' && Promise.prototype && Promise.prototype.then
};

var toString = {}.toString;

var isarray = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

function typedArraySupport () {
  // Can typed array instances be augmented?
  try {
    var arr = new Uint8Array(1);
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }};
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();

var K_MAX_LENGTH = Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff;

function Buffer (arg, offset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, offset, length)
  }

  if (typeof arg === 'number') {
    return allocUnsafe(this, arg)
  }

  return from(this, arg, offset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;

  // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true,
      enumerable: false,
      writable: false
    });
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

function createBuffer (that, length) {
  var buf;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    buf = new Uint8Array(length);
    buf.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    buf = that;
    if (buf === null) {
      buf = new Buffer(length);
    }
    buf.length = length;
  }

  return buf
}

function allocUnsafe (that, size) {
  var buf = createBuffer(that, size < 0 ? 0 : checked(size) | 0);

  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      buf[i] = 0;
    }
  }

  return buf
}

function fromString (that, string) {
  var length = byteLength(string) | 0;
  var buf = createBuffer(that, length);

  var actual = buf.write(string);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
  }

  return buf
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  var buf = createBuffer(that, length);
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255;
  }
  return buf
}

function fromArrayBuffer (that, array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  var buf;
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array);
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset);
  } else {
    buf = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    buf.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    buf = fromArrayLike(that, buf);
  }

  return buf
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0;
    var buf = createBuffer(that, len);

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len);
    return buf
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function utf8ToBytes (string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue
        }

        // valid lead
        leadSurrogate = codePoint;

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null;

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      );
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      );
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      );
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function byteLength (string) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0

  return utf8ToBytes(string).length
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i];
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function from (that, value, offset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, offset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value)
  }

  return fromObject(that, value)
}

Buffer.prototype.write = function write (string, offset, length) {
  // Buffer#write(string)
  if (offset === undefined) {
    length = this.length;
    offset = 0;
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    length = this.length;
    offset = 0;
  // Buffer#write(string, offset[, length])
  } else if (isFinite(offset)) {
    offset = offset | 0;
    if (isFinite(length)) {
      length = length | 0;
    } else {
      length = undefined;
    }
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  return utf8Write(this, string, offset, length)
};

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;

  var newBuf;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf
};

Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start;

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length;
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    );
  }

  return len
};

Buffer.prototype.fill = function fill (val, start, end) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      end = this.length;
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0);
      if (code < 256) {
        val = code;
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;

  if (!val) val = 0;

  var i;
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : new Buffer(val);
    var len = bytes.length;
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this
};

Buffer.concat = function concat (list, length) {
  if (!isarray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return createBuffer(null, 0)
  }

  var i;
  if (length === undefined) {
    length = 0;
    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = allocUnsafe(null, length);
  var pos = 0;
  for (i = 0; i < list.length; ++i) {
    var buf = list[i];
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos);
    pos += buf.length;
  }
  return buffer
};

Buffer.byteLength = byteLength;

Buffer.prototype._isBuffer = true;
Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
};

var alloc = function (size) {
  var buffer = new Buffer(size);
  buffer.fill(0);
  return buffer
};

var from_1 = function (data) {
  return new Buffer(data)
};

var typedarrayBuffer = {
	alloc: alloc,
	from: from_1
};

var toSJISFunction;
var CODEWORDS_COUNT = [
  0, // Not used
  26, 44, 70, 100, 134, 172, 196, 242, 292, 346,
  404, 466, 532, 581, 655, 733, 815, 901, 991, 1085,
  1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185,
  2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706
];

/**
 * Returns the QR Code size for the specified version
 *
 * @param  {Number} version QR Code version
 * @return {Number}         size of QR code
 */
var getSymbolSize = function getSymbolSize (version) {
  if (!version) throw new Error('"version" cannot be null or undefined')
  if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40')
  return version * 4 + 17
};

/**
 * Returns the total number of codewords used to store data and EC information.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Data length in bits
 */
var getSymbolTotalCodewords = function getSymbolTotalCodewords (version) {
  return CODEWORDS_COUNT[version]
};

/**
 * Encode data with Bose-Chaudhuri-Hocquenghem
 *
 * @param  {Number} data Value to encode
 * @return {Number}      Encoded value
 */
var getBCHDigit = function (data) {
  var digit = 0;

  while (data !== 0) {
    digit++;
    data >>>= 1;
  }

  return digit
};

var setToSJISFunction = function setToSJISFunction (f) {
  if (typeof f !== 'function') {
    throw new Error('"toSJISFunc" is not a valid function.')
  }

  toSJISFunction = f;
};

var isKanjiModeEnabled = function () {
  return typeof toSJISFunction !== 'undefined'
};

var toSJIS = function toSJIS (kanji) {
  return toSJISFunction(kanji)
};

var utils = {
	getSymbolSize: getSymbolSize,
	getSymbolTotalCodewords: getSymbolTotalCodewords,
	getBCHDigit: getBCHDigit,
	setToSJISFunction: setToSJISFunction,
	isKanjiModeEnabled: isKanjiModeEnabled,
	toSJIS: toSJIS
};

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
    return commonjsRequire();
  }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var errorCorrectionLevel = createCommonjsModule(function (module, exports) {
exports.L = { bit: 1 };
exports.M = { bit: 0 };
exports.Q = { bit: 3 };
exports.H = { bit: 2 };

function fromString (string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string')
  }

  var lcStr = string.toLowerCase();

  switch (lcStr) {
    case 'l':
    case 'low':
      return exports.L

    case 'm':
    case 'medium':
      return exports.M

    case 'q':
    case 'quartile':
      return exports.Q

    case 'h':
    case 'high':
      return exports.H

    default:
      throw new Error('Unknown EC Level: ' + string)
  }
}

exports.isValid = function isValid (level) {
  return level && typeof level.bit !== 'undefined' &&
    level.bit >= 0 && level.bit < 4
};

exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return value
  }

  try {
    return fromString(value)
  } catch (e) {
    return defaultValue
  }
};
});

function BitBuffer () {
  this.buffer = [];
  this.length = 0;
}

BitBuffer.prototype = {

  get: function (index) {
    var bufIndex = Math.floor(index / 8);
    return ((this.buffer[bufIndex] >>> (7 - index % 8)) & 1) === 1
  },

  put: function (num, length) {
    for (var i = 0; i < length; i++) {
      this.putBit(((num >>> (length - i - 1)) & 1) === 1);
    }
  },

  getLengthInBits: function () {
    return this.length
  },

  putBit: function (bit) {
    var bufIndex = Math.floor(this.length / 8);
    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0);
    }

    if (bit) {
      this.buffer[bufIndex] |= (0x80 >>> (this.length % 8));
    }

    this.length++;
  }
};

var bitBuffer = BitBuffer;

/**
 * Helper class to handle QR Code symbol modules
 *
 * @param {Number} size Symbol size
 */
function BitMatrix (size) {
  if (!size || size < 1) {
    throw new Error('BitMatrix size must be defined and greater than 0')
  }

  this.size = size;
  this.data = typedarrayBuffer.alloc(size * size);
  this.reservedBit = typedarrayBuffer.alloc(size * size);
}

/**
 * Set bit value at specified location
 * If reserved flag is set, this bit will be ignored during masking process
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 * @param {Boolean} reserved
 */
BitMatrix.prototype.set = function (row, col, value, reserved) {
  var index = row * this.size + col;
  this.data[index] = value;
  if (reserved) this.reservedBit[index] = true;
};

/**
 * Returns bit value at specified location
 *
 * @param  {Number}  row
 * @param  {Number}  col
 * @return {Boolean}
 */
BitMatrix.prototype.get = function (row, col) {
  return this.data[row * this.size + col]
};

/**
 * Applies xor operator at specified location
 * (used during masking process)
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 */
BitMatrix.prototype.xor = function (row, col, value) {
  this.data[row * this.size + col] ^= value;
};

/**
 * Check if bit at specified location is reserved
 *
 * @param {Number}   row
 * @param {Number}   col
 * @return {Boolean}
 */
BitMatrix.prototype.isReserved = function (row, col) {
  return this.reservedBit[row * this.size + col]
};

var bitMatrix = BitMatrix;

var alignmentPattern = createCommonjsModule(function (module, exports) {
/**
 * Alignment pattern are fixed reference pattern in defined positions
 * in a matrix symbology, which enables the decode software to re-synchronise
 * the coordinate mapping of the image modules in the event of moderate amounts
 * of distortion of the image.
 *
 * Alignment patterns are present only in QR Code symbols of version 2 or larger
 * and their number depends on the symbol version.
 */

var getSymbolSize = utils.getSymbolSize;

/**
 * Calculate the row/column coordinates of the center module of each alignment pattern
 * for the specified QR Code version.
 *
 * The alignment patterns are positioned symmetrically on either side of the diagonal
 * running from the top left corner of the symbol to the bottom right corner.
 *
 * Since positions are simmetrical only half of the coordinates are returned.
 * Each item of the array will represent in turn the x and y coordinate.
 * @see {@link getPositions}
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinate
 */
exports.getRowColCoords = function getRowColCoords (version) {
  if (version === 1) return []

  var posCount = Math.floor(version / 7) + 2;
  var size = getSymbolSize(version);
  var intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
  var positions = [size - 7]; // Last coord is always (size - 7)

  for (var i = 1; i < posCount - 1; i++) {
    positions[i] = positions[i - 1] - intervals;
  }

  positions.push(6); // First coord is always 6

  return positions.reverse()
};

/**
 * Returns an array containing the positions of each alignment pattern.
 * Each array's element represent the center point of the pattern as (x, y) coordinates
 *
 * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
 * and filtering out the items that overlaps with finder pattern
 *
 * @example
 * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
 * The alignment patterns, therefore, are to be centered on (row, column)
 * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
 * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
 * and are not therefore used for alignment patterns.
 *
 * var pos = getPositions(7)
 * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions (version) {
  var coords = [];
  var pos = exports.getRowColCoords(version);
  var posLength = pos.length;

  for (var i = 0; i < posLength; i++) {
    for (var j = 0; j < posLength; j++) {
      // Skip if position is occupied by finder patterns
      if ((i === 0 && j === 0) ||             // top-left
          (i === 0 && j === posLength - 1) || // bottom-left
          (i === posLength - 1 && j === 0)) { // top-right
        continue
      }

      coords.push([pos[i], pos[j]]);
    }
  }

  return coords
};
});

var getSymbolSize$1 = utils.getSymbolSize;
var FINDER_PATTERN_SIZE = 7;

/**
 * Returns an array containing the positions of each finder pattern.
 * Each array's element represent the top-left point of the pattern as (x, y) coordinates
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
var getPositions = function getPositions (version) {
  var size = getSymbolSize$1(version);

  return [
    // top-left
    [0, 0],
    // top-right
    [size - FINDER_PATTERN_SIZE, 0],
    // bottom-left
    [0, size - FINDER_PATTERN_SIZE]
  ]
};

var finderPattern = {
	getPositions: getPositions
};

var maskPattern = createCommonjsModule(function (module, exports) {
/**
 * Data mask pattern reference
 * @type {Object}
 */
exports.Patterns = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7
};

/**
 * Weighted penalty scores for the undesirable features
 * @type {Object}
 */
var PenaltyScores = {
  N1: 3,
  N2: 3,
  N3: 40,
  N4: 10
};

/**
 * Check if mask pattern value is valid
 *
 * @param  {Number}  mask    Mask pattern
 * @return {Boolean}         true if valid, false otherwise
 */
exports.isValid = function isValid (mask) {
  return mask != null && mask !== '' && !isNaN(mask) && mask >= 0 && mask <= 7
};

/**
 * Returns mask pattern from a value.
 * If value is not valid, returns undefined
 *
 * @param  {Number|String} value        Mask pattern value
 * @return {Number}                     Valid mask pattern or undefined
 */
exports.from = function from (value) {
  return exports.isValid(value) ? parseInt(value, 10) : undefined
};

/**
* Find adjacent modules in row/column with the same color
* and assign a penalty value.
*
* Points: N1 + i
* i is the amount by which the number of adjacent modules of the same color exceeds 5
*/
exports.getPenaltyN1 = function getPenaltyN1 (data) {
  var size = data.size;
  var points = 0;
  var sameCountCol = 0;
  var sameCountRow = 0;
  var lastCol = null;
  var lastRow = null;

  for (var row = 0; row < size; row++) {
    sameCountCol = sameCountRow = 0;
    lastCol = lastRow = null;

    for (var col = 0; col < size; col++) {
      var module = data.get(row, col);
      if (module === lastCol) {
        sameCountCol++;
      } else {
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
        lastCol = module;
        sameCountCol = 1;
      }

      module = data.get(col, row);
      if (module === lastRow) {
        sameCountRow++;
      } else {
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
        lastRow = module;
        sameCountRow = 1;
      }
    }

    if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
    if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
  }

  return points
};

/**
 * Find 2x2 blocks with the same color and assign a penalty value
 *
 * Points: N2 * (m - 1) * (n - 1)
 */
exports.getPenaltyN2 = function getPenaltyN2 (data) {
  var size = data.size;
  var points = 0;

  for (var row = 0; row < size - 1; row++) {
    for (var col = 0; col < size - 1; col++) {
      var last = data.get(row, col) +
        data.get(row, col + 1) +
        data.get(row + 1, col) +
        data.get(row + 1, col + 1);

      if (last === 4 || last === 0) points++;
    }
  }

  return points * PenaltyScores.N2
};

/**
 * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
 * preceded or followed by light area 4 modules wide
 *
 * Points: N3 * number of pattern found
 */
exports.getPenaltyN3 = function getPenaltyN3 (data) {
  var size = data.size;
  var points = 0;
  var bitsCol = 0;
  var bitsRow = 0;

  for (var row = 0; row < size; row++) {
    bitsCol = bitsRow = 0;
    for (var col = 0; col < size; col++) {
      bitsCol = ((bitsCol << 1) & 0x7FF) | data.get(row, col);
      if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D)) points++;

      bitsRow = ((bitsRow << 1) & 0x7FF) | data.get(col, row);
      if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D)) points++;
    }
  }

  return points * PenaltyScores.N3
};

/**
 * Calculate proportion of dark modules in entire symbol
 *
 * Points: N4 * k
 *
 * k is the rating of the deviation of the proportion of dark modules
 * in the symbol from 50% in steps of 5%
 */
exports.getPenaltyN4 = function getPenaltyN4 (data) {
  var darkCount = 0;
  var modulesCount = data.data.length;

  for (var i = 0; i < modulesCount; i++) darkCount += data.data[i];

  var k = Math.abs(Math.ceil((darkCount * 100 / modulesCount) / 5) - 10);

  return k * PenaltyScores.N4
};

/**
 * Return mask value at given position
 *
 * @param  {Number} maskPattern Pattern reference value
 * @param  {Number} i           Row
 * @param  {Number} j           Column
 * @return {Boolean}            Mask value
 */
function getMaskAt (maskPattern, i, j) {
  switch (maskPattern) {
    case exports.Patterns.PATTERN000: return (i + j) % 2 === 0
    case exports.Patterns.PATTERN001: return i % 2 === 0
    case exports.Patterns.PATTERN010: return j % 3 === 0
    case exports.Patterns.PATTERN011: return (i + j) % 3 === 0
    case exports.Patterns.PATTERN100: return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0
    case exports.Patterns.PATTERN101: return (i * j) % 2 + (i * j) % 3 === 0
    case exports.Patterns.PATTERN110: return ((i * j) % 2 + (i * j) % 3) % 2 === 0
    case exports.Patterns.PATTERN111: return ((i * j) % 3 + (i + j) % 2) % 2 === 0

    default: throw new Error('bad maskPattern:' + maskPattern)
  }
}

/**
 * Apply a mask pattern to a BitMatrix
 *
 * @param  {Number}    pattern Pattern reference number
 * @param  {BitMatrix} data    BitMatrix data
 */
exports.applyMask = function applyMask (pattern, data) {
  var size = data.size;

  for (var col = 0; col < size; col++) {
    for (var row = 0; row < size; row++) {
      if (data.isReserved(row, col)) continue
      data.xor(row, col, getMaskAt(pattern, row, col));
    }
  }
};

/**
 * Returns the best mask pattern for data
 *
 * @param  {BitMatrix} data
 * @return {Number} Mask pattern reference number
 */
exports.getBestMask = function getBestMask (data, setupFormatFunc) {
  var numPatterns = Object.keys(exports.Patterns).length;
  var bestPattern = 0;
  var lowerPenalty = Infinity;

  for (var p = 0; p < numPatterns; p++) {
    setupFormatFunc(p);
    exports.applyMask(p, data);

    // Calculate penalty
    var penalty =
      exports.getPenaltyN1(data) +
      exports.getPenaltyN2(data) +
      exports.getPenaltyN3(data) +
      exports.getPenaltyN4(data);

    // Undo previously applied mask
    exports.applyMask(p, data);

    if (penalty < lowerPenalty) {
      lowerPenalty = penalty;
      bestPattern = p;
    }
  }

  return bestPattern
};
});

var EC_BLOCKS_TABLE = [
// L  M  Q  H
  1, 1, 1, 1,
  1, 1, 1, 1,
  1, 1, 2, 2,
  1, 2, 2, 4,
  1, 2, 4, 4,
  2, 4, 4, 4,
  2, 4, 6, 5,
  2, 4, 6, 6,
  2, 5, 8, 8,
  4, 5, 8, 8,
  4, 5, 8, 11,
  4, 8, 10, 11,
  4, 9, 12, 16,
  4, 9, 16, 16,
  6, 10, 12, 18,
  6, 10, 17, 16,
  6, 11, 16, 19,
  6, 13, 18, 21,
  7, 14, 21, 25,
  8, 16, 20, 25,
  8, 17, 23, 25,
  9, 17, 23, 34,
  9, 18, 25, 30,
  10, 20, 27, 32,
  12, 21, 29, 35,
  12, 23, 34, 37,
  12, 25, 34, 40,
  13, 26, 35, 42,
  14, 28, 38, 45,
  15, 29, 40, 48,
  16, 31, 43, 51,
  17, 33, 45, 54,
  18, 35, 48, 57,
  19, 37, 51, 60,
  19, 38, 53, 63,
  20, 40, 56, 66,
  21, 43, 59, 70,
  22, 45, 62, 74,
  24, 47, 65, 77,
  25, 49, 68, 81
];

var EC_CODEWORDS_TABLE = [
// L  M  Q  H
  7, 10, 13, 17,
  10, 16, 22, 28,
  15, 26, 36, 44,
  20, 36, 52, 64,
  26, 48, 72, 88,
  36, 64, 96, 112,
  40, 72, 108, 130,
  48, 88, 132, 156,
  60, 110, 160, 192,
  72, 130, 192, 224,
  80, 150, 224, 264,
  96, 176, 260, 308,
  104, 198, 288, 352,
  120, 216, 320, 384,
  132, 240, 360, 432,
  144, 280, 408, 480,
  168, 308, 448, 532,
  180, 338, 504, 588,
  196, 364, 546, 650,
  224, 416, 600, 700,
  224, 442, 644, 750,
  252, 476, 690, 816,
  270, 504, 750, 900,
  300, 560, 810, 960,
  312, 588, 870, 1050,
  336, 644, 952, 1110,
  360, 700, 1020, 1200,
  390, 728, 1050, 1260,
  420, 784, 1140, 1350,
  450, 812, 1200, 1440,
  480, 868, 1290, 1530,
  510, 924, 1350, 1620,
  540, 980, 1440, 1710,
  570, 1036, 1530, 1800,
  570, 1064, 1590, 1890,
  600, 1120, 1680, 1980,
  630, 1204, 1770, 2100,
  660, 1260, 1860, 2220,
  720, 1316, 1950, 2310,
  750, 1372, 2040, 2430
];

/**
 * Returns the number of error correction block that the QR Code should contain
 * for the specified version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction blocks
 */
var getBlocksCount = function getBlocksCount (version, errorCorrectionLevel$1) {
  switch (errorCorrectionLevel$1) {
    case errorCorrectionLevel.L:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 0]
    case errorCorrectionLevel.M:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 1]
    case errorCorrectionLevel.Q:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 2]
    case errorCorrectionLevel.H:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 3]
    default:
      return undefined
  }
};

/**
 * Returns the number of error correction codewords to use for the specified
 * version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction codewords
 */
var getTotalCodewordsCount = function getTotalCodewordsCount (version, errorCorrectionLevel$1) {
  switch (errorCorrectionLevel$1) {
    case errorCorrectionLevel.L:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0]
    case errorCorrectionLevel.M:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1]
    case errorCorrectionLevel.Q:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2]
    case errorCorrectionLevel.H:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3]
    default:
      return undefined
  }
};

var errorCorrectionCode = {
	getBlocksCount: getBlocksCount,
	getTotalCodewordsCount: getTotalCodewordsCount
};

var EXP_TABLE = typedarrayBuffer.alloc(512);
var LOG_TABLE = typedarrayBuffer.alloc(256)
/**
 * Precompute the log and anti-log tables for faster computation later
 *
 * For each possible value in the galois field 2^8, we will pre-compute
 * the logarithm and anti-logarithm (exponential) of this value
 *
 * ref {@link https://en.wikiversity.org/wiki/Reed%E2%80%93Solomon_codes_for_coders#Introduction_to_mathematical_fields}
 */
;(function initTables () {
  var x = 1;
  for (var i = 0; i < 255; i++) {
    EXP_TABLE[i] = x;
    LOG_TABLE[x] = i;

    x <<= 1; // multiply by 2

    // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
    // This means that when a number is 256 or larger, it should be XORed with 0x11D.
    if (x & 0x100) { // similar to x >= 256, but a lot faster (because 0x100 == 256)
      x ^= 0x11D;
    }
  }

  // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
  // stay inside the bounds (because we will mainly use this table for the multiplication of
  // two GF numbers, no more).
  // @see {@link mul}
  for (i = 255; i < 512; i++) {
    EXP_TABLE[i] = EXP_TABLE[i - 255];
  }
}());

/**
 * Returns log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
var log = function log (n) {
  if (n < 1) throw new Error('log(' + n + ')')
  return LOG_TABLE[n]
};

/**
 * Returns anti-log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
var exp = function exp (n) {
  return EXP_TABLE[n]
};

/**
 * Multiplies two number inside Galois Field
 *
 * @param  {Number} x
 * @param  {Number} y
 * @return {Number}
 */
var mul = function mul (x, y) {
  if (x === 0 || y === 0) return 0

  // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
  // @see {@link initTables}
  return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]]
};

var galoisField = {
	log: log,
	exp: exp,
	mul: mul
};

var polynomial = createCommonjsModule(function (module, exports) {
/**
 * Multiplies two polynomials inside Galois Field
 *
 * @param  {Buffer} p1 Polynomial
 * @param  {Buffer} p2 Polynomial
 * @return {Buffer}    Product of p1 and p2
 */
exports.mul = function mul (p1, p2) {
  var coeff = typedarrayBuffer.alloc(p1.length + p2.length - 1);

  for (var i = 0; i < p1.length; i++) {
    for (var j = 0; j < p2.length; j++) {
      coeff[i + j] ^= galoisField.mul(p1[i], p2[j]);
    }
  }

  return coeff
};

/**
 * Calculate the remainder of polynomials division
 *
 * @param  {Buffer} divident Polynomial
 * @param  {Buffer} divisor  Polynomial
 * @return {Buffer}          Remainder
 */
exports.mod = function mod (divident, divisor) {
  var result = typedarrayBuffer.from(divident);

  while ((result.length - divisor.length) >= 0) {
    var coeff = result[0];

    for (var i = 0; i < divisor.length; i++) {
      result[i] ^= galoisField.mul(divisor[i], coeff);
    }

    // remove all zeros from buffer head
    var offset = 0;
    while (offset < result.length && result[offset] === 0) offset++;
    result = result.slice(offset);
  }

  return result
};

/**
 * Generate an irreducible generator polynomial of specified degree
 * (used by Reed-Solomon encoder)
 *
 * @param  {Number} degree Degree of the generator polynomial
 * @return {Buffer}        Buffer containing polynomial coefficients
 */
exports.generateECPolynomial = function generateECPolynomial (degree) {
  var poly = typedarrayBuffer.from([1]);
  for (var i = 0; i < degree; i++) {
    poly = exports.mul(poly, [1, galoisField.exp(i)]);
  }

  return poly
};
});

var Buffer$1 = buffer.Buffer;

function ReedSolomonEncoder (degree) {
  this.genPoly = undefined;
  this.degree = degree;

  if (this.degree) this.initialize(this.degree);
}

/**
 * Initialize the encoder.
 * The input param should correspond to the number of error correction codewords.
 *
 * @param  {Number} degree
 */
ReedSolomonEncoder.prototype.initialize = function initialize (degree) {
  // create an irreducible generator polynomial
  this.degree = degree;
  this.genPoly = polynomial.generateECPolynomial(this.degree);
};

/**
 * Encodes a chunk of data
 *
 * @param  {Buffer} data Buffer containing input data
 * @return {Buffer}      Buffer containing encoded data
 */
ReedSolomonEncoder.prototype.encode = function encode (data) {
  if (!this.genPoly) {
    throw new Error('Encoder not initialized')
  }

  // Calculate EC for this data block
  // extends data size to data+genPoly size
  var pad = typedarrayBuffer.alloc(this.degree);
  var paddedData = Buffer$1.concat([data, pad], data.length + this.degree);

  // The error correction codewords are the remainder after dividing the data codewords
  // by a generator polynomial
  var remainder = polynomial.mod(paddedData, this.genPoly);

  // return EC data blocks (last n byte, where n is the degree of genPoly)
  // If coefficients number in remainder are less than genPoly degree,
  // pad with 0s to the left to reach the needed number of coefficients
  var start = this.degree - remainder.length;
  if (start > 0) {
    var buff = typedarrayBuffer.alloc(this.degree);
    remainder.copy(buff, start);

    return buff
  }

  return remainder
};

var reedSolomonEncoder = ReedSolomonEncoder;

/**
 * Check if QR Code version is valid
 *
 * @param  {Number}  version QR Code version
 * @return {Boolean}         true if valid version, false otherwise
 */
var isValid = function isValid (version) {
  return !isNaN(version) && version >= 1 && version <= 40
};

var versionCheck = {
	isValid: isValid
};

var numeric = '[0-9]+';
var alphanumeric = '[A-Z $%*+\\-./:]+';
var kanji = '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|' +
  '[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|' +
  '[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|' +
  '[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+';
kanji = kanji.replace(/u/g, '\\u');

var byte = '(?:(?![A-Z0-9 $%*+\\-./:]|' + kanji + ')(?:.|[\r\n]))+';

var KANJI = new RegExp(kanji, 'g');
var BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g');
var BYTE = new RegExp(byte, 'g');
var NUMERIC = new RegExp(numeric, 'g');
var ALPHANUMERIC = new RegExp(alphanumeric, 'g');

var TEST_KANJI = new RegExp('^' + kanji + '$');
var TEST_NUMERIC = new RegExp('^' + numeric + '$');
var TEST_ALPHANUMERIC = new RegExp('^[A-Z0-9 $%*+\\-./:]+$');

var testKanji = function testKanji (str) {
  return TEST_KANJI.test(str)
};

var testNumeric = function testNumeric (str) {
  return TEST_NUMERIC.test(str)
};

var testAlphanumeric = function testAlphanumeric (str) {
  return TEST_ALPHANUMERIC.test(str)
};

var regex = {
	KANJI: KANJI,
	BYTE_KANJI: BYTE_KANJI,
	BYTE: BYTE,
	NUMERIC: NUMERIC,
	ALPHANUMERIC: ALPHANUMERIC,
	testKanji: testKanji,
	testNumeric: testNumeric,
	testAlphanumeric: testAlphanumeric
};

var mode = createCommonjsModule(function (module, exports) {
/**
 * Numeric mode encodes data from the decimal digit set (0 - 9)
 * (byte values 30HEX to 39HEX).
 * Normally, 3 data characters are represented by 10 bits.
 *
 * @type {Object}
 */
exports.NUMERIC = {
  id: 'Numeric',
  bit: 1 << 0,
  ccBits: [10, 12, 14]
};

/**
 * Alphanumeric mode encodes data from a set of 45 characters,
 * i.e. 10 numeric digits (0 - 9),
 *      26 alphabetic characters (A - Z),
 *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
 * Normally, two input characters are represented by 11 bits.
 *
 * @type {Object}
 */
exports.ALPHANUMERIC = {
  id: 'Alphanumeric',
  bit: 1 << 1,
  ccBits: [9, 11, 13]
};

/**
 * In byte mode, data is encoded at 8 bits per character.
 *
 * @type {Object}
 */
exports.BYTE = {
  id: 'Byte',
  bit: 1 << 2,
  ccBits: [8, 16, 16]
};

/**
 * The Kanji mode efficiently encodes Kanji characters in accordance with
 * the Shift JIS system based on JIS X 0208.
 * The Shift JIS values are shifted from the JIS X 0208 values.
 * JIS X 0208 gives details of the shift coded representation.
 * Each two-byte character value is compacted to a 13-bit binary codeword.
 *
 * @type {Object}
 */
exports.KANJI = {
  id: 'Kanji',
  bit: 1 << 3,
  ccBits: [8, 10, 12]
};

/**
 * Mixed mode will contain a sequences of data in a combination of any of
 * the modes described above
 *
 * @type {Object}
 */
exports.MIXED = {
  bit: -1
};

/**
 * Returns the number of bits needed to store the data length
 * according to QR Code specifications.
 *
 * @param  {Mode}   mode    Data mode
 * @param  {Number} version QR Code version
 * @return {Number}         Number of bits
 */
exports.getCharCountIndicator = function getCharCountIndicator (mode, version) {
  if (!mode.ccBits) throw new Error('Invalid mode: ' + mode)

  if (!versionCheck.isValid(version)) {
    throw new Error('Invalid version: ' + version)
  }

  if (version >= 1 && version < 10) return mode.ccBits[0]
  else if (version < 27) return mode.ccBits[1]
  return mode.ccBits[2]
};

/**
 * Returns the most efficient mode to store the specified data
 *
 * @param  {String} dataStr Input data string
 * @return {Mode}           Best mode
 */
exports.getBestModeForData = function getBestModeForData (dataStr) {
  if (regex.testNumeric(dataStr)) return exports.NUMERIC
  else if (regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC
  else if (regex.testKanji(dataStr)) return exports.KANJI
  else return exports.BYTE
};

/**
 * Return mode name as string
 *
 * @param {Mode} mode Mode object
 * @returns {String}  Mode name
 */
exports.toString = function toString (mode) {
  if (mode && mode.id) return mode.id
  throw new Error('Invalid mode')
};

/**
 * Check if input param is a valid mode object
 *
 * @param   {Mode}    mode Mode object
 * @returns {Boolean} True if valid mode, false otherwise
 */
exports.isValid = function isValid (mode) {
  return mode && mode.bit && mode.ccBits
};

/**
 * Get mode object from its name
 *
 * @param   {String} string Mode name
 * @returns {Mode}          Mode object
 */
function fromString (string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string')
  }

  var lcStr = string.toLowerCase();

  switch (lcStr) {
    case 'numeric':
      return exports.NUMERIC
    case 'alphanumeric':
      return exports.ALPHANUMERIC
    case 'kanji':
      return exports.KANJI
    case 'byte':
      return exports.BYTE
    default:
      throw new Error('Unknown mode: ' + string)
  }
}

/**
 * Returns mode from a value.
 * If value is not a valid mode, returns defaultValue
 *
 * @param  {Mode|String} value        Encoding mode
 * @param  {Mode}        defaultValue Fallback value
 * @return {Mode}                     Encoding mode
 */
exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return value
  }

  try {
    return fromString(value)
  } catch (e) {
    return defaultValue
  }
};
});

var version = createCommonjsModule(function (module, exports) {
// Generator polynomial used to encode version information
var G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0);
var G18_BCH = utils.getBCHDigit(G18);

function getBestVersionForDataLength (mode, length, errorCorrectionLevel) {
  for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
      return currentVersion
    }
  }

  return undefined
}

function getReservedBitsCount (mode$1, version) {
  // Character count indicator + mode indicator bits
  return mode.getCharCountIndicator(mode$1, version) + 4
}

function getTotalBitsFromDataArray (segments, version) {
  var totalBits = 0;

  segments.forEach(function (data) {
    var reservedBits = getReservedBitsCount(data.mode, version);
    totalBits += reservedBits + data.getBitsLength();
  });

  return totalBits
}

function getBestVersionForMixedData (segments, errorCorrectionLevel) {
  for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
    var length = getTotalBitsFromDataArray(segments, currentVersion);
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode.MIXED)) {
      return currentVersion
    }
  }

  return undefined
}

/**
 * Returns version number from a value.
 * If value is not a valid version, returns defaultValue
 *
 * @param  {Number|String} value        QR Code version
 * @param  {Number}        defaultValue Fallback value
 * @return {Number}                     QR Code version number
 */
exports.from = function from (value, defaultValue) {
  if (versionCheck.isValid(value)) {
    return parseInt(value, 10)
  }

  return defaultValue
};

/**
 * Returns how much data can be stored with the specified QR code version
 * and error correction level
 *
 * @param  {Number} version              QR Code version (1-40)
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Mode}   mode                 Data mode
 * @return {Number}                      Quantity of storable data
 */
exports.getCapacity = function getCapacity (version, errorCorrectionLevel, mode$1) {
  if (!versionCheck.isValid(version)) {
    throw new Error('Invalid QR Code version')
  }

  // Use Byte mode as default
  if (typeof mode$1 === 'undefined') mode$1 = mode.BYTE;

  // Total codewords for this QR code version (Data + Error correction)
  var totalCodewords = utils.getSymbolTotalCodewords(version);

  // Total number of error correction codewords
  var ecTotalCodewords = errorCorrectionCode.getTotalCodewordsCount(version, errorCorrectionLevel);

  // Total number of data codewords
  var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;

  if (mode$1 === mode.MIXED) return dataTotalCodewordsBits

  var usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode$1, version);

  // Return max number of storable codewords
  switch (mode$1) {
    case mode.NUMERIC:
      return Math.floor((usableBits / 10) * 3)

    case mode.ALPHANUMERIC:
      return Math.floor((usableBits / 11) * 2)

    case mode.KANJI:
      return Math.floor(usableBits / 13)

    case mode.BYTE:
    default:
      return Math.floor(usableBits / 8)
  }
};

/**
 * Returns the minimum version needed to contain the amount of data
 *
 * @param  {Segment} data                    Segment of data
 * @param  {Number} [errorCorrectionLevel=H] Error correction level
 * @param  {Mode} mode                       Data mode
 * @return {Number}                          QR Code version
 */
exports.getBestVersionForData = function getBestVersionForData (data, errorCorrectionLevel$1) {
  var seg;

  var ecl = errorCorrectionLevel.from(errorCorrectionLevel$1, errorCorrectionLevel.M);

  if (isarray(data)) {
    if (data.length > 1) {
      return getBestVersionForMixedData(data, ecl)
    }

    if (data.length === 0) {
      return 1
    }

    seg = data[0];
  } else {
    seg = data;
  }

  return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl)
};

/**
 * Returns version information with relative error correction bits
 *
 * The version information is included in QR Code symbols of version 7 or larger.
 * It consists of an 18-bit sequence containing 6 data bits,
 * with 12 error correction bits calculated using the (18, 6) Golay code.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Encoded version info bits
 */
exports.getEncodedBits = function getEncodedBits (version) {
  if (!versionCheck.isValid(version) || version < 7) {
    throw new Error('Invalid QR Code version')
  }

  var d = version << 12;

  while (utils.getBCHDigit(d) - G18_BCH >= 0) {
    d ^= (G18 << (utils.getBCHDigit(d) - G18_BCH));
  }

  return (version << 12) | d
};
});

var G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0);
var G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1);
var G15_BCH = utils.getBCHDigit(G15);

/**
 * Returns format information with relative error correction bits
 *
 * The format information is a 15-bit sequence containing 5 data bits,
 * with 10 error correction bits calculated using the (15, 5) BCH code.
 *
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Number} mask                 Mask pattern
 * @return {Number}                      Encoded format information bits
 */
var getEncodedBits = function getEncodedBits (errorCorrectionLevel, mask) {
  var data = ((errorCorrectionLevel.bit << 3) | mask);
  var d = data << 10;

  while (utils.getBCHDigit(d) - G15_BCH >= 0) {
    d ^= (G15 << (utils.getBCHDigit(d) - G15_BCH));
  }

  // xor final data with mask pattern in order to ensure that
  // no combination of Error Correction Level and data mask pattern
  // will result in an all-zero data string
  return ((data << 10) | d) ^ G15_MASK
};

var formatInfo = {
	getEncodedBits: getEncodedBits
};

function NumericData (data) {
  this.mode = mode.NUMERIC;
  this.data = data.toString();
}

NumericData.getBitsLength = function getBitsLength (length) {
  return 10 * Math.floor(length / 3) + ((length % 3) ? ((length % 3) * 3 + 1) : 0)
};

NumericData.prototype.getLength = function getLength () {
  return this.data.length
};

NumericData.prototype.getBitsLength = function getBitsLength () {
  return NumericData.getBitsLength(this.data.length)
};

NumericData.prototype.write = function write (bitBuffer) {
  var i, group, value;

  // The input data string is divided into groups of three digits,
  // and each group is converted to its 10-bit binary equivalent.
  for (i = 0; i + 3 <= this.data.length; i += 3) {
    group = this.data.substr(i, 3);
    value = parseInt(group, 10);

    bitBuffer.put(value, 10);
  }

  // If the number of input digits is not an exact multiple of three,
  // the final one or two digits are converted to 4 or 7 bits respectively.
  var remainingNum = this.data.length - i;
  if (remainingNum > 0) {
    group = this.data.substr(i);
    value = parseInt(group, 10);

    bitBuffer.put(value, remainingNum * 3 + 1);
  }
};

var numericData = NumericData;

/**
 * Array of characters available in alphanumeric mode
 *
 * As per QR Code specification, to each character
 * is assigned a value from 0 to 44 which in this case coincides
 * with the array index
 *
 * @type {Array}
 */
var ALPHA_NUM_CHARS = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  ' ', '$', '%', '*', '+', '-', '.', '/', ':'
];

function AlphanumericData (data) {
  this.mode = mode.ALPHANUMERIC;
  this.data = data;
}

AlphanumericData.getBitsLength = function getBitsLength (length) {
  return 11 * Math.floor(length / 2) + 6 * (length % 2)
};

AlphanumericData.prototype.getLength = function getLength () {
  return this.data.length
};

AlphanumericData.prototype.getBitsLength = function getBitsLength () {
  return AlphanumericData.getBitsLength(this.data.length)
};

AlphanumericData.prototype.write = function write (bitBuffer) {
  var i;

  // Input data characters are divided into groups of two characters
  // and encoded as 11-bit binary codes.
  for (i = 0; i + 2 <= this.data.length; i += 2) {
    // The character value of the first character is multiplied by 45
    var value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;

    // The character value of the second digit is added to the product
    value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);

    // The sum is then stored as 11-bit binary number
    bitBuffer.put(value, 11);
  }

  // If the number of input data characters is not a multiple of two,
  // the character value of the final character is encoded as a 6-bit binary number.
  if (this.data.length % 2) {
    bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
  }
};

var alphanumericData = AlphanumericData;

function ByteData (data) {
  this.mode = mode.BYTE;
  this.data = typedarrayBuffer.from(data);
}

ByteData.getBitsLength = function getBitsLength (length) {
  return length * 8
};

ByteData.prototype.getLength = function getLength () {
  return this.data.length
};

ByteData.prototype.getBitsLength = function getBitsLength () {
  return ByteData.getBitsLength(this.data.length)
};

ByteData.prototype.write = function (bitBuffer) {
  for (var i = 0, l = this.data.length; i < l; i++) {
    bitBuffer.put(this.data[i], 8);
  }
};

var byteData = ByteData;

function KanjiData (data) {
  this.mode = mode.KANJI;
  this.data = data;
}

KanjiData.getBitsLength = function getBitsLength (length) {
  return length * 13
};

KanjiData.prototype.getLength = function getLength () {
  return this.data.length
};

KanjiData.prototype.getBitsLength = function getBitsLength () {
  return KanjiData.getBitsLength(this.data.length)
};

KanjiData.prototype.write = function (bitBuffer) {
  var i;

  // In the Shift JIS system, Kanji characters are represented by a two byte combination.
  // These byte values are shifted from the JIS X 0208 values.
  // JIS X 0208 gives details of the shift coded representation.
  for (i = 0; i < this.data.length; i++) {
    var value = utils.toSJIS(this.data[i]);

    // For characters with Shift JIS values from 0x8140 to 0x9FFC:
    if (value >= 0x8140 && value <= 0x9FFC) {
      // Subtract 0x8140 from Shift JIS value
      value -= 0x8140;

    // For characters with Shift JIS values from 0xE040 to 0xEBBF
    } else if (value >= 0xE040 && value <= 0xEBBF) {
      // Subtract 0xC140 from Shift JIS value
      value -= 0xC140;
    } else {
      throw new Error(
        'Invalid SJIS character: ' + this.data[i] + '\n' +
        'Make sure your charset is UTF-8')
    }

    // Multiply most significant byte of result by 0xC0
    // and add least significant byte to product
    value = (((value >>> 8) & 0xff) * 0xC0) + (value & 0xff);

    // Convert result to a 13-bit binary string
    bitBuffer.put(value, 13);
  }
};

var kanjiData = KanjiData;

var dijkstra_1 = createCommonjsModule(function (module) {

/******************************************************************************
 * Created 2008-08-19.
 *
 * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
 *
 * Copyright (C) 2008
 *   Wyatt Baldwin <self@wyattbaldwin.com>
 *   All rights reserved
 *
 * Licensed under the MIT license.
 *
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *****************************************************************************/
var dijkstra = {
  single_source_shortest_paths: function(graph, s, d) {
    // Predecessor map for each node that has been encountered.
    // node ID => predecessor node ID
    var predecessors = {};

    // Costs of shortest paths from s to all nodes encountered.
    // node ID => cost
    var costs = {};
    costs[s] = 0;

    // Costs of shortest paths from s to all nodes encountered; differs from
    // `costs` in that it provides easy access to the node that currently has
    // the known shortest path from s.
    // XXX: Do we actually need both `costs` and `open`?
    var open = dijkstra.PriorityQueue.make();
    open.push(s, 0);

    var closest,
        u, v,
        cost_of_s_to_u,
        adjacent_nodes,
        cost_of_e,
        cost_of_s_to_u_plus_cost_of_e,
        cost_of_s_to_v,
        first_visit;
    while (!open.empty()) {
      // In the nodes remaining in graph that have a known cost from s,
      // find the node, u, that currently has the shortest path from s.
      closest = open.pop();
      u = closest.value;
      cost_of_s_to_u = closest.cost;

      // Get nodes adjacent to u...
      adjacent_nodes = graph[u] || {};

      // ...and explore the edges that connect u to those nodes, updating
      // the cost of the shortest paths to any or all of those nodes as
      // necessary. v is the node across the current edge from u.
      for (v in adjacent_nodes) {
        if (adjacent_nodes.hasOwnProperty(v)) {
          // Get the cost of the edge running from u to v.
          cost_of_e = adjacent_nodes[v];

          // Cost of s to u plus the cost of u to v across e--this is *a*
          // cost from s to v that may or may not be less than the current
          // known cost to v.
          cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;

          // If we haven't visited v yet OR if the current known cost from s to
          // v is greater than the new cost we just found (cost of s to u plus
          // cost of u to v across e), update v's cost in the cost list and
          // update v's predecessor in the predecessor list (it's now u).
          cost_of_s_to_v = costs[v];
          first_visit = (typeof costs[v] === 'undefined');
          if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
            costs[v] = cost_of_s_to_u_plus_cost_of_e;
            open.push(v, cost_of_s_to_u_plus_cost_of_e);
            predecessors[v] = u;
          }
        }
      }
    }

    if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {
      var msg = ['Could not find a path from ', s, ' to ', d, '.'].join('');
      throw new Error(msg);
    }

    return predecessors;
  },

  extract_shortest_path_from_predecessor_list: function(predecessors, d) {
    var nodes = [];
    var u = d;
    while (u) {
      nodes.push(u);
      u = predecessors[u];
    }
    nodes.reverse();
    return nodes;
  },

  find_path: function(graph, s, d) {
    var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
    return dijkstra.extract_shortest_path_from_predecessor_list(
      predecessors, d);
  },

  /**
   * A very naive priority queue implementation.
   */
  PriorityQueue: {
    make: function (opts) {
      var T = dijkstra.PriorityQueue,
          t = {},
          key;
      opts = opts || {};
      for (key in T) {
        if (T.hasOwnProperty(key)) {
          t[key] = T[key];
        }
      }
      t.queue = [];
      t.sorter = opts.sorter || T.default_sorter;
      return t;
    },

    default_sorter: function (a, b) {
      return a.cost - b.cost;
    },

    /**
     * Add a new item to the queue and ensure the highest priority element
     * is at the front of the queue.
     */
    push: function (value, cost) {
      var item = {value: value, cost: cost};
      this.queue.push(item);
      this.queue.sort(this.sorter);
    },

    /**
     * Return the highest priority element in the queue.
     */
    pop: function () {
      return this.queue.shift();
    },

    empty: function () {
      return this.queue.length === 0;
    }
  }
};


// node.js module exports
{
  module.exports = dijkstra;
}
});

var segments = createCommonjsModule(function (module, exports) {
/**
 * Returns UTF8 byte length
 *
 * @param  {String} str Input string
 * @return {Number}     Number of byte
 */
function getStringByteLength (str) {
  return unescape(encodeURIComponent(str)).length
}

/**
 * Get a list of segments of the specified mode
 * from a string
 *
 * @param  {Mode}   mode Segment mode
 * @param  {String} str  String to process
 * @return {Array}       Array of object with segments data
 */
function getSegments (regex, mode, str) {
  var segments = [];
  var result;

  while ((result = regex.exec(str)) !== null) {
    segments.push({
      data: result[0],
      index: result.index,
      mode: mode,
      length: result[0].length
    });
  }

  return segments
}

/**
 * Extracts a series of segments with the appropriate
 * modes from a string
 *
 * @param  {String} dataStr Input string
 * @return {Array}          Array of object with segments data
 */
function getSegmentsFromString (dataStr) {
  var numSegs = getSegments(regex.NUMERIC, mode.NUMERIC, dataStr);
  var alphaNumSegs = getSegments(regex.ALPHANUMERIC, mode.ALPHANUMERIC, dataStr);
  var byteSegs;
  var kanjiSegs;

  if (utils.isKanjiModeEnabled()) {
    byteSegs = getSegments(regex.BYTE, mode.BYTE, dataStr);
    kanjiSegs = getSegments(regex.KANJI, mode.KANJI, dataStr);
  } else {
    byteSegs = getSegments(regex.BYTE_KANJI, mode.BYTE, dataStr);
    kanjiSegs = [];
  }

  var segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);

  return segs
    .sort(function (s1, s2) {
      return s1.index - s2.index
    })
    .map(function (obj) {
      return {
        data: obj.data,
        mode: obj.mode,
        length: obj.length
      }
    })
}

/**
 * Returns how many bits are needed to encode a string of
 * specified length with the specified mode
 *
 * @param  {Number} length String length
 * @param  {Mode} mode     Segment mode
 * @return {Number}        Bit length
 */
function getSegmentBitsLength (length, mode$1) {
  switch (mode$1) {
    case mode.NUMERIC:
      return numericData.getBitsLength(length)
    case mode.ALPHANUMERIC:
      return alphanumericData.getBitsLength(length)
    case mode.KANJI:
      return kanjiData.getBitsLength(length)
    case mode.BYTE:
      return byteData.getBitsLength(length)
  }
}

/**
 * Merges adjacent segments which have the same mode
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function mergeSegments (segs) {
  return segs.reduce(function (acc, curr) {
    var prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
    if (prevSeg && prevSeg.mode === curr.mode) {
      acc[acc.length - 1].data += curr.data;
      return acc
    }

    acc.push(curr);
    return acc
  }, [])
}

/**
 * Generates a list of all possible nodes combination which
 * will be used to build a segments graph.
 *
 * Nodes are divided by groups. Each group will contain a list of all the modes
 * in which is possible to encode the given text.
 *
 * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
 * The group for '12345' will contain then 3 objects, one for each
 * possible encoding mode.
 *
 * Each node represents a possible segment.
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function buildNodes (segs) {
  var nodes = [];
  for (var i = 0; i < segs.length; i++) {
    var seg = segs[i];

    switch (seg.mode) {
      case mode.NUMERIC:
        nodes.push([seg,
          { data: seg.data, mode: mode.ALPHANUMERIC, length: seg.length },
          { data: seg.data, mode: mode.BYTE, length: seg.length }
        ]);
        break
      case mode.ALPHANUMERIC:
        nodes.push([seg,
          { data: seg.data, mode: mode.BYTE, length: seg.length }
        ]);
        break
      case mode.KANJI:
        nodes.push([seg,
          { data: seg.data, mode: mode.BYTE, length: getStringByteLength(seg.data) }
        ]);
        break
      case mode.BYTE:
        nodes.push([
          { data: seg.data, mode: mode.BYTE, length: getStringByteLength(seg.data) }
        ]);
    }
  }

  return nodes
}

/**
 * Builds a graph from a list of nodes.
 * All segments in each node group will be connected with all the segments of
 * the next group and so on.
 *
 * At each connection will be assigned a weight depending on the
 * segment's byte length.
 *
 * @param  {Array} nodes    Array of object with segments data
 * @param  {Number} version QR Code version
 * @return {Object}         Graph of all possible segments
 */
function buildGraph (nodes, version) {
  var table = {};
  var graph = {'start': {}};
  var prevNodeIds = ['start'];

  for (var i = 0; i < nodes.length; i++) {
    var nodeGroup = nodes[i];
    var currentNodeIds = [];

    for (var j = 0; j < nodeGroup.length; j++) {
      var node = nodeGroup[j];
      var key = '' + i + j;

      currentNodeIds.push(key);
      table[key] = { node: node, lastCount: 0 };
      graph[key] = {};

      for (var n = 0; n < prevNodeIds.length; n++) {
        var prevNodeId = prevNodeIds[n];

        if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
          graph[prevNodeId][key] =
            getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) -
            getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);

          table[prevNodeId].lastCount += node.length;
        } else {
          if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;

          graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) +
            4 + mode.getCharCountIndicator(node.mode, version); // switch cost
        }
      }
    }

    prevNodeIds = currentNodeIds;
  }

  for (n = 0; n < prevNodeIds.length; n++) {
    graph[prevNodeIds[n]]['end'] = 0;
  }

  return { map: graph, table: table }
}

/**
 * Builds a segment from a specified data and mode.
 * If a mode is not specified, the more suitable will be used.
 *
 * @param  {String} data             Input data
 * @param  {Mode | String} modesHint Data mode
 * @return {Segment}                 Segment
 */
function buildSingleSegment (data, modesHint) {
  var mode$1;
  var bestMode = mode.getBestModeForData(data);

  mode$1 = mode.from(modesHint, bestMode);

  // Make sure data can be encoded
  if (mode$1 !== mode.BYTE && mode$1.bit < bestMode.bit) {
    throw new Error('"' + data + '"' +
      ' cannot be encoded with mode ' + mode.toString(mode$1) +
      '.\n Suggested mode is: ' + mode.toString(bestMode))
  }

  // Use Mode.BYTE if Kanji support is disabled
  if (mode$1 === mode.KANJI && !utils.isKanjiModeEnabled()) {
    mode$1 = mode.BYTE;
  }

  switch (mode$1) {
    case mode.NUMERIC:
      return new numericData(data)

    case mode.ALPHANUMERIC:
      return new alphanumericData(data)

    case mode.KANJI:
      return new kanjiData(data)

    case mode.BYTE:
      return new byteData(data)
  }
}

/**
 * Builds a list of segments from an array.
 * Array can contain Strings or Objects with segment's info.
 *
 * For each item which is a string, will be generated a segment with the given
 * string and the more appropriate encoding mode.
 *
 * For each item which is an object, will be generated a segment with the given
 * data and mode.
 * Objects must contain at least the property "data".
 * If property "mode" is not present, the more suitable mode will be used.
 *
 * @param  {Array} array Array of objects with segments data
 * @return {Array}       Array of Segments
 */
exports.fromArray = function fromArray (array) {
  return array.reduce(function (acc, seg) {
    if (typeof seg === 'string') {
      acc.push(buildSingleSegment(seg, null));
    } else if (seg.data) {
      acc.push(buildSingleSegment(seg.data, seg.mode));
    }

    return acc
  }, [])
};

/**
 * Builds an optimized sequence of segments from a string,
 * which will produce the shortest possible bitstream.
 *
 * @param  {String} data    Input string
 * @param  {Number} version QR Code version
 * @return {Array}          Array of segments
 */
exports.fromString = function fromString (data, version) {
  var segs = getSegmentsFromString(data, utils.isKanjiModeEnabled());

  var nodes = buildNodes(segs);
  var graph = buildGraph(nodes, version);
  var path = dijkstra_1.find_path(graph.map, 'start', 'end');

  var optimizedSegs = [];
  for (var i = 1; i < path.length - 1; i++) {
    optimizedSegs.push(graph.table[path[i]].node);
  }

  return exports.fromArray(mergeSegments(optimizedSegs))
};

/**
 * Splits a string in various segments with the modes which
 * best represent their content.
 * The produced segments are far from being optimized.
 * The output of this function is only used to estimate a QR Code version
 * which may contain the data.
 *
 * @param  {string} data Input string
 * @return {Array}       Array of segments
 */
exports.rawSplit = function rawSplit (data) {
  return exports.fromArray(
    getSegmentsFromString(data, utils.isKanjiModeEnabled())
  )
};
});

/**
 * QRCode for JavaScript
 *
 * modified by Ryan Day for nodejs support
 * Copyright (c) 2011 Ryan Day
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
*/

/**
 * Add finder patterns bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupFinderPattern (matrix, version) {
  var size = matrix.size;
  var pos = finderPattern.getPositions(version);

  for (var i = 0; i < pos.length; i++) {
    var row = pos[i][0];
    var col = pos[i][1];

    for (var r = -1; r <= 7; r++) {
      if (row + r <= -1 || size <= row + r) continue

      for (var c = -1; c <= 7; c++) {
        if (col + c <= -1 || size <= col + c) continue

        if ((r >= 0 && r <= 6 && (c === 0 || c === 6)) ||
          (c >= 0 && c <= 6 && (r === 0 || r === 6)) ||
          (r >= 2 && r <= 4 && c >= 2 && c <= 4)) {
          matrix.set(row + r, col + c, true, true);
        } else {
          matrix.set(row + r, col + c, false, true);
        }
      }
    }
  }
}

/**
 * Add timing pattern bits to matrix
 *
 * Note: this function must be called before {@link setupAlignmentPattern}
 *
 * @param  {BitMatrix} matrix Modules matrix
 */
function setupTimingPattern (matrix) {
  var size = matrix.size;

  for (var r = 8; r < size - 8; r++) {
    var value = r % 2 === 0;
    matrix.set(r, 6, value, true);
    matrix.set(6, r, value, true);
  }
}

/**
 * Add alignment patterns bits to matrix
 *
 * Note: this function must be called after {@link setupTimingPattern}
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupAlignmentPattern (matrix, version) {
  var pos = alignmentPattern.getPositions(version);

  for (var i = 0; i < pos.length; i++) {
    var row = pos[i][0];
    var col = pos[i][1];

    for (var r = -2; r <= 2; r++) {
      for (var c = -2; c <= 2; c++) {
        if (r === -2 || r === 2 || c === -2 || c === 2 ||
          (r === 0 && c === 0)) {
          matrix.set(row + r, col + c, true, true);
        } else {
          matrix.set(row + r, col + c, false, true);
        }
      }
    }
  }
}

/**
 * Add version info bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupVersionInfo (matrix, version$1) {
  var size = matrix.size;
  var bits = version.getEncodedBits(version$1);
  var row, col, mod;

  for (var i = 0; i < 18; i++) {
    row = Math.floor(i / 3);
    col = i % 3 + size - 8 - 3;
    mod = ((bits >> i) & 1) === 1;

    matrix.set(row, col, mod, true);
    matrix.set(col, row, mod, true);
  }
}

/**
 * Add format info bits to matrix
 *
 * @param  {BitMatrix} matrix               Modules matrix
 * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
 * @param  {Number}    maskPattern          Mask pattern reference value
 */
function setupFormatInfo (matrix, errorCorrectionLevel, maskPattern) {
  var size = matrix.size;
  var bits = formatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
  var i, mod;

  for (i = 0; i < 15; i++) {
    mod = ((bits >> i) & 1) === 1;

    // vertical
    if (i < 6) {
      matrix.set(i, 8, mod, true);
    } else if (i < 8) {
      matrix.set(i + 1, 8, mod, true);
    } else {
      matrix.set(size - 15 + i, 8, mod, true);
    }

    // horizontal
    if (i < 8) {
      matrix.set(8, size - i - 1, mod, true);
    } else if (i < 9) {
      matrix.set(8, 15 - i - 1 + 1, mod, true);
    } else {
      matrix.set(8, 15 - i - 1, mod, true);
    }
  }

  // fixed module
  matrix.set(size - 8, 8, 1, true);
}

/**
 * Add encoded data bits to matrix
 *
 * @param  {BitMatrix} matrix Modules matrix
 * @param  {Buffer}    data   Data codewords
 */
function setupData (matrix, data) {
  var size = matrix.size;
  var inc = -1;
  var row = size - 1;
  var bitIndex = 7;
  var byteIndex = 0;

  for (var col = size - 1; col > 0; col -= 2) {
    if (col === 6) col--;

    while (true) {
      for (var c = 0; c < 2; c++) {
        if (!matrix.isReserved(row, col - c)) {
          var dark = false;

          if (byteIndex < data.length) {
            dark = (((data[byteIndex] >>> bitIndex) & 1) === 1);
          }

          matrix.set(row, col - c, dark);
          bitIndex--;

          if (bitIndex === -1) {
            byteIndex++;
            bitIndex = 7;
          }
        }
      }

      row += inc;

      if (row < 0 || size <= row) {
        row -= inc;
        inc = -inc;
        break
      }
    }
  }
}

/**
 * Create encoded codewords from data input
 *
 * @param  {Number}   version              QR Code version
 * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
 * @param  {ByteData} data                 Data input
 * @return {Buffer}                        Buffer containing encoded codewords
 */
function createData (version, errorCorrectionLevel, segments) {
  // Prepare data buffer
  var buffer = new bitBuffer();

  segments.forEach(function (data) {
    // prefix data with mode indicator (4 bits)
    buffer.put(data.mode.bit, 4);

    // Prefix data with character count indicator.
    // The character count indicator is a string of bits that represents the
    // number of characters that are being encoded.
    // The character count indicator must be placed after the mode indicator
    // and must be a certain number of bits long, depending on the QR version
    // and data mode
    // @see {@link Mode.getCharCountIndicator}.
    buffer.put(data.getLength(), mode.getCharCountIndicator(data.mode, version));

    // add binary data sequence to buffer
    data.write(buffer);
  });

  // Calculate required number of bits
  var totalCodewords = utils.getSymbolTotalCodewords(version);
  var ecTotalCodewords = errorCorrectionCode.getTotalCodewordsCount(version, errorCorrectionLevel);
  var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;

  // Add a terminator.
  // If the bit string is shorter than the total number of required bits,
  // a terminator of up to four 0s must be added to the right side of the string.
  // If the bit string is more than four bits shorter than the required number of bits,
  // add four 0s to the end.
  if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
    buffer.put(0, 4);
  }

  // If the bit string is fewer than four bits shorter, add only the number of 0s that
  // are needed to reach the required number of bits.

  // After adding the terminator, if the number of bits in the string is not a multiple of 8,
  // pad the string on the right with 0s to make the string's length a multiple of 8.
  while (buffer.getLengthInBits() % 8 !== 0) {
    buffer.putBit(0);
  }

  // Add pad bytes if the string is still shorter than the total number of required bits.
  // Extend the buffer to fill the data capacity of the symbol corresponding to
  // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
  // and 00010001 (0x11) alternately.
  var remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
  for (var i = 0; i < remainingByte; i++) {
    buffer.put(i % 2 ? 0x11 : 0xEC, 8);
  }

  return createCodewords(buffer, version, errorCorrectionLevel)
}

/**
 * Encode input data with Reed-Solomon and return codewords with
 * relative error correction bits
 *
 * @param  {BitBuffer} bitBuffer            Data to encode
 * @param  {Number}    version              QR Code version
 * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
 * @return {Buffer}                         Buffer containing encoded codewords
 */
function createCodewords (bitBuffer, version, errorCorrectionLevel) {
  // Total codewords for this QR code version (Data + Error correction)
  var totalCodewords = utils.getSymbolTotalCodewords(version);

  // Total number of error correction codewords
  var ecTotalCodewords = errorCorrectionCode.getTotalCodewordsCount(version, errorCorrectionLevel);

  // Total number of data codewords
  var dataTotalCodewords = totalCodewords - ecTotalCodewords;

  // Total number of blocks
  var ecTotalBlocks = errorCorrectionCode.getBlocksCount(version, errorCorrectionLevel);

  // Calculate how many blocks each group should contain
  var blocksInGroup2 = totalCodewords % ecTotalBlocks;
  var blocksInGroup1 = ecTotalBlocks - blocksInGroup2;

  var totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);

  var dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
  var dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;

  // Number of EC codewords is the same for both groups
  var ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;

  // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount
  var rs = new reedSolomonEncoder(ecCount);

  var offset = 0;
  var dcData = new Array(ecTotalBlocks);
  var ecData = new Array(ecTotalBlocks);
  var maxDataSize = 0;
  var buffer = typedarrayBuffer.from(bitBuffer.buffer);

  // Divide the buffer into the required number of blocks
  for (var b = 0; b < ecTotalBlocks; b++) {
    var dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;

    // extract a block of data from buffer
    dcData[b] = buffer.slice(offset, offset + dataSize);

    // Calculate EC codewords for this data block
    ecData[b] = rs.encode(dcData[b]);

    offset += dataSize;
    maxDataSize = Math.max(maxDataSize, dataSize);
  }

  // Create final data
  // Interleave the data and error correction codewords from each block
  var data = typedarrayBuffer.alloc(totalCodewords);
  var index = 0;
  var i, r;

  // Add data codewords
  for (i = 0; i < maxDataSize; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      if (i < dcData[r].length) {
        data[index++] = dcData[r][i];
      }
    }
  }

  // Apped EC codewords
  for (i = 0; i < ecCount; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      data[index++] = ecData[r][i];
    }
  }

  return data
}

/**
 * Build QR Code symbol
 *
 * @param  {String} data                 Input string
 * @param  {Number} version              QR Code version
 * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
 * @param  {MaskPattern} maskPattern     Mask pattern
 * @return {Object}                      Object containing symbol data
 */
function createSymbol (data, version$1, errorCorrectionLevel, maskPattern$1) {
  var segments$1;

  if (isarray(data)) {
    segments$1 = segments.fromArray(data);
  } else if (typeof data === 'string') {
    var estimatedVersion = version$1;

    if (!estimatedVersion) {
      var rawSegments = segments.rawSplit(data);

      // Estimate best version that can contain raw splitted segments
      estimatedVersion = version.getBestVersionForData(rawSegments,
        errorCorrectionLevel);
    }

    // Build optimized segments
    // If estimated version is undefined, try with the highest version
    segments$1 = segments.fromString(data, estimatedVersion || 40);
  } else {
    throw new Error('Invalid data')
  }

  // Get the min version that can contain data
  var bestVersion = version.getBestVersionForData(segments$1,
      errorCorrectionLevel);

  // If no version is found, data cannot be stored
  if (!bestVersion) {
    throw new Error('The amount of data is too big to be stored in a QR Code')
  }

  // If not specified, use min version as default
  if (!version$1) {
    version$1 = bestVersion;

  // Check if the specified version can contain the data
  } else if (version$1 < bestVersion) {
    throw new Error('\n' +
      'The chosen QR Code version cannot contain this amount of data.\n' +
      'Minimum version required to store current data is: ' + bestVersion + '.\n'
    )
  }

  var dataBits = createData(version$1, errorCorrectionLevel, segments$1);

  // Allocate matrix buffer
  var moduleCount = utils.getSymbolSize(version$1);
  var modules = new bitMatrix(moduleCount);

  // Add function modules
  setupFinderPattern(modules, version$1);
  setupTimingPattern(modules);
  setupAlignmentPattern(modules, version$1);

  // Add temporary dummy bits for format info just to set them as reserved.
  // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
  // since the masking operation must be performed only on the encoding region.
  // These blocks will be replaced with correct values later in code.
  setupFormatInfo(modules, errorCorrectionLevel, 0);

  if (version$1 >= 7) {
    setupVersionInfo(modules, version$1);
  }

  // Add data codewords
  setupData(modules, dataBits);

  if (isNaN(maskPattern$1)) {
    // Find best mask pattern
    maskPattern$1 = maskPattern.getBestMask(modules,
      setupFormatInfo.bind(null, modules, errorCorrectionLevel));
  }

  // Apply mask pattern
  maskPattern.applyMask(maskPattern$1, modules);

  // Replace format info bits with correct values
  setupFormatInfo(modules, errorCorrectionLevel, maskPattern$1);

  return {
    modules: modules,
    version: version$1,
    errorCorrectionLevel: errorCorrectionLevel,
    maskPattern: maskPattern$1,
    segments: segments$1
  }
}

/**
 * QR Code
 *
 * @param {String | Array} data                 Input data
 * @param {Object} options                      Optional configurations
 * @param {Number} options.version              QR Code version
 * @param {String} options.errorCorrectionLevel Error correction level
 * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
 */
var create = function create (data, options) {
  if (typeof data === 'undefined' || data === '') {
    throw new Error('No input text')
  }

  var errorCorrectionLevel$1 = errorCorrectionLevel.M;
  var version$1;
  var mask;

  if (typeof options !== 'undefined') {
    // Use higher error correction level as default
    errorCorrectionLevel$1 = errorCorrectionLevel.from(options.errorCorrectionLevel, errorCorrectionLevel.M);
    version$1 = version.from(options.version);
    mask = maskPattern.from(options.maskPattern);

    if (options.toSJISFunc) {
      utils.setToSJISFunction(options.toSJISFunc);
    }
  }

  return createSymbol(data, version$1, errorCorrectionLevel$1, mask)
};

var qrcode = {
	create: create
};

var utils$1 = createCommonjsModule(function (module, exports) {
function hex2rgba (hex) {
  if (typeof hex === 'number') {
    hex = hex.toString();
  }

  if (typeof hex !== 'string') {
    throw new Error('Color should be defined as hex string')
  }

  var hexCode = hex.slice().replace('#', '').split('');
  if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
    throw new Error('Invalid hex color: ' + hex)
  }

  // Convert from short to long form (fff -> ffffff)
  if (hexCode.length === 3 || hexCode.length === 4) {
    hexCode = Array.prototype.concat.apply([], hexCode.map(function (c) {
      return [c, c]
    }));
  }

  // Add default alpha value
  if (hexCode.length === 6) hexCode.push('F', 'F');

  var hexValue = parseInt(hexCode.join(''), 16);

  return {
    r: (hexValue >> 24) & 255,
    g: (hexValue >> 16) & 255,
    b: (hexValue >> 8) & 255,
    a: hexValue & 255,
    hex: '#' + hexCode.slice(0, 6).join('')
  }
}

exports.getOptions = function getOptions (options) {
  if (!options) options = {};
  if (!options.color) options.color = {};

  var margin = typeof options.margin === 'undefined' ||
    options.margin === null ||
    options.margin < 0 ? 4 : options.margin;

  var width = options.width && options.width >= 21 ? options.width : undefined;
  var scale = options.scale || 4;

  return {
    width: width,
    scale: width ? 4 : scale,
    margin: margin,
    color: {
      dark: hex2rgba(options.color.dark || '#000000ff'),
      light: hex2rgba(options.color.light || '#ffffffff')
    },
    type: options.type,
    rendererOpts: options.rendererOpts || {}
  }
};

exports.getScale = function getScale (qrSize, opts) {
  return opts.width && opts.width >= qrSize + opts.margin * 2
    ? opts.width / (qrSize + opts.margin * 2)
    : opts.scale
};

exports.getImageWidth = function getImageWidth (qrSize, opts) {
  var scale = exports.getScale(qrSize, opts);
  return Math.floor((qrSize + opts.margin * 2) * scale)
};

exports.qrToImageData = function qrToImageData (imgData, qr, opts) {
  var size = qr.modules.size;
  var data = qr.modules.data;
  var scale = exports.getScale(size, opts);
  var symbolSize = Math.floor((size + opts.margin * 2) * scale);
  var scaledMargin = opts.margin * scale;
  var palette = [opts.color.light, opts.color.dark];

  for (var i = 0; i < symbolSize; i++) {
    for (var j = 0; j < symbolSize; j++) {
      var posDst = (i * symbolSize + j) * 4;
      var pxColor = opts.color.light;

      if (i >= scaledMargin && j >= scaledMargin &&
        i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
        var iSrc = Math.floor((i - scaledMargin) / scale);
        var jSrc = Math.floor((j - scaledMargin) / scale);
        pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
      }

      imgData[posDst++] = pxColor.r;
      imgData[posDst++] = pxColor.g;
      imgData[posDst++] = pxColor.b;
      imgData[posDst] = pxColor.a;
    }
  }
};
});

var canvas = createCommonjsModule(function (module, exports) {
function clearCanvas (ctx, canvas, size) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (!canvas.style) canvas.style = {};
  canvas.height = size;
  canvas.width = size;
  canvas.style.height = size + 'px';
  canvas.style.width = size + 'px';
}

function getCanvasElement () {
  try {
    return document.createElement('canvas')
  } catch (e) {
    throw new Error('You need to specify a canvas element')
  }
}

exports.render = function render (qrData, canvas, options) {
  var opts = options;
  var canvasEl = canvas;

  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas;
    canvas = undefined;
  }

  if (!canvas) {
    canvasEl = getCanvasElement();
  }

  opts = utils$1.getOptions(opts);
  var size = utils$1.getImageWidth(qrData.modules.size, opts);

  var ctx = canvasEl.getContext('2d');
  var image = ctx.createImageData(size, size);
  utils$1.qrToImageData(image.data, qrData, opts);

  clearCanvas(ctx, canvasEl, size);
  ctx.putImageData(image, 0, 0);

  return canvasEl
};

exports.renderToDataURL = function renderToDataURL (qrData, canvas, options) {
  var opts = options;

  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas;
    canvas = undefined;
  }

  if (!opts) opts = {};

  var canvasEl = exports.render(qrData, canvas, opts);

  var type = opts.type || 'image/png';
  var rendererOpts = opts.rendererOpts || {};

  return canvasEl.toDataURL(type, rendererOpts.quality)
};
});

function getColorAttrib (color, attrib) {
  var alpha = color.a / 255;
  var str = attrib + '="' + color.hex + '"';

  return alpha < 1
    ? str + ' ' + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"'
    : str
}

function svgCmd (cmd, x, y) {
  var str = cmd + x;
  if (typeof y !== 'undefined') str += ' ' + y;

  return str
}

function qrToPath (data, size, margin) {
  var path = '';
  var moveBy = 0;
  var newRow = false;
  var lineLength = 0;

  for (var i = 0; i < data.length; i++) {
    var col = Math.floor(i % size);
    var row = Math.floor(i / size);

    if (!col && !newRow) newRow = true;

    if (data[i]) {
      lineLength++;

      if (!(i > 0 && col > 0 && data[i - 1])) {
        path += newRow
          ? svgCmd('M', col + margin, 0.5 + row + margin)
          : svgCmd('m', moveBy, 0);

        moveBy = 0;
        newRow = false;
      }

      if (!(col + 1 < size && data[i + 1])) {
        path += svgCmd('h', lineLength);
        lineLength = 0;
      }
    } else {
      moveBy++;
    }
  }

  return path
}

var render = function render (qrData, options, cb) {
  var opts = utils$1.getOptions(options);
  var size = qrData.modules.size;
  var data = qrData.modules.data;
  var qrcodesize = size + opts.margin * 2;

  var bg = !opts.color.light.a
    ? ''
    : '<path ' + getColorAttrib(opts.color.light, 'fill') +
      ' d="M0 0h' + qrcodesize + 'v' + qrcodesize + 'H0z"/>';

  var path =
    '<path ' + getColorAttrib(opts.color.dark, 'stroke') +
    ' d="' + qrToPath(data, size, opts.margin) + '"/>';

  var viewBox = 'viewBox="' + '0 0 ' + qrcodesize + ' ' + qrcodesize + '"';

  var width = !opts.width ? '' : 'width="' + opts.width + '" height="' + opts.width + '" ';

  var svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + '</svg>\n';

  if (typeof cb === 'function') {
    cb(null, svgTag);
  }

  return svgTag
};

var svgTag = {
	render: render
};

function renderCanvas (renderFunc, canvas, text, opts, cb) {
  var args = [].slice.call(arguments, 1);
  var argsNum = args.length;
  var isLastArgCb = typeof args[argsNum - 1] === 'function';

  if (!isLastArgCb && !canPromise()) {
    throw new Error('Callback required as last argument')
  }

  if (isLastArgCb) {
    if (argsNum < 2) {
      throw new Error('Too few arguments provided')
    }

    if (argsNum === 2) {
      cb = text;
      text = canvas;
      canvas = opts = undefined;
    } else if (argsNum === 3) {
      if (canvas.getContext && typeof cb === 'undefined') {
        cb = opts;
        opts = undefined;
      } else {
        cb = opts;
        opts = text;
        text = canvas;
        canvas = undefined;
      }
    }
  } else {
    if (argsNum < 1) {
      throw new Error('Too few arguments provided')
    }

    if (argsNum === 1) {
      text = canvas;
      canvas = opts = undefined;
    } else if (argsNum === 2 && !canvas.getContext) {
      opts = text;
      text = canvas;
      canvas = undefined;
    }

    return new Promise(function (resolve, reject) {
      try {
        var data = qrcode.create(text, opts);
        resolve(renderFunc(data, canvas, opts));
      } catch (e) {
        reject(e);
      }
    })
  }

  try {
    var data = qrcode.create(text, opts);
    cb(null, renderFunc(data, canvas, opts));
  } catch (e) {
    cb(e);
  }
}

var create$1 = qrcode.create;
var toCanvas = renderCanvas.bind(null, canvas.render);
var toDataURL = renderCanvas.bind(null, canvas.renderToDataURL);

// only svg for now.
var toString_1 = renderCanvas.bind(null, function (data, _, opts) {
  return svgTag.render(data, opts)
});

var browser = {
	create: create$1,
	toCanvas: toCanvas,
	toDataURL: toDataURL,
	toString: toString_1
};

const amplifyTotpSetupCss = ".totp-setup{text-align:center;margin-bottom:30px}.totp-setup img{height:128px;width:128px}";

const logger$i = new Logger('TOTP');
const AmplifyTOTPSetup = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        attachShadow(this);
        this.inputProps = {
            autoFocus: true,
        };
        /** Auth state change handler for this component */
        this.handleAuthStateChange = dispatchAuthStateChangeEvent;
        /** Used for header text in totp setup component */
        this.headerText = Translations.TOTP_HEADER_TEXT;
        /** Used for customizing the issuer string in the qr code image */
        this.issuer = Translations.TOTP_ISSUER;
        /** This is run after totp setup is complete. Useful if using this as standalone. */
        this.handleComplete = this.onTOTPEvent;
        /** Set this to true if this component is running outside the default `amplify-authenticator` usage */
        this.standalone = false;
        this.code = null;
        this.setupMessage = null;
        this.qrCodeInput = null;
        this.loading = false;
    }
    async componentWillLoad() {
        /**
         * If this component is being used internally by the authenticator, we want to re-run
         * setup only when the current auth state is `AuthState.TOTPSetup`.
         *
         * Ideally, we would only run the setup once when the component is mounted. This is not possible
         * due to a bug with slots -- a slotted component will run its `componentWillLoad` lifecycle before
         * it is even rendered. So instead we watch for authstate changes and run setup conditionally.
         */
        if (!this.standalone) {
            this.removeHubListener = onAuthUIStateChange(authState => {
                if (authState === AuthState.TOTPSetup)
                    this.setup();
            });
        }
        await this.setup();
    }
    /**
     * If this component is being used externally, we can use `@Watch` as normal.
     */
    handleUserChange() {
        this.standalone && this.setup();
    }
    disconnectedCallback() {
        this.removeHubListener && this.removeHubListener(); // stop listening to `onAuthUIStateChange`
    }
    buildOtpAuthPath(user, issuer, secretKey) {
        return `otpauth://totp/${issuer}:${user.username}?secret=${secretKey}&issuer=${issuer}`;
    }
    async onTOTPEvent(user) {
        logger$i.debug('on totp event');
        await checkContact(user, this.handleAuthStateChange);
    }
    handleTotpInputChange(event) {
        this.setupMessage = null;
        this.qrCodeInput = event.target.value;
    }
    async generateQRCode(codeFromTotp) {
        try {
            this.qrCodeImageSource = await browser.toDataURL(codeFromTotp);
        }
        catch (error) {
            dispatchToastHubEvent(error);
        }
    }
    async setup() {
        // ensure setup is only run once after totp setup is available
        if (this.code || this.loading) {
            logger$i.debug('setup was attempted while another is in progress, skipping setup.');
            return;
        }
        if (!this.user || !this.user.associateSoftwareToken) {
            logger$i.debug('setup was attempted with invalid `user`, skipping setup.', this.user);
            return;
        }
        if (!Auth$1 || typeof Auth$1.setupTOTP !== 'function') {
            throw new Error(NO_AUTH_MODULE_FOUND);
        }
        this.setupMessage = null;
        const encodedIssuer = encodeURI(I18n.get(this.issuer));
        this.loading = true;
        try {
            const secretKey = await Auth$1.setupTOTP(this.user);
            logger$i.debug('secret key', secretKey);
            this.code = this.buildOtpAuthPath(this.user, encodedIssuer, secretKey);
            this.generateQRCode(this.code);
        }
        catch (error) {
            dispatchToastHubEvent(error);
            logger$i.debug(I18n.get(Translations.TOTP_SETUP_FAILURE), error);
        }
        finally {
            this.loading = false;
        }
    }
    async verifyTotpToken(event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.qrCodeInput) {
            logger$i.debug('No TOTP Code provided');
            return;
        }
        const user = this.user;
        if (!Auth$1 ||
            typeof Auth$1.verifyTotpToken !== 'function' ||
            typeof Auth$1.setPreferredMFA !== 'function') {
            throw new Error(NO_AUTH_MODULE_FOUND);
        }
        try {
            await Auth$1.verifyTotpToken(user, this.qrCodeInput);
            await Auth$1.setPreferredMFA(user, MfaOption.TOTP);
            this.setupMessage = I18n.get(Translations.TOTP_SUCCESS_MESSAGE);
            logger$i.debug(I18n.get(Translations.TOTP_SUCCESS_MESSAGE));
            await this.handleComplete(user);
        }
        catch (error) {
            this.setupMessage = I18n.get(Translations.TOTP_SETUP_FAILURE);
            logger$i.error(error);
        }
    }
    render() {
        return (h(Host, null, h("amplify-form-section", { headerText: I18n.get(this.headerText), submitButtonText: I18n.get(Translations.TOTP_SUBMIT_BUTTON_TEXT), handleSubmit: event => this.verifyTotpToken(event), loading: this.loading }, h("div", { class: "totp-setup" }, this.qrCodeImageSource && (h("img", { src: this.qrCodeImageSource, alt: I18n.get(Translations.QR_CODE_ALT) })), h("amplify-form-field", { label: I18n.get(Translations.TOTP_LABEL), inputProps: this.inputProps, fieldId: "totpCode", name: "totpCode", handleInputChange: event => this.handleTotpInputChange(event) })))));
    }
    static get watchers() { return {
        "user": ["handleUserChange"]
    }; }
    static get style() { return amplifyTotpSetupCss; }
};

const AmplifyUsernameField = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        /** Based on the type of field e.g. sign in, sign up, forgot password, etc. */
        this.fieldId = USERNAME_SUFFIX;
        /** Used for the username label */
        this.label = Translations.USERNAME_LABEL;
        /** Used for the placeholder label */
        this.placeholder = Translations.USERNAME_PLACEHOLDER;
        /** The required flag in order to make an input required prior to submitting a form */
        this.required = false;
    }
    render() {
        return (h("amplify-form-field", { name: "username", fieldId: this.fieldId, label: I18n.get(this.label), placeholder: I18n.get(this.placeholder), required: this.required, handleInputChange: this.handleInputChange, value: this.value, inputProps: this.inputProps, disabled: this.disabled, hint: this.hint }));
    }
};

const logger$j = new Logger('AmplifyVerifyContact');
const AmplifyVerifyContact = class extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        attachShadow(this);
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
        if (!Auth$1 || typeof Auth$1.verifyCurrentUserAttributeSubmit !== 'function') {
            throw new Error(NO_AUTH_MODULE_FOUND);
        }
        this.loading = true;
        try {
            const data = await Auth$1.verifyCurrentUserAttributeSubmit(attr, code);
            logger$j.debug(data);
            this.handleAuthStateChange(AuthState.SignedIn, this.user);
            this.verifyAttr = null;
        }
        catch (error) {
            dispatchToastHubEvent(error);
            logger$j.error(error);
        }
        finally {
            this.loading = false;
        }
    }
    async verify(contact) {
        if (!contact) {
            logger$j.error('Neither Email nor Phone Number selected');
            return;
        }
        if (!Auth$1 || typeof Auth$1.verifyCurrentUserAttribute !== 'function') {
            throw new Error(NO_AUTH_MODULE_FOUND);
        }
        this.loading = true;
        try {
            const data = await Auth$1.verifyCurrentUserAttribute(contact);
            logger$j.debug(data);
            this.verifyAttr = contact;
        }
        catch (error) {
            dispatchToastHubEvent(error);
            logger$j.error(error);
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
            logger$j.debug('No user to verify');
            return null;
        }
        const { unverified } = user;
        if (!unverified) {
            logger$j.debug('Unverified variable does not exist on user');
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

const AmplifyAmazonButton$1 = /*@__PURE__*/proxyCustomElement(AmplifyAmazonButton, [1,"amplify-amazon-button",{"clientId":[1,"client-id"],"handleAuthStateChange":[16]}]);
const AmplifyAuthContainer$1 = /*@__PURE__*/proxyCustomElement(AmplifyAuthContainer, [4,"amplify-auth-container"]);
const AmplifyAuthFields$1 = /*@__PURE__*/proxyCustomElement(AmplifyAuthFields, [0,"amplify-auth-fields",{"formFields":[16]}]);
const AmplifyAuth0Button$1 = /*@__PURE__*/proxyCustomElement(AmplifyAuth0Button, [1,"amplify-auth0-button",{"config":[16],"handleAuthStateChange":[16]}]);
const AmplifyAuthenticator$1 = /*@__PURE__*/proxyCustomElement(AmplifyAuthenticator, [1,"amplify-authenticator",{"initialAuthState":[1,"initial-auth-state"],"federated":[16],"usernameAlias":[1,"username-alias"],"handleAuthStateChange":[16],"hideToast":[4,"hide-toast"],"authState":[32],"authData":[32],"toastMessage":[32]}]);
const AmplifyButton$1 = /*@__PURE__*/proxyCustomElement(AmplifyButton, [4,"amplify-button",{"type":[1],"variant":[1],"handleButtonClick":[16],"disabled":[4],"icon":[1]}]);
const AmplifyChatbot$1 = /*@__PURE__*/proxyCustomElement(AmplifyChatbot, [1,"amplify-chatbot",{"botName":[1,"bot-name"],"clearOnComplete":[4,"clear-on-complete"],"conversationModeOn":[4,"conversation-mode-on"],"welcomeMessage":[1,"welcome-message"],"botTitle":[1,"bot-title"],"voiceEnabled":[4,"voice-enabled"],"textEnabled":[4,"text-enabled"],"silenceTime":[2,"silence-time"],"silenceThreshold":[2,"silence-threshold"],"messages":[32],"text":[32],"chatState":[32],"error":[32]},[[0,"formSubmit","submitHandler"]]]);
const AmplifyCheckbox$1 = /*@__PURE__*/proxyCustomElement(AmplifyCheckbox, [1,"amplify-checkbox",{"name":[1],"value":[1],"fieldId":[1,"field-id"],"label":[1],"checked":[4],"disabled":[4]}]);
const AmplifyCodeField$1 = /*@__PURE__*/proxyCustomElement(AmplifyCodeField, [0,"amplify-code-field",{"fieldId":[1,"field-id"],"label":[1],"placeholder":[1],"hint":[1],"required":[4],"handleInputChange":[16],"value":[1],"inputProps":[16],"disabled":[4]}]);
const AmplifyConfirmSignIn$1 = /*@__PURE__*/proxyCustomElement(AmplifyConfirmSignIn, [1,"amplify-confirm-sign-in",{"handleSubmit":[16],"headerText":[1,"header-text"],"submitButtonText":[1,"submit-button-text"],"handleAuthStateChange":[16],"formFields":[16],"user":[16],"mfaOption":[32],"loading":[32],"code":[32]}]);
const AmplifyConfirmSignUp$1 = /*@__PURE__*/proxyCustomElement(AmplifyConfirmSignUp, [1,"amplify-confirm-sign-up",{"handleSubmit":[16],"headerText":[1,"header-text"],"submitButtonText":[1,"submit-button-text"],"formFields":[16],"handleAuthStateChange":[16],"user":[16],"usernameAlias":[1,"username-alias"],"code":[32],"loading":[32],"userInput":[32]}]);
const AmplifyContainer$1 = /*@__PURE__*/proxyCustomElement(AmplifyContainer, [4,"amplify-container"]);
const AmplifyCountryDialCode$1 = /*@__PURE__*/proxyCustomElement(AmplifyCountryDialCode, [1,"amplify-country-dial-code",{"fieldId":[1,"field-id"],"options":[16],"handleInputChange":[16],"dialCode":[8,"dial-code"]}]);
const AmplifyEmailField$1 = /*@__PURE__*/proxyCustomElement(AmplifyEmailField, [0,"amplify-email-field",{"fieldId":[1,"field-id"],"label":[1],"placeholder":[1],"required":[4],"handleInputChange":[16],"value":[1],"inputProps":[16],"disabled":[4],"hint":[1]}]);
const AmplifyFacebookButton$1 = /*@__PURE__*/proxyCustomElement(AmplifyFacebookButton, [1,"amplify-facebook-button",{"appId":[1,"app-id"],"handleAuthStateChange":[16]}]);
const AmplifyFederatedButtons$1 = /*@__PURE__*/proxyCustomElement(AmplifyFederatedButtons, [1,"amplify-federated-buttons",{"authState":[1,"auth-state"],"federated":[16],"handleAuthStateChange":[16]}]);
const AmplifyFederatedSignIn$1 = /*@__PURE__*/proxyCustomElement(AmplifyFederatedSignIn, [1,"amplify-federated-sign-in",{"authState":[1,"auth-state"],"federated":[8]}]);
const AmplifyForgotPassword$1 = /*@__PURE__*/proxyCustomElement(AmplifyForgotPassword, [1,"amplify-forgot-password",{"headerText":[1,"header-text"],"sendButtonText":[1,"send-button-text"],"submitButtonText":[1,"submit-button-text"],"formFields":[16],"handleSend":[16],"handleSubmit":[16],"handleAuthStateChange":[16],"usernameAlias":[1,"username-alias"],"delivery":[32],"loading":[32],"forgotPasswordAttrs":[32]}]);
const AmplifyFormField$1 = /*@__PURE__*/proxyCustomElement(AmplifyFormField, [4,"amplify-form-field",{"fieldId":[1,"field-id"],"label":[1],"description":[1],"hint":[1],"type":[1],"required":[4],"handleInputChange":[16],"placeholder":[1],"name":[1],"value":[1],"inputProps":[16],"disabled":[4]}]);
const AmplifyFormSection$1 = /*@__PURE__*/proxyCustomElement(AmplifyFormSection, [4,"amplify-form-section",{"handleSubmit":[16],"submitButtonText":[1,"submit-button-text"],"headerText":[1,"header-text"],"testDataPrefix":[1,"test-data-prefix"],"loading":[4],"secondaryFooterContent":[1,"secondary-footer-content"]},[[0,"formSubmit","handleFormSubmit"]]]);
const AmplifyGoogleButton$1 = /*@__PURE__*/proxyCustomElement(AmplifyGoogleButton, [1,"amplify-google-button",{"handleAuthStateChange":[16],"clientId":[1,"client-id"]}]);
const AmplifyGreetings$1 = /*@__PURE__*/proxyCustomElement(AmplifyGreetings, [1,"amplify-greetings",{"username":[1],"logo":[16],"handleAuthStateChange":[16]}]);
const AmplifyHint$1 = /*@__PURE__*/proxyCustomElement(AmplifyHint, [1,"amplify-hint"]);
const AmplifyIcon$1 = /*@__PURE__*/proxyCustomElement(AmplifyIcon, [2,"amplify-icon",{"name":[1]}]);
const AmplifyIconButton$1 = /*@__PURE__*/proxyCustomElement(AmplifyIconButton, [1,"amplify-icon-button",{"name":[1],"tooltip":[1],"autoShowTooltip":[4,"auto-show-tooltip"]}]);
const AmplifyInput$1 = /*@__PURE__*/proxyCustomElement(AmplifyInput, [0,"amplify-input",{"fieldId":[1,"field-id"],"description":[1],"type":[1],"handleInputChange":[16],"placeholder":[1],"name":[1],"value":[1],"inputProps":[16],"disabled":[4],"required":[4],"autoCompleted":[32]}]);
const AmplifyLabel$1 = /*@__PURE__*/proxyCustomElement(AmplifyLabel, [4,"amplify-label",{"htmlFor":[1,"html-for"]}]);
const AmplifyLink$1 = /*@__PURE__*/proxyCustomElement(AmplifyLink, [1,"amplify-link",{"role":[1]}]);
const AmplifyLoadingSpinner$1 = /*@__PURE__*/proxyCustomElement(AmplifyLoadingSpinner, [1,"amplify-loading-spinner"]);
const AmplifyNav$1 = /*@__PURE__*/proxyCustomElement(AmplifyNav, [1,"amplify-nav"]);
const AmplifyOauthButton = /*@__PURE__*/proxyCustomElement(AmplifyOAuthButton, [1,"amplify-oauth-button",{"config":[16]}]);
const AmplifyPasswordField$1 = /*@__PURE__*/proxyCustomElement(AmplifyPasswordField, [0,"amplify-password-field",{"fieldId":[1,"field-id"],"label":[1],"placeholder":[1],"hint":[1],"required":[4],"handleInputChange":[16],"value":[1],"inputProps":[16],"disabled":[4]}]);
const AmplifyPhoneField$1 = /*@__PURE__*/proxyCustomElement(AmplifyPhoneField, [0,"amplify-phone-field",{"fieldId":[1,"field-id"],"label":[1],"placeholder":[1],"hint":[1],"required":[4],"handleInputChange":[16],"value":[1],"inputProps":[16],"disabled":[4],"dialCode":[8,"dial-code"]}]);
const AmplifyPhotoPicker$1 = /*@__PURE__*/proxyCustomElement(AmplifyPhotoPicker, [1,"amplify-photo-picker",{"headerTitle":[1,"header-title"],"headerHint":[1,"header-hint"],"placeholderHint":[1,"placeholder-hint"],"buttonText":[1,"button-text"],"previewSrc":[1,"preview-src"],"handleClick":[16],"previewState":[32],"file":[32]}]);
const AmplifyPicker$1 = /*@__PURE__*/proxyCustomElement(AmplifyPicker, [1,"amplify-picker",{"pickerText":[1,"picker-text"],"acceptValue":[1,"accept-value"],"inputHandler":[16]}]);
const AmplifyRadioButton$1 = /*@__PURE__*/proxyCustomElement(AmplifyRadioButton, [0,"amplify-radio-button",{"handleInputChange":[16],"name":[1],"value":[1],"placeholder":[1],"fieldId":[1,"field-id"],"label":[1],"checked":[4],"disabled":[4],"inputProps":[16]}]);
const AmplifyRequireNewPassword$1 = /*@__PURE__*/proxyCustomElement(AmplifyRequireNewPassword, [1,"amplify-require-new-password",{"headerText":[1,"header-text"],"submitButtonText":[1,"submit-button-text"],"handleSubmit":[16],"handleAuthStateChange":[16],"user":[16],"formFields":[16],"password":[32],"loading":[32]}]);
const AmplifyS3Album$1 = /*@__PURE__*/proxyCustomElement(AmplifyS3Album, [1,"amplify-s3-album",{"path":[1],"contentType":[1,"content-type"],"level":[1],"track":[4],"identityId":[1,"identity-id"],"fileToKey":[16],"filter":[16],"sort":[16],"picker":[4],"handleOnLoad":[16],"handleOnError":[16],"pickerText":[1,"picker-text"],"albumItems":[32]}]);
const AmplifyS3Image$1 = /*@__PURE__*/proxyCustomElement(AmplifyS3Image, [1,"amplify-s3-image",{"imgKey":[1,"img-key"],"path":[1],"alt":[1],"body":[16],"contentType":[1,"content-type"],"level":[1],"track":[4],"identityId":[1,"identity-id"],"handleOnLoad":[16],"handleOnError":[16],"imgProps":[16],"src":[32]}]);
const AmplifyS3ImagePicker$1 = /*@__PURE__*/proxyCustomElement(AmplifyS3ImagePicker, [4,"amplify-s3-image-picker",{"path":[1],"contentType":[1,"content-type"],"level":[1],"track":[4],"identityId":[1,"identity-id"],"fileToKey":[16],"headerTitle":[1,"header-title"],"headerHint":[1,"header-hint"],"placeholderHint":[1,"placeholder-hint"],"buttonText":[1,"button-text"],"src":[32]}]);
const AmplifyS3Text$1 = /*@__PURE__*/proxyCustomElement(AmplifyS3Text, [1,"amplify-s3-text",{"textKey":[1,"text-key"],"path":[1],"body":[16],"contentType":[1,"content-type"],"level":[1],"track":[4],"identityId":[1,"identity-id"],"fallbackText":[1,"fallback-text"],"src":[32]}]);
const AmplifyS3TextPicker$1 = /*@__PURE__*/proxyCustomElement(AmplifyS3TextPicker, [1,"amplify-s3-text-picker",{"path":[1],"contentType":[1,"content-type"],"level":[1],"track":[4],"identityId":[1,"identity-id"],"fileToKey":[16],"fallbackText":[1,"fallback-text"],"src":[32]}]);
const AmplifySection$1 = /*@__PURE__*/proxyCustomElement(AmplifySection, [4,"amplify-section",{"role":[1]}]);
const AmplifySelect$1 = /*@__PURE__*/proxyCustomElement(AmplifySelect, [1,"amplify-select",{"options":[16],"fieldId":[1,"field-id"],"handleInputChange":[16],"selected":[8]}]);
const AmplifySelectMfaType = /*@__PURE__*/proxyCustomElement(AmplifySelectMFAType, [1,"amplify-select-mfa-type",{"MFATypes":[16],"authData":[16],"handleSubmit":[16],"TOTPSetup":[32],"selectMessage":[32],"MFAMethod":[32],"isTOTP":[32],"isNoMFA":[32],"isSMS":[32],"loading":[32],"isToastVisible":[32]}]);
const AmplifySignIn$1 = /*@__PURE__*/proxyCustomElement(AmplifySignIn, [1,"amplify-sign-in",{"handleSubmit":[16],"headerText":[1,"header-text"],"submitButtonText":[1,"submit-button-text"],"federated":[16],"handleAuthStateChange":[16],"usernameAlias":[1,"username-alias"],"formFields":[16],"hideSignUp":[4,"hide-sign-up"],"loading":[32],"signInAttributes":[32]}]);
const AmplifySignInButton$1 = /*@__PURE__*/proxyCustomElement(AmplifySignInButton, [6,"amplify-sign-in-button",{"provider":[1]}]);
const AmplifySignOut$1 = /*@__PURE__*/proxyCustomElement(AmplifySignOut, [1,"amplify-sign-out",{"handleAuthStateChange":[16],"buttonText":[1,"button-text"]}]);
const AmplifySignUp$1 = /*@__PURE__*/proxyCustomElement(AmplifySignUp, [1,"amplify-sign-up",{"handleSubmit":[16],"handleSignUp":[16],"validationErrors":[1,"validation-errors"],"headerText":[1,"header-text"],"submitButtonText":[1,"submit-button-text"],"haveAccountText":[1,"have-account-text"],"signInText":[1,"sign-in-text"],"formFields":[16],"handleAuthStateChange":[16],"usernameAlias":[1,"username-alias"],"loading":[32],"signUpAttributes":[32]}]);
const AmplifyStrike$1 = /*@__PURE__*/proxyCustomElement(AmplifyStrike, [6,"amplify-strike"]);
const AmplifyToast$1 = /*@__PURE__*/proxyCustomElement(AmplifyToast, [1,"amplify-toast",{"handleClose":[16],"message":[1]}]);
const AmplifyTooltip$1 = /*@__PURE__*/proxyCustomElement(AmplifyTooltip, [1,"amplify-tooltip",{"text":[1],"shouldAutoShow":[4,"should-auto-show"]}]);
const AmplifyTotpSetup = /*@__PURE__*/proxyCustomElement(AmplifyTOTPSetup, [1,"amplify-totp-setup",{"user":[16],"handleAuthStateChange":[16],"headerText":[1,"header-text"],"issuer":[1],"handleComplete":[16],"standalone":[4],"code":[32],"setupMessage":[32],"qrCodeImageSource":[32],"qrCodeInput":[32],"loading":[32]}]);
const AmplifyUsernameField$1 = /*@__PURE__*/proxyCustomElement(AmplifyUsernameField, [0,"amplify-username-field",{"fieldId":[1,"field-id"],"label":[1],"placeholder":[1],"required":[4],"handleInputChange":[16],"value":[1],"inputProps":[16],"disabled":[4],"hint":[1]}]);
const AmplifyVerifyContact$1 = /*@__PURE__*/proxyCustomElement(AmplifyVerifyContact, [1,"amplify-verify-contact",{"handleAuthStateChange":[16],"user":[16],"verifyAttr":[32],"loading":[32],"code":[32],"contact":[32]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      AmplifyAmazonButton$1,
  AmplifyAuthContainer$1,
  AmplifyAuthFields$1,
  AmplifyAuth0Button$1,
  AmplifyAuthenticator$1,
  AmplifyButton$1,
  AmplifyChatbot$1,
  AmplifyCheckbox$1,
  AmplifyCodeField$1,
  AmplifyConfirmSignIn$1,
  AmplifyConfirmSignUp$1,
  AmplifyContainer$1,
  AmplifyCountryDialCode$1,
  AmplifyEmailField$1,
  AmplifyFacebookButton$1,
  AmplifyFederatedButtons$1,
  AmplifyFederatedSignIn$1,
  AmplifyForgotPassword$1,
  AmplifyFormField$1,
  AmplifyFormSection$1,
  AmplifyGoogleButton$1,
  AmplifyGreetings$1,
  AmplifyHint$1,
  AmplifyIcon$1,
  AmplifyIconButton$1,
  AmplifyInput$1,
  AmplifyLabel$1,
  AmplifyLink$1,
  AmplifyLoadingSpinner$1,
  AmplifyNav$1,
  AmplifyOauthButton,
  AmplifyPasswordField$1,
  AmplifyPhoneField$1,
  AmplifyPhotoPicker$1,
  AmplifyPicker$1,
  AmplifyRadioButton$1,
  AmplifyRequireNewPassword$1,
  AmplifyS3Album$1,
  AmplifyS3Image$1,
  AmplifyS3ImagePicker$1,
  AmplifyS3Text$1,
  AmplifyS3TextPicker$1,
  AmplifySection$1,
  AmplifySelect$1,
  AmplifySelectMfaType,
  AmplifySignIn$1,
  AmplifySignInButton$1,
  AmplifySignOut$1,
  AmplifySignUp$1,
  AmplifyStrike$1,
  AmplifyToast$1,
  AmplifyTooltip$1,
  AmplifyTotpSetup,
  AmplifyUsernameField$1,
  AmplifyVerifyContact$1
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { AUTH_CHANNEL, AUTH_STATE_CHANGE_EVENT, AccessLevel, AmplifyAmazonButton$1 as AmplifyAmazonButton, AmplifyAuth0Button$1 as AmplifyAuth0Button, AmplifyAuthContainer$1 as AmplifyAuthContainer, AmplifyAuthFields$1 as AmplifyAuthFields, AmplifyAuthenticator$1 as AmplifyAuthenticator, AmplifyButton$1 as AmplifyButton, AmplifyChatbot$1 as AmplifyChatbot, AmplifyCheckbox$1 as AmplifyCheckbox, AmplifyCodeField$1 as AmplifyCodeField, AmplifyConfirmSignIn$1 as AmplifyConfirmSignIn, AmplifyConfirmSignUp$1 as AmplifyConfirmSignUp, AmplifyContainer$1 as AmplifyContainer, AmplifyCountryDialCode$1 as AmplifyCountryDialCode, AmplifyEmailField$1 as AmplifyEmailField, AmplifyFacebookButton$1 as AmplifyFacebookButton, AmplifyFederatedButtons$1 as AmplifyFederatedButtons, AmplifyFederatedSignIn$1 as AmplifyFederatedSignIn, AmplifyForgotPassword$1 as AmplifyForgotPassword, AmplifyFormField$1 as AmplifyFormField, AmplifyFormSection$1 as AmplifyFormSection, AmplifyGoogleButton$1 as AmplifyGoogleButton, AmplifyGreetings$1 as AmplifyGreetings, AmplifyHint$1 as AmplifyHint, AmplifyIcon$1 as AmplifyIcon, AmplifyIconButton$1 as AmplifyIconButton, AmplifyInput$1 as AmplifyInput, AmplifyLabel$1 as AmplifyLabel, AmplifyLink$1 as AmplifyLink, AmplifyLoadingSpinner$1 as AmplifyLoadingSpinner, AmplifyNav$1 as AmplifyNav, AmplifyOauthButton, AmplifyPasswordField$1 as AmplifyPasswordField, AmplifyPhoneField$1 as AmplifyPhoneField, AmplifyPhotoPicker$1 as AmplifyPhotoPicker, AmplifyPicker$1 as AmplifyPicker, AmplifyRadioButton$1 as AmplifyRadioButton, AmplifyRequireNewPassword$1 as AmplifyRequireNewPassword, AmplifyS3Album$1 as AmplifyS3Album, AmplifyS3Image$1 as AmplifyS3Image, AmplifyS3ImagePicker$1 as AmplifyS3ImagePicker, AmplifyS3Text$1 as AmplifyS3Text, AmplifyS3TextPicker$1 as AmplifyS3TextPicker, AmplifySection$1 as AmplifySection, AmplifySelect$1 as AmplifySelect, AmplifySelectMfaType, AmplifySignIn$1 as AmplifySignIn, AmplifySignInButton$1 as AmplifySignInButton, AmplifySignOut$1 as AmplifySignOut, AmplifySignUp$1 as AmplifySignUp, AmplifyStrike$1 as AmplifyStrike, AmplifyToast$1 as AmplifyToast, AmplifyTooltip$1 as AmplifyTooltip, AmplifyTotpSetup, AmplifyUsernameField$1 as AmplifyUsernameField, AmplifyVerifyContact$1 as AmplifyVerifyContact, AuthFormField, AuthState, ChallengeName, MfaOption, TOAST_AUTH_ERROR_EVENT, Translations, UI_AUTH_CHANNEL, UsernameAlias, defineCustomElements, onAuthUIStateChange };