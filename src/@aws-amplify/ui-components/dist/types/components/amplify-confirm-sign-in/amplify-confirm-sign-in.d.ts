import { FormFieldTypes } from '../../components/amplify-auth-fields/amplify-auth-fields-interface';
import { MfaOption, CognitoUserInterface, AuthStateHandler } from '../../common/types/auth-types';
export declare class AmplifyConfirmSignIn {
    /** Fires when confirm sign in form is submitted */
    handleSubmit: (event: Event) => void;
    /** Used for header text in confirm sign in component */
    headerText: string;
    /** Used for the submit button text in confirm sign in component */
    submitButtonText: string;
    /** Auth state change handler for this component */
    handleAuthStateChange: AuthStateHandler;
    /** Default form field */
    private defaultFormFields;
    /**
     * Form fields allows you to utilize our pre-built components such as username field, code field, password field, email field, etc.
     * by passing an array of strings that you would like the order of the form to be in. If you need more customization, such as changing
     * text for a label or adjust a placeholder, you can follow the structure below in order to do just that.
     * ```
     * [
     *  {
     *    type: string,
     *    label: string,
     *    placeholder: string,
     *    hint: string | Functional Component | null,
     *    required: boolean
     *  }
     * ]
     * ```
     */
    formFields: FormFieldTypes | string[];
    /** Cognito user signing in */
    user: CognitoUserInterface;
    /** The MFA option to confirm with */
    mfaOption: MfaOption;
    loading: boolean;
    code: string;
    private constructedFormFieldOptions;
    componentWillLoad(): void;
    userHandler(): void;
    private setup;
    private handleCodeChange;
    private confirm;
    private constructFormFieldOptions;
    render(): any;
}
