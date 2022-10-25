import { CognitoUserInterface, MFATypesInterface, MfaOption } from '../../common/types/auth-types';
export declare class AmplifySelectMFAType {
    /** Types of MFA options */
    MFATypes: MFATypesInterface;
    /** Current authenticated user in order to sign requests properly for TOTP */
    authData: CognitoUserInterface;
    /** Fires when Verify is clicked */
    handleSubmit: (event: Event) => void;
    TOTPSetup: boolean;
    selectMessage: string;
    MFAMethod: MfaOption;
    isTOTP: boolean;
    isNoMFA: boolean;
    isSMS: boolean;
    loading: boolean;
    isToastVisible: boolean;
    private handleRadioButtonChange;
    private verify;
    private contentBuilder;
    private renderToast;
    render(): any;
}
