import { Amplify } from '@aws-amplify/core';
export { Analytics, AnalyticsProvider, AWSPinpointProvider, AWSKinesisProvider, AWSKinesisFirehoseProvider, AmazonPersonalizeProvider, } from '@aws-amplify/analytics';
export { Auth } from '@aws-amplify/auth';
export { Storage, StorageClass } from '@aws-amplify/storage';
export { API, APIClass, graphqlOperation } from '@aws-amplify/api';
export { AuthModeStrategyType, DataStore, Predicates, SortDirection, syncExpression, } from '@aws-amplify/datastore';
export { PubSub } from '@aws-amplify/pubsub';
export { BrowserStorageCache as Cache } from '@aws-amplify/cache';
export { Interactions } from '@aws-amplify/interactions';
export * from '@aws-amplify/ui';
export { XR } from '@aws-amplify/xr';
export { Predictions } from '@aws-amplify/predictions';
export { ConsoleLogger as Logger, Hub, JS, ClientDevice, Signer, I18n, ServiceWorker, AWSCloudWatchProvider, } from '@aws-amplify/core';
export { withSSRContext } from './withSSRContext';
export { Geo } from '@aws-amplify/geo';
export { Amplify };
/**
 * @deprecated use named import
 */
export default Amplify;