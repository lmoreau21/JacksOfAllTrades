'use strict';

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

exports.AUTH_CHANNEL = AUTH_CHANNEL;
exports.AUTH_SOURCE_KEY = AUTH_SOURCE_KEY;
exports.AUTH_STATE_CHANGE_EVENT = AUTH_STATE_CHANGE_EVENT;
exports.CODE_SUFFIX = CODE_SUFFIX;
exports.COUNTRY_DIAL_CODE_DEFAULT = COUNTRY_DIAL_CODE_DEFAULT;
exports.COUNTRY_DIAL_CODE_SUFFIX = COUNTRY_DIAL_CODE_SUFFIX;
exports.EMAIL_SUFFIX = EMAIL_SUFFIX;
exports.NO_AUTH_MODULE_FOUND = NO_AUTH_MODULE_FOUND;
exports.NO_INTERACTIONS_MODULE_FOUND = NO_INTERACTIONS_MODULE_FOUND;
exports.NO_STORAGE_MODULE_FOUND = NO_STORAGE_MODULE_FOUND;
exports.PASSWORD_SUFFIX = PASSWORD_SUFFIX;
exports.PHONE_EMPTY_ERROR_MESSAGE = PHONE_EMPTY_ERROR_MESSAGE;
exports.PHONE_SUFFIX = PHONE_SUFFIX;
exports.TOAST_AUTH_ERROR_EVENT = TOAST_AUTH_ERROR_EVENT;
exports.UI_AUTH_CHANNEL = UI_AUTH_CHANNEL;
exports.USERNAME_SUFFIX = USERNAME_SUFFIX;
exports.USER_NOT_SETUP_SOFTWARE_TOKEN_MFA = USER_NOT_SETUP_SOFTWARE_TOKEN_MFA;
exports.USER_NOT_VERIFIED_SOFTWARE_TOKEN_MFA = USER_NOT_VERIFIED_SOFTWARE_TOKEN_MFA;