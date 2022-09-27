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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
import Auth from '@aws-amplify/auth';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql';
import { ModelAttributeAuthProvider, ModelAttributeAuthAllow, } from '../types';
function getProviderFromRule(rule) {
    // private with no provider means userPools
    if (rule.allow === 'private' && !rule.provider) {
        return ModelAttributeAuthProvider.USER_POOLS;
    }
    // public with no provider means apiKey
    if (rule.allow === 'public' && !rule.provider) {
        return ModelAttributeAuthProvider.API_KEY;
    }
    return rule.provider;
}
function sortAuthRulesWithPriority(rules) {
    var allowSortPriority = [
        ModelAttributeAuthAllow.CUSTOM,
        ModelAttributeAuthAllow.OWNER,
        ModelAttributeAuthAllow.GROUPS,
        ModelAttributeAuthAllow.PRIVATE,
        ModelAttributeAuthAllow.PUBLIC,
    ];
    var providerSortPriority = [
        ModelAttributeAuthProvider.FUNCTION,
        ModelAttributeAuthProvider.USER_POOLS,
        ModelAttributeAuthProvider.OIDC,
        ModelAttributeAuthProvider.IAM,
        ModelAttributeAuthProvider.API_KEY,
    ];
    return __spread(rules).sort(function (a, b) {
        if (a.allow === b.allow) {
            return (providerSortPriority.indexOf(getProviderFromRule(a)) -
                providerSortPriority.indexOf(getProviderFromRule(b)));
        }
        return (allowSortPriority.indexOf(a.allow) - allowSortPriority.indexOf(b.allow));
    });
}
function getAuthRules(_a) {
    var rules = _a.rules, currentUser = _a.currentUser;
    // Using Set to ensure uniqueness
    var authModes = new Set();
    rules.forEach(function (rule) {
        switch (rule.allow) {
            case ModelAttributeAuthAllow.CUSTOM:
                // custom with no provider -> function
                if (!rule.provider ||
                    rule.provider === ModelAttributeAuthProvider.FUNCTION) {
                    authModes.add(GRAPHQL_AUTH_MODE.AWS_LAMBDA);
                }
                break;
            case ModelAttributeAuthAllow.GROUPS:
            case ModelAttributeAuthAllow.OWNER: {
                // We shouldn't attempt User Pool or OIDC if there isn't an authenticated user
                if (currentUser) {
                    if (rule.provider === ModelAttributeAuthProvider.USER_POOLS) {
                        authModes.add(GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS);
                    }
                    else if (rule.provider === ModelAttributeAuthProvider.OIDC) {
                        authModes.add(GRAPHQL_AUTH_MODE.OPENID_CONNECT);
                    }
                }
                break;
            }
            case ModelAttributeAuthAllow.PRIVATE: {
                // We shouldn't attempt private if there isn't an authenticated user
                if (currentUser) {
                    // private with no provider means userPools
                    if (!rule.provider ||
                        rule.provider === ModelAttributeAuthProvider.USER_POOLS) {
                        authModes.add(GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS);
                    }
                    else if (rule.provider === ModelAttributeAuthProvider.IAM) {
                        authModes.add(GRAPHQL_AUTH_MODE.AWS_IAM);
                    }
                }
                break;
            }
            case ModelAttributeAuthAllow.PUBLIC: {
                if (rule.provider === ModelAttributeAuthProvider.IAM) {
                    authModes.add(GRAPHQL_AUTH_MODE.AWS_IAM);
                }
                else if (!rule.provider ||
                    rule.provider === ModelAttributeAuthProvider.API_KEY) {
                    // public with no provider means apiKey
                    authModes.add(GRAPHQL_AUTH_MODE.API_KEY);
                }
                break;
            }
            default:
                break;
        }
    });
    return Array.from(authModes);
}
export var multiAuthStrategy = function (amplifyContext) {
    return function (_a) {
        var schema = _a.schema, modelName = _a.modelName;
        return __awaiter(void 0, void 0, void 0, function () {
            var currentUser, e_1, attributes, authAttribute, sortedRules;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        amplifyContext.Auth = amplifyContext.Auth || Auth;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, amplifyContext.Auth.currentAuthenticatedUser()];
                    case 2:
                        currentUser = _c.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _c.sent();
                        return [3 /*break*/, 4];
                    case 4:
                        attributes = schema.namespaces.user.models[modelName].attributes;
                        if (attributes) {
                            authAttribute = attributes.find(function (attr) { return attr.type === 'auth'; });
                            if ((_b = authAttribute === null || authAttribute === void 0 ? void 0 : authAttribute.properties) === null || _b === void 0 ? void 0 : _b.rules) {
                                sortedRules = sortAuthRulesWithPriority(authAttribute.properties.rules);
                                return [2 /*return*/, getAuthRules({ currentUser: currentUser, rules: sortedRules })];
                            }
                        }
                        return [2 /*return*/, []];
                }
            });
        });
    };
};
//# sourceMappingURL=multiAuthStrategy.js.map