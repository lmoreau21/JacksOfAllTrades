import { PersistentModel } from '@aws-amplify/datastore';
import { UseDataStoreActionOptions } from './shared/types';
export interface UseDataStoreCreateActionOptions<Model extends PersistentModel> extends UseDataStoreActionOptions<Model> {
}
/**
 * Action to Create DataStore item
 * @internal
 */
export declare const useDataStoreCreateAction: <Model extends Readonly<{
    id: string;
} & Record<string, any>>>({ model, fields, schema, }: UseDataStoreCreateActionOptions<Model>) => (() => Promise<void>);