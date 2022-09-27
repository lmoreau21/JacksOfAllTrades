import { FormFieldTypes } from '../amplify-auth-fields/amplify-auth-fields-interface';
import { CognitoUserInterface, AuthStateHandler } from '../../common/types/auth-types';
export declare class AmplifyRequireNewPassword {
    /** The header text of the forgot password section */
    headerText: string;
    /** The text displayed inside of the submit button for the form */
    submitButtonText: string;
    /** The function called when submitting a new password */
    handleSubmit: (event: Event) => void;
    /** Auth state change handler for this component */
    handleAuthStateChange: AuthStateHandler;
    /** Used for the username to be passed to resend code */
    user: CognitoUserInterface;
    /** The form fields displayed inside of the forgot password form */
    formFields: FormFieldTypes;
    password: string;
    loading: boolean;
    userHandler(): void;
    private requiredAttributes;
    private newFormFields;
    private currentUser;
    private phoneNumber;
    private handleRequiredAttributeInputChange;
    setCurrentUser(): Promise<void>;
    componentWillLoad(): Promise<void>;
    private handlePasswordChange;
    private formatPhoneNumber;
    private completeNewPassword;
    render(): any;
}
