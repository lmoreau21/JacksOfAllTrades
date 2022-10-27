import { AlignItemsValue, BackgroundColorValue, BorderColorValue, BorderRadiusValue, BorderStyleValue, BorderWidthValue, BoxShadowValue, ColorValue, CursorValue, DesignToken, JustifyContentValue, OpacityValue, OutlineColorValue, OutlineOffsetValue, OutlineStyleValue, OutlineWidthValue, PositionValue, SpaceValue, TransformValue, TransitionDurationValue, TransitionPropertyValue, TransitionTimingFunctionValue } from '../types/designToken';
interface DisableToken {
    cursor: DesignToken<CursorValue>;
}
interface ButtonDisabledToken {
    borderColor: DesignToken<BorderColorValue>;
}
interface ButtonErrorFocusToken {
    borderColor: DesignToken<BorderColorValue>;
    boxShadow: DesignToken<BoxShadowValue>;
}
interface ButtonErrorToken {
    borderColor: DesignToken<BorderColorValue>;
    _focus: ButtonErrorFocusToken;
}
interface ButtonFocusToken {
    outlineColor: DesignToken<OutlineColorValue>;
    outlineStyle: DesignToken<OutlineStyleValue>;
    outlineWidth: DesignToken<OutlineWidthValue>;
    outlineOffset: DesignToken<OutlineOffsetValue>;
    borderColor: DesignToken<BorderColorValue>;
    boxShadow: DesignToken<BoxShadowValue>;
}
interface BeforeToken {
    width: DesignToken<SpaceValue>;
    height: DesignToken<SpaceValue>;
    borderWidth: DesignToken<BorderWidthValue>;
    borderRadius: DesignToken<BorderRadiusValue>;
    borderStyle: DesignToken<BorderStyleValue>;
    borderColor: DesignToken<BorderColorValue>;
}
interface ButtonToken {
    position: DesignToken<PositionValue>;
    alignItems: DesignToken<AlignItemsValue>;
    justifyContent: DesignToken<JustifyContentValue>;
    color: DesignToken<ColorValue>;
    before: BeforeToken;
    _focus: ButtonFocusToken;
    _disabled: ButtonDisabledToken;
    _error: ButtonErrorToken;
}
interface IconCheckedDisabled {
    backgroundColor: DesignToken<BackgroundColorValue>;
}
interface IconCheckedToken {
    opacity: DesignToken<OpacityValue>;
    transform: DesignToken<TransformValue>;
    _disabled: IconCheckedDisabled;
}
interface IconIndeterminateToken {
    opacity: DesignToken<OpacityValue>;
    transform: DesignToken<TransformValue>;
    _disabled: IconCheckedDisabled;
}
interface IconToken {
    backgroundColor: DesignToken<BackgroundColorValue>;
    borderRadius: DesignToken<BorderRadiusValue>;
    opacity: DesignToken<OpacityValue>;
    transform: DesignToken<TransformValue>;
    transitionProperty: DesignToken<TransitionPropertyValue>;
    transitionDuration: DesignToken<TransitionDurationValue>;
    transitionTimingFunction: DesignToken<TransitionTimingFunctionValue>;
    _checked: IconCheckedToken;
    _indeterminate: IconIndeterminateToken;
}
interface LabelDisabledToken {
    color: DesignToken<ColorValue>;
}
interface LabelToken {
    _disabled: LabelDisabledToken;
}
export interface CheckboxTokens {
    cursor: DesignToken<CursorValue>;
    alignItems: DesignToken<AlignItemsValue>;
    _disabled: DisableToken;
    button: ButtonToken;
    icon: IconToken;
    label: LabelToken;
}
export declare const checkbox: CheckboxTokens;
export {};