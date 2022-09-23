import Observable from 'zen-observable-ts';
import { PubSubProvider, PubSubOptions, ProviderOptions } from './types';
export declare class PubSubClass {
    private _options;
    private _pluggables;
    /**
     * Internal instance of AWSAppSyncProvider used by the API category to subscribe to AppSync
     */
    private _awsAppSyncProvider?;
    /**
     * Internal instance of AWSAppSyncRealTimeProvider used by the API category to subscribe to AppSync
     */
    private _awsAppSyncRealTimeProvider?;
    /**
     * Lazy instantiate AWSAppSyncProvider when it is required by the API category
     */
    private get awsAppSyncProvider();
    /**
     * Lazy instantiate AWSAppSyncRealTimeProvider when it is required by the API category
     */
    private get awsAppSyncRealTimeProvider();
    /**
     * Initialize PubSub with AWS configurations
     *
     * @param {PubSubOptions} options - Configuration object for PubSub
     */
    constructor(options?: PubSubOptions);
    getModuleName(): string;
    /**
     * Configure PubSub part with configurations
     *
     * @param {PubSubOptions} config - Configuration for PubSub
     * @return {Object} - The current configuration
     */
    configure(options: PubSubOptions): PubSubOptions;
    /**
     * add plugin into Analytics category
     * @param {Object} pluggable - an instance of the plugin
     */
    addPluggable(pluggable: PubSubProvider): Promise<object>;
    /**
     * remove plugin from PubSub category
     * @param providerName - the name of the plugin
     */
    removePluggable(providerName: string): void;
    private getProviderByName;
    private getProviders;
    publish(topics: string[] | string, msg: any, options?: ProviderOptions): Promise<void[]>;
    subscribe(topics: string[] | string, options?: ProviderOptions): Observable<any>;
}
export declare const PubSub: PubSubClass;