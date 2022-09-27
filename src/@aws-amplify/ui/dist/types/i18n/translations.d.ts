import { NoInfer } from '../types';
/**
 * Contains translatable strings that authenticator provides by default. Customers
 * can use this to add custom vocabularies:
 *
 * ```
 * I18n.putVocabulariesForLanguage("en", {
 *  [DefaultTexts.SIGN_IN]: "Custom Sign In Text",
 *  [DefaultTexts.SIGN_IN_BUTTON]: "Custom Click Here to Sign In"
 * });
 * ```
 */
export declare const DefaultTexts: {
    readonly BACK_SIGN_IN: string;
    readonly BIRTHDATE: string;
    readonly CHANGE_PASSWORD: string;
    readonly CHANGING_PASSWORD: string;
    readonly CODE: string;
    readonly CONFIRM_PASSWORD: string;
    readonly CONFIRM_RESET_PASSWORD_HEADING: string;
    readonly CONFIRM_SIGNUP_HEADING: string;
    readonly CONFIRM_SMS: string;
    readonly CONFIRM_TOTP: string;
    readonly CONFIRM: string;
    readonly CONFIRMATION_CODE: string;
    readonly CONFIRMING: string;
    readonly CREATE_ACCOUNT: string;
    readonly CREATING_ACCOUNT: string;
    readonly EMAIL_ADDRESS: string;
    readonly ENTER_CODE: string;
    readonly ENTER_USERNAME: string;
    readonly FAMILY_NAME: string;
    readonly GIVEN_NAME: string;
    readonly FORGOT_YOUR_PASSWORD: string;
    readonly FORGOT_YOUR_PASSWORD_LEGACY: string;
    readonly HIDE_PASSWORD: string;
    readonly LOADING: string;
    readonly LOGIN_NAME: string;
    readonly MIDDLE_NAME: string;
    readonly NAME: string;
    readonly NICKNAME: string;
    readonly NEW_PASSWORD: string;
    readonly PASSWORD: string;
    readonly PHONE_NUMBER: string;
    readonly PREFERRED_USERNAME: string;
    readonly PROFILE: string;
    readonly RESEND_CODE: string;
    readonly RESET_PASSWORD_HEADING: string;
    readonly RESET_PASSWORD: string;
    readonly SEND_CODE: string;
    readonly SENDING: string;
    readonly SETUP_TOTP: string;
    readonly SHOW_PASSWORD: string;
    readonly SIGN_IN_BUTTON: string;
    readonly SIGN_IN_TAB: string;
    readonly SIGN_IN_WITH_AMAZON: string;
    readonly SIGN_IN_WITH_APPLE: string;
    readonly SIGN_IN_WITH_FACEBOOK: string;
    readonly SIGN_IN_WITH_GOOGLE: string;
    readonly SIGN_IN: string;
    readonly SIGN_UP_BUTTON: string;
    readonly SIGNING_IN_BUTTON: string;
    readonly SKIP: string;
    readonly SUBMIT: string;
    readonly SUBMITTING: string;
    readonly VERIFY_CONTACT: string;
    readonly VERIFY_HEADING: string;
    readonly VERIFY: string;
    readonly WEBSITE: string;
};
export declare type Phrase = typeof DefaultTexts[keyof typeof DefaultTexts];
/**
 * TODO: Translation keys for dictionaries can be inferred from DefaultTexts
 * by typing it to Partial<Record<Phrase, string>>.
 *
 * But this requires error string keys to be standarized as well, and can be a
 * limiting factor for custom translation keys. Marking it as TODO until we see
 * a reason to strongly type this.
 */
export declare type Dict = Record<string, string>;
/**
 * This helper type checks that given phrase is one of the texts @aws-amplify/ui
 * provides by default. This enables vscode autocompletion to help catch typos
 * during development.
 *
 * You can also use translate<string> to handle custom strings or dynamic content.
 */
export declare function translate<T = Phrase>(phrase: NoInfer<T>): string;
/**
 * Whether I18n has a translation entry for given phrase
 */
export declare function hasTranslation(phrase: string): boolean;
export declare const translations: Record<string, Dict>;
