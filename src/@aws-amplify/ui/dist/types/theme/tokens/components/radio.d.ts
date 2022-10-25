import { AlignItemsValue, BackgroundColorValue, BorderColorValue, BorderRadiusValue, BorderStyleValue, BorderWidthValue, BoxShadowValue, BoxSizingValue, ColorValue, CursorValue, DesignToken, GapValue, JustifyContentValue, OutlineColorValue, OutlineOffsetValue, OutlineStyleValue, OutlineWidthValue, SpaceValue, TransitionDurationValue, TransitionPropertyValue } from '../types/designToken';
interface RadioDisabledTokens {
    cursor: DesignToken<CursorValue>;
}
interface RadioButtonTokens {
    alignItems: DesignToken<AlignItemsValue>;
    justifyContent: DesignToken<JustifyContentValue>;
    width: DesignToken<SpaceValue>;
    height: DesignToken<SpaceValue>;
    boxSizing: DesignToken<BoxSizingValue>;
    borderWidth: DesignToken<BorderWidthValue>;
    borderStyle: DesignToken<BorderStyleValue>;
    borderRadius: DesignToken<BorderRadiusValue>;
    borderColor: DesignToken<BorderColorValue>;
    color: DesignToken<ColorValue>;
    backgroundColor: DesignToken<BackgroundColorValue>;
    transitionProperty: DesignToken<TransitionPropertyValue>;
    transitionDuration: DesignToken<TransitionDurationValue>;
    outlineColor: DesignToken<OutlineColorValue>;
    outlineStyle: DesignToken<OutlineStyleValue>;
    outlineWidth: DesignToken<OutlineWidthValue>;
    outlineOffset: DesignToken<OutlineOffsetValue>;
    padding: DesignToken<SpaceValue>;
    small: RadioButtonSizeTokens;
    large: RadioButtonSizeTokens;
    _checked: RadioButtonCheckedTokens;
    _focus: RadioButtonFocusTokens;
    _error: RadioButtonErrorTokens;
    _disabled: RadioButtonDisabledTokens;
}
interface RadioButtonSizeTokens {
    width: DesignToken<SpaceValue>;
    height: DesignToken<SpaceValue>;
}
interface RadioButtonCheckedTokens {
    color: DesignToken<ColorValue>;
    _disabled: RadioButtonCheckedDisabledTokens;
}
interface RadioButtonCheckedDisabledTokens {
    color: DesignToken<ColorValue>;
}
interface RadioButtonFocusTokens {
    borderColor: DesignToken<BorderColorValue>;
    boxShadow: DesignToken<BoxShadowValue>;
}
interface RadioButtonErrorTokens {
    borderColor: DesignToken<BorderColorValue>;
    _focus: RadioButtonErrorFocusTokens;
}
interface RadioButtonErrorFocusTokens {
    boxShadow: DesignToken<BoxShadowValue>;
}
interface RadioButtonDisabledTokens {
    borderColor: DesignToken<BorderColorValue>;
    backgroundColor: DesignToken<BackgroundColorValue>;
}
interface RadioLabelTokens {
    color: DesignToken<ColorValue>;
    _disabled: RadioLabelDisabledTokens;
}
interface RadioLabelDisabledTokens {
    color: DesignToken<ColorValue>;
}
export interface RadioTokens {
    alignItems: DesignToken<AlignItemsValue>;
    justifyContent: DesignToken<JustifyContentValue>;
    gap: DesignToken<GapValue>;
    _disabled: RadioDisabledTokens;
    button: RadioButtonTokens;
    label: RadioLabelTokens;
}
export declare const radio: RadioTokens;
export {};
