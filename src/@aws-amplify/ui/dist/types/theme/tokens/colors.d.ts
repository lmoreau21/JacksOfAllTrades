import { DesignToken, WebDesignToken, ColorValue } from './types/designToken';
import { OrdinalScale, OrdinalVariation } from './types/scales';
declare type ScaleKeys = 10 | 20 | 40 | 60 | 80 | 90 | 100;
declare type OverlayKeys = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90;
declare type ColorScale<DesignTokenType = DesignToken<ColorValue>> = {
    [key in ScaleKeys]: DesignTokenType;
};
declare type OverlayColors<DesignTokenType = DesignToken<ColorValue>> = {
    [key in OverlayKeys]: DesignTokenType;
};
declare type FontColors<DesignTokenType = DesignToken<ColorValue>> = {
    inverse: DesignTokenType;
    interactive: DesignTokenType;
    hover: DesignTokenType;
    focus: DesignTokenType;
    active: DesignTokenType;
    disabled: DesignTokenType;
} & OrdinalScale<DesignTokenType> & OrdinalVariation<DesignTokenType>;
declare type BackgroundColors<DesignTokenType = DesignToken<ColorValue>> = {
    disabled: DesignTokenType;
} & OrdinalScale<DesignTokenType> & OrdinalVariation<DesignTokenType>;
declare type BorderColors<DesignTokenType = DesignToken<ColorValue>> = {
    disabled: DesignTokenType;
    pressed: DesignTokenType;
    focus: DesignTokenType;
    error: DesignTokenType;
} & OrdinalScale<DesignTokenType>;
declare type ColorTypes<DesignTokenType = DesignToken<ColorValue>> = {
    [key in ScaleKeys]: DesignTokenType;
} | FontColors | BackgroundColors | DesignTokenType | BorderColors;
declare type WebColorTypes = ColorTypes<WebDesignToken<ColorValue>>;
export declare type Colors = {
    red: ColorScale;
    orange: ColorScale;
    yellow: ColorScale;
    green: ColorScale;
    teal: ColorScale;
    blue: ColorScale;
    purple: ColorScale;
    pink: ColorScale;
    neutral: ColorScale;
    white: DesignToken<ColorValue>;
    black: DesignToken<ColorValue>;
    font: FontColors;
    background: BackgroundColors;
    border: BorderColors;
    brand: {
        primary: ColorScale;
        secondary: ColorScale;
    };
    overlay: OverlayColors;
    [key: string]: ColorTypes | Record<string, ColorTypes>;
};
export declare type WebColors = {
    red: ColorScale<WebDesignToken<ColorValue>>;
    orange: ColorScale<WebDesignToken<ColorValue>>;
    yellow: ColorScale<WebDesignToken<ColorValue>>;
    green: ColorScale<WebDesignToken<ColorValue>>;
    teal: ColorScale<WebDesignToken<ColorValue>>;
    blue: ColorScale<WebDesignToken<ColorValue>>;
    purple: ColorScale<WebDesignToken<ColorValue>>;
    pink: ColorScale<WebDesignToken<ColorValue>>;
    neutral: ColorScale<WebDesignToken<ColorValue>>;
    white: WebDesignToken<ColorValue>;
    black: WebDesignToken<ColorValue>;
    font: FontColors<WebDesignToken<ColorValue>>;
    background: BackgroundColors<WebDesignToken<ColorValue>>;
    border: BorderColors<WebDesignToken<ColorValue>>;
    brand: {
        primary: ColorScale<WebDesignToken<ColorValue>>;
        secondary: ColorScale<WebDesignToken<ColorValue>>;
    };
    overlay: OverlayColors<WebDesignToken<ColorValue>>;
    [key: string]: WebColorTypes | Record<string, WebColorTypes>;
};
export declare const colors: Colors;
export {};