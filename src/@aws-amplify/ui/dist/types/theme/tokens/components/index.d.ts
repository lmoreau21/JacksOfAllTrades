import { AlertTokens } from './alert';
import { AuthenticatorTokens } from './authenticator';
import { BadgeTokens } from './badge';
import { ButtonTokens } from './button';
import { CardTokens } from './card';
import { CheckboxTokens } from './checkbox';
import { CheckboxFieldTokens } from './checkboxField';
import { CollectionTokens } from './collection';
import { CopyTokens } from './copy';
import { DialCodeSelectTokens } from './dialCodeSelect';
import { DividerTokens } from './divider';
import { ExpanderTokens } from './expander';
import { FieldTokens } from './field';
import { FieldControlTokens } from './fieldControl';
import { FieldGroupTokens } from './fieldGroup';
import { FieldMessagesTokens } from './fieldMessages';
import { FlexTokens } from './flex';
import { HeadingTokens } from './heading';
import { IconTokens } from './icon';
import { ImageTokens } from './image';
import { LinkTokens } from './link';
import { LoaderTokens } from './loader';
import { MenuTokens } from './menu';
import { PaginationTokens } from './pagination';
import { PasswordFieldTokens } from './passwordField';
import { PhoneNumberFieldTokens } from './phoneNumberField';
import { PlaceholderTokens } from './placeholder';
import { RadioTokens } from './radio';
import { RadioGroupTokens } from './radioGroup';
import { RatingTokens } from './rating';
import { SearchFieldTokens } from './searchField';
import { SelectTokens } from './select';
import { SelectFieldTokens } from './selectField';
import { SliderFieldTokens } from './sliderField';
import { StepperFieldTokens } from './stepperField';
import { SwitchFieldTokens } from './switchField';
import { TableTokens } from './table';
import { TabsTokens } from './tabs';
import { TextTokens } from './text';
import { TextAreaFieldTokens } from './textAreaField';
import { TextFieldTokens } from './textField';
import { ToggleButtonTokens } from './toggleButton';
import { ToggleButtonGroupTokens } from './toggleButtonGroup';
export interface ComponentTokens {
    alert: AlertTokens;
    authenticator: AuthenticatorTokens;
    badge: BadgeTokens;
    button: ButtonTokens;
    card: CardTokens;
    checkbox: CheckboxTokens;
    checkboxfield: CheckboxFieldTokens;
    collection: CollectionTokens;
    copy: CopyTokens;
    countrycodeselect: DialCodeSelectTokens;
    divider: DividerTokens;
    expander: ExpanderTokens;
    field: FieldTokens;
    fieldcontrol: FieldControlTokens;
    fieldgroup: FieldGroupTokens;
    fieldmessages: FieldMessagesTokens;
    flex: FlexTokens;
    heading: HeadingTokens;
    icon: IconTokens;
    image: ImageTokens;
    link: LinkTokens;
    loader: LoaderTokens;
    menu: MenuTokens;
    pagination: PaginationTokens;
    passwordfield: PasswordFieldTokens;
    phonenumberfield: PhoneNumberFieldTokens;
    placeholder: PlaceholderTokens;
    radio: RadioTokens;
    radiogroup: RadioGroupTokens;
    rating: RatingTokens;
    searchfield: SearchFieldTokens;
    select: SelectTokens;
    selectfield: SelectFieldTokens;
    sliderfield: SliderFieldTokens;
    stepperfield: StepperFieldTokens;
    switchfield: SwitchFieldTokens;
    table: TableTokens;
    tabs: TabsTokens;
    text: TextTokens;
    textareafield: TextAreaFieldTokens;
    textfield: TextFieldTokens;
    togglebutton: ToggleButtonTokens;
    togglebuttongroup: ToggleButtonGroupTokens;
}
export declare const components: ComponentTokens;