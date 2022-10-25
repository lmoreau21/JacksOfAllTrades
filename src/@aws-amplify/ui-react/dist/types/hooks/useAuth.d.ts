import { CognitoUser } from '@aws-amplify/auth';
interface AuthUser extends CognitoUser {
    username: string;
    attributes: Record<string, string>;
}
export interface UseAuthResult {
    user?: AuthUser;
    isLoading: boolean;
    error?: Error;
    fetch?: () => void;
}
/**
 * Amplify Auth React hook
 * @internal
 */
export declare const useAuth: () => UseAuthResult;
export {};
