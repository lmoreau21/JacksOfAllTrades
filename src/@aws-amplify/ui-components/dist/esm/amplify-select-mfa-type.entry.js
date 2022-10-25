import { r as registerInstance, h } from './index-83f2275b.js';
import { Logger, I18n } from '@aws-amplify/core';
import { M as MfaOption } from './auth-types-78df304e.js';
import { Auth } from '@aws-amplify/auth';
import { T as Translations } from './Translations-c833f663.js';
import { N as NO_AUTH_MODULE_FOUND, e as USER_NOT_SETUP_SOFTWARE_TOKEN_MFA, f as USER_NOT_VERIFIED_SOFTWARE_TOKEN_MFA } from './constants-c8ecaa24.js';

const logger = new Logger('SelectMFAType');
const AmplifySelectMFAType = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        logger.debug('MFA Type Values', {
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
        if (!Auth || typeof Auth.setPreferredMFA !== 'function') {
            throw new Error(NO_AUTH_MODULE_FOUND);
        }
        this.loading = true;
        try {
            const preferredMFAData = await Auth.setPreferredMFA(user, this.MFAMethod);
            logger.debug('Set Preferred MFA Succeeded', preferredMFAData);
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
                logger.debug('Set Preferred MFA failed', error);
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
            logger.debug(I18n.get(Translations.LESS_THAN_TWO_MFA_VALUES_MESSAGE));
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

export { AmplifySelectMFAType as amplify_select_mfa_type };
