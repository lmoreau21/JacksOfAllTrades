import * as React from 'react';
import { AuthenticatorMachineOptions, AmplifyUser } from '@aws-amplify/ui';
import { UseAuthenticator } from './hooks/useAuthenticator';
import { ComponentsProviderProps } from './hooks/useCustomComponents';
import { RouterProps } from './Router';
export declare type SignOut = UseAuthenticator['signOut'];
export declare type AuthenticatorProps = Partial<AuthenticatorMachineOptions & ComponentsProviderProps & RouterProps & {
    children: React.ReactNode | ((props: {
        signOut?: SignOut;
        user?: AmplifyUser;
    }) => JSX.Element);
}>;
export declare function AuthenticatorInternal({ children, className, components: customComponents, formFields, hideSignUp, initialState, loginMechanisms, signUpAttributes, services, socialProviders, variation, }: AuthenticatorProps): JSX.Element;
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/connected-components/authenticator)
 */
export declare function Authenticator(props: AuthenticatorProps): JSX.Element;
export declare namespace Authenticator {
    var Provider: ({ children, }: {
        children: React.ReactNode;
    }) => JSX.Element;
    var ResetPassword: {
        ({ className, variation, }: import("./RouteContainer").RouteProps): JSX.Element;
        Header(): JSX.Element;
        Footer(): JSX.Element;
    };
    var SetupTOTP: {
        ({ className, variation, }: import("./RouteContainer").RouteProps): JSX.Element;
        Header(): JSX.Element;
        Footer(): JSX.Element;
    };
    var SignIn: typeof import("./SignIn").SignIn;
    var SignUp: typeof import("./SignUp").SignUp;
    var ForceNewPassword: {
        ({ className, variation, }: import("./RouteContainer").RouteProps): JSX.Element;
        FormFields(): JSX.Element;
    };
}
