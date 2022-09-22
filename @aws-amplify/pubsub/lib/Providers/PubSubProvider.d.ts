import Observable from 'zen-observable-ts';
import { PubSubProvider, ProviderOptions } from '../types';
export declare abstract class AbstractPubSubProvider implements PubSubProvider {
    private _config;
    constructor(options?: ProviderOptions);
    configure(config?: ProviderOptions): ProviderOptions;
    getCategory(): string;
    abstract getProviderName(): string;
    protected get options(): ProviderOptions;
    abstract newClient(clientOptions: ProviderOptions): Promise<any>;
    abstract publish(topics: string[] | string, msg: any, options?: ProviderOptions): void;
    abstract subscribe(topics: string[] | string, options?: ProviderOptions): Observable<any>;
}
