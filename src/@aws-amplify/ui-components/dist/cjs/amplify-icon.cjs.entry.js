'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6d44143a.js');
const icons = require('./icons-bb14c572.js');

const amplifyIconCss = ".sc-amplify-icon-h{--width:auto;--height:auto;--icon-fill-color:var(--amplify-white)}svg.sc-amplify-icon{fill:var(--icon-fill-color);width:var(--width);height:var(--height)}";

const AmplifyIcon = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    validateName(newValue) {
        const isBlank = typeof newValue == null;
        if (isBlank) {
            throw new Error('name: required');
        }
    }
    // https://stenciljs.com/docs/templating-jsx#avoid-shared-jsx-nodes
    render() {
        return icons.icons[this.name]();
    }
    static get watchers() { return {
        "name": ["validateName"]
    }; }
};
AmplifyIcon.style = amplifyIconCss;

exports.amplify_icon = AmplifyIcon;
