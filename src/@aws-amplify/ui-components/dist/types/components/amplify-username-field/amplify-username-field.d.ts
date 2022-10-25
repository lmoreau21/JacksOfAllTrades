import { FunctionalComponent } from '../../stencil-public-runtime';
export declare class AmplifyUsernameField {
    /** Based on the type of field e.g. sign in, sign up, forgot password, etc. */
    fieldId: string;
    /** Used for the username label */
    label: string;
    /** Used for the placeholder label */
    placeholder: string;
    /** The required flag in order to make an input required prior to submitting a form */
    required: boolean;
    /** The callback, called when the input is modified by the user. */
    handleInputChange?: (inputEvent: Event) => void;
    /** The value of the content inside of the input field */
    value?: string;
    /** Attributes places on the input element: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes */
    inputProps?: object;
    /** Will disable the input if set to true */
    disabled?: boolean;
    /** Used for the hint text that displays underneath the input field */
    hint?: string | FunctionalComponent | null;
    render(): any;
}
