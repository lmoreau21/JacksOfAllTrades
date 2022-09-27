import { AlignItemsValue, BackgroundColorValue, BorderColorValue, BorderRadiusValue, BorderStyleValue, BorderWidthValue, BoxShadowValue, ColorValue, DesignToken, FontSizeValue, FontWeightValue, JustifyContentValue, LineHeightValue, SpaceValue, TransitionDurationValue } from '../types/designToken';
export interface StateTokens {
    color: DesignToken<ColorValue>;
    backgroundColor: DesignToken<BackgroundColorValue>;
    borderColor: DesignToken<BorderColorValue>;
}
interface StateWithShadowTokens extends StateTokens {
    boxShadow: DesignToken<BoxShadowValue>;
}
interface MenuStateDisabledTokens extends Omit<StateTokens, 'borderColor' | 'backgroundColor'> {
}
interface MenuStateTokens extends Omit<StateTokens, 'borderColor'> {
}
interface PrimaryVariationTokens {
    borderWidth: DesignToken<BorderWidthValue>;
    borderStyle: DesignToken<BorderStyleValue>;
    borderColor: DesignToken<BorderColorValue>;
    backgroundColor: DesignToken<BackgroundColorValue>;
    color: DesignToken<ColorValue>;
    _disabled: StateTokens;
    _loading: StateTokens;
    _hover: StateTokens;
    _focus: StateWithShadowTokens;
    _active: StateTokens;
}
interface MenuVariationTokens {
    borderWidth: DesignToken<BorderWidthValue>;
    backgroundColor: DesignToken<BackgroundColorValue>;
    justifyContent: DesignToken<JustifyContentValue>;
    _hover: MenuStateTokens;
    _focus: MenuStateTokens;
    _active: MenuStateTokens;
    _disabled: MenuStateDisabledTokens;
}
interface LinkVariationTokens {
    backgroundColor: DesignToken<BackgroundColorValue>;
    borderColor: DesignToken<BorderColorValue>;
    borderWidth: DesignToken<BorderWidthValue>;
    color: DesignToken<ColorValue>;
    _hover: StateTokens;
    _focus: StateWithShadowTokens;
    _active: StateTokens;
    _disabled: StateTokens;
    _loading: StateTokens;
}
interface ButtonSizeTokens {
    fontSize: DesignToken<FontSizeValue>;
    paddingBlockStart: DesignToken<SpaceValue>;
    paddingBlockEnd: DesignToken<SpaceValue>;
    paddingInlineStart: DesignToken<SpaceValue>;
    paddingInlineEnd: DesignToken<SpaceValue>;
}
export interface ButtonTokens {
    fontWeight: DesignToken<FontWeightValue>;
    transitionDuration: DesignToken<TransitionDurationValue>;
    fontSize: DesignToken<FontSizeValue>;
    lineHeight: DesignToken<LineHeightValue>;
    paddingBlockStart: DesignToken<SpaceValue>;
    paddingBlockEnd: DesignToken<SpaceValue>;
    paddingInlineStart: DesignToken<SpaceValue>;
    paddingInlineEnd: DesignToken<SpaceValue>;
    borderColor: DesignToken<BorderColorValue>;
    borderWidth: DesignToken<BorderWidthValue>;
    borderStyle: DesignToken<BorderStyleValue>;
    borderRadius: DesignToken<BorderRadiusValue>;
    color: DesignToken<ColorValue>;
    _hover: StateTokens;
    _focus: StateWithShadowTokens;
    _active: StateTokens;
    _loading: StateTokens;
    _disabled: StateTokens;
    primary: PrimaryVariationTokens;
    menu: MenuVariationTokens;
    link: LinkVariationTokens;
    small: ButtonSizeTokens;
    large: ButtonSizeTokens;
    loaderWrapper: {
        alignItems: DesignToken<AlignItemsValue>;
        gap: DesignToken<SpaceValue>;
    };
}
export declare const button: ButtonTokens;
export {};
