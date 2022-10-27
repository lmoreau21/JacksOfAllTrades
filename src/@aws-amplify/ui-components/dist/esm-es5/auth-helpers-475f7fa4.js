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
import { Logger, isEmpty } from '@aws-amplify/core';
import { A as AuthState, C as ChallengeName, U as UsernameAlias } from './auth-types-78df304e.js';
import { Auth, CognitoUser } from '@aws-amplify/auth';
import { T as Translations } from './Translations-c833f663.js';
import { N as NO_AUTH_MODULE_FOUND } from './constants-c8ecaa24.js';
import { a as dispatchToastHubEvent } from './helpers-9703fe65.js';
var logger = new Logger('auth-helpers');
function checkContact(user, handleAuthStateChange) {
    return __awaiter(this, void 0, void 0, function () {
        var data, newUser, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!Auth || typeof Auth.verifiedContact !== 'function') {
                        throw new Error(NO_AUTH_MODULE_FOUND);
                    }
                    // If `user` is a federated user, we shouldn't call `verifiedContact`
                    // since `user` isn't `CognitoUser`
                    if (!isCognitoUser(user)) {
                        handleAuthStateChange(AuthState.SignedIn, user);
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, Auth.verifiedContact(user)];
                case 2:
                    data = _a.sent();
                    if (!isEmpty(data.verified) || isEmpty(data.unverified)) {
                        handleAuthStateChange(AuthState.SignedIn, user);
                    }
                    else {
                        newUser = Object.assign(user, data);
                        handleAuthStateChange(AuthState.VerifyContact, newUser);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    dispatchToastHubEvent(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
var handleSignIn = function (username, password, handleAuthStateChange, usernameAlias) { return __awaiter(void 0, void 0, void 0, function () {
    var user, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!Auth || typeof Auth.signIn !== 'function') {
                    throw new Error(NO_AUTH_MODULE_FOUND);
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 9, , 10]);
                return [4 /*yield*/, Auth.signIn(username, password)];
            case 2:
                user = _a.sent();
                logger.debug(user);
                if (!(user.challengeName === ChallengeName.SMSMFA ||
                    user.challengeName === ChallengeName.SoftwareTokenMFA)) return [3 /*break*/, 3];
                logger.debug('confirm user with ' + user.challengeName);
                handleAuthStateChange(AuthState.ConfirmSignIn, user);
                return [3 /*break*/, 8];
            case 3:
                if (!(user.challengeName === ChallengeName.NewPasswordRequired)) return [3 /*break*/, 4];
                logger.debug('require new password', user.challengeParam);
                handleAuthStateChange(AuthState.ResetPassword, user);
                return [3 /*break*/, 8];
            case 4:
                if (!(user.challengeName === ChallengeName.MFASetup)) return [3 /*break*/, 5];
                logger.debug('TOTP setup', user.challengeParam);
                handleAuthStateChange(AuthState.TOTPSetup, user);
                return [3 /*break*/, 8];
            case 5:
                if (!(user.challengeName === ChallengeName.CustomChallenge &&
                    user.challengeParam &&
                    user.challengeParam.trigger === 'true')) return [3 /*break*/, 6];
                logger.debug('custom challenge', user.challengeParam);
                handleAuthStateChange(AuthState.CustomConfirmSignIn, user);
                return [3 /*break*/, 8];
            case 6: return [4 /*yield*/, checkContact(user, handleAuthStateChange)];
            case 7:
                _a.sent();
                _a.label = 8;
            case 8: return [3 /*break*/, 10];
            case 9:
                error_2 = _a.sent();
                if (error_2.code === 'UserNotConfirmedException') {
                    logger.debug('the user is not confirmed');
                    handleAuthStateChange(AuthState.ConfirmSignUp, { username: username });
                }
                else if (error_2.code === 'PasswordResetRequiredException') {
                    logger.debug('the user requires a new password');
                    handleAuthStateChange(AuthState.ForgotPassword, { username: username });
                }
                else if (error_2.code === 'InvalidParameterException' && password === '') {
                    logger.debug('Password cannot be empty');
                    error_2.message = Translations.EMPTY_PASSWORD;
                }
                else if (error_2.message === Translations.EMPTY_USERNAME) {
                    if (usernameAlias === UsernameAlias.email) {
                        error_2.message = Translations.EMPTY_EMAIL;
                    }
                    if (usernameAlias === UsernameAlias.phone_number) {
                        error_2.message = Translations.EMPTY_PHONE;
                    }
                }
                dispatchToastHubEvent(error_2);
                return [3 /*break*/, 10];
            case 10: return [2 /*return*/];
        }
    });
}); };
var isCognitoUser = function (user) {
    return user instanceof CognitoUser;
};
export { checkContact as c, handleSignIn as h };