import { boolean as booleanKnob, select as selectKnob, text as textKnob, } from '@storybook/addon-knobs';
export const pixelThreshold = 10;
export const selectors = {
    // amplify-form-field
    formFieldDescription: '[data-test=form-field-description]',
};
export const knobs = {
    labelKnob(labelPlaceholder) {
        return textKnob('Label', labelPlaceholder);
    },
    descriptionKnob(descriptionPlaceholder) {
        return textKnob('Description', descriptionPlaceholder);
    },
    hintKnob(hintPlaceholder) {
        return textKnob('Hint', hintPlaceholder);
    },
    inputTypeKnob(inputTypePlaceholder) {
        return selectKnob('Type', [
            'date',
            'email',
            'number',
            'password',
            'search',
            'tel',
            'text',
            'url',
            'time',
        ], inputTypePlaceholder);
    },
    placeholderKnob(placeholderPlaceholder) {
        return textKnob('Placeholder', placeholderPlaceholder);
    },
    buttonTypeKnob(buttonTypePlaceholder) {
        return selectKnob('Button type', ['button', 'submit', 'reset'], buttonTypePlaceholder);
    },
    buttonTextKnob(buttonTextPlaceholder) {
        return textKnob('Button text', buttonTextPlaceholder);
    },
    toggleKnob(toggleDefault) {
        return booleanKnob('Toggle', toggleDefault);
    },
    disabledKnob(disabledDefault) {
        return booleanKnob('Disabled', disabledDefault);
    },
    formSectionHeaderKnob(headerPlaceholder) {
        return textKnob('Header text', headerPlaceholder);
    },
    formSectionSubmitKnob(submitPlaceholder) {
        return textKnob('Submit button text', submitPlaceholder);
    },
    tooltipAutoShowKnob(autoShowDefault) {
        return booleanKnob('Tooltip autoshow', autoShowDefault);
    },
};
