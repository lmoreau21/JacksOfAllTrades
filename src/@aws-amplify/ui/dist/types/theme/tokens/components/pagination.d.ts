import { AlignItemsValue, BackgroundColorValue, BorderRadiusValue, ColorValue, DesignToken, FontSizeValue, JustifyContentValue, SpaceValue, TransitionDurationValue, TransitionPropertyValue } from '../types/designToken';
interface PaginationCurrentTokens {
    alignItems: DesignToken<AlignItemsValue>;
    justifyContent: DesignToken<JustifyContentValue>;
    color: DesignToken<ColorValue>;
    fontSize: DesignToken<FontSizeValue>;
    backgroundColor: DesignToken<BackgroundColorValue>;
}
interface PaginationButtonTokens {
    color: DesignToken<ColorValue>;
    paddingInlineStart: DesignToken<SpaceValue>;
    paddingInlineEnd: DesignToken<SpaceValue>;
    transitionProperty: DesignToken<TransitionPropertyValue>;
    transitionDuration: DesignToken<TransitionDurationValue>;
    hover: PaginationButtonHoverTokens;
    disabled: PaginationButtonDisabledTokens;
}
export interface PaginationButtonHoverTokens {
    backgroundColor: DesignToken<BackgroundColorValue>;
    color: DesignToken<ColorValue>;
}
export interface PaginationButtonDisabledTokens {
    color: DesignToken<ColorValue>;
}
interface PaginationEllipsisTokens {
    alignItems: DesignToken<AlignItemsValue>;
    justifyContent: DesignToken<JustifyContentValue>;
    paddingInlineStart: DesignToken<SpaceValue>;
    paddingInlineEnd: DesignToken<SpaceValue>;
}
interface PaginationItemContainerTokens {
    marginLeft: DesignToken<SpaceValue>;
    marginRight: DesignToken<SpaceValue>;
}
interface PaginationItemSharedTokens {
    height: DesignToken<SpaceValue>;
    minWidth: DesignToken<SpaceValue>;
    borderRadius: DesignToken<BorderRadiusValue>;
}
export interface PaginationTokens {
    current: PaginationCurrentTokens;
    button: PaginationButtonTokens;
    ellipsis: PaginationEllipsisTokens;
    itemContainer: PaginationItemContainerTokens;
    itemShared: PaginationItemSharedTokens;
}
export declare const pagination: PaginationTokens;
export {};