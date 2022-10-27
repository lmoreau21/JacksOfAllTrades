import { FormFieldTypes, FormFieldType, PhoneFormFieldType } from '../amplify-auth-fields/amplify-auth-fields-interface';
import { CognitoUserInterface, AuthStateHandler, UsernameAliasStrings } from '../../common/types/auth-types';
export declare class AmplifyConfirmSignUp {
    /** Fires when sign up form is submitted */
    handleSubmit: (submitEvent: Event) => void;
    /** Used for header text in confirm sign up component */
    headerText: string;
    /** Used for the submit button text in confirm sign up component */
    submitButtonText: string;
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
    /** Auth state change handler for this components
     * e.g. SignIn -> 'Create Account' link -> SignUp
     */
    handleAuthStateChange: AuthStateHandler;
    /** Used for the username to be passed to resend code */
    user: CognitoUserInterface;
    /** Username Alias is used to setup authentication with `username`, `email` or `phone_number`  */
    usernameAlias: UsernameAliasStrings;
    code: string;
    loading: boolean;
    userInput: string;
    private _signUpAttrs;
    private newFormFields;
    private phoneNumber;
    componentWillLoad(): void;
    formFieldsHandler(): void;
    userHandler(): void;
    private setup;
    private buildDefaultFormFields;
    private buildFormFields;
    private handleFormFieldInputChange;
    setFieldValue(field: PhoneFormFieldType | FormFieldType): void;
    private handleFormFieldInputWithCallback;
    /**
     * Returns the username of the user to confirm. If a valid `user.username` has been passed as a prop, we return that.
     * Otherwise, we return the `userInput` on the form.
     */
    private getUsername;
    private resendConfirmCode;
    private confirmSignUp;
    render(): any;
}