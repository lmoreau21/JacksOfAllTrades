"use strict";
/*
 * Copyright 2017-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@aws-amplify/core");
var client_s3_1 = require("@aws-sdk/client-s3");
var axios_http_handler_1 = require("./axios-http-handler");
var events = __importStar(require("events"));
var S3ClientUtils_1 = require("../common/S3ClientUtils");
var logger = new core_1.ConsoleLogger('AWSS3ProviderManagedUpload');
var AWSS3ProviderManagedUpload = /** @class */ (function () {
    function AWSS3ProviderManagedUpload(params, opts, emitter) {
        // Defaults
        this.minPartSize = 5 * 1024 * 1024; // in MB
        this.queueSize = 4;
        // Data for current upload
        this.body = null;
        this.params = null;
        this.opts = null;
        this.completedParts = [];
        this.uploadId = null;
        // Progress reporting
        this.bytesUploaded = 0;
        this.totalBytesToUpload = 0;
        this.emitter = null;
        this.params = params;
        this.opts = opts;
        this.emitter = emitter;
        this.s3client = this._createNewS3Client(opts, emitter);
    }
    AWSS3ProviderManagedUpload.prototype.upload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, putObjectCommand, _b, numberOfPartsToUpload, parts, start, error_1;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 10, , 12]);
                        _a = this;
                        return [4 /*yield*/, this.validateAndSanitizeBody(this.params.Body)];
                    case 1:
                        _a.body = _c.sent();
                        this.totalBytesToUpload = this.byteLength(this.body);
                        if (!(this.totalBytesToUpload <= this.minPartSize)) return [3 /*break*/, 2];
                        // Multipart upload is not required. Upload the sanitized body as is
                        this.params.Body = this.body;
                        putObjectCommand = new client_s3_1.PutObjectCommand(this.params);
                        return [2 /*return*/, this.s3client.send(putObjectCommand)];
                    case 2:
                        // Step 1: Initiate the multi part upload
                        _b = this;
                        return [4 /*yield*/, this.createMultiPartUpload()];
                    case 3:
                        // Step 1: Initiate the multi part upload
                        _b.uploadId = _c.sent();
                        numberOfPartsToUpload = Math.ceil(this.totalBytesToUpload / this.minPartSize);
                        parts = this.createParts();
                        start = 0;
                        _c.label = 4;
                    case 4:
                        if (!(start < numberOfPartsToUpload)) return [3 /*break*/, 7];
                        // Upload as many as `queueSize` parts simultaneously
                        return [4 /*yield*/, this.uploadParts(this.uploadId, parts.slice(start, start + this.queueSize))];
                    case 5:
                        // Upload as many as `queueSize` parts simultaneously
                        _c.sent();
                        _c.label = 6;
                    case 6:
                        start += this.queueSize;
                        return [3 /*break*/, 4];
                    case 7:
                        parts.map(function (part) {
                            _this.removeEventListener(part);
                        });
                        return [4 /*yield*/, this.finishMultiPartUpload(this.uploadId)];
                    case 8: 
                    // Step 3: Finalize the upload such that S3 can recreate the file
                    return [2 /*return*/, _c.sent()];
                    case 9: return [3 /*break*/, 12];
                    case 10:
                        error_1 = _c.sent();
                        // if any error is thrown, call cleanup
                        return [4 /*yield*/, this.cleanup(this.uploadId)];
                    case 11:
                        // if any error is thrown, call cleanup
                        _c.sent();
                        logger.error('Error. Cancelling the multipart upload.');
                        throw error_1;
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    AWSS3ProviderManagedUpload.prototype.createParts = function () {
        try {
            var parts = [];
            for (var bodyStart = 0; bodyStart < this.totalBytesToUpload;) {
                var bodyEnd = Math.min(bodyStart + this.minPartSize, this.totalBytesToUpload);
                parts.push({
                    bodyPart: this.body.slice(bodyStart, bodyEnd),
                    partNumber: parts.length + 1,
                    emitter: new events.EventEmitter(),
                    _lastUploadedBytes: 0,
                });
                bodyStart += this.minPartSize;
            }
            return parts;
        }
        catch (error) {
            logger.error(error);
            throw error;
        }
    };
    AWSS3ProviderManagedUpload.prototype.createMultiPartUpload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var createMultiPartUploadCommand, response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        createMultiPartUploadCommand = new client_s3_1.CreateMultipartUploadCommand(this.params);
                        return [4 /*yield*/, this.s3client.send(createMultiPartUploadCommand)];
                    case 1:
                        response = _a.sent();
                        logger.debug(response.UploadId);
                        return [2 /*return*/, response.UploadId];
                    case 2:
                        error_2 = _a.sent();
                        logger.error(error_2);
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @private Not to be extended outside of tests
     * @VisibleFotTesting
     */
    AWSS3ProviderManagedUpload.prototype.uploadParts = function (uploadId, parts) {
        return __awaiter(this, void 0, void 0, function () {
            var allResults, i, error_3;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Promise.all(parts.map(function (part) { return __awaiter(_this, void 0, void 0, function () {
                                var options, _a, Key, Bucket, SSECustomerAlgorithm, SSECustomerKey, SSECustomerKeyMD5, res;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            this.setupEventListener(part);
                                            options = { emitter: part.emitter };
                                            _a = this.params, Key = _a.Key, Bucket = _a.Bucket, SSECustomerAlgorithm = _a.SSECustomerAlgorithm, SSECustomerKey = _a.SSECustomerKey, SSECustomerKeyMD5 = _a.SSECustomerKeyMD5;
                                            return [4 /*yield*/, this.s3client.send(new client_s3_1.UploadPartCommand(__assign(__assign(__assign({ PartNumber: part.partNumber, Body: part.bodyPart, UploadId: uploadId, Key: Key,
                                                    Bucket: Bucket }, (SSECustomerAlgorithm && { SSECustomerAlgorithm: SSECustomerAlgorithm })), (SSECustomerKey && { SSECustomerKey: SSECustomerKey })), (SSECustomerKeyMD5 && { SSECustomerKeyMD5: SSECustomerKeyMD5 }))), options)];
                                        case 1:
                                            res = _b.sent();
                                            return [2 /*return*/, res];
                                    }
                                });
                            }); }))];
                    case 1:
                        allResults = _a.sent();
                        // The order of resolved promises is the same as input promise order.
                        for (i = 0; i < allResults.length; i++) {
                            this.completedParts.push({
                                PartNumber: parts[i].partNumber,
                                ETag: allResults[i].ETag,
                            });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        logger.error('Error happened while uploading a part. Cancelling the multipart upload');
                        throw error_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AWSS3ProviderManagedUpload.prototype.finishMultiPartUpload = function (uploadId) {
        return __awaiter(this, void 0, void 0, function () {
            var input, completeUploadCommand, data, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        input = {
                            Bucket: this.params.Bucket,
                            Key: this.params.Key,
                            UploadId: uploadId,
                            MultipartUpload: { Parts: this.completedParts },
                        };
                        completeUploadCommand = new client_s3_1.CompleteMultipartUploadCommand(input);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.s3client.send(completeUploadCommand)];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data.Key];
                    case 3:
                        error_4 = _a.sent();
                        logger.error('Error happened while finishing the upload.');
                        throw error_4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AWSS3ProviderManagedUpload.prototype.cleanup = function (uploadId) {
        return __awaiter(this, void 0, void 0, function () {
            var input, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Reset this's state
                        this.body = null;
                        this.completedParts = [];
                        this.bytesUploaded = 0;
                        this.totalBytesToUpload = 0;
                        input = {
                            Bucket: this.params.Bucket,
                            Key: this.params.Key,
                            UploadId: uploadId,
                        };
                        return [4 /*yield*/, this.s3client.send(new client_s3_1.AbortMultipartUploadCommand(input))];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.s3client.send(new client_s3_1.ListPartsCommand(input))];
                    case 2:
                        data = _a.sent();
                        if (data && data.Parts && data.Parts.length > 0) {
                            throw new Error('Multipart upload clean up failed.');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AWSS3ProviderManagedUpload.prototype.removeEventListener = function (part) {
        part.emitter.removeAllListeners(axios_http_handler_1.SEND_UPLOAD_PROGRESS_EVENT);
        part.emitter.removeAllListeners(axios_http_handler_1.SEND_DOWNLOAD_PROGRESS_EVENT);
    };
    AWSS3ProviderManagedUpload.prototype.setupEventListener = function (part) {
        var _this = this;
        part.emitter.on(axios_http_handler_1.SEND_UPLOAD_PROGRESS_EVENT, function (progress) {
            _this.progressChanged(part.partNumber, progress.loaded - part._lastUploadedBytes);
            part._lastUploadedBytes = progress.loaded;
        });
    };
    AWSS3ProviderManagedUpload.prototype.progressChanged = function (partNumber, incrementalUpdate) {
        this.bytesUploaded += incrementalUpdate;
        this.emitter.emit(axios_http_handler_1.SEND_UPLOAD_PROGRESS_EVENT, {
            loaded: this.bytesUploaded,
            total: this.totalBytesToUpload,
            part: partNumber,
            key: this.params.Key,
        });
    };
    AWSS3ProviderManagedUpload.prototype.byteLength = function (input) {
        if (input === null || input === undefined)
            return 0;
        if (typeof input.byteLength === 'number') {
            return input.byteLength;
        }
        else if (typeof input.length === 'number') {
            return input.length;
        }
        else if (typeof input.size === 'number') {
            return input.size;
        }
        else if (typeof input.path === 'string') {
            /* NodeJs Support
            return require('fs').lstatSync(input.path).size;
            */
        }
        else {
            throw new Error('Cannot determine length of ' + input);
        }
    };
    AWSS3ProviderManagedUpload.prototype.validateAndSanitizeBody = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.isGenericObject(body)) {
                    // Any javascript object
                    return [2 /*return*/, JSON.stringify(body)];
                }
                else {
                    // Files, arrayBuffer etc
                    return [2 /*return*/, body];
                }
                return [2 /*return*/];
            });
        });
    };
    AWSS3ProviderManagedUpload.prototype.isGenericObject = function (body) {
        if (body !== null && typeof body === 'object') {
            try {
                return !(this.byteLength(body) >= 0);
            }
            catch (error) {
                // If we cannot determine the length of the body, consider it
                // as a generic object and upload a stringified version of it
                return true;
            }
        }
        return false;
    };
    AWSS3ProviderManagedUpload.prototype._createNewS3Client = function (config, emitter) {
        var s3client = S3ClientUtils_1.createS3Client(config, emitter);
        s3client.middlewareStack.add(S3ClientUtils_1.createPrefixMiddleware(this.opts, this.params.Key), S3ClientUtils_1.prefixMiddlewareOptions);
        s3client.middlewareStack.add(S3ClientUtils_1.autoAdjustClockskewMiddleware(s3client.config), S3ClientUtils_1.autoAdjustClockskewMiddlewareOptions);
        return s3client;
    };
    return AWSS3ProviderManagedUpload;
}());
exports.AWSS3ProviderManagedUpload = AWSS3ProviderManagedUpload;
//# sourceMappingURL=AWSS3ProviderManagedUpload.js.map