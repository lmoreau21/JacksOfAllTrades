import { AlignItemsValue, BackgroundColorValue, ColorValue, CursorValue, DesignToken, DisplayValue, FlexValue, PointerEventsValue, PositionValue, SpaceValue, TransformValue, WhiteSpaceValue } from '../types/designToken';
interface SelectWrapperTokens {
    flex: DesignToken<FlexValue>;
    display: DesignToken<DisplayValue>;
    position: DesignToken<PositionValue>;
    cursor: DesignToken<CursorValue>;
}
interface SelectIconWrapperTokens {
    alignItems: DesignToken<AlignItemsValue>;
    position: DesignToken<PositionValue>;
    top: DesignToken<SpaceValue>;
    right: DesignToken<SpaceValue>;
    transform: DesignToken<TransformValue>;
    pointerEvents: DesignToken<PointerEventsValue>;
}
interface SelectOptionTokens {
    backgroundColor: DesignToken<BackgroundColorValue>;
    color: DesignToken<ColorValue>;
    _disabled: {
        color: DesignToken<ColorValue>;
    };
}
interface SelectSizeTokens {
    minWidth: DesignToken<SpaceValue>;
}
export interface SelectTokens {
    paddingInlineEnd: DesignToken<SpaceValue>;
    wrapper: SelectWrapperTokens;
    iconWrapper: SelectIconWrapperTokens;
    option: SelectOptionTokens;
    whiteSpace: DesignToken<WhiteSpaceValue>;
    minWidth: DesignToken<SpaceValue>;
    small: SelectSizeTokens;
    large: SelectSizeTokens;
}
export declare const select: SelectTokens;
export {};