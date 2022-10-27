import { AuthErrorStrings } from '@aws-amplify/auth';
export declare enum AuthStrings {
    BACK_TO_SIGN_IN = "Back to Sign In",
    CHANGE_PASSWORD_ACTION = "Change",
    CHANGE_PASSWORD = "Change Password",
    CODE_LABEL = "Verification code",
    CODE_PLACEHOLDER = "Enter code",
    CONFIRM_SIGN_UP_CODE_LABEL = "Confirmation Code",
    CONFIRM_SIGN_UP_CODE_PLACEHOLDER = "Enter your code",
    CONFIRM_SIGN_UP_HEADER_TEXT = "Confirm Sign up",
    CONFIRM_SIGN_UP_LOST_CODE = "Lost your code?",
    CONFIRM_SIGN_UP_RESEND_CODE = "Resend Code",
    CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT = "Confirm",
    CONFIRM_SMS_CODE = "Confirm SMS Code",
    CONFIRM_TOTP_CODE = "Confirm TOTP Code",
    CONFIRM = "Confirm",
    CREATE_ACCOUNT_TEXT = "Create account",
    EMAIL_LABEL = "Email Address *",
    EMAIL_PLACEHOLDER = "Enter your email address",
    FORGOT_PASSWORD_TEXT = "Forgot your password?",
    LESS_THAN_TWO_MFA_VALUES_MESSAGE = "Less than two MFA types available",
    NEW_PASSWORD_LABEL = "New password",
    NEW_PASSWORD_PLACEHOLDER = "Enter your new password",
    NO_ACCOUNT_TEXT = "No account?",
    USERNAME_REMOVE_WHITESPACE = "Username cannot contain whitespace",
    PASSWORD_REMOVE_WHITESPACE = "Password cannot start or end with whitespace",
    PASSWORD_LABEL = "Password *",
    PASSWORD_PLACEHOLDER = "Enter your password",
    PHONE_LABEL = "Phone Number *",
    PHONE_PLACEHOLDER = "(555) 555-1212",
    QR_CODE_ALT = "qrcode",
    RESET_PASSWORD_TEXT = "Reset password",
    RESET_YOUR_PASSWORD = "Reset your password",
    SELECT_MFA_TYPE_HEADER_TEXT = "Select MFA Type",
    SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT = "Verify",
    SEND_CODE = "Send Code",
    SUBMIT = "Submit",
    SETUP_TOTP_REQUIRED = "TOTP needs to be configured",
    SIGN_IN_ACTION = "Sign In",
    SIGN_IN_HEADER_TEXT = "Sign in to your account",
    SIGN_IN_TEXT = "Sign in",
    SIGN_IN_WITH_AMAZON = "Sign in with Amazon",
    SIGN_IN_WITH_AUTH0 = "Sign in with Auth0",
    SIGN_IN_WITH_AWS = "Sign in with AWS",
    SIGN_IN_WITH_FACEBOOK = "Sign in with Facebook",
    SIGN_IN_WITH_GOOGLE = "Sign in with Google",
    SIGN_OUT = "Sign Out",
    SIGN_UP_EMAIL_PLACEHOLDER = "Email",
    SIGN_UP_HAVE_ACCOUNT_TEXT = "Have an account?",
    SIGN_UP_HEADER_TEXT = "Create a new account",
    SIGN_UP_PASSWORD_PLACEHOLDER = "Password",
    SIGN_UP_SUBMIT_BUTTON_TEXT = "Create Account",
    SIGN_UP_USERNAME_PLACEHOLDER = "Username",
    SUCCESS_MFA_TYPE = "Success! Your MFA Type is now:",
    TOTP_HEADER_TEXT = "Scan then enter verification code",
    TOTP_LABEL = "Enter Security Code:",
    TOTP_ISSUER = "AWSCognito",
    TOTP_SETUP_FAILURE = "TOTP Setup has failed",
    TOTP_SUBMIT_BUTTON_TEXT = "Verify Security Token",
    TOTP_SUCCESS_MESSAGE = "Setup TOTP successfully!",
    UNABLE_TO_SETUP_MFA_AT_THIS_TIME = "Failed! Unable to configure MFA at this time",
    USERNAME_LABEL = "Username *",
    USERNAME_PLACEHOLDER = "Enter your username",
    VERIFY_CONTACT_EMAIL_LABEL = "Email",
    VERIFY_CONTACT_HEADER_TEXT = "Account recovery requires verified contact information",
    VERIFY_CONTACT_PHONE_LABEL = "Phone Number",
    VERIFY_CONTACT_SUBMIT_LABEL = "Submit",
    VERIFY_CONTACT_VERIFY_LABEL = "Verify",
    ADDRESS_LABEL = "Address",
    ADDRESS_PLACEHOLDER = "Enter your address",
    NICKNAME_LABEL = "Nickname",
    NICKNAME_PLACEHOLDER = "Enter your nickname",
    BIRTHDATE_LABEL = "Birthday",
    BIRTHDATE_PLACEHOLDER = "Enter your birthday",
    PICTURE_LABEL = "Picture URL",
    PICTURE_PLACEHOLDER = "Enter your picture URL",
    FAMILY_NAME_LABEL = "Family Name",
    FAMILY_NAME_PLACEHOLDER = "Enter your family name",
    PREFERRED_USERNAME_LABEL = "Preferred Username",
    PREFERRED_USERNAME_PLACEHOLDER = "Enter your preferred username",
    GENDER_LABEL = "Gender",
    GENDER_PLACEHOLDER = "Enter your gender",
    PROFILE_LABEL = "Profile URL",
    PROFILE_PLACEHOLDER = "Enter your profile URL",
    GIVEN_NAME_LABEL = "First Name",
    GIVEN_NAME_PLACEHOLDER = "Enter your first name",
    ZONEINFO_LABEL = "Time zone",
    ZONEINFO_PLACEHOLDER = "Enter your time zone",
    LOCALE_LABEL = "Locale",
    LOCALE_PLACEHOLDER = "Enter your locale",
    UPDATED_AT_LABEL = "Updated At",
    UPDATED_AT_PLACEHOLDER = "Enter the time the information was last updated",
    MIDDLE_NAME_LABEL = "Middle Name",
    MIDDLE_NAME_PLACEHOLDER = "Enter your middle name",
    WEBSITE_LABEL = "Website",
    WEBSITE_PLACEHOLDER = "Enter your website",
    NAME_LABEL = "Full Name",
    NAME_PLACEHOLDER = "Enter your full name",
    PHOTO_PICKER_TITLE = "Picker Title",
    PHOTO_PICKER_HINT = "Ancillary text or content may occupy this space here",
    PHOTO_PICKER_PLACEHOLDER_HINT = "Placeholder hint",
    PHOTO_PICKER_BUTTON_TEXT = "Button",
    IMAGE_PICKER_TITLE = "Add Profile Photo",
    IMAGE_PICKER_HINT = "Preview the image before upload",
    IMAGE_PICKER_PLACEHOLDER_HINT = "Tap to image select",
    IMAGE_PICKER_BUTTON_TEXT = "Upload",
    PICKER_TEXT = "Pick a file",
    TEXT_FALLBACK_CONTENT = "Fallback Content",
    CONFIRM_SIGN_UP_FAILED = "Confirm Sign Up Failed",
    SIGN_UP_FAILED = "Sign Up Failed"
}
export declare enum InteractionsStrings {
    CHATBOT_TITLE = "ChatBot Lex",
    TEXT_INPUT_PLACEHOLDER = "Write a message",
    VOICE_INPUT_PLACEHOLDER = "Click mic to speak",
    CHAT_DISABLED_ERROR = "Error: Either voice or text must be enabled for the chatbot",
    NO_BOT_NAME_ERROR = "Error: Bot name must be provided to ChatBot"
}
export declare const Translations: {
    CHATBOT_TITLE: InteractionsStrings.CHATBOT_TITLE;
    TEXT_INPUT_PLACEHOLDER: InteractionsStrings.TEXT_INPUT_PLACEHOLDER;
    VOICE_INPUT_PLACEHOLDER: InteractionsStrings.VOICE_INPUT_PLACEHOLDER;
    CHAT_DISABLED_ERROR: InteractionsStrings.CHAT_DISABLED_ERROR;
    NO_BOT_NAME_ERROR: InteractionsStrings.NO_BOT_NAME_ERROR;
    DEFAULT_MSG: AuthErrorStrings.DEFAULT_MSG;
    EMPTY_EMAIL: AuthErrorStrings.EMPTY_EMAIL;
    EMPTY_PHONE: AuthErrorStrings.EMPTY_PHONE;
    EMPTY_USERNAME: AuthErrorStrings.EMPTY_USERNAME;
    INVALID_USERNAME: AuthErrorStrings.INVALID_USERNAME;
    EMPTY_PASSWORD: AuthErrorStrings.EMPTY_PASSWORD;
    EMPTY_CODE: AuthErrorStrings.EMPTY_CODE;
    SIGN_UP_ERROR: AuthErrorStrings.SIGN_UP_ERROR;
    NO_MFA: AuthErrorStrings.NO_MFA;
    INVALID_MFA: AuthErrorStrings.INVALID_MFA;
    EMPTY_CHALLENGE: AuthErrorStrings.EMPTY_CHALLENGE;
    NO_USER_SESSION: AuthErrorStrings.NO_USER_SESSION;
    NETWORK_ERROR: AuthErrorStrings.NETWORK_ERROR;
    DEVICE_CONFIG: AuthErrorStrings.DEVICE_CONFIG;
    BACK_TO_SIGN_IN: AuthStrings.BACK_TO_SIGN_IN;
    CHANGE_PASSWORD_ACTION: AuthStrings.CHANGE_PASSWORD_ACTION;
    CHANGE_PASSWORD: AuthStrings.CHANGE_PASSWORD;
    CODE_LABEL: AuthStrings.CODE_LABEL;
    CODE_PLACEHOLDER: AuthStrings.CODE_PLACEHOLDER;
    CONFIRM_SIGN_UP_CODE_LABEL: AuthStrings.CONFIRM_SIGN_UP_CODE_LABEL;
    CONFIRM_SIGN_UP_CODE_PLACEHOLDER: AuthStrings.CONFIRM_SIGN_UP_CODE_PLACEHOLDER;
    CONFIRM_SIGN_UP_HEADER_TEXT: AuthStrings.CONFIRM_SIGN_UP_HEADER_TEXT;
    CONFIRM_SIGN_UP_LOST_CODE: AuthStrings.CONFIRM_SIGN_UP_LOST_CODE;
    CONFIRM_SIGN_UP_RESEND_CODE: AuthStrings.CONFIRM_SIGN_UP_RESEND_CODE;
    CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT: AuthStrings.CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT;
    CONFIRM_SMS_CODE: AuthStrings.CONFIRM_SMS_CODE;
    CONFIRM_TOTP_CODE: AuthStrings.CONFIRM_TOTP_CODE;
    CONFIRM: AuthStrings.CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT;
    CREATE_ACCOUNT_TEXT: AuthStrings.CREATE_ACCOUNT_TEXT;
    EMAIL_LABEL: AuthStrings.EMAIL_LABEL;
    EMAIL_PLACEHOLDER: AuthStrings.EMAIL_PLACEHOLDER;
    FORGOT_PASSWORD_TEXT: AuthStrings.FORGOT_PASSWORD_TEXT;
    LESS_THAN_TWO_MFA_VALUES_MESSAGE: AuthStrings.LESS_THAN_TWO_MFA_VALUES_MESSAGE;
    NEW_PASSWORD_LABEL: AuthStrings.NEW_PASSWORD_LABEL;
    NEW_PASSWORD_PLACEHOLDER: AuthStrings.NEW_PASSWORD_PLACEHOLDER;
    NO_ACCOUNT_TEXT: AuthStrings.NO_ACCOUNT_TEXT;
    USERNAME_REMOVE_WHITESPACE: AuthStrings.USERNAME_REMOVE_WHITESPACE;
    PASSWORD_REMOVE_WHITESPACE: AuthStrings.PASSWORD_REMOVE_WHITESPACE;
    PASSWORD_LABEL: AuthStrings.PASSWORD_LABEL;
    PASSWORD_PLACEHOLDER: AuthStrings.PASSWORD_PLACEHOLDER;
    PHONE_LABEL: AuthStrings.PHONE_LABEL;
    PHONE_PLACEHOLDER: AuthStrings.PHONE_PLACEHOLDER;
    QR_CODE_ALT: AuthStrings.QR_CODE_ALT;
    RESET_PASSWORD_TEXT: AuthStrings.RESET_PASSWORD_TEXT;
    RESET_YOUR_PASSWORD: AuthStrings.RESET_YOUR_PASSWORD;
    SELECT_MFA_TYPE_HEADER_TEXT: AuthStrings.SELECT_MFA_TYPE_HEADER_TEXT;
    SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT: AuthStrings.SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT;
    SEND_CODE: AuthStrings.SEND_CODE;
    SUBMIT: AuthStrings.SUBMIT;
    SETUP_TOTP_REQUIRED: AuthStrings.SETUP_TOTP_REQUIRED;
    SIGN_IN_ACTION: AuthStrings.SIGN_IN_ACTION;
    SIGN_IN_HEADER_TEXT: AuthStrings.SIGN_IN_HEADER_TEXT;
    SIGN_IN_TEXT: AuthStrings.SIGN_IN_TEXT;
    SIGN_IN_WITH_AMAZON: AuthStrings.SIGN_IN_WITH_AMAZON;
    SIGN_IN_WITH_AUTH0: AuthStrings.SIGN_IN_WITH_AUTH0;
    SIGN_IN_WITH_AWS: AuthStrings.SIGN_IN_WITH_AWS;
    SIGN_IN_WITH_FACEBOOK: AuthStrings.SIGN_IN_WITH_FACEBOOK;
    SIGN_IN_WITH_GOOGLE: AuthStrings.SIGN_IN_WITH_GOOGLE;
    SIGN_OUT: AuthStrings.SIGN_OUT;
    SIGN_UP_EMAIL_PLACEHOLDER: AuthStrings.SIGN_UP_EMAIL_PLACEHOLDER;
    SIGN_UP_HAVE_ACCOUNT_TEXT: AuthStrings.SIGN_UP_HAVE_ACCOUNT_TEXT;
    SIGN_UP_HEADER_TEXT: AuthStrings.SIGN_UP_HEADER_TEXT;
    SIGN_UP_PASSWORD_PLACEHOLDER: AuthStrings.SIGN_UP_PASSWORD_PLACEHOLDER;
    SIGN_UP_SUBMIT_BUTTON_TEXT: AuthStrings.SIGN_UP_SUBMIT_BUTTON_TEXT;
    SIGN_UP_USERNAME_PLACEHOLDER: AuthStrings.SIGN_UP_USERNAME_PLACEHOLDER;
    SUCCESS_MFA_TYPE: AuthStrings.SUCCESS_MFA_TYPE;
    TOTP_HEADER_TEXT: AuthStrings.TOTP_HEADER_TEXT;
    TOTP_LABEL: AuthStrings.TOTP_LABEL;
    TOTP_ISSUER: AuthStrings.TOTP_ISSUER;
    TOTP_SETUP_FAILURE: AuthStrings.TOTP_SETUP_FAILURE;
    TOTP_SUBMIT_BUTTON_TEXT: AuthStrings.TOTP_SUBMIT_BUTTON_TEXT;
    TOTP_SUCCESS_MESSAGE: AuthStrings.TOTP_SUCCESS_MESSAGE;
    UNABLE_TO_SETUP_MFA_AT_THIS_TIME: AuthStrings.UNABLE_TO_SETUP_MFA_AT_THIS_TIME;
    USERNAME_LABEL: AuthStrings.USERNAME_LABEL;
    USERNAME_PLACEHOLDER: AuthStrings.USERNAME_PLACEHOLDER;
    VERIFY_CONTACT_EMAIL_LABEL: AuthStrings.SIGN_UP_EMAIL_PLACEHOLDER;
    VERIFY_CONTACT_HEADER_TEXT: AuthStrings.VERIFY_CONTACT_HEADER_TEXT;
    VERIFY_CONTACT_PHONE_LABEL: AuthStrings.VERIFY_CONTACT_PHONE_LABEL;
    VERIFY_CONTACT_SUBMIT_LABEL: AuthStrings.SUBMIT;
    VERIFY_CONTACT_VERIFY_LABEL: AuthStrings.SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT;
    ADDRESS_LABEL: AuthStrings.ADDRESS_LABEL;
    ADDRESS_PLACEHOLDER: AuthStrings.ADDRESS_PLACEHOLDER;
    NICKNAME_LABEL: AuthStrings.NICKNAME_LABEL;
    NICKNAME_PLACEHOLDER: AuthStrings.NICKNAME_PLACEHOLDER;
    BIRTHDATE_LABEL: AuthStrings.BIRTHDATE_LABEL;
    BIRTHDATE_PLACEHOLDER: AuthStrings.BIRTHDATE_PLACEHOLDER;
    PICTURE_LABEL: AuthStrings.PICTURE_LABEL;
    PICTURE_PLACEHOLDER: AuthStrings.PICTURE_PLACEHOLDER;
    FAMILY_NAME_LABEL: AuthStrings.FAMILY_NAME_LABEL;
    FAMILY_NAME_PLACEHOLDER: AuthStrings.FAMILY_NAME_PLACEHOLDER;
    PREFERRED_USERNAME_LABEL: AuthStrings.PREFERRED_USERNAME_LABEL;
    PREFERRED_USERNAME_PLACEHOLDER: AuthStrings.PREFERRED_USERNAME_PLACEHOLDER;
    GENDER_LABEL: AuthStrings.GENDER_LABEL;
    GENDER_PLACEHOLDER: AuthStrings.GENDER_PLACEHOLDER;
    PROFILE_LABEL: AuthStrings.PROFILE_LABEL;
    PROFILE_PLACEHOLDER: AuthStrings.PROFILE_PLACEHOLDER;
    GIVEN_NAME_LABEL: AuthStrings.GIVEN_NAME_LABEL;
    GIVEN_NAME_PLACEHOLDER: AuthStrings.GIVEN_NAME_PLACEHOLDER;
    ZONEINFO_LABEL: AuthStrings.ZONEINFO_LABEL;
    ZONEINFO_PLACEHOLDER: AuthStrings.ZONEINFO_PLACEHOLDER;
    LOCALE_LABEL: AuthStrings.LOCALE_LABEL;
    LOCALE_PLACEHOLDER: AuthStrings.LOCALE_PLACEHOLDER;
    UPDATED_AT_LABEL: AuthStrings.UPDATED_AT_LABEL;
    UPDATED_AT_PLACEHOLDER: AuthStrings.UPDATED_AT_PLACEHOLDER;
    MIDDLE_NAME_LABEL: AuthStrings.MIDDLE_NAME_LABEL;
    MIDDLE_NAME_PLACEHOLDER: AuthStrings.MIDDLE_NAME_PLACEHOLDER;
    WEBSITE_LABEL: AuthStrings.WEBSITE_LABEL;
    WEBSITE_PLACEHOLDER: AuthStrings.WEBSITE_PLACEHOLDER;
    NAME_LABEL: AuthStrings.NAME_LABEL;
    NAME_PLACEHOLDER: AuthStrings.NAME_PLACEHOLDER;
    PHOTO_PICKER_TITLE: AuthStrings.PHOTO_PICKER_TITLE;
    PHOTO_PICKER_HINT: AuthStrings.PHOTO_PICKER_HINT;
    PHOTO_PICKER_PLACEHOLDER_HINT: AuthStrings.PHOTO_PICKER_PLACEHOLDER_HINT;
    PHOTO_PICKER_BUTTON_TEXT: AuthStrings.PHOTO_PICKER_BUTTON_TEXT;
    IMAGE_PICKER_TITLE: AuthStrings.IMAGE_PICKER_TITLE;
    IMAGE_PICKER_HINT: AuthStrings.IMAGE_PICKER_HINT;
    IMAGE_PICKER_PLACEHOLDER_HINT: AuthStrings.IMAGE_PICKER_PLACEHOLDER_HINT;
    IMAGE_PICKER_BUTTON_TEXT: AuthStrings.IMAGE_PICKER_BUTTON_TEXT;
    PICKER_TEXT: AuthStrings.PICKER_TEXT;
    TEXT_FALLBACK_CONTENT: AuthStrings.TEXT_FALLBACK_CONTENT;
    CONFIRM_SIGN_UP_FAILED: AuthStrings.CONFIRM_SIGN_UP_FAILED;
    SIGN_UP_FAILED: AuthStrings.SIGN_UP_FAILED;
};