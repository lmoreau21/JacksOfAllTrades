import { AuthStateHandler } from '../common/types/auth-types';
import { PhoneNumberInterface } from '../components/amplify-auth-fields/amplify-auth-fields-interface';
export interface ToastError {
    code?: string;
    name?: string;
    message: string;
}
export declare const hasShadowDom: (el: HTMLElement) => boolean;
/**
 * Finds closest element that matches the selector from the ancestor tree.
 * Trasverses through shadow DOM and slots.
 *
 * Adpated from: https://stackoverflow.com/a/56105394
 */
export declare const closestElement: (selector: string, base: Element) => Element;
export declare const dispatchToastHubEvent: (error: ToastError) => void;
export declare const dispatchAuthStateChangeEvent: AuthStateHandler;
export declare const composePhoneNumberInput: (phoneNumber: PhoneNumberInterface) => string;
export declare const checkUsernameAlias: (usernameAlias: any) => void;
export declare const onAuthUIStateChange: (authStateHandler: AuthStateHandler) => () => void;
export declare const isHintValid: (field: any) => boolean;
export declare const getRequiredAttributesMap: () => {
    address: {
        label: any;
        placeholder: any;
    };
    nickname: {
        label: any;
        placeholder: any;
    };
    birthdate: {
        label: any;
        placeholder: any;
    };
    phone_number: {
        label: any;
        placeholder: any;
    };
    email: {
        lable: any;
        placeholder: any;
    };
    picture: {
        label: any;
        placeholder: any;
    };
    family_name: {
        label: any;
        placeholder: any;
    };
    preferred_username: {
        label: any;
        placeholder: any;
    };
    gender: {
        label: any;
        placeholder: any;
    };
    profile: {
        label: any;
        placeholder: any;
    };
    given_name: {
        label: any;
        placeholder: any;
    };
    zoneinfo: {
        label: any;
        placeholder: any;
    };
    locale: {
        label: any;
        placeholder: any;
    };
    updated_at: {
        label: any;
        placeholder: any;
    };
    middle_name: {
        label: any;
        placeholder: any;
    };
    website: {
        label: any;
        placeholder: any;
    };
    name: {
        label: any;
        placeholder: any;
    };
};
export declare function handlePhoneNumberChange(event: any, phoneNumber: PhoneNumberInterface): void;