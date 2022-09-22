import Observable from 'zen-observable-ts';
import { AbstractPubSubProvider } from './PubSubProvider';
import { ProviderOptions, SubscriptionObserver } from '../types';
export declare function mqttTopicMatch(filter: string, topic: string): boolean;
export interface MqttProviderOptions extends ProviderOptions {
    clientId?: string;
    url?: string;
}
/**
 * @deprecated Migrated to MqttProviderOptions
 */
export declare type MqttProvidertOptions = MqttProviderOptions;
declare class ClientsQueue {
    private promises;
    get(clientId: string, clientFactory?: (input: string) => Promise<any>): Promise<any>;
    get allClients(): string[];
    remove(clientId: string): void;
}
export declare class MqttOverWSProvider extends AbstractPubSubProvider {
    private _clientsQueue;
    private readonly connectionStateMonitor;
    constructor(options?: MqttProviderOptions);
    protected get clientId(): any;
    protected get endpoint(): any;
    protected get clientsQueue(): ClientsQueue;
    protected get isSSLEnabled(): boolean;
    protected getTopicForValue(value: any): any;
    getProviderName(): string;
    onDisconnect({ clientId, errorCode, ...args }: {
        clientId?: string;
        errorCode?: number;
    }): void;
    newClient({ url, clientId }: MqttProviderOptions): Promise<any>;
    protected connect(clientId: string, options?: MqttProviderOptions): Promise<any>;
    protected disconnect(clientId: string): Promise<void>;
    publish(topics: string[] | string, msg: any): Promise<void>;
    protected _topicObservers: Map<string, Set<SubscriptionObserver<any>>>;
    protected _clientIdObservers: Map<string, Set<SubscriptionObserver<any>>>;
    private _onMessage;
    subscribe(topics: string[] | string, options?: MqttProviderOptions): Observable<any>;
}
export {};
