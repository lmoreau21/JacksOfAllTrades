import { Sizes } from './base';
import { ViewProps } from './view';
export declare type BadgeVariations = 'info' | 'error' | 'warning' | 'success';
export declare type BadgeSizes = Sizes;
export interface BadgeProps extends ViewProps {
    /**
     * @description
     * The variation property will affect the background color of the badge.
     */
    variation?: BadgeVariations;
    /**
     * @description
     * The size property will affect the font size of the badge.
     */
    size?: BadgeSizes;
}
