import { BackgroundColorValue, BorderColorValue, BorderRadiusValue, DesignToken, FontSizeValue, OpacityValue, ShadowValue, SpaceValue, TransformValue, TransitionDurationValue } from '../types/designToken';
interface SwitchFieldDisabledTokens {
    opacity: DesignToken<OpacityValue>;
}
interface SwitchFieldFocusedTokens {
    shadow: DesignToken<ShadowValue>;
}
interface SwitchFieldSizeTokens {
    fontSize: DesignToken<FontSizeValue>;
}
interface SwitchFieldLabelTokens {
    padding: DesignToken<SpaceValue>;
}
interface SwitchFieldThumbTokens {
    backgroundColor: DesignToken<BackgroundColorValue>;
    borderColor: DesignToken<BorderColorValue>;
    borderRadius: DesignToken<BorderRadiusValue>;
    checked: SwitchFieldThumbCheckedTokens;
    transition: SwitchFieldThumbTransitionTokens;
    width: DesignToken<SpaceValue>;
}
interface SwitchFieldThumbTransitionTokens {
    duration: DesignToken<TransitionDurationValue>;
}
interface SwitchFieldThumbCheckedTokens {
    transform: DesignToken<TransformValue>;
}
interface SwitchFieldTrackTokens {
    backgroundColor: DesignToken<BackgroundColorValue>;
    borderRadius: DesignToken<BorderRadiusValue>;
    checked: SwitchFieldTrackCheckedTokens;
    height: DesignToken<SpaceValue>;
    padding: DesignToken<SpaceValue>;
    transition: SwitchFieldTrackTransitionTokens;
    width: DesignToken<SpaceValue>;
}
interface SwitchFieldTrackTransitionTokens {
    duration: DesignToken<TransitionDurationValue>;
}
interface SwitchFieldTrackCheckedTokens {
    backgroundColor: DesignToken<BackgroundColorValue>;
}
export interface SwitchFieldTokens {
    fontSize: DesignToken<FontSizeValue>;
    _disabled: SwitchFieldDisabledTokens;
    _focused: SwitchFieldFocusedTokens;
    large: SwitchFieldSizeTokens;
    small: SwitchFieldSizeTokens;
    label: SwitchFieldLabelTokens;
    thumb: SwitchFieldThumbTokens;
    track: SwitchFieldTrackTokens;
}
export declare const switchfield: SwitchFieldTokens;
export {};
