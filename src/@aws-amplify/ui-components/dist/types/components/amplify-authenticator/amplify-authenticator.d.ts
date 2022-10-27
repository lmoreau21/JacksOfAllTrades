import { AuthState, CognitoUserInterface, FederatedConfig, UsernameAliasStrings, AuthStateHandler } from '../../common/types/auth-types';
/**
 * @slot sign-in - Content placed inside of the sign in workflow for when a user wants to sign into their account
 * @slot confirm-sign-in - Content placed inside of the confirm sign in workflow for when a user needs to confirm the account they signed in with
 * @slot sign-up - Content placed inside of the sign up workflow for when a user wants to register a new account
 * @slot confirm-sign-up - Content placed inside of the confirm sign up workflow for when a user needs to confirm the account they signed up with
 * @slot forgot-password - Content placed inside of the forgot password workflow for when a user wants to reset their password
 * @slot require-new-password - Content placed inside of the require new password workflow for when a user is required to update their password
 * @slot verify-contact - Content placed inside of the verify-contact workflow for when a user must verify their contact information
 * @slot totp-setup - Content placed inside of the totp-setup workflow for when a user opts to use TOTP MFA
 * @slot greetings - Content placed inside of the greetings navigation for when a user is signed in
 * @slot loading - Content placed inside of the loading workflow for when the app is loading
 */
export declare class AmplifyAuthenticator {
    /** Initial starting state of the Authenticator component. E.g. If `signup` is passed the default component is set to AmplifySignUp */
    initialAuthState: AuthState.SignIn | AuthState.SignUp | AuthState.ForgotPassword;
    /** Federated credentials & configuration. */
    federated: FederatedConfig;
    /** Username Alias is used to setup authentication with `username`, `email` or `phone_number`  */
    usernameAlias: UsernameAliasStrings;
    /** Callback for Authenticator state machine changes */
    handleAuthStateChange: AuthStateHandler;
    /** Hide amplify-toast for auth errors */
    hideToast: boolean;
    authState: AuthState;
    authData: CognitoUserInterface;
    toastMessage: string;
    el: HTMLAmplifyAuthenticatorElement;
    private handleExternalAuthEvent;
    private handleToastEvent;
    componentWillLoad(): Promise<void>;
    private checkUser;
    private onAuthStateChange;
    private getAuthComponent;
    private getSlotWithAuthComponent;
    disconnectedCallback(): (authStateHandler: AuthStateHandler) => () => void;
    render(): any;
}