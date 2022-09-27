'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

const core = require('@aws-amplify/core');
const authTypes = require('./auth-types-cd1f71d2.js');
const Auth = require('@aws-amplify/auth');
const Auth__default = _interopDefault(Auth);
const Translations = require('./Translations-5f4bb72c.js');
const constants = require('./constants-1335fef8.js');

const logger = new core.Logger('helpers');
/**
 * Finds closest element that matches the selector from the ancestor tree.
 * Trasverses through shadow DOM and slots.
 *
 * Adpated from: https://stackoverflow.com/a/56105394
 */
const closestElement = (selector, base) => {
    function _closestFrom(el) {
        if (!el || el === document || el === window)
            return null;
        if (el.matches(selector))
            return base; // return if current element matches the selector
        if (el.assignedSlot)
            el = el.assignedSlot; // traverse up slots if slotted
        const found = el.closest(selector);
        return found ? found : _closestFrom(el.getRootNode().host); // try to traverse up shadows
    }
    return _closestFrom(base);
};
const dispatchToastHubEvent = (error) => {
    core.Hub.dispatch(constants.UI_AUTH_CHANNEL, {
        event: constants.TOAST_AUTH_ERROR_EVENT,
        message: core.I18n.get(error.message),
    });
};
const dispatchAuthStateChangeEvent = (nextAuthState, data) => {
    core.Hub.dispatch(constants.UI_AUTH_CHANNEL, {
        event: constants.AUTH_STATE_CHANGE_EVENT,
        message: nextAuthState,
        data,
    });
};
const composePhoneNumberInput = (phoneNumber) => {
    if (!phoneNumber.phoneNumberValue) {
        throw new Error(constants.PHONE_EMPTY_ERROR_MESSAGE);
    }
    const sanitizedPhoneNumberValue = phoneNumber.phoneNumberValue.replace(/[-()\s]/g, '');
    return `${phoneNumber.countryDialCodeValue}${sanitizedPhoneNumberValue}`;
};
const checkUsernameAlias = (usernameAlias) => {
    if (!(usernameAlias in authTypes.UsernameAlias)) {
        throw new Error(`Invalid username Alias - ${usernameAlias}. Instead use ${Object.values(authTypes.UsernameAlias)}`);
    }
};
const onAuthUIStateChange = (authStateHandler) => {
    const authUIStateHandler = async (data) => {
        const { payload } = data;
        switch (payload.event) {
            case constants.AUTH_STATE_CHANGE_EVENT:
                if (payload.message) {
                    if (payload.message === authTypes.AuthState.SignedIn) {
                        // for AuthState.SignedIn, use an Auth Guard
                        try {
                            const user = await Auth__default.currentAuthenticatedUser();
                            authStateHandler(payload.message, user);
                        }
                        catch (e) {
                            logger.error('User is not authenticated');
                        }
                    }
                    else {
                        authStateHandler(payload.message, payload.data);
                    }
                }
                break;
        }
    };
    core.Hub.listen(constants.UI_AUTH_CHANNEL, authUIStateHandler);
    const unsubscribe = () => {
        // Replace user's `authStateHandler` with a noop so that we don't trigger side-effects during the async `authUIStateHandler` when unsubscribed
        authStateHandler = () => { };
        core.Hub.remove(constants.UI_AUTH_CHANNEL, authUIStateHandler);
    };
    return unsubscribe;
};
const isHintValid = field => {
    return !(field['hint'] === null || typeof field['hint'] === 'string');
};
// Required attributes come from https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims
const getRequiredAttributesMap = () => ({
    address: {
        label: core.I18n.get(Translations.Translations.ADDRESS_LABEL),
        placeholder: core.I18n.get(Translations.Translations.ADDRESS_PLACEHOLDER),
    },
    nickname: {
        label: core.I18n.get(Translations.Translations.NICKNAME_LABEL),
        placeholder: core.I18n.get(Translations.Translations.NICKNAME_PLACEHOLDER),
    },
    birthdate: {
        label: core.I18n.get(Translations.Translations.BIRTHDATE_LABEL),
        placeholder: core.I18n.get(Translations.Translations.BIRTHDATE_PLACEHOLDER),
    },
    phone_number: {
        label: core.I18n.get(Translations.Translations.PHONE_LABEL),
        placeholder: core.I18n.get(Translations.Translations.PHONE_PLACEHOLDER),
    },
    email: {
        lable: core.I18n.get(Translations.Translations.EMAIL_LABEL),
        placeholder: core.I18n.get(Translations.Translations.EMAIL_PLACEHOLDER),
    },
    picture: {
        label: core.I18n.get(Translations.Translations.PICTURE_LABEL),
        placeholder: core.I18n.get(Translations.Translations.PICTURE_PLACEHOLDER),
    },
    family_name: {
        label: core.I18n.get(Translations.Translations.FAMILY_NAME_LABEL),
        placeholder: core.I18n.get(Translations.Translations.FAMILY_NAME_PLACEHOLDER),
    },
    preferred_username: {
        label: core.I18n.get(Translations.Translations.PREFERRED_USERNAME_LABEL),
        placeholder: core.I18n.get(Translations.Translations.PREFERRED_USERNAME_PLACEHOLDER),
    },
    gender: {
        label: core.I18n.get(Translations.Translations.GENDER_LABEL),
        placeholder: core.I18n.get(Translations.Translations.GENDER_PLACEHOLDER),
    },
    profile: {
        label: core.I18n.get(Translations.Translations.PROFILE_LABEL),
        placeholder: core.I18n.get(Translations.Translations.PROFILE_PLACEHOLDER),
    },
    given_name: {
        label: core.I18n.get(Translations.Translations.GIVEN_NAME_LABEL),
        placeholder: core.I18n.get(Translations.Translations.GIVEN_NAME_PLACEHOLDER),
    },
    zoneinfo: {
        label: core.I18n.get(Translations.Translations.ZONEINFO_LABEL),
        placeholder: core.I18n.get(Translations.Translations.ZONEINFO_PLACEHOLDER),
    },
    locale: {
        label: core.I18n.get(Translations.Translations.LOCALE_LABEL),
        placeholder: core.I18n.get(Translations.Translations.LOCALE_PLACEHOLDER),
    },
    updated_at: {
        label: core.I18n.get(Translations.Translations.UPDATED_AT_LABEL),
        placeholder: core.I18n.get(Translations.Translations.UPDATED_AT_PLACEHOLDER),
    },
    middle_name: {
        label: core.I18n.get(Translations.Translations.MIDDLE_NAME_LABEL),
        placeholder: core.I18n.get(Translations.Translations.MIDDLE_NAME_PLACEHOLDER),
    },
    website: {
        label: core.I18n.get(Translations.Translations.WEBSITE_LABEL),
        placeholder: core.I18n.get(Translations.Translations.WEBSITE_PLACEHOLDER),
    },
    name: {
        label: core.I18n.get(Translations.Translations.NAME_LABEL),
        placeholder: core.I18n.get(Translations.Translations.NAME_PLACEHOLDER),
    },
});
function handlePhoneNumberChange(event, phoneNumber) {
    const name = event.target.name;
    const value = event.target.value;
    /** Cognito expects to have a string be passed when signing up. Since the Select input is separate
     * input from the phone number input, we need to first capture both components values and combined
     * them together.
     */
    if (name === constants.COUNTRY_DIAL_CODE_SUFFIX) {
        phoneNumber.countryDialCodeValue = value;
    }
    if (name === constants.PHONE_SUFFIX) {
        phoneNumber.phoneNumberValue = value;
    }
}

exports.checkUsernameAlias = checkUsernameAlias;
exports.closestElement = closestElement;
exports.composePhoneNumberInput = composePhoneNumberInput;
exports.dispatchAuthStateChangeEvent = dispatchAuthStateChangeEvent;
exports.dispatchToastHubEvent = dispatchToastHubEvent;
exports.getRequiredAttributesMap = getRequiredAttributesMap;
exports.handlePhoneNumberChange = handlePhoneNumberChange;
exports.isHintValid = isHintValid;
exports.onAuthUIStateChange = onAuthUIStateChange;
