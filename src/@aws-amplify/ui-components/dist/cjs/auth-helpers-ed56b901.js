'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

const core = require('@aws-amplify/core');
const authTypes = require('./auth-types-cd1f71d2.js');
const Auth = require('@aws-amplify/auth');
const Auth__default = _interopDefault(Auth);
const Translations = require('./Translations-5f4bb72c.js');
const constants = require('./constants-1335fef8.js');
const helpers = require('./helpers-0d7ea2c5.js');

const logger = new core.Logger('auth-helpers');
async function checkContact(user, handleAuthStateChange) {
    if (!Auth.Auth || typeof Auth.Auth.verifiedContact !== 'function') {
        throw new Error(constants.NO_AUTH_MODULE_FOUND);
    }
    // If `user` is a federated user, we shouldn't call `verifiedContact`
    // since `user` isn't `CognitoUser`
    if (!isCognitoUser(user)) {
        handleAuthStateChange(authTypes.AuthState.SignedIn, user);
        return;
    }
    try {
        const data = await Auth.Auth.verifiedContact(user);
        if (!core.isEmpty(data.verified) || core.isEmpty(data.unverified)) {
            handleAuthStateChange(authTypes.AuthState.SignedIn, user);
        }
        else {
            const newUser = Object.assign(user, data);
            handleAuthStateChange(authTypes.AuthState.VerifyContact, newUser);
        }
    }
    catch (error) {
        helpers.dispatchToastHubEvent(error);
    }
}
const handleSignIn = async (username, password, handleAuthStateChange, usernameAlias) => {
    if (!Auth.Auth || typeof Auth.Auth.signIn !== 'function') {
        throw new Error(constants.NO_AUTH_MODULE_FOUND);
    }
    try {
        const user = await Auth.Auth.signIn(username, password);
        logger.debug(user);
        if (user.challengeName === authTypes.ChallengeName.SMSMFA ||
            user.challengeName === authTypes.ChallengeName.SoftwareTokenMFA) {
            logger.debug('confirm user with ' + user.challengeName);
            handleAuthStateChange(authTypes.AuthState.ConfirmSignIn, user);
        }
        else if (user.challengeName === authTypes.ChallengeName.NewPasswordRequired) {
            logger.debug('require new password', user.challengeParam);
            handleAuthStateChange(authTypes.AuthState.ResetPassword, user);
        }
        else if (user.challengeName === authTypes.ChallengeName.MFASetup) {
            logger.debug('TOTP setup', user.challengeParam);
            handleAuthStateChange(authTypes.AuthState.TOTPSetup, user);
        }
        else if (user.challengeName === authTypes.ChallengeName.CustomChallenge &&
            user.challengeParam &&
            user.challengeParam.trigger === 'true') {
            logger.debug('custom challenge', user.challengeParam);
            handleAuthStateChange(authTypes.AuthState.CustomConfirmSignIn, user);
        }
        else {
            await checkContact(user, handleAuthStateChange);
        }
    }
    catch (error) {
        if (error.code === 'UserNotConfirmedException') {
            logger.debug('the user is not confirmed');
            handleAuthStateChange(authTypes.AuthState.ConfirmSignUp, { username });
        }
        else if (error.code === 'PasswordResetRequiredException') {
            logger.debug('the user requires a new password');
            handleAuthStateChange(authTypes.AuthState.ForgotPassword, { username });
        }
        else if (error.code === 'InvalidParameterException' && password === '') {
            logger.debug('Password cannot be empty');
            error.message = Translations.Translations.EMPTY_PASSWORD;
        }
        else if (error.message === Translations.Translations.EMPTY_USERNAME) {
            if (usernameAlias === authTypes.UsernameAlias.email) {
                error.message = Translations.Translations.EMPTY_EMAIL;
            }
            if (usernameAlias === authTypes.UsernameAlias.phone_number) {
                error.message = Translations.Translations.EMPTY_PHONE;
            }
        }
        helpers.dispatchToastHubEvent(error);
    }
};
const isCognitoUser = (user) => {
    return user instanceof Auth.CognitoUser;
};

exports.checkContact = checkContact;
exports.handleSignIn = handleSignIn;
