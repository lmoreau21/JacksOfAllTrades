/// <reference types="react" />
import { LocationSearchProps } from 'maplibre-gl-geocoder';
/**
 * The `<LocationSearch>` component provides location search.
 *
 * [📖 Docs](https://ui.docs.amplify.aws/react/connected-components/geo#location-search)
 *
 * @example
 * // Used as a map control:
 * function App() {
 *   return (
 *     <MapView>
 *       <LocationSearch />
 *     </MapView>
 *   );
 * }
 *
 * @example
 * // Used as a standalone component:
 * function App() {
 *   return <LocationSearch />;
 * }
 */
export declare const LocationSearch: (props: LocationSearchProps) => JSX.Element;
export declare const Geocoder: (props: LocationSearchProps) => JSX.Element;
