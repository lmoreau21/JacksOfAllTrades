import { b as bootstrapLazy } from './index-83f2275b.js';
import { a as patchEsm } from './theme-19a9209a.js';
import '@aws-amplify/core';
var defineCustomElements = function (win, options) {
    if (typeof window === 'undefined')
        return Promise.resolve();
    return patchEsm().then(function () {
        return bootstrapLazy([["amplify-icon", [[2, "amplify-icon", { "name": [1] }]]], ["amplify-authenticator", [[1, "amplify-authenticator", { "initialAuthState": [1, "initial-auth-state"], "federated": [16], "usernameAlias": [1, "username-alias"], "handleAuthStateChange": [16], "hideToast": [4, "hide-toast"], "authState": [32], "authData": [32], "toastMessage": [32] }]]], ["amplify-federated-sign-in", [[1, "amplify-federated-sign-in", { "authState": [1, "auth-state"], "federated": [8] }]]], ["amplify-select-mfa-type", [[1, "amplify-select-mfa-type", { "MFATypes": [16], "authData": [16], "handleSubmit": [16], "TOTPSetup": [32], "selectMessage": [32], "MFAMethod": [32], "isTOTP": [32], "isNoMFA": [32], "isSMS": [32], "loading": [32], "isToastVisible": [32] }]]], ["amplify-s3-image-picker", [[4, "amplify-s3-image-picker", { "path": [1], "contentType": [1, "content-type"], "level": [1], "track": [4], "identityId": [1, "identity-id"], "fileToKey": [16], "headerTitle": [1, "header-title"], "headerHint": [1, "header-hint"], "placeholderHint": [1, "placeholder-hint"], "buttonText": [1, "button-text"], "src": [32] }]]], ["amplify-chatbot", [[1, "amplify-chatbot", { "botName": [1, "bot-name"], "clearOnComplete": [4, "clear-on-complete"], "conversationModeOn": [4, "conversation-mode-on"], "welcomeMessage": [1, "welcome-message"], "botTitle": [1, "bot-title"], "voiceEnabled": [4, "voice-enabled"], "textEnabled": [4, "text-enabled"], "silenceTime": [2, "silence-time"], "silenceThreshold": [2, "silence-threshold"], "messages": [32], "text": [32], "chatState": [32], "error": [32] }, [[0, "formSubmit", "submitHandler"]]]]], ["amplify-greetings", [[1, "amplify-greetings", { "username": [1], "logo": [16], "handleAuthStateChange": [16] }]]], ["amplify-s3-album", [[1, "amplify-s3-album", { "path": [1], "contentType": [1, "content-type"], "level": [1], "track": [4], "identityId": [1, "identity-id"], "fileToKey": [16], "filter": [16], "sort": [16], "picker": [4], "handleOnLoad": [16], "handleOnError": [16], "pickerText": [1, "picker-text"], "albumItems": [32] }]]], ["amplify-s3-text-picker", [[1, "amplify-s3-text-picker", { "path": [1], "contentType": [1, "content-type"], "level": [1], "track": [4], "identityId": [1, "identity-id"], "fileToKey": [16], "fallbackText": [1, "fallback-text"], "src": [32] }]]], ["amplify-icon-button", [[1, "amplify-icon-button", { "name": [1], "tooltip": [1], "autoShowTooltip": [4, "auto-show-tooltip"] }]]], ["amplify-checkbox", [[1, "amplify-checkbox", { "name": [1], "value": [1], "fieldId": [1, "field-id"], "label": [1], "checked": [4], "disabled": [4] }]]], ["amplify-auth-container", [[4, "amplify-auth-container"]]], ["amplify-container", [[4, "amplify-container"]]], ["amplify-link", [[1, "amplify-link", { "role": [1] }]]], ["amplify-photo-picker", [[1, "amplify-photo-picker", { "headerTitle": [1, "header-title"], "headerHint": [1, "header-hint"], "placeholderHint": [1, "placeholder-hint"], "buttonText": [1, "button-text"], "previewSrc": [1, "preview-src"], "handleClick": [16], "previewState": [32], "file": [32] }]]], ["amplify-s3-image", [[1, "amplify-s3-image", { "imgKey": [1, "img-key"], "path": [1], "alt": [1], "body": [16], "contentType": [1, "content-type"], "level": [1], "track": [4], "identityId": [1, "identity-id"], "handleOnLoad": [16], "handleOnError": [16], "imgProps": [16], "src": [32] }]]], ["amplify-s3-text", [[1, "amplify-s3-text", { "textKey": [1, "text-key"], "path": [1], "body": [16], "contentType": [1, "content-type"], "level": [1], "track": [4], "identityId": [1, "identity-id"], "fallbackText": [1, "fallback-text"], "src": [32] }]]], ["amplify-tooltip", [[1, "amplify-tooltip", { "text": [1], "shouldAutoShow": [4, "should-auto-show"] }]]], ["amplify-nav_2", [[1, "amplify-sign-out", { "handleAuthStateChange": [16], "buttonText": [1, "button-text"] }], [1, "amplify-nav"]]], ["amplify-picker", [[1, "amplify-picker", { "pickerText": [1, "picker-text"], "acceptValue": [1, "accept-value"], "inputHandler": [16] }]]], ["amplify-federated-buttons_2", [[6, "amplify-strike"], [1, "amplify-federated-buttons", { "authState": [1, "auth-state"], "federated": [16], "handleAuthStateChange": [16] }]]], ["amplify-form-field_4", [[4, "amplify-form-field", { "fieldId": [1, "field-id"], "label": [1], "description": [1], "hint": [1], "type": [1], "required": [4], "handleInputChange": [16], "placeholder": [1], "name": [1], "value": [1], "inputProps": [16], "disabled": [4] }], [1, "amplify-hint"], [0, "amplify-input", { "fieldId": [1, "field-id"], "description": [1], "type": [1], "handleInputChange": [16], "placeholder": [1], "name": [1], "value": [1], "inputProps": [16], "disabled": [4], "required": [4], "autoCompleted": [32] }], [4, "amplify-label", { "htmlFor": [1, "html-for"] }]]], ["amplify-auth-fields_9", [[0, "amplify-auth-fields", { "formFields": [16] }], [0, "amplify-phone-field", { "fieldId": [1, "field-id"], "label": [1], "placeholder": [1], "hint": [1], "required": [4], "handleInputChange": [16], "value": [1], "inputProps": [16], "disabled": [4], "dialCode": [8, "dial-code"] }], [0, "amplify-code-field", { "fieldId": [1, "field-id"], "label": [1], "placeholder": [1], "hint": [1], "required": [4], "handleInputChange": [16], "value": [1], "inputProps": [16], "disabled": [4] }], [0, "amplify-email-field", { "fieldId": [1, "field-id"], "label": [1], "placeholder": [1], "required": [4], "handleInputChange": [16], "value": [1], "inputProps": [16], "disabled": [4], "hint": [1] }], [0, "amplify-password-field", { "fieldId": [1, "field-id"], "label": [1], "placeholder": [1], "hint": [1], "required": [4], "handleInputChange": [16], "value": [1], "inputProps": [16], "disabled": [4] }], [0, "amplify-username-field", { "fieldId": [1, "field-id"], "label": [1], "placeholder": [1], "required": [4], "handleInputChange": [16], "value": [1], "inputProps": [16], "disabled": [4], "hint": [1] }], [1, "amplify-country-dial-code", { "fieldId": [1, "field-id"], "options": [16], "handleInputChange": [16], "dialCode": [8, "dial-code"] }], [1, "amplify-select", { "options": [16], "fieldId": [1, "field-id"], "handleInputChange": [16], "selected": [8] }], [4, "amplify-form-section", { "handleSubmit": [16], "submitButtonText": [1, "submit-button-text"], "headerText": [1, "header-text"], "testDataPrefix": [1, "test-data-prefix"], "loading": [4], "secondaryFooterContent": [1, "secondary-footer-content"] }, [[0, "formSubmit", "handleFormSubmit"]]]]], ["amplify-radio-button_3", [[1, "amplify-totp-setup", { "user": [16], "handleAuthStateChange": [16], "headerText": [1, "header-text"], "issuer": [1], "handleComplete": [16], "standalone": [4], "code": [32], "setupMessage": [32], "qrCodeImageSource": [32], "qrCodeInput": [32], "loading": [32] }], [0, "amplify-radio-button", { "handleInputChange": [16], "name": [1], "value": [1], "placeholder": [1], "fieldId": [1, "field-id"], "label": [1], "checked": [4], "disabled": [4], "inputProps": [16] }], [1, "amplify-toast", { "handleClose": [16], "message": [1] }]]], ["amplify-sign-in-button", [[6, "amplify-sign-in-button", { "provider": [1] }]]], ["amplify-amazon-button_5", [[1, "amplify-amazon-button", { "clientId": [1, "client-id"], "handleAuthStateChange": [16] }], [1, "amplify-auth0-button", { "config": [16], "handleAuthStateChange": [16] }], [1, "amplify-facebook-button", { "appId": [1, "app-id"], "handleAuthStateChange": [16] }], [1, "amplify-google-button", { "handleAuthStateChange": [16], "clientId": [1, "client-id"] }], [1, "amplify-oauth-button", { "config": [16] }]]], ["amplify-button_3", [[1, "amplify-loading-spinner"], [4, "amplify-section", { "role": [1] }], [4, "amplify-button", { "type": [1], "variant": [1], "handleButtonClick": [16], "disabled": [4], "icon": [1] }]]], ["amplify-confirm-sign-in_7", [[1, "amplify-sign-in", { "handleSubmit": [16], "headerText": [1, "header-text"], "submitButtonText": [1, "submit-button-text"], "federated": [16], "handleAuthStateChange": [16], "usernameAlias": [1, "username-alias"], "formFields": [16], "hideSignUp": [4, "hide-sign-up"], "loading": [32], "signInAttributes": [32] }], [1, "amplify-confirm-sign-in", { "handleSubmit": [16], "headerText": [1, "header-text"], "submitButtonText": [1, "submit-button-text"], "handleAuthStateChange": [16], "formFields": [16], "user": [16], "mfaOption": [32], "loading": [32], "code": [32] }], [1, "amplify-confirm-sign-up", { "handleSubmit": [16], "headerText": [1, "header-text"], "submitButtonText": [1, "submit-button-text"], "formFields": [16], "handleAuthStateChange": [16], "user": [16], "usernameAlias": [1, "username-alias"], "code": [32], "loading": [32], "userInput": [32] }], [1, "amplify-forgot-password", { "headerText": [1, "header-text"], "sendButtonText": [1, "send-button-text"], "submitButtonText": [1, "submit-button-text"], "formFields": [16], "handleSend": [16], "handleSubmit": [16], "handleAuthStateChange": [16], "usernameAlias": [1, "username-alias"], "delivery": [32], "loading": [32], "forgotPasswordAttrs": [32] }], [1, "amplify-require-new-password", { "headerText": [1, "header-text"], "submitButtonText": [1, "submit-button-text"], "handleSubmit": [16], "handleAuthStateChange": [16], "user": [16], "formFields": [16], "password": [32], "loading": [32] }], [1, "amplify-sign-up", { "handleSubmit": [16], "handleSignUp": [16], "validationErrors": [1, "validation-errors"], "headerText": [1, "header-text"], "submitButtonText": [1, "submit-button-text"], "haveAccountText": [1, "have-account-text"], "signInText": [1, "sign-in-text"], "formFields": [16], "handleAuthStateChange": [16], "usernameAlias": [1, "username-alias"], "loading": [32], "signUpAttributes": [32] }], [1, "amplify-verify-contact", { "handleAuthStateChange": [16], "user": [16], "verifyAttr": [32], "loading": [32], "code": [32], "contact": [32] }]]]], options);
    });
};
export { defineCustomElements };