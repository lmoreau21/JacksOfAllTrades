import { Component, h, Host } from '@stencil/core';
/**
 * @slot (default) - Content placed within the container
 */
export class AmplifyContainer {
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "amplify-container"; }
    static get originalStyleUrls() { return {
        "$": ["amplify-container.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["amplify-container.css"]
    }; }
}