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
var _a;
import { r as registerInstance, h, H as Host, g as getElement } from './index-83f2275b.js';
import { Logger, Hub } from '@aws-amplify/core';
import { A as AuthState } from './auth-types-78df304e.js';
import { appendToCognitoUserAgent, Auth } from '@aws-amplify/auth';
import './Translations-c833f663.js';
import { T as TOAST_AUTH_ERROR_EVENT, U as UI_AUTH_CHANNEL, A as AUTH_CHANNEL, N as NO_AUTH_MODULE_FOUND } from './constants-c8ecaa24.js';
import { d as dispatchAuthStateChangeEvent, o as onAuthUIStateChange } from './helpers-9703fe65.js';
import { c as checkContact } from './auth-helpers-475f7fa4.js';
var authSlotNames = (_a = {},
    _a[AuthState.SignIn] = 'sign-in',
    _a[AuthState.ConfirmSignIn] = 'confirm-sign-in',
    _a[AuthState.SignUp] = 'sign-up',
    _a[AuthState.ConfirmSignUp] = 'confirm-sign-up',
    _a[AuthState.ForgotPassword] = 'forgot-password',
    _a[AuthState.ResetPassword] = 'require-new-password',
    _a[AuthState.VerifyContact] = 'verify-contact',
    _a[AuthState.TOTPSetup] = 'totp-setup',
    _a[AuthState.Loading] = 'loading',
    _a);
var amplifyAuthenticatorCss = ":host{--background-color:var(--amplify-background-color);--width:28.75rem;--min-width:20rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;--box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.15);--border-radius:6px;--padding:35px 40px;--margin-bottom:20px;--container-height:100vh;--container-display:flex;--container-justify:center;--container-align:center}.auth-container{display:var(--container-display);-ms-flex-pack:var(--container-justify);justify-content:var(--container-justify);-ms-flex-align:var(--container-align);align-items:var(--container-align);min-height:var(--container-height)}";
var logger = new Logger('Authenticator');
var AmplifyAuthenticator = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        /** Initial starting state of the Authenticator component. E.g. If `signup` is passed the default component is set to AmplifySignUp */
        this.initialAuthState = AuthState.SignIn;
        /** Callback for Authenticator state machine changes */
        this.handleAuthStateChange = function () { };
        /** Hide amplify-toast for auth errors */
        this.hideToast = false;
        this.authState = AuthState.Loading;
        this.toastMessage = '';
        this.handleExternalAuthEvent = function (_a) {
            var payload = _a.payload;
            switch (payload.event) {
                case 'cognitoHostedUI':
                case 'signIn':
                    checkContact(payload.data, dispatchAuthStateChangeEvent);
                    break;
                case 'cognitoHostedUI_failure':
                case 'parsingUrl_failure':
                case 'signOut':
                case 'customGreetingSignOut':
                    return dispatchAuthStateChangeEvent(_this.initialAuthState);
            }
        };
        this.handleToastEvent = function (_a) {
            var payload = _a.payload;
            switch (payload.event) {
                case TOAST_AUTH_ERROR_EVENT:
                    if (payload.message)
                        _this.toastMessage = payload.message;
                    break;
            }
        };
    }
    class_1.prototype.componentWillLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        onAuthUIStateChange(function (authState, authData) {
                            _this.onAuthStateChange(authState, authData);
                            _this.toastMessage = '';
                        });
                        if (!this.hideToast)
                            Hub.listen(UI_AUTH_CHANNEL, this.handleToastEvent);
                        Hub.listen(AUTH_CHANNEL, this.handleExternalAuthEvent);
                        appendToCognitoUserAgent('amplify-authenticator');
                        return [4 /*yield*/, this.checkUser()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.checkUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (!Auth || typeof Auth.currentAuthenticatedUser !== 'function') {
                    throw new Error(NO_AUTH_MODULE_FOUND);
                }
                return [2 /*return*/, Auth.currentAuthenticatedUser()
                        .then(function (user) {
                        dispatchAuthStateChangeEvent(AuthState.SignedIn, user);
                    })
                        .catch(function () {
                        dispatchAuthStateChangeEvent(_this.initialAuthState);
                    })];
            });
        });
    };
    class_1.prototype.onAuthStateChange = function (nextAuthState, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (nextAuthState === undefined)
                    return [2 /*return*/, logger.error('nextAuthState cannot be undefined')];
                logger.info('Inside onAuthStateChange Method current authState:', this.authState);
                if (nextAuthState === AuthState.SignedOut) {
                    this.authState = this.initialAuthState;
                }
                else {
                    this.authState = nextAuthState;
                }
                this.authData = data;
                if (this.authData)
                    logger.log('Auth Data was set:', this.authData);
                if (this.authState === nextAuthState) {
                    this.handleAuthStateChange(this.authState, this.authData);
                    logger.info("authState has been updated to " + this.authState);
                }
                return [2 /*return*/];
            });
        });
    };
    // Returns the auth component corresponding to the given authState.
    class_1.prototype.getAuthComponent = function (authState) {
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
                throw new Error("Unhandled auth state: " + authState);
        }
    };
    // Returns a slot containing the Auth component corresponding to the given authState
    class_1.prototype.getSlotWithAuthComponent = function (authState) {
        var authComponent = this.getAuthComponent(authState);
        var slotName = authSlotNames[authState];
        var slotIsEmpty = this.el.querySelector("[slot=\"" + slotName + "\"]") === null; // true if no element has been inserted to the slot
        /**
         * Connect the inner auth component to DOM only if the slot hasn't been overwritten. This prevents
         * the overwritten component from calling its lifecycle methods.
         */
        return h("slot", { name: slotName }, slotIsEmpty && authComponent);
    };
    class_1.prototype.disconnectedCallback = function () {
        Hub.remove(AUTH_CHANNEL, this.handleExternalAuthEvent);
        if (!this.hideToast)
            Hub.remove(UI_AUTH_CHANNEL, this.handleToastEvent);
        return onAuthUIStateChange;
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (h(Host, null, !this.hideToast && this.toastMessage && (h("amplify-toast", { message: this.toastMessage, handleClose: function () {
                _this.toastMessage = '';
            }, "data-test": "authenticator-error" })), this.authState === AuthState.SignedIn ? ([h("slot", { name: "greetings" }), h("slot", null)]) : (h("div", { class: "auth-container" }, this.getSlotWithAuthComponent(this.authState)))));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return class_1;
}());
AmplifyAuthenticator.style = amplifyAuthenticatorCss;
export { AmplifyAuthenticator as amplify_authenticator };