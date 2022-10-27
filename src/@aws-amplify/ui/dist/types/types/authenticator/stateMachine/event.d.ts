/**
 * Events that occur when actors are done
 */
export declare type InvokeActorEventTypes = 'done.invoke.signInActor' | 'done.invoke.signUpActor' | 'done.invoke.signOutActor' | 'done.invoke.resetPasswordActor';
/**
 * All known explicit events for xstate
 */
export declare type AuthEventTypes = 'CHANGE' | 'BLUR' | 'FEDERATED_SIGN_IN' | 'RESEND' | 'RESET_PASSWORD' | 'SIGN_IN' | 'SIGN_OUT' | 'SIGN_UP' | 'SKIP' | 'SUBMIT' | 'INIT' | 'TOKEN_REFRESH' | InvokeActorEventTypes;
/**
 * Data payload for auth events
 */
export declare type AuthEventData = Record<PropertyKey, any>;
/** Top-level auth machine event interface */
export interface AuthEvent {
    type: AuthEventTypes;
    data?: AuthEventData;
}