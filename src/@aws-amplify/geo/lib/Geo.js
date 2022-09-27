"use strict";
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright 2017-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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
var core_1 = require("@aws-amplify/core");
var AmazonLocationServiceProvider_1 = require("./Providers/AmazonLocationServiceProvider");
var util_1 = require("./util");
var logger = new core_1.ConsoleLogger('Geo');
var DEFAULT_PROVIDER = 'AmazonLocationService';
var GeoClass = /** @class */ (function () {
    function GeoClass() {
        this._config = {};
        this._pluggables = [];
        logger.debug('Geo Options', this._config);
    }
    /**
     * get the name of the module category
     * @returns {string} name of the module category
     */
    GeoClass.prototype.getModuleName = function () {
        return GeoClass.MODULE;
    };
    /**
     * add plugin into Geo category
     * @param {Object} pluggable - an instance of the plugin
     */
    GeoClass.prototype.addPluggable = function (pluggable) {
        if (pluggable && pluggable.getCategory() === 'Geo') {
            this._pluggables.push(pluggable);
            var config = pluggable.configure(this._config[pluggable.getProviderName()]);
            return config;
        }
    };
    /**
     * Get the plugin object
     * @param providerName - the name of the plugin
     */
    GeoClass.prototype.getPluggable = function (providerName) {
        var pluggable = this._pluggables.find(function (pluggable) { return pluggable.getProviderName() === providerName; });
        if (pluggable === undefined) {
            logger.debug('No plugin found with providerName', providerName);
            throw new Error('No plugin found in Geo for the provider');
        }
        else
            return pluggable;
    };
    /**
     * Remove the plugin object
     * @param providerName - the name of the plugin
     */
    GeoClass.prototype.removePluggable = function (providerName) {
        this._pluggables = this._pluggables.filter(function (pluggable) { return pluggable.getProviderName() !== providerName; });
        return;
    };
    /**
     * Configure Geo
     * @param {Object} config - Configuration object for Geo
     * @return {Object} - Current configuration
     */
    GeoClass.prototype.configure = function (config) {
        var _this = this;
        logger.debug('configure Geo');
        if (!config)
            return this._config;
        var amplifyConfig = core_1.parseMobileHubConfig(config);
        this._config = Object.assign({}, this._config, amplifyConfig.Geo, config);
        this._pluggables.forEach(function (pluggable) {
            pluggable.configure(_this._config[pluggable.getProviderName()]);
        });
        if (this._pluggables.length === 0) {
            this.addPluggable(new AmazonLocationServiceProvider_1.AmazonLocationServiceProvider());
        }
        return this._config;
    };
    /**
     * Get the map resources that are currently available through the provider
     * @param {string} provider
     * @returns - Array of available map resources
     */
    GeoClass.prototype.getAvailableMaps = function (provider) {
        if (provider === void 0) { provider = DEFAULT_PROVIDER; }
        var prov = this.getPluggable(provider);
        return prov.getAvailableMaps();
    };
    /**
     * Get the map resource set as default in amplify config
     * @param {string} provider
     * @returns - Map resource set as the default in amplify config
     */
    GeoClass.prototype.getDefaultMap = function (provider) {
        if (provider === void 0) { provider = DEFAULT_PROVIDER; }
        var prov = this.getPluggable(provider);
        return prov.getDefaultMap();
    };
    /**
     * Search by text input with optional parameters
     * @param  {string} text - The text string that is to be searched for
     * @param  {SearchByTextOptions} options? - Optional parameters to the search
     * @returns {Promise<Place[]>} - Promise resolves to a list of Places that match search parameters
     */
    GeoClass.prototype.searchByText = function (text, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, providerName, prov, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = (options || {}).providerName, providerName = _a === void 0 ? DEFAULT_PROVIDER : _a;
                        prov = this.getPluggable(providerName);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, prov.searchByText(text, options)];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3:
                        error_1 = _b.sent();
                        logger.debug(error_1);
                        throw error_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Reverse geocoding search via a coordinate point on the map
     * @param coordinates - Coordinates array for the search input
     * @param options - Options parameters for the search
     * @returns {Promise<Place>} - Promise that resolves to a place matching search coordinates
     */
    GeoClass.prototype.searchByCoordinates = function (coordinates, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, providerName, prov, _b, lng, lat, error_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = (options || {}).providerName, providerName = _a === void 0 ? DEFAULT_PROVIDER : _a;
                        prov = this.getPluggable(providerName);
                        _b = __read(coordinates, 2), lng = _b[0], lat = _b[1];
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        util_1.validateCoordinates(lng, lat);
                        return [4 /*yield*/, prov.searchByCoordinates(coordinates, options)];
                    case 2: return [2 /*return*/, _c.sent()];
                    case 3:
                        error_2 = _c.sent();
                        logger.debug(error_2);
                        throw error_2;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Create geofences
     * @param geofences - Single or array of geofence objects to create
     * @param options? - Optional parameters for creating geofences
     * @returns {Promise<SaveGeofencesResults>} - Promise that resolves to an object with:
     *   successes: list of geofences successfully created
     *   errors: list of geofences that failed to create
     */
    GeoClass.prototype.saveGeofences = function (geofences, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, providerName, prov, geofenceInputArray, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = (options || {}).providerName, providerName = _a === void 0 ? DEFAULT_PROVIDER : _a;
                        prov = this.getPluggable(providerName);
                        if (!Array.isArray(geofences)) {
                            geofenceInputArray = [geofences];
                        }
                        else {
                            geofenceInputArray = geofences;
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, prov.saveGeofences(geofenceInputArray, options)];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3:
                        error_3 = _b.sent();
                        logger.debug(error_3);
                        throw error_3;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get a single geofence by geofenceId
     * @param geofenceId: GeofenceId - The string id of the geofence to get
     * @param options?: GeofenceOptions - Optional parameters for getting a geofence
     * @returns Promise<Geofence> - Promise that resolves to a geofence object
     */
    GeoClass.prototype.getGeofence = function (geofenceId, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, providerName, prov, error_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = (options || {}).providerName, providerName = _a === void 0 ? DEFAULT_PROVIDER : _a;
                        prov = this.getPluggable(providerName);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, prov.getGeofence(geofenceId, options)];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3:
                        error_4 = _b.sent();
                        logger.debug(error_4);
                        throw error_4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * List geofences
     * @param  options?: ListGeofenceOptions
     * @returns {Promise<ListGeofencesResults>} - Promise that resolves to an object with:
     *   entries: list of geofences - 100 geofences are listed per page
     *   nextToken: token for next page of geofences
     */
    GeoClass.prototype.listGeofences = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, providerName, prov, error_5;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = (options || {}).providerName, providerName = _a === void 0 ? DEFAULT_PROVIDER : _a;
                        prov = this.getPluggable(providerName);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, prov.listGeofences(options)];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3:
                        error_5 = _b.sent();
                        logger.debug(error_5);
                        throw error_5;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Delete geofences
     * @param geofenceIds: string|string[]
     * @param options?: GeofenceOptions
     * @returns {Promise<DeleteGeofencesResults>} - Promise that resolves to an object with:
     *  successes: list of geofences successfully deleted
     *  errors: list of geofences that failed to delete
     */
    GeoClass.prototype.deleteGeofences = function (geofenceIds, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, providerName, prov, geofenceIdsInputArray, error_6;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = (options || {}).providerName, providerName = _a === void 0 ? DEFAULT_PROVIDER : _a;
                        prov = this.getPluggable(providerName);
                        if (!Array.isArray(geofenceIds)) {
                            geofenceIdsInputArray = [geofenceIds];
                        }
                        else {
                            geofenceIdsInputArray = geofenceIds;
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, prov.deleteGeofences(geofenceIdsInputArray, options)];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3:
                        error_6 = _b.sent();
                        logger.debug(error_6);
                        throw error_6;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    GeoClass.MODULE = 'Geo';
    return GeoClass;
}());
exports.GeoClass = GeoClass;
exports.Geo = new GeoClass();
core_1.Amplify.register(exports.Geo);
//# sourceMappingURL=Geo.js.map