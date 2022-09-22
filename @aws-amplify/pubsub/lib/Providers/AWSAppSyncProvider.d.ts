import Observable from 'zen-observable-ts';
import { MqttOverWSProvider } from './MqttOverWSProvider';
/**
 * @deprecated Unused, all usecases have migrated to AWSAppSyncRealtimeProvider
 */
export declare class AWSAppSyncProvider extends MqttOverWSProvider {
    protected get endpoint(): void;
    getProviderName(): string;
    publish(topics: string[] | string, msg: any, options?: any): Promise<void>;
    private _cleanUp;
    private _cleanUpForTopic;
    onDisconnect({ clientId, errorCode, ...args }: {
        [x: string]: any;
        clientId: any;
        errorCode: any;
    }): void;
    private _topicClient;
    private _topicAlias;
    protected disconnect(clientId: string): Promise<void>;
    subscribe(topics: string[] | string, options?: any): Observable<any>;
}
