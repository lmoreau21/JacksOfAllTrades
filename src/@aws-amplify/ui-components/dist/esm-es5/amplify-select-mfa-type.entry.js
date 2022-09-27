var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, h } from './index-83f2275b.js';
import { Logger, I18n } from '@aws-amplify/core';
import { M as MfaOption } from './auth-types-78df304e.js';
import { Auth } from '@aws-amplify/auth';
import { T as Translations } from './Translations-c833f663.js';
import { N as NO_AUTH_MODULE_FOUND, e as USER_NOT_SETUP_SOFTWARE_TOKEN_MFA, f as USER_NOT_VERIFIED_SOFTWARE_TOKEN_MFA } from './constants-c8ecaa24.js';
var logger = new Logger('SelectMFAType');
var AmplifySelectMFAType = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        /** Fires when Verify is clicked */
        this.handleSubmit = function (event) { return _this.verify(event); };
        this.TOTPSetup = false;
        this.selectMessage = null;
        this.MFAMethod = null;
        this.isTOTP = false;
        this.isNoMFA = false;
        this.isSMS = false;
        this.loading = false;
        this.isToastVisible = false;
    }
    class_1.prototype.handleRadioButtonChange = function (event) {
        this.TOTPSetup = false;
        this.selectMessage = null;
        // Reseting state values to default
        this.isNoMFA = false;
        this.isTOTP = false;
        this.isSMS = false;
        this.isToastVisible = false;
        var _a = event.target, value = _a.value, type = _a.type, checked = _a.checked;
        var checkType = ['radio', 'checkbox'].includes(type);
        if (value === MfaOption.SMS && checkType) {
            this.isSMS = checked;
        }
        if (value === MfaOption.TOTP && checkType) {
            this.isTOTP = checked;
        }
        if (value === MfaOption.NOMFA && checkType) {
            this.isNoMFA = checked;
        }
    };
    class_1.prototype.verify = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var user, preferredMFAData, error_1, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
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
                        user = this.authData;
                        if (!Auth || typeof Auth.setPreferredMFA !== 'function') {
                            throw new Error(NO_AUTH_MODULE_FOUND);
                        }
                        this.loading = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, Auth.setPreferredMFA(user, this.MFAMethod)];
                    case 2:
                        preferredMFAData = _a.sent();
                        logger.debug('Set Preferred MFA Succeeded', preferredMFAData);
                        this.selectMessage = I18n.get(Translations.SUCCESS_MFA_TYPE) + " " + this.MFAMethod;
                        return [3 /*break*/, 5];
                    case 3:
                        error_1 = _a.sent();
                        message = error_1.message;
                        if (message === USER_NOT_SETUP_SOFTWARE_TOKEN_MFA ||
                            message === USER_NOT_VERIFIED_SOFTWARE_TOKEN_MFA) {
                            this.TOTPSetup = true;
                            this.selectMessage = I18n.get(Translations.SETUP_TOTP_REQUIRED);
                        }
                        else {
                            logger.debug('Set Preferred MFA failed', error_1);
                            this.selectMessage = I18n.get(Translations.UNABLE_TO_SETUP_MFA_AT_THIS_TIME);
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        this.loading = false;
                        this.isToastVisible = true;
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.contentBuilder = function () {
        var _this = this;
        if (!this.MFATypes || Object.keys(this.MFATypes).length < 2) {
            logger.debug(I18n.get(Translations.LESS_THAN_TWO_MFA_VALUES_MESSAGE));
            return (h("div", null, h("a", null, I18n.get(Translations.LESS_THAN_TWO_MFA_VALUES_MESSAGE))));
        }
        var _a = this.MFATypes, SMS = _a.SMS, TOTP = _a.TOTP, Optional = _a.Optional;
        return (h("amplify-form-section", { submitButtonText: I18n.get(Translations.SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT), headerText: I18n.get(Translations.SELECT_MFA_TYPE_HEADER_TEXT), handleSubmit: function (event) { return _this.handleSubmit(event); }, loading: this.loading }, SMS ? (h("amplify-radio-button", { key: "sms", name: "MFAType", value: "SMS", label: "SMS", handleInputChange: function (event) { return _this.handleRadioButtonChange(event); } })) : null, TOTP ? (h("amplify-radio-button", { key: "totp", name: "MFAType", value: "TOTP", label: "TOTP", handleInputChange: function (event) { return _this.handleRadioButtonChange(event); } })) : null, Optional ? (h("amplify-radio-button", { key: "noMFA", name: "MFAType", value: "NOMFA", label: "No MFA", handleInputChange: function (event) { return _this.handleRadioButtonChange(event); } })) : null));
    };
    class_1.prototype.renderToast = function () {
        var _this = this;
        if (this.isToastVisible && this.selectMessage) {
            return (h("amplify-toast", { message: this.selectMessage, handleClose: function () {
                    _this.selectMessage = null;
                    _this.isToastVisible = false;
                } }));
        }
        return null;
    };
    class_1.prototype.render = function () {
        return (h("div", null, this.contentBuilder(), this.TOTPSetup ? h("amplify-totp-setup", { user: this.authData }) : null, this.renderToast()));
    };
    return class_1;
}());
export { AmplifySelectMFAType as amplify_select_mfa_type };
