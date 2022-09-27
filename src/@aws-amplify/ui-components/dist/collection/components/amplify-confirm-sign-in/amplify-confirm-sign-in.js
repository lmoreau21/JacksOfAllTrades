import { Auth } from '@aws-amplify/auth';
import { I18n } from '@aws-amplify/core';
import { Component, Prop, State, h, Host, Watch } from '@stencil/core';
import { AuthState, MfaOption, ChallengeName, } from '../../common/types/auth-types';
import { NO_AUTH_MODULE_FOUND } from '../../common/constants';
import { dispatchToastHubEvent, dispatchAuthStateChangeEvent, } from '../../common/helpers';
import { Translations } from '../../common/Translations';
import { checkContact } from '../../common/auth-helpers';
export class AmplifyConfirmSignIn {
    constructor() {
        /** Fires when confirm sign in form is submitted */
        this.handleSubmit = event => this.confirm(event);
        /** Used for header text in confirm sign in component */
        this.headerText = Translations.CONFIRM_SMS_CODE;
        /** Used for the submit button text in confirm sign in component */
        this.submitButtonText = Translations.CONFIRM;
        /** Auth state change handler for this component */
        this.handleAuthStateChange = dispatchAuthStateChangeEvent;
        /** Default form field */
        this.defaultFormFields = [
            {
                type: 'code',
                required: true,
                handleInputChange: event => this.handleCodeChange(event),
            },
        ];
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
        this.formFields = this.defaultFormFields;
        /** The MFA option to confirm with */
        this.mfaOption = MfaOption.SMS;
        /* Whether or not the confirm-sign-in component is loading */
        this.loading = false;
    }
    componentWillLoad() {
        this.setup();
    }
    userHandler() {
        this.setup();
    }
    setup() {
        if (this.user &&
            this.user['challengeName'] === ChallengeName.SoftwareTokenMFA) {
            this.mfaOption = MfaOption.TOTP;
            // If header text is using default use TOTP string
            if (this.headerText === Translations.CONFIRM_SMS_CODE) {
                this.headerText = Translations.CONFIRM_TOTP_CODE;
            }
        }
        this.constructedFormFieldOptions = this.constructFormFieldOptions(this.formFields);
    }
    handleCodeChange(event) {
        this.code = event.target.value;
    }
    async confirm(event) {
        if (event) {
            event.preventDefault();
        }
        const mfaType = this.user['challengeName'] === ChallengeName.SoftwareTokenMFA
            ? ChallengeName.SoftwareTokenMFA
            : null;
        if (!Auth || typeof Auth.confirmSignIn !== 'function') {
            throw new Error(NO_AUTH_MODULE_FOUND);
        }
        this.loading = true;
        try {
            await Auth.confirmSignIn(this.user, this.code, mfaType);
            await checkContact(this.user, this.handleAuthStateChange);
        }
        catch (error) {
            dispatchToastHubEvent(error);
        }
        finally {
            this.loading = false;
        }
    }
    constructFormFieldOptions(formFields) {
        const content = [];
        if (formFields === undefined)
            return undefined;
        if (formFields.length <= 0)
            return this.defaultFormFields;
        formFields.forEach((formField) => {
            if (typeof formField === 'string' || formField.type !== 'code') {
                // This is either a `string`, and/or a custom field that isn't `code`. Pass this directly.
                content.push(formField);
            }
            else {
                // This is a code input field. Attach input handler.
                content.push(Object.assign({ handleInputChange: event => this.handleCodeChange(event) }, formField));
            }
        });
        return content;
    }
    render() {
        return (h(Host, null,
            h("amplify-form-section", { headerText: I18n.get(this.headerText), handleSubmit: this.handleSubmit, submitButtonText: I18n.get(this.submitButtonText), loading: this.loading, secondaryFooterContent: h("span", null,
                    h("amplify-button", { variant: "anchor", onClick: () => this.handleAuthStateChange(AuthState.SignIn) }, I18n.get(Translations.BACK_TO_SIGN_IN))) },
                h("amplify-auth-fields", { formFields: this.constructedFormFieldOptions }))));
    }
    static get is() { return "amplify-confirm-sign-in"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "handleSubmit": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(event: Event) => void",
                "resolved": "(event: Event) => void",
                "references": {
                    "Event": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Fires when confirm sign in form is submitted"
            },
            "defaultValue": "event => this.confirm(event)"
        },
        "headerText": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Used for header text in confirm sign in component"
            },
            "attribute": "header-text",
            "reflect": false,
            "defaultValue": "Translations.CONFIRM_SMS_CODE"
        },
        "submitButtonText": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Used for the submit button text in confirm sign in component"
            },
            "attribute": "submit-button-text",
            "reflect": false,
            "defaultValue": "Translations.CONFIRM"
        },
        "handleAuthStateChange": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "AuthStateHandler",
                "resolved": "(nextAuthState: AuthState, data?: object) => void",
                "references": {
                    "AuthStateHandler": {
                        "location": "import",
                        "path": "../../common/types/auth-types"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Auth state change handler for this component"
            },
            "defaultValue": "dispatchAuthStateChangeEvent"
        },
        "formFields": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "FormFieldTypes | string[]",
                "resolved": "FormFieldTypes | string[]",
                "references": {
                    "FormFieldTypes": {
                        "location": "import",
                        "path": "../../components/amplify-auth-fields/amplify-auth-fields-interface"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Form fields allows you to utilize our pre-built components such as username field, code field, password field, email field, etc.\nby passing an array of strings that you would like the order of the form to be in. If you need more customization, such as changing\ntext for a label or adjust a placeholder, you can follow the structure below in order to do just that.\n```\n[\n  {\n    type: string,\n    label: string,\n    placeholder: string,\n    hint: string | Functional Component | null,\n    required: boolean\n  }\n]\n```"
            },
            "defaultValue": "this.defaultFormFields"
        },
        "user": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "CognitoUserInterface",
                "resolved": "CognitoUserInterface",
                "references": {
                    "CognitoUserInterface": {
                        "location": "import",
                        "path": "../../common/types/auth-types"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Cognito user signing in"
            }
        }
    }; }
    static get states() { return {
        "mfaOption": {},
        "loading": {},
        "code": {}
    }; }
    static get watchers() { return [{
            "propName": "user",
            "methodName": "userHandler"
        }]; }
}
