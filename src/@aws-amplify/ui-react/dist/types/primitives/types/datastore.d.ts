import { PersistentModel, PersistentModelConstructor, ProducerModelPredicate, ProducerPaginationInput } from '@aws-amplify/datastore';
export declare type DataStoreItemProps<Model extends PersistentModel> = {
    model: PersistentModelConstructor<Model>;
    id: string;
};
export declare type DataStoreCollectionProps<Model extends PersistentModel> = {
    model: PersistentModelConstructor<Model>;
    criteria?: ProducerModelPredicate<Model>;
    pagination?: ProducerPaginationInput<Model>;
};
declare type DataStoreBaseResult = {
    error?: Error;
    isLoading: boolean;
};
export declare type DataStoreItemResult<Model extends PersistentModel> = DataStoreBaseResult & {
    item?: Model;
};
export declare type DataStoreCollectionResult<Model extends PersistentModel> = DataStoreBaseResult & {
    items: Model[];
};
export declare type DataStoreBindingProps<Model extends PersistentModel, BindingType extends 'record' | 'collection'> = {
    type: BindingType;
} & (BindingType extends 'record' ? DataStoreItemProps<Model> : BindingType extends 'collection' ? DataStoreCollectionProps<Model> : never);
export declare type DataStorePredicateObject = {
    and?: DataStorePredicateObject[];
    or?: DataStorePredicateObject[];
    field?: string;
    operand?: string;
    operator?: string;
};
export {};
