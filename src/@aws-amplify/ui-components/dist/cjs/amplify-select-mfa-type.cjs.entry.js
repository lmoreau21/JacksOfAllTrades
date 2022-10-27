'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

const index = require('./index-6d44143a.js');
const core = require('@aws-amplify/core');
const authTypes = require('./auth-types-cd1f71d2.js');
const Auth = require('@aws-amplify/auth');
const Auth__default = _interopDefault(Auth);
const Translations = require('./Translations-5f4bb72c.js');
const constants = require('./constants-1335fef8.js');

const logger = new core.Logger('SelectMFAType');
const AmplifySelectMFAType = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        if (value === authTypes.MfaOption.SMS && checkType) {
            this.isSMS = checked;
        }
        if (value === authTypes.MfaOption.TOTP && checkType) {
            this.isTOTP = checked;
        }
        if (value === authTypes.MfaOption.NOMFA && checkType) {
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
            this.MFAMethod = authTypes.MfaOption.TOTP;
        }
        else if (this.isSMS) {
            this.MFAMethod = authTypes.MfaOption.SMS;
        }
        else if (this.isNoMFA) {
            this.MFAMethod = authTypes.MfaOption.NOMFA;
        }
        const user = this.authData;
        if (!Auth.Auth || typeof Auth.Auth.setPreferredMFA !== 'function') {
            throw new Error(constants.NO_AUTH_MODULE_FOUND);
        }
        this.loading = true;
        try {
            const preferredMFAData = await Auth.Auth.setPreferredMFA(user, this.MFAMethod);
            logger.debug('Set Preferred MFA Succeeded', preferredMFAData);
            this.selectMessage = `${core.I18n.get(Translations.Translations.SUCCESS_MFA_TYPE)} ${this.MFAMethod}`;
        }
        catch (error) {
            const { message } = error;
            if (message === constants.USER_NOT_SETUP_SOFTWARE_TOKEN_MFA ||
                message === constants.USER_NOT_VERIFIED_SOFTWARE_TOKEN_MFA) {
                this.TOTPSetup = true;
                this.selectMessage = core.I18n.get(Translations.Translations.SETUP_TOTP_REQUIRED);
            }
            else {
                logger.debug('Set Preferred MFA failed', error);
                this.selectMessage = core.I18n.get(Translations.Translations.UNABLE_TO_SETUP_MFA_AT_THIS_TIME);
            }
        }
        finally {
            this.loading = false;
            this.isToastVisible = true;
        }
    }
    contentBuilder() {
        if (!this.MFATypes || Object.keys(this.MFATypes).length < 2) {
            logger.debug(core.I18n.get(Translations.Translations.LESS_THAN_TWO_MFA_VALUES_MESSAGE));
            return (index.h("div", null, index.h("a", null, core.I18n.get(Translations.Translations.LESS_THAN_TWO_MFA_VALUES_MESSAGE))));
        }
        const { SMS, TOTP, Optional } = this.MFATypes;
        return (index.h("amplify-form-section", { submitButtonText: core.I18n.get(Translations.Translations.SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT), headerText: core.I18n.get(Translations.Translations.SELECT_MFA_TYPE_HEADER_TEXT), handleSubmit: event => this.handleSubmit(event), loading: this.loading }, SMS ? (index.h("amplify-radio-button", { key: "sms", name: "MFAType", value: "SMS", label: "SMS", handleInputChange: event => this.handleRadioButtonChange(event) })) : null, TOTP ? (index.h("amplify-radio-button", { key: "totp", name: "MFAType", value: "TOTP", label: "TOTP", handleInputChange: event => this.handleRadioButtonChange(event) })) : null, Optional ? (index.h("amplify-radio-button", { key: "noMFA", name: "MFAType", value: "NOMFA", label: "No MFA", handleInputChange: event => this.handleRadioButtonChange(event) })) : null));
    }
    renderToast() {
        if (this.isToastVisible && this.selectMessage) {
            return (index.h("amplify-toast", { message: this.selectMessage, handleClose: () => {
                    this.selectMessage = null;
                    this.isToastVisible = false;
                } }));
        }
        return null;
    }
    render() {
        return (index.h("div", null, this.contentBuilder(), this.TOTPSetup ? index.h("amplify-totp-setup", { user: this.authData }) : null, this.renderToast()));
    }
};

exports.amplify_select_mfa_type = AmplifySelectMFAType;