import { PersistentModel, PersistentModelConstructor } from '@aws-amplify/datastore';
export interface UseDataStoreDeleteActionOptions<Model extends PersistentModel> {
    model: PersistentModelConstructor<Model>;
    id: string;
}
/**
 * Action to Delete DataStore item
 * @internal
 */
export declare const useDataStoreDeleteAction: <Model extends Readonly<{
    id: string;
} & Record<string, any>>>({ model, id, }: UseDataStoreDeleteActionOptions<Model>) => (() => Promise<void>);
