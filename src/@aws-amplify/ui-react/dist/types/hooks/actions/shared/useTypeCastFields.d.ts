import { ModelInit, Schema } from '@aws-amplify/datastore';
import { DataStoreActionFields } from './types';
interface UseTypeCastFieldsProps<Model> {
    fields: DataStoreActionFields<Model>;
    modelName: string;
    schema: Schema;
}
declare type UseTypeCastFieldsReturn<Model> = ModelInit<Model> | undefined;
/**
 * Optimistically casts field string values to types required by
 * datastore based on the schema type
 * @see: See https://docs.aws.amazon.com/appsync/latest/devguide/scalars.html
 */
export declare const useTypeCastFields: <Model>({ fields, modelName, schema, }: UseTypeCastFieldsProps<Model>) => ModelInit<Model, {
    readOnlyFields: "createdAt" | "updatedAt";
}>;
export {};