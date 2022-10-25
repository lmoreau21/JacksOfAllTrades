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
import { c as calcKey, p as putStorageObject, g as getStorageObject } from './storage-helpers-1afafead.js';
var logger = new Logger('S3ImagePicker');
var AmplifyS3ImagePicker = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        /** The content type header used when uploading to S3 */
        this.contentType = 'binary/octet-stream';
        /** The access level of the image */
        this.level = AccessLevel.Public;
        /** Title string value */
        this.headerTitle = Translations.IMAGE_PICKER_TITLE;
        /** Header Hint value in string */
        this.headerHint = Translations.IMAGE_PICKER_HINT;
        /** Placeholder hint that goes under the placeholder image */
        this.placeholderHint = Translations.IMAGE_PICKER_PLACEHOLDER_HINT;
        /** Upload Button Text as string */
        this.buttonText = Translations.IMAGE_PICKER_BUTTON_TEXT;
        this.handlePick = function (file) { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, path, level, track, identityId, fileToKey, key, _c, error_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this, _b = _a.path, path = _b === void 0 ? '' : _b, level = _a.level, track = _a.track, identityId = _a.identityId, fileToKey = _a.fileToKey;
                        key = path + calcKey(file, fileToKey);
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, putStorageObject(key, file, level, track, file['type'], logger)];
                    case 2:
                        _d.sent();
                        _c = this;
                        return [4 /*yield*/, getStorageObject(key, level, track, identityId, logger)];
                    case 3:
                        _c.src = _d.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _d.sent();
                        logger.error(error_1);
                        throw new Error(error_1);
                    case 5: return [2 /*return*/];
                }
            });
        }); };
    }
    class_1.prototype.render = function () {
        return (h(Host, null, h("slot", { name: "photo-picker" }, h("amplify-photo-picker", { previewSrc: this.src, handleClick: this.handlePick, headerTitle: I18n.get(this.headerTitle), headerHint: I18n.get(this.headerHint), placeholderHint: I18n.get(this.placeholderHint), buttonText: I18n.get(this.buttonText) }))));
    };
    return class_1;
}());
export { AmplifyS3ImagePicker as amplify_s3_image_picker };
