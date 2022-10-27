import { ButtonTypes, ButtonVariant } from '../../common/types/ui-types';
import { IconNameType } from '../amplify-icon/icons';
/**
 * @slot (default) - content placed within the button
 */
export declare class AmplifyButton {
    el: HTMLAmplifyButtonElement;
    /** Type of the button: 'button', 'submit' or 'reset' */
    type: ButtonTypes;
    /** Variant of a button: 'button' | 'anchor | 'icon' */
    variant: ButtonVariant;
    /** (Optional) Callback called when a user clicks on the button */
    handleButtonClick: (evt: Event) => void;
    /** Disabled state of the button */
    disabled?: boolean;
    /** Name of icon to be placed inside the button */
    icon?: IconNameType;
    render(): any;
}