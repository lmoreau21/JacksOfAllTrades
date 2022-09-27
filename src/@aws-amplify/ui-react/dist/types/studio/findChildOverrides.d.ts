import { EscapeHatchProps } from './types';
/**
 * 🚨 WARNING:🚨
 * This function is owned by the Studio UI Builder team
 * and is used by code generated by Amplify CLI.
 *
 * When considering making changing to this file, please consult
 * a member from the Studio UI Builder team.
 */
/**
 * This method is used to parse through all of the overrides and
 * only pass the relevant child overrides for a given component.
 * @internal
 * @param overrides escape hatch props
 * @param elementHierarchy
 * @returns overrides only for specified element
 */
export declare const findChildOverrides: (overrides: EscapeHatchProps | null | undefined, elementHierarchy: string) => EscapeHatchProps | null;
