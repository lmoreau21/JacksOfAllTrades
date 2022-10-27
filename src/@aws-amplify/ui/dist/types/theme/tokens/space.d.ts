import { DesignToken, WebDesignToken, SpaceValue } from './types/designToken';
export declare type SpaceSizes = {
    xxxs: DesignToken<SpaceValue>;
    xxs: DesignToken<SpaceValue>;
    xs: DesignToken<SpaceValue>;
    small: DesignToken<SpaceValue>;
    medium: DesignToken<SpaceValue>;
    large: DesignToken<SpaceValue>;
    xl: DesignToken<SpaceValue>;
    xxl: DesignToken<SpaceValue>;
    xxxl: DesignToken<SpaceValue>;
};
export declare type Space = SpaceSizes & {
    zero: DesignToken<SpaceValue>;
    relative: SpaceSizes & {
        full: DesignToken<SpaceValue>;
    };
};
export declare type WebSpace = {
    [Property in keyof Omit<Space, 'relative'>]: WebDesignToken<SpaceValue>;
} & {
    relative: {
        [Property in keyof Space['relative']]: WebDesignToken<SpaceValue>;
    };
};
export declare const space: Space;