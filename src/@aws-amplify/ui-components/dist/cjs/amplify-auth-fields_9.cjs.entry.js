'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6d44143a.js');
const core = require('@aws-amplify/core');
require('@aws-amplify/auth');
const Translations = require('./Translations-5f4bb72c.js');
const constants = require('./constants-1335fef8.js');

const componentFieldMapping = {
    username: (ff) => (index.h("amplify-username-field", { label: ff.label, placeholder: ff.placeholder, required: ff.required, handleInputChange: ff.handleInputChange, value: ff.value, inputProps: ff.inputProps, disabled: ff.disabled, hint: ff.hint })),
    password: (ff) => (index.h("amplify-password-field", { label: ff.label, placeholder: ff.placeholder, hint: ff.hint, required: ff.required, handleInputChange: ff.handleInputChange, value: ff.value, inputProps: ff.inputProps, disabled: ff.disabled })),
    email: (ff) => (index.h("amplify-email-field", { label: ff.label, placeholder: ff.placeholder, required: ff.required, handleInputChange: ff.handleInputChange, value: ff.value, inputProps: ff.inputProps, disabled: ff.disabled, hint: ff.hint })),
    code: (ff) => (index.h("amplify-code-field", { label: ff.label, placeholder: ff.placeholder, hint: ff.hint, required: ff.required, handleInputChange: ff.handleInputChange, value: ff.value, inputProps: Object.assign(Object.assign({}, ff.inputProps), { min: '0' }), disabled: ff.disabled })),
    // TODO: Will create a phone field component once the dial country code component is in
    phone_number: (ff) => (index.h("amplify-phone-field", { label: ff.label, placeholder: ff.placeholder, required: ff.required, handleInputChange: ff.handleInputChange, value: ff.value, inputProps: ff.inputProps, disabled: ff.disabled, dialCode: ff.dialCode, hint: ff.hint })),
    default: (ff) => (index.h("amplify-form-field", { label: ff.label, type: ff.type, placeholder: ff.placeholder, required: ff.required, handleInputChange: ff.handleInputChange, value: ff.value, inputProps: ff.inputProps, disabled: ff.disabled, hint: ff.hint })),
};

const amplifyAuthFieldsCss = ".auth-fields{margin-bottom:2rem}";

const AmplifyAuthFields = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    constructFormFieldOptions(formFields) {
        const content = [];
        if (formFields === undefined)
            return '';
        formFields.forEach((formField) => {
            if (typeof formField === 'string') {
                content.push(componentFieldMapping[formField](formField));
            }
            else if (Object.keys(componentFieldMapping).includes(formField.type)) {
                content.push(componentFieldMapping[formField.type](formField));
            }
            else {
                content.push(componentFieldMapping['default'](formField));
            }
        });
        return content;
    }
    render() {
        return (index.h("div", { class: "auth-fields" }, this.constructFormFieldOptions(this.formFields)));
    }
};
AmplifyAuthFields.style = amplifyAuthFieldsCss;

const AmplifyCodeField = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Based on the type of field e.g. sign in, sign up, forgot password, etc. */
        this.fieldId = constants.CODE_SUFFIX;
        /** Used for the code label */
        this.label = Translations.Translations.CODE_LABEL;
        /** Used for the placeholder label */
        this.placeholder = Translations.Translations.CODE_PLACEHOLDER;
        /** The required flag in order to make an input required prior to submitting a form */
        this.required = false;
    }
    render() {
        return (index.h("amplify-form-field", { fieldId: this.fieldId, label: core.I18n.get(this.label), placeholder: core.I18n.get(this.placeholder), type: "number", hint: this.hint, required: this.required, handleInputChange: this.handleInputChange, value: this.value, inputProps: this.inputProps, disabled: this.disabled }));
    }
};

const countryDialCodes = [
    { label: '+1', value: '+1' },
    { label: '+7', value: '+7' },
    { label: '+20', value: '+20' },
    { label: '+27', value: '+27' },
    { label: '+30', value: '+30' },
    { label: '+31', value: '+31' },
    { label: '+32', value: '+32' },
    { label: '+33', value: '+33' },
    { label: '+34', value: '+34' },
    { label: '+36', value: '+36' },
    { label: '+39', value: '+39' },
    { label: '+40', value: '+40' },
    { label: '+41', value: '+41' },
    { label: '+43', value: '+43' },
    { label: '+44', value: '+44' },
    { label: '+45', value: '+45' },
    { label: '+46', value: '+46' },
    { label: '+47', value: '+47' },
    { label: '+48', value: '+48' },
    { label: '+49', value: '+49' },
    { label: '+51', value: '+51' },
    { label: '+52', value: '+52' },
    { label: '+53', value: '+53' },
    { label: '+54', value: '+54' },
    { label: '+55', value: '+55' },
    { label: '+56', value: '+56' },
    { label: '+57', value: '+57' },
    { label: '+58', value: '+58' },
    { label: '+60', value: '+60' },
    { label: '+61', value: '+61' },
    { label: '+62', value: '+62' },
    { label: '+63', value: '+63' },
    { label: '+64', value: '+64' },
    { label: '+65', value: '+65' },
    { label: '+66', value: '+66' },
    { label: '+81', value: '+81' },
    { label: '+82', value: '+82' },
    { label: '+84', value: '+84' },
    { label: '+86', value: '+86' },
    { label: '+90', value: '+90' },
    { label: '+91', value: '+91' },
    { label: '+92', value: '+92' },
    { label: '+93', value: '+93' },
    { label: '+94', value: '+94' },
    { label: '+95', value: '+95' },
    { label: '+98', value: '+98' },
    { label: '+212', value: '+212' },
    { label: '+213', value: '+213' },
    { label: '+216', value: '+216' },
    { label: '+218', value: '+218' },
    { label: '+220', value: '+220' },
    { label: '+221', value: '+221' },
    { label: '+222', value: '+222' },
    { label: '+223', value: '+223' },
    { label: '+224', value: '+224' },
    { label: '+225', value: '+225' },
    { label: '+226', value: '+226' },
    { label: '+227', value: '+227' },
    { label: '+228', value: '+228' },
    { label: '+229', value: '+229' },
    { label: '+230', value: '+230' },
    { label: '+231', value: '+231' },
    { label: '+232', value: '+232' },
    { label: '+233', value: '+233' },
    { label: '+234', value: '+234' },
    { label: '+235', value: '+235' },
    { label: '+236', value: '+236' },
    { label: '+237', value: '+237' },
    { label: '+238', value: '+238' },
    { label: '+239', value: '+239' },
    { label: '+240', value: '+240' },
    { label: '+241', value: '+241' },
    { label: '+242', value: '+242' },
    { label: '+243', value: '+243' },
    { label: '+244', value: '+244' },
    { label: '+245', value: '+245' },
    { label: '+246', value: '+246' },
    { label: '+248', value: '+248' },
    { label: '+249', value: '+249' },
    { label: '+250', value: '+250' },
    { label: '+251', value: '+251' },
    { label: '+252', value: '+252' },
    { label: '+253', value: '+253' },
    { label: '+254', value: '+254' },
    { label: '+255', value: '+255' },
    { label: '+256', value: '+256' },
    { label: '+257', value: '+257' },
    { label: '+258', value: '+258' },
    { label: '+260', value: '+260' },
    { label: '+261', value: '+261' },
    { label: '+262', value: '+262' },
    { label: '+263', value: '+263' },
    { label: '+264', value: '+264' },
    { label: '+265', value: '+265' },
    { label: '+266', value: '+266' },
    { label: '+267', value: '+267' },
    { label: '+268', value: '+268' },
    { label: '+269', value: '+269' },
    { label: '+290', value: '+290' },
    { label: '+291', value: '+291' },
    { label: '+297', value: '+297' },
    { label: '+298', value: '+298' },
    { label: '+299', value: '+299' },
    { label: '+345', value: '+345' },
    { label: '+350', value: '+350' },
    { label: '+351', value: '+351' },
    { label: '+352', value: '+352' },
    { label: '+353', value: '+353' },
    { label: '+354', value: '+354' },
    { label: '+355', value: '+355' },
    { label: '+356', value: '+356' },
    { label: '+357', value: '+357' },
    { label: '+358', value: '+358' },
    { label: '+359', value: '+359' },
    { label: '+370', value: '+370' },
    { label: '+371', value: '+371' },
    { label: '+372', value: '+372' },
    { label: '+373', value: '+373' },
    { label: '+374', value: '+374' },
    { label: '+375', value: '+375' },
    { label: '+376', value: '+376' },
    { label: '+377', value: '+377' },
    { label: '+378', value: '+378' },
    { label: '+379', value: '+379' },
    { label: '+380', value: '+380' },
    { label: '+381', value: '+381' },
    { label: '+382', value: '+382' },
    { label: '+385', value: '+385' },
    { label: '+386', value: '+386' },
    { label: '+387', value: '+387' },
    { label: '+389', value: '+389' },
    { label: '+420', value: '+420' },
    { label: '+421', value: '+421' },
    { label: '+423', value: '+423' },
    { label: '+500', value: '+500' },
    { label: '+501', value: '+501' },
    { label: '+502', value: '+502' },
    { label: '+503', value: '+503' },
    { label: '+504', value: '+504' },
    { label: '+505', value: '+505' },
    { label: '+506', value: '+506' },
    { label: '+507', value: '+507' },
    { label: '+508', value: '+508' },
    { label: '+509', value: '+509' },
    { label: '+537', value: '+537' },
    { label: '+590', value: '+590' },
    { label: '+591', value: '+591' },
    { label: '+593', value: '+593' },
    { label: '+594', value: '+594' },
    { label: '+595', value: '+595' },
    { label: '+596', value: '+596' },
    { label: '+597', value: '+597' },
    { label: '+598', value: '+598' },
    { label: '+599', value: '+599' },
    { label: '+670', value: '+670' },
    { label: '+672', value: '+672' },
    { label: '+673', value: '+673' },
    { label: '+674', value: '+674' },
    { label: '+675', value: '+675' },
    { label: '+676', value: '+676' },
    { label: '+677', value: '+677' },
    { label: '+678', value: '+678' },
    { label: '+679', value: '+679' },
    { label: '+680', value: '+680' },
    { label: '+681', value: '+681' },
    { label: '+682', value: '+682' },
    { label: '+683', value: '+683' },
    { label: '+685', value: '+685' },
    { label: '+686', value: '+686' },
    { label: '+687', value: '+687' },
    { label: '+688', value: '+688' },
    { label: '+689', value: '+689' },
    { label: '+690', value: '+690' },
    { label: '+691', value: '+691' },
    { label: '+692', value: '+692' },
    { label: '+850', value: '+850' },
    { label: '+852', value: '+852' },
    { label: '+853', value: '+853' },
    { label: '+855', value: '+855' },
    { label: '+856', value: '+856' },
    { label: '+872', value: '+872' },
    { label: '+880', value: '+880' },
    { label: '+886', value: '+886' },
    { label: '+960', value: '+960' },
    { label: '+961', value: '+961' },
    { label: '+962', value: '+962' },
    { label: '+963', value: '+963' },
    { label: '+964', value: '+964' },
    { label: '+965', value: '+965' },
    { label: '+966', value: '+966' },
    { label: '+967', value: '+967' },
    { label: '+968', value: '+968' },
    { label: '+970', value: '+970' },
    { label: '+971', value: '+971' },
    { label: '+972', value: '+972' },
    { label: '+973', value: '+973' },
    { label: '+974', value: '+974' },
    { label: '+975', value: '+975' },
    { label: '+976', value: '+976' },
    { label: '+977', value: '+977' },
    { label: '+992', value: '+992' },
    { label: '+993', value: '+993' },
    { label: '+994', value: '+994' },
    { label: '+995', value: '+995' },
    { label: '+996', value: '+996' },
    { label: '+998', value: '+998' },
];

const AmplifyCountryDialCode = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** The ID of the field.  Should match with its corresponding input's ID. */
        this.fieldId = constants.COUNTRY_DIAL_CODE_SUFFIX;
        /** The options of the country dial code select input. */
        this.options = countryDialCodes;
        /** Default selected dial code */
        this.dialCode = '+1';
    }
    componentWillLoad() {
        this.setSelectedDialCode();
    }
    watchDialCodeHandler() {
        this.setSelectedDialCode();
    }
    setSelectedDialCode() {
        if (typeof this.dialCode === 'number') {
            this.selectedDialCode = `+${this.dialCode}`;
        }
        else {
            this.selectedDialCode = this.dialCode;
        }
    }
    render() {
        return (index.h("amplify-select", { fieldId: this.fieldId, options: this.options, handleInputChange: this.handleInputChange, selected: this.selectedDialCode }));
    }
    static get watchers() { return {
        "dialCode": ["watchDialCodeHandler"]
    }; }
};

const AmplifyEmailField = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Based on the type of field e.g. sign in, sign up, forgot password, etc. */
        this.fieldId = constants.EMAIL_SUFFIX;
        /** Used for the EMAIL label */
        this.label = Translations.Translations.EMAIL_LABEL;
        /** Used for the placeholder label */
        this.placeholder = Translations.Translations.EMAIL_PLACEHOLDER;
        /** The required flag in order to make an input required prior to submitting a form */
        this.required = false;
    }
    render() {
        return (index.h("amplify-form-field", { fieldId: this.fieldId, label: core.I18n.get(this.label), placeholder: core.I18n.get(this.placeholder), type: "email", name: "email", required: this.required, handleInputChange: this.handleInputChange, value: this.value, inputProps: this.inputProps, disabled: this.disabled, hint: this.hint }));
    }
};

const amplifyFormSectionCss = "amplify-form-section{--header-color:var(--amplify-secondary-color);--header-size:var(--amplify-text-md-sub);--subtitle-size:var(--amplify-grey);--subtitle-color:var(--amplify-grey);--footer-color:var(--amplify-grey);--footer-size:var(--amplify-text-sm);--font-family:var(--amplify-font-family);--font-weight:var(--amplify-font-weight)}.form-section-header{margin:1rem 0 1.5rem 0}.form-section-header .header{color:var(--header-color);font-size:var(--header-size);font-weight:700;margin-bottom:0.75rem}.form-section-header .subtitle{font-weight:400;font-size:var(--amplify-text-sm);color:var(--subtitle-color)}.form-section-footer{font-family:var(--font-family);font-weight:var(--font-weight);font-size:var(--footer-size);color:var(--footer-color);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:distribute;justify-content:space-around}@media (min-width: 672px){.form-section-footer{display:-ms-flexbox;display:flex;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:baseline;align-items:baseline}}.form-section-footer *+*{margin-top:15px}";

const AmplifyFormSection = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** (Optional) Used as a the default value within the default footer slot */
        this.submitButtonText = 'Submit';
        /** String prefix for the data-test attributes in this component primarily used for testing purposes */
        this.testDataPrefix = 'form-section';
        /** Loading state for the form */
        this.loading = false;
        /** Secondary footer component or text */
        this.secondaryFooterContent = null;
    }
    // eslint-disable-next-line
    handleFormSubmit(ev) {
        this.handleSubmit(ev.detail);
    }
    render() {
        return (index.h("form", { onSubmit: this.handleSubmit }, index.h("amplify-section", null, index.h("div", null, index.h("slot", { name: "amplify-form-section-header" }, index.h("div", { class: "form-section-header" }, index.h("h3", { class: "header", "data-test": this.testDataPrefix + '-header-section' }, this.headerText), index.h("div", { class: "subtitle" }, index.h("slot", { name: "subtitle" }))))), index.h("slot", null), index.h("div", null, index.h("slot", { name: "amplify-form-section-footer" }, index.h("div", { class: "form-section-footer" }, index.h("amplify-button", { type: "submit", "data-test": this.testDataPrefix + '-' + this.testDataPrefix + '-button' }, this.loading ? (index.h("amplify-loading-spinner", null)) : (index.h("span", null, this.submitButtonText))), this.secondaryFooterContent))))));
    }
};
AmplifyFormSection.style = amplifyFormSectionCss;

const AmplifyPasswordField = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Based on the type of field e.g. sign in, sign up, forgot password, etc. */
        this.fieldId = constants.PASSWORD_SUFFIX;
        /** Used for the password label */
        this.label = Translations.Translations.PASSWORD_LABEL;
        /** Used for the placeholder label */
        this.placeholder = Translations.Translations.PASSWORD_PLACEHOLDER;
        /** The required flag in order to make an input required prior to submitting a form */
        this.required = false;
    }
    render() {
        return (index.h("amplify-form-field", { type: "password", name: "password", fieldId: this.fieldId, label: core.I18n.get(this.label), placeholder: core.I18n.get(this.placeholder), hint: this.hint, required: this.required, handleInputChange: this.handleInputChange, value: this.value, inputProps: this.inputProps, disabled: this.disabled }));
    }
};

const amplifyPhoneFieldCss = ".phone-field{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:start;align-items:flex-start;width:100%}.phone-field input{border-left:none;border-radius:0 3px 3px 0}";

const AmplifyPhoneField = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Based on the type of field e.g. sign in, sign up, forgot password, etc. */
        this.fieldId = constants.PHONE_SUFFIX;
        /** Used for the Phone label */
        this.label = Translations.Translations.PHONE_LABEL;
        /** Used for the placeholder label */
        this.placeholder = Translations.Translations.PHONE_PLACEHOLDER;
        /** The required flag in order to make an input required prior to submitting a form */
        this.required = false;
    }
    render() {
        return (index.h("div", null, index.h("amplify-form-field", { label: core.I18n.get(this.label), hint: this.hint }, index.h("div", { class: "phone-field", slot: "input" }, index.h("amplify-country-dial-code", { dialCode: this.dialCode, handleInputChange: this.handleInputChange }), index.h("amplify-input", { fieldId: this.fieldId, type: "tel", handleInputChange: this.handleInputChange, placeholder: core.I18n.get(this.placeholder), name: this.fieldId, value: this.value, inputProps: this.inputProps, disabled: this.disabled, required: this.required })))));
    }
};
AmplifyPhoneField.style = amplifyPhoneFieldCss;

const amplifySelectCss = ":host{--color:var(--amplify-secondary-color);--background-color:var(--amplify-secondary-contrast);--border-color:var(--amplify-light-grey);--border-focus:var(--amplify-primary-color);--background-image:linear-gradient(45deg, transparent 50%, gray 50%),\n  \tlinear-gradient(135deg, gray 50%, transparent 50%),\n  \tlinear-gradient(to right, #ccc, #ccc)}.select{padding:1rem 1.75rem 1rem 1rem;font-size:var(--amplify-text-sm);color:var(--color);background-color:var(--background-color);border:1px solid var(--border-color);border-radius:3px 0 0 3px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;-ms-flex-preferred-size:auto;flex-basis:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:0;height:3.125rem;background-image:var(--background-image);background-position:calc(100% - 1rem) calc(1em + 0.5rem), calc(100% - 0.7rem) calc(1em + 0.5rem), calc(100% - 2.5em) 0.5em;background-size:6px 5px, 6px 5px, 0px 1.5em;background-repeat:no-repeat}.select :focus{outline:none;border-color:var(--border-focus)}";

const DEFAULT_SELECT_OPTION = [{ label: '', value: 1 }];
const logger = new core.Logger('amplify-select');
const AmplifySelect = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** The options of the select input. Must be an Array of Objects with an Object shape of {label: string, value: string|number} */
        this.options = DEFAULT_SELECT_OPTION;
    }
    componentWillLoad() {
        this.selectOptions = this.contructSelectOptions(this.options);
    }
    handleSelectOptionsChange() {
        this.selectOptions = this.contructSelectOptions(this.options);
    }
    isSelectedOptionValid(selected) {
        if (selected && !this.options.some(option => option.value === selected)) {
            logger.warn('Selected option does not exist in options values, falling back to initial option');
            return false;
        }
        return true;
    }
    contructSelectOptions(opts) {
        this.isSelectedOptionValid(this.selected);
        const content = [];
        opts.forEach((opt) => {
            content.push(index.h("option", { value: opt.value, selected: opt.value === this.selected }, opt.label));
        });
        return content;
    }
    render() {
        return (index.h("select", { name: this.fieldId, id: this.fieldId, class: "select", onChange: this.handleInputChange }, this.selectOptions));
    }
    static get watchers() { return {
        "options": ["handleSelectOptionsChange"],
        "selected": ["handleSelectOptionsChange"]
    }; }
};
AmplifySelect.style = amplifySelectCss;

const AmplifyUsernameField = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Based on the type of field e.g. sign in, sign up, forgot password, etc. */
        this.fieldId = constants.USERNAME_SUFFIX;
        /** Used for the username label */
        this.label = Translations.Translations.USERNAME_LABEL;
        /** Used for the placeholder label */
        this.placeholder = Translations.Translations.USERNAME_PLACEHOLDER;
        /** The required flag in order to make an input required prior to submitting a form */
        this.required = false;
    }
    render() {
        return (index.h("amplify-form-field", { name: "username", fieldId: this.fieldId, label: core.I18n.get(this.label), placeholder: core.I18n.get(this.placeholder), required: this.required, handleInputChange: this.handleInputChange, value: this.value, inputProps: this.inputProps, disabled: this.disabled, hint: this.hint }));
    }
};

exports.amplify_auth_fields = AmplifyAuthFields;
exports.amplify_code_field = AmplifyCodeField;
exports.amplify_country_dial_code = AmplifyCountryDialCode;
exports.amplify_email_field = AmplifyEmailField;
exports.amplify_form_section = AmplifyFormSection;
exports.amplify_password_field = AmplifyPasswordField;
exports.amplify_phone_field = AmplifyPhoneField;
exports.amplify_select = AmplifySelect;
exports.amplify_username_field = AmplifyUsernameField;