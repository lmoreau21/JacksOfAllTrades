import { SignUpParams } from '@aws-amplify/auth';
import { ISignUpResult } from 'amazon-cognito-identity-js';
import { FormFieldTypes, FormFieldType, PhoneFormFieldType } from '../../components/amplify-auth-fields/amplify-auth-fields-interface';
import { AuthStateHandler, UsernameAliasStrings } from '../../common/types/auth-types';
import { SignUpAttributes } from '../../common/types/auth-types';
/**
 * @slot header-subtitle - Subtitle content placed below header text
 * @slot footer - Content placed in the footer of the component
 * @slot primary-footer-content - Content placed on the right side of the footer
 * @slot secondary-footer-content - Content placed on the left side of the footer
 */
export declare class AmplifySignUp {
    /** Fires when sign up form is submitted */
    handleSubmit: (event: Event) => void;
    /** Override for handling the Auth.SignUp API call */
    handleSignUp: (params: SignUpParams) => Promise<ISignUpResult>;
    /** Engages when invalid actions occur, such as missing field, etc. */
    validationErrors: string;
    /** Used for header text in sign up component */
    headerText: string;
    /** Used for the submit button text in sign up component */
    submitButtonText: string;
    /** Used for the submit button text in sign up component */
    haveAccountText: string;
    /** Text used for the sign in hyperlink */
    signInText: string;
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
    /** Auth state change handler for this component
     * e.g. SignIn -> 'Create Account' link -> SignUp
     */
    handleAuthStateChange: AuthStateHandler;
    /** Username Alias is used to setup authentication with `username`, `email` or `phone_number`  */
    usernameAlias: UsernameAliasStrings;
    private newFormFields;
    private phoneNumber;
    loading: boolean;
    signUpAttributes: SignUpAttributes;
    private handleFormFieldInputChange;
    private handleFormFieldInputWithCallback;
    private authSignUp;
    private assignPhoneNumberToSignUpAttributes;
    private assignUserNameAliasToSignUpAttributes;
    private assignFormInputToSignUpAttributes;
    private validateSignUpAttributes;
    private signUp;
    private buildDefaultFormFields;
    private buildFormFields;
    setFieldValue(field: PhoneFormFieldType | FormFieldType, formAttributes: SignUpAttributes): void;
    componentWillLoad(): void;
    formFieldsHandler(): void;
    render(): any;
}