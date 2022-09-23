import Observable, { ZenObservable } from 'zen-observable-ts';
import { ProviderOptions } from '../../types';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/auth';
import { AbstractPubSubProvider } from '../PubSubProvider';
import { SUBSCRIPTION_STATUS } from '../constants';
export declare type ObserverQuery = {
    observer: ZenObservable.SubscriptionObserver<any>;
    query: string;
    variables: object;
    subscriptionState: SUBSCRIPTION_STATUS;
    subscriptionReadyCallback?: Function;
    subscriptionFailedCallback?: Function;
    startAckTimeoutId?: ReturnType<typeof setTimeout>;
};
declare type GraphqlAuthModes = keyof typeof GRAPHQL_AUTH_MODE;
export interface AWSAppSyncRealTimeProviderOptions extends ProviderOptions {
    appSyncGraphqlEndpoint?: string;
    authenticationType?: GraphqlAuthModes;
    query?: string;
    variables?: object;
    apiKey?: string;
    region?: string;
    graphql_headers?: () => {} | (() => Promise<{}>);
    additionalHeaders?: {
        [key: string]: string;
    };
}
export declare class AWSAppSyncRealTimeProvider extends AbstractPubSubProvider {
    private awsRealTimeSocket?;
    private socketStatus;
    private keepAliveTimeoutId?;
    private keepAliveTimeout;
    private keepAliveAlertTimeoutId?;
    private subscriptionObserverMap;
    private promiseArray;
    private readonly connectionStateMonitor;
    constructor(options?: ProviderOptions);
    getNewWebSocket(url: any, protocol: any): WebSocket;
    getProviderName(): string;
    newClient(): Promise<any>;
    publish(_topics: string[] | string, _msg: any, _options?: any): Promise<void>;
    private isCustomDomain;
    subscribe(_topics: string[] | string, options?: AWSAppSyncRealTimeProviderOptions): Observable<any>;
    protected get isSSLEnabled(): boolean;
    private _startSubscriptionWithAWSAppSyncRealTime;
    private _waitForSubscriptionToBeConnected;
    private _sendUnsubscriptionMessage;
    private _removeSubscriptionObserver;
    private _closeSocketIfRequired;
    private _handleIncomingSubscriptionMessage;
    private _errorDisconnect;
    private _timeoutStartSubscriptionAck;
    private _initializeWebSocketConnection;
    private _initializeRetryableHandshake;
    private _initializeHandshake;
    private _awsRealTimeHeaderBasedAuth;
    private _awsRealTimeCUPHeader;
    private _awsRealTimeOPENIDHeader;
    private _awsRealTimeApiKeyHeader;
    private _awsRealTimeIAMHeader;
    private _customAuthHeader;
    /**
     * @private
     */
    _ensureCredentials(): any;
}
export {};