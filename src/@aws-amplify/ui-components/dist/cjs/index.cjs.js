'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('@aws-amplify/core');
const authTypes = require('./auth-types-cd1f71d2.js');
const storageTypes = require('./storage-types-fa93d917.js');
require('@aws-amplify/auth');
const Translations = require('./Translations-5f4bb72c.js');
const constants = require('./constants-1335fef8.js');
const helpers = require('./helpers-0d7ea2c5.js');



Object.defineProperty(exports, 'AuthFormField', {
	enumerable: true,
	get: function () {
		return authTypes.AuthFormField;
	}
});
Object.defineProperty(exports, 'AuthState', {
	enumerable: true,
	get: function () {
		return authTypes.AuthState;
	}
});
Object.defineProperty(exports, 'ChallengeName', {
	enumerable: true,
	get: function () {
		return authTypes.ChallengeName;
	}
});
Object.defineProperty(exports, 'MfaOption', {
	enumerable: true,
	get: function () {
		return authTypes.MfaOption;
	}
});
Object.defineProperty(exports, 'UsernameAlias', {
	enumerable: true,
	get: function () {
		return authTypes.UsernameAlias;
	}
});
Object.defineProperty(exports, 'AccessLevel', {
	enumerable: true,
	get: function () {
		return storageTypes.AccessLevel;
	}
});
exports.Translations = Translations.Translations;
exports.AUTH_CHANNEL = constants.AUTH_CHANNEL;
exports.AUTH_STATE_CHANGE_EVENT = constants.AUTH_STATE_CHANGE_EVENT;
exports.TOAST_AUTH_ERROR_EVENT = constants.TOAST_AUTH_ERROR_EVENT;
exports.UI_AUTH_CHANNEL = constants.UI_AUTH_CHANNEL;
exports.onAuthUIStateChange = helpers.onAuthUIStateChange;