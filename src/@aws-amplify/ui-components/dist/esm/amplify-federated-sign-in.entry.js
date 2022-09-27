import { r as registerInstance, h } from './index-83f2275b.js';
import { ConsoleLogger } from '@aws-amplify/core';
import { A as AuthState } from './auth-types-78df304e.js';
import { Auth } from '@aws-amplify/auth';
import { N as NO_AUTH_MODULE_FOUND } from './constants-c8ecaa24.js';

const logger = new ConsoleLogger('amplify-federated-sign-in');
const AmplifyFederatedSignIn = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** The current authentication state. */
        this.authState = AuthState.SignIn;
        /** Federated credentials & configuration. */
        this.federated = {};
    }
    componentWillLoad() {
        if (!Auth || typeof Auth.configure !== 'function') {
            throw new Error(NO_AUTH_MODULE_FOUND);
        }
        const { oauth = {} } = Auth.configure();
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
        if (!Object.values(AuthState).includes(this.authState)) {
            return null;
        }
        logger.debug('federated Config is', this.federated);
        return (h("amplify-form-section", { "data-test": "federated-sign-in-section" }, h("amplify-section", { "data-test": "federated-sign-in-body-section" }, h("amplify-federated-buttons", { authState: this.authState, "data-test": "federated-sign-in-buttons", federated: this.federated }))));
    }
};

export { AmplifyFederatedSignIn as amplify_federated_sign_in };
