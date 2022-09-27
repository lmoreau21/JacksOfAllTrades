import { PersistentModel } from '@aws-amplify/datastore';
import { UseDataStoreActionOptions } from './shared/types';
export interface UseDataStoreUpdateActionOptions<Model extends PersistentModel> extends UseDataStoreActionOptions<Model> {
    id: string;
}
/**
 * Action to Update DataStore item
 * @internal
 */
export declare const useDataStoreUpdateAction: <Model extends Readonly<{
    id: string;
} & Record<string, any>>>({ fields, id, model, schema, }: UseDataStoreUpdateActionOptions<Model>) => (() => Promise<void>);
