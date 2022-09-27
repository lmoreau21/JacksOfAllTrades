import { ThemeStylePropKey } from '../types/theme';
import { ComponentClassName } from './types';
export declare const strHasLength: (str: unknown) => str is string;
export declare const isFunction: (fn: unknown) => fn is Function;
export declare const isEmptyString: (value: unknown) => boolean;
export declare const isNullOrEmptyString: (value: unknown) => boolean;
/**
 * Create a consecutive integer array from start value to end value.
 * @param start start value
 * @param end end value
 * @returns an integer array with elements from start to end consecutively
 */
export declare const getConsecutiveIntArray: (start: number, end: number) => number[];
export declare type Modifiers = string | number | null;
/**
 * This helper function creates modifier class names that are used for our flat BEM styling
 * it takes in a base and modifier and returns the modified class if a modifier was passed in and null otherwise
 * @param base The base class of the output
 * @param modifier The modifier to add onto the base
 * @returns the modified class name or null
 */
export declare const classNameModifier: (base: ComponentClassName, modifier: Modifiers) => string;
/**
 * This helper function creates modified class names that are used for our flat BEM styling
 * it takes in a base, modifier, and flag and returns the modified class name if the flag is true and null if the flag is false
 * @param base
 * @param modifier
 * @param flag
 * @returns the modified class name or null
 */
export declare const classNameModifierByFlag: (base: ComponentClassName, modifier: Modifiers, flag: boolean) => string;
export declare const getCSSVariableIfValueIsThemeKey: <Value>(propKey: ThemeStylePropKey, value: Value) => string | Value;
