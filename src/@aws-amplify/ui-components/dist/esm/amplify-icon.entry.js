import { r as registerInstance } from './index-83f2275b.js';
import { i as icons } from './icons-c10e1d4d.js';

const amplifyIconCss = ".sc-amplify-icon-h{--width:auto;--height:auto;--icon-fill-color:var(--amplify-white)}svg.sc-amplify-icon{fill:var(--icon-fill-color);width:var(--width);height:var(--height)}";

const AmplifyIcon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    validateName(newValue) {
        const isBlank = typeof newValue == null;
        if (isBlank) {
            throw new Error('name: required');
        }
    }
    // https://stenciljs.com/docs/templating-jsx#avoid-shared-jsx-nodes
    render() {
        return icons[this.name]();
    }
    static get watchers() { return {
        "name": ["validateName"]
    }; }
};
AmplifyIcon.style = amplifyIconCss;

export { AmplifyIcon as amplify_icon };
