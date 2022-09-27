/**
 * This file contains general helpers that state machine or authenticator
 * implementations can use.
 */
import { AuthInterpreter, HubHandler } from '../../types';
export declare const censorAllButFirstAndLast: (value: string) => string;
export declare const censorPhoneNumber: (val: string) => string;
export declare const defaultAuthHubHandler: HubHandler;
/**
 * Listens to external auth Hub events and sends corresponding event to
 * the `authService` of interest
 *
 * @param send - `send` function associated with the `authService` of interest
 *
 * @returns function that unsubscribes to the hub evenmt
 */
export declare const listenToAuthHub: (service: AuthInterpreter, handler?: HubHandler) => () => void;
export declare const hasSpecialChars: (password: string) => boolean;
export declare const getTotpCode: (issuer: string, username: string, secret: string) => string;
