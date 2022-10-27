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
import { Logger, Hub, I18n } from '@aws-amplify/core';
import { U as UsernameAlias, A as AuthState } from './auth-types-78df304e.js';
import Auth from '@aws-amplify/auth';
import { T as Translations } from './Translations-c833f663.js';
import { U as UI_AUTH_CHANNEL, T as TOAST_AUTH_ERROR_EVENT, a as AUTH_STATE_CHANGE_EVENT, P as PHONE_EMPTY_ERROR_MESSAGE, C as COUNTRY_DIAL_CODE_SUFFIX, b as PHONE_SUFFIX } from './constants-c8ecaa24.js';
var logger = new Logger('helpers');
/**
 * Finds closest element that matches the selector from the ancestor tree.
 * Trasverses through shadow DOM and slots.
 *
 * Adpated from: https://stackoverflow.com/a/56105394
 */
var closestElement = function (selector, base) {
    function _closestFrom(el) {
        if (!el || el === document || el === window)
            return null;
        if (el.matches(selector))
            return base; // return if current element matches the selector
        if (el.assignedSlot)
            el = el.assignedSlot; // traverse up slots if slotted
        var found = el.closest(selector);
        return found ? found : _closestFrom(el.getRootNode().host); // try to traverse up shadows
    }
    return _closestFrom(base);
};
var dispatchToastHubEvent = function (error) {
    Hub.dispatch(UI_AUTH_CHANNEL, {
        event: TOAST_AUTH_ERROR_EVENT,
        message: I18n.get(error.message),
    });
};
var dispatchAuthStateChangeEvent = function (nextAuthState, data) {
    Hub.dispatch(UI_AUTH_CHANNEL, {
        event: AUTH_STATE_CHANGE_EVENT,
        message: nextAuthState,
        data: data,
    });
};
var composePhoneNumberInput = function (phoneNumber) {
    if (!phoneNumber.phoneNumberValue) {
        throw new Error(PHONE_EMPTY_ERROR_MESSAGE);
    }
    var sanitizedPhoneNumberValue = phoneNumber.phoneNumberValue.replace(/[-()\s]/g, '');
    return "" + phoneNumber.countryDialCodeValue + sanitizedPhoneNumberValue;
};
var checkUsernameAlias = function (usernameAlias) {
    if (!(usernameAlias in UsernameAlias)) {
        throw new Error("Invalid username Alias - " + usernameAlias + ". Instead use " + Object.values(UsernameAlias));
    }
};
var onAuthUIStateChange = function (authStateHandler) {
    var authUIStateHandler = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var payload, _a, user, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    payload = data.payload;
                    _a = payload.event;
                    switch (_a) {
                        case AUTH_STATE_CHANGE_EVENT: return [3 /*break*/, 1];
                    }
                    return [3 /*break*/, 8];
                case 1:
                    if (!payload.message) return [3 /*break*/, 7];
                    if (!(payload.message === AuthState.SignedIn)) return [3 /*break*/, 6];
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, Auth.currentAuthenticatedUser()];
                case 3:
                    user = _b.sent();
                    authStateHandler(payload.message, user);
                    return [3 /*break*/, 5];
                case 4:
                    e_1 = _b.sent();
                    logger.error('User is not authenticated');
                    return [3 /*break*/, 5];
                case 5: return [3 /*break*/, 7];
                case 6:
                    authStateHandler(payload.message, payload.data);
                    _b.label = 7;
                case 7: return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    Hub.listen(UI_AUTH_CHANNEL, authUIStateHandler);
    var unsubscribe = function () {
        // Replace user's `authStateHandler` with a noop so that we don't trigger side-effects during the async `authUIStateHandler` when unsubscribed
        authStateHandler = function () { };
        Hub.remove(UI_AUTH_CHANNEL, authUIStateHandler);
    };
    return unsubscribe;
};
var isHintValid = function (field) {
    return !(field['hint'] === null || typeof field['hint'] === 'string');
};
// Required attributes come from https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims
var getRequiredAttributesMap = function () { return ({
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
}); };
function handlePhoneNumberChange(event, phoneNumber) {
    var name = event.target.name;
    var value = event.target.value;
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
export { dispatchToastHubEvent as a, composePhoneNumberInput as b, checkUsernameAlias as c, dispatchAuthStateChangeEvent as d, closestElement as e, getRequiredAttributesMap as g, handlePhoneNumberChange as h, isHintValid as i, onAuthUIStateChange as o };