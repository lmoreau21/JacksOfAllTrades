'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

const index = require('./index-6d44143a.js');
const core = require('@aws-amplify/core');
const authTypes = require('./auth-types-cd1f71d2.js');
const Auth = require('@aws-amplify/auth');
const Auth__default = _interopDefault(Auth);
const constants = require('./constants-1335fef8.js');

const logger = new core.ConsoleLogger('amplify-federated-sign-in');
const AmplifyFederatedSignIn = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** The current authentication state. */
        this.authState = authTypes.AuthState.SignIn;
        /** Federated credentials & configuration. */
        this.federated = {};
    }
    componentWillLoad() {
        if (!Auth.Auth || typeof Auth.Auth.configure !== 'function') {
            throw new Error(constants.NO_AUTH_MODULE_FOUND);
        }
        const { oauth = {} } = Auth.Auth.configure();
        // backward compatibility
        if (oauth['domain']) {
            this.federated.oauth_config = Object.assign(Object.assign({}, this.federated.oauth_config), oauth);
        }
        else if (oauth['awsCognito']) {
            this.federated.oauth_config = Object.assign(Object.assign({}, this.federated.oauth_config), oauth['awsCognito']);
        }
        if (oauth['auth0']) {
            this.federated.auth0 = Object.assign(Object.assign({}, this.federated.auth0), oauth['auth0']);
        }
    }
    render() {
        if (!this.federated) {
            logger.debug('federated prop is empty. show nothing');
            logger.debug('federated={google_client_id: , facebook_app_id: , amazon_client_id}');
            return null;
        }
        if (!Object.values(authTypes.AuthState).includes(this.authState)) {
            return null;
        }
        logger.debug('federated Config is', this.federated);
        return (index.h("amplify-form-section", { "data-test": "federated-sign-in-section" }, index.h("amplify-section", { "data-test": "federated-sign-in-body-section" }, index.h("amplify-federated-buttons", { authState: this.authState, "data-test": "federated-sign-in-buttons", federated: this.federated }))));
    }
};

exports.amplify_federated_sign_in = AmplifyFederatedSignIn;
