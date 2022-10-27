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
import { I18n } from '@aws-amplify/core';
import { A as AuthState } from './auth-types-78df304e.js';
import { Auth } from '@aws-amplify/auth';
import { T as Translations } from './Translations-c833f663.js';
import { N as NO_AUTH_MODULE_FOUND } from './constants-c8ecaa24.js';
import { d as dispatchAuthStateChangeEvent, a as dispatchToastHubEvent } from './helpers-9703fe65.js';
var amplifyNavCss = ".nav{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center}.nav>*{margin:0 0.5em}";
var AmplifyNav = /** @class */ (function () {
    function AmplifyNav(hostRef) {
        registerInstance(this, hostRef);
    }
    AmplifyNav.prototype.render = function () {
        return (h("nav", { class: "nav" }, h("slot", null)));
    };
    return AmplifyNav;
}());
AmplifyNav.style = amplifyNavCss;
var AmplifySignOut = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        /** Auth state change handler for this component */
        this.handleAuthStateChange = dispatchAuthStateChangeEvent;
        /** Text inside of the Sign Out button */
        this.buttonText = Translations.SIGN_OUT;
    }
    class_1.prototype.signOut = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (event)
                            event.preventDefault();
                        // TODO: Federated Sign Out
                        if (!Auth || typeof Auth.signOut !== 'function') {
                            throw new Error(NO_AUTH_MODULE_FOUND);
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Auth.signOut()];
                    case 2:
                        _a.sent();
                        this.handleAuthStateChange(AuthState.SignedOut);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        dispatchToastHubEvent(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (h("amplify-button", { slot: "sign-out", onClick: function (event) { return _this.signOut(event); }, "data-test": "sign-out-button" }, I18n.get(this.buttonText)));
    };
    return class_1;
}());
export { AmplifyNav as amplify_nav, AmplifySignOut as amplify_sign_out };