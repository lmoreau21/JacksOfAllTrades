import { BackgroundColorValue, BorderColorValue, BorderRadiusValue, BorderStyleValue, BorderWidthValue, BoxShadowValue, DesignToken, SpaceValue } from '../types/designToken';
interface SliderFieldTrackTokens {
    backgroundColor: DesignToken<BackgroundColorValue>;
    borderRadius: DesignToken<BorderRadiusValue>;
    height: DesignToken<SpaceValue>;
    minWidth: DesignToken<SpaceValue>;
}
interface SliderFieldRangeTokens {
    backgroundColor: DesignToken<BackgroundColorValue>;
    borderRadius: DesignToken<BorderRadiusValue>;
    _disabled: SliderFieldRangeDisabledTokens;
}
interface SliderFieldRangeDisabledTokens {
    backgroundColor: DesignToken<BackgroundColorValue>;
}
interface SliderFieldThumbTokens {
    width: DesignToken<SpaceValue>;
    height: DesignToken<SpaceValue>;
    backgroundColor: DesignToken<BackgroundColorValue>;
    boxShadow: DesignToken<BoxShadowValue>;
    borderRadius: DesignToken<BorderRadiusValue>;
    borderWidth: DesignToken<BorderWidthValue>;
    borderColor: DesignToken<BorderColorValue>;
    borderStyle: DesignToken<BorderStyleValue>;
    _disabled: SliderFieldThumbDisabledTokens;
    _hover: SliderFieldThumbHoverTokens;
    _focus: SliderFieldThumbFocusTokens;
}
interface SliderFieldThumbDisabledTokens {
    backgroundColor: DesignToken<BackgroundColorValue>;
    borderColor: DesignToken<BorderColorValue>;
    boxShadow: DesignToken<BoxShadowValue>;
}
interface SliderFieldThumbHoverTokens {
    backgroundColor: DesignToken<BackgroundColorValue>;
    borderColor: DesignToken<BorderColorValue>;
}
interface SliderFieldThumbFocusTokens {
    borderColor: DesignToken<BorderColorValue>;
    boxShadow: DesignToken<BoxShadowValue>;
}
interface SliderFieldSizeTokens {
    track: SliderFieldSizeTrackTokens;
    thumb: SliderFieldSizeThumbTokens;
}
interface SliderFieldSizeTrackTokens {
    height: DesignToken<SpaceValue>;
}
interface SliderFieldSizeThumbTokens {
    height: DesignToken<SpaceValue>;
    width: DesignToken<SpaceValue>;
}
export interface SliderFieldTokens {
    paddingBlock: DesignToken<SpaceValue>;
    track: SliderFieldTrackTokens;
    range: SliderFieldRangeTokens;
    thumb: SliderFieldThumbTokens;
    small: SliderFieldSizeTokens;
    large: SliderFieldSizeTokens;
}
export declare const sliderfield: SliderFieldTokens;
export {};