import { Place, GeoConfig, Coordinates, SearchByTextOptions, SearchByCoordinatesOptions, GeoProvider, MapStyle, GeofenceId, GeofenceInput, GeofenceOptions, SaveGeofencesResults, Geofence, ListGeofenceOptions, ListGeofenceResults, DeleteGeofencesResults } from './types';
export declare class GeoClass {
    static MODULE: string;
    /**
     * @private
     */
    private _config;
    private _pluggables;
    constructor();
    /**
     * get the name of the module category
     * @returns {string} name of the module category
     */
    getModuleName(): string;
    /**
     * add plugin into Geo category
     * @param {Object} pluggable - an instance of the plugin
     */
    addPluggable(pluggable: GeoProvider): object;
    /**
     * Get the plugin object
     * @param providerName - the name of the plugin
     */
    getPluggable(providerName: string): GeoProvider;
    /**
     * Remove the plugin object
     * @param providerName - the name of the plugin
     */
    removePluggable(providerName: string): void;
    /**
     * Configure Geo
     * @param {Object} config - Configuration object for Geo
     * @return {Object} - Current configuration
     */
    configure(config?: any): GeoConfig;
    /**
     * Get the map resources that are currently available through the provider
     * @param {string} provider
     * @returns - Array of available map resources
     */
    getAvailableMaps(provider?: string): MapStyle[];
    /**
     * Get the map resource set as default in amplify config
     * @param {string} provider
     * @returns - Map resource set as the default in amplify config
     */
    getDefaultMap(provider?: string): MapStyle;
    /**
     * Search by text input with optional parameters
     * @param  {string} text - The text string that is to be searched for
     * @param  {SearchByTextOptions} options? - Optional parameters to the search
     * @returns {Promise<Place[]>} - Promise resolves to a list of Places that match search parameters
     */
    searchByText(text: string, options?: SearchByTextOptions): Promise<Place[]>;
    /**
     * Reverse geocoding search via a coordinate point on the map
     * @param coordinates - Coordinates array for the search input
     * @param options - Options parameters for the search
     * @returns {Promise<Place>} - Promise that resolves to a place matching search coordinates
     */
    searchByCoordinates(coordinates: Coordinates, options?: SearchByCoordinatesOptions): Promise<Place>;
    /**
     * Create geofences
     * @param geofences - Single or array of geofence objects to create
     * @param options? - Optional parameters for creating geofences
     * @returns {Promise<SaveGeofencesResults>} - Promise that resolves to an object with:
     *   successes: list of geofences successfully created
     *   errors: list of geofences that failed to create
     */
    saveGeofences(geofences: GeofenceInput | GeofenceInput[], options?: GeofenceOptions): Promise<SaveGeofencesResults>;
    /**
     * Get a single geofence by geofenceId
     * @param geofenceId: GeofenceId - The string id of the geofence to get
     * @param options?: GeofenceOptions - Optional parameters for getting a geofence
     * @returns Promise<Geofence> - Promise that resolves to a geofence object
     */
    getGeofence(geofenceId: GeofenceId, options?: GeofenceOptions): Promise<Geofence>;
    /**
     * List geofences
     * @param  options?: ListGeofenceOptions
     * @returns {Promise<ListGeofencesResults>} - Promise that resolves to an object with:
     *   entries: list of geofences - 100 geofences are listed per page
     *   nextToken: token for next page of geofences
     */
    listGeofences(options?: ListGeofenceOptions): Promise<ListGeofenceResults>;
    /**
     * Delete geofences
     * @param geofenceIds: string|string[]
     * @param options?: GeofenceOptions
     * @returns {Promise<DeleteGeofencesResults>} - Promise that resolves to an object with:
     *  successes: list of geofences successfully deleted
     *  errors: list of geofences that failed to delete
     */
    deleteGeofences(geofenceIds: string | string[], options?: GeofenceOptions): Promise<DeleteGeofencesResults>;
}
export declare const Geo: GeoClass;
