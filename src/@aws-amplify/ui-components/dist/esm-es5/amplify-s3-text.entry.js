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
import { A as AccessLevel } from './storage-types-f257c0f2.js';
import '@aws-amplify/auth';
import { T as Translations } from './Translations-c833f663.js';
import './constants-c8ecaa24.js';
import '@aws-amplify/storage';
import { p as putStorageObject, a as getTextSource } from './storage-helpers-1afafead.js';
var amplifyS3TextCss = ":host{--container-color:var(--amplify-smoke-white);--border-color:var(--amplify-light-grey);--font-size:var(--amplify-text-md);--text-color:var(--amplify-secondary-color)}.text-container{background-color:var(--container-color);border:1px solid var(--border-color);border-radius:5px;margin-bottom:10px}pre{display:block;margin:0.5rem 0;padding:0.5rem;line-height:1rem;max-height:50rem;font-size:var(--font-size);color:var(--text-color);word-break:break-all;overflow-y:scroll;overflow-x:auto}";
var logger = new Logger('S3Text');
var AmplifyS3Text = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        /** The content type header used when uploading to S3 */
        this.contentType = 'text/*';
        /** The access level of the text file */
        this.level = AccessLevel.Public;
        /** Fallback content */
        this.fallbackText = Translations.TEXT_FALLBACK_CONTENT;
    }
    class_1.prototype.watchHandler = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.load()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.componentWillLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.load()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, path, textKey, body, contentType, level, track, identityId, key, _b, err_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this, path = _a.path, textKey = _a.textKey, body = _a.body, contentType = _a.contentType, level = _a.level, track = _a.track, identityId = _a.identityId;
                        if (!textKey && !path) {
                            logger.debug('empty textKey and path');
                            return [2 /*return*/];
                        }
                        key = textKey || path;
                        logger.debug('loading ' + key + '...');
                        if (!body) return [3 /*break*/, 2];
                        return [4 /*yield*/, putStorageObject(textKey, body, level, track, contentType, logger)];
                    case 1:
                        _c.sent();
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 4, , 5]);
                        _b = this;
                        return [4 /*yield*/, getTextSource(key, level, track, identityId, logger)];
                    case 3:
                        _b.src = _c.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _c.sent();
                        logger.debug(err_1);
                        throw new Error(err_1);
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.render = function () {
        return (h("div", null, h("div", { class: "text-container" }, this.src ? (h("pre", null, this.src)) : (h("pre", null, I18n.get(this.fallbackText))))));
    };
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "textKey": ["watchHandler"],
                "body": ["watchHandler"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return class_1;
}());
AmplifyS3Text.style = amplifyS3TextCss;
export { AmplifyS3Text as amplify_s3_text };
