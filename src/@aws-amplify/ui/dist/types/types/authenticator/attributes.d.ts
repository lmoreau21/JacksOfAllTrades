/** Array of auth fields that we supply defaults with */
export declare const signUpFieldsWithDefault: readonly ["birthdate", "email", "family_name", "given_name", "middle_name", "name", "nickname", "phone_number", "preferred_username", "profile", "website"];
/** Auth fields that we supply defaults with */
export declare type SignUpFieldsWithDefaults = typeof signUpFieldsWithDefault[number];
/** Array of auth fields that we do not supply defaults with */
export declare const signUpFieldsWithoutDefault: readonly ["address", "gender", "locale", "picture", "updated_at", "zoneinfo"];
/** Auth fields that we do not supply defaults with */
export declare type SignUpFieldsWithoutDefaults = typeof signUpFieldsWithoutDefault[number];
/** All known auth fields */
export declare type SignUpAttribute = SignUpFieldsWithDefaults | SignUpFieldsWithoutDefaults;
/** Fields that are common in all routes */
export declare type CommonFields = 'username' | 'password' | 'confirm_password';
/** Array of known login mechanisms */
export declare const LoginMechanismArray: readonly ["username", "email", "phone_number"];
/** Login mechanisms that can be used to sign in */
export declare type LoginMechanism = typeof LoginMechanismArray[number];
/** List of social provider Authenticator supports */
export declare type SocialProvider = 'amazon' | 'apple' | 'facebook' | 'google';
export declare const authFieldsWithDefaults: readonly ["username", "email", "phone_number", "birthdate", "email", "family_name", "given_name", "middle_name", "name", "nickname", "phone_number", "preferred_username", "profile", "website", "confirmation_code", "password", "confirm_password"];
/** Input fields that we provide default fields with */
export declare type AuthFieldsWithDefaults = typeof authFieldsWithDefaults[number];
