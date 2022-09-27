import * as React from 'react';
import { Property } from 'csstype';
import { StyleToken } from '../types/style';
interface RatingMixedIconProps {
    emptyColor: StyleToken<Property.Color>;
    emptyIcon: JSX.Element;
    fillColor: StyleToken<Property.Color>;
    fillIcon: JSX.Element;
    value: number;
}
export declare const RatingMixedIcon: React.FC<RatingMixedIconProps>;
export {};
