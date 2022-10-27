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
import { r as registerInstance, h, H as Host } from './index-83f2275b.js';
import { Logger, I18n } from '@aws-amplify/core';
import { A as AccessLevel } from './storage-types-f257c0f2.js';
import '@aws-amplify/auth';
import { T as Translations } from './Translations-c833f663.js';
import './constants-c8ecaa24.js';
import '@aws-amplify/storage';
import { c as calcKey, p as putStorageObject } from './storage-helpers-1afafead.js';
var logger = new Logger('S3TextPicker');
var AmplifyS3TextPicker = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        /** The content type header used when uploading to S3 */
        this.contentType = 'text/*';
        /** The access level of the text file */
        this.level = AccessLevel.Public;
        /** Fallback content for aplify-s3-text */
        this.fallbackText = Translations.PICKER_TEXT;
    }
    class_1.prototype.handleInput = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var file, _a, _b, path, level, fileToKey, track, key, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        file = event.target.files[0];
                        _a = this, _b = _a.path, path = _b === void 0 ? '' : _b, level = _a.level, fileToKey = _a.fileToKey, track = _a.track;
                        key = path + calcKey(file, fileToKey);
                        if (!file) {
                            throw new Error('No file was selected');
                        }
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, putStorageObject(key, file, level, track, file['type'], logger)];
                    case 2:
                        _c.sent();
                        this.src = key;
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _c.sent();
                        logger.debug(error_1);
                        throw new Error(error_1);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (h(Host, null, h("amplify-s3-text", { textKey: this.src, path: this.path, level: this.level, track: this.track, identityId: this.identityId, contentType: this.contentType, fallbackText: I18n.get(this.fallbackText) }), h("amplify-picker", { inputHandler: function (e) { return _this.handleInput(e); }, acceptValue: 'text/*' })));
    };
    return class_1;
}());
export { AmplifyS3TextPicker as amplify_s3_text_picker };