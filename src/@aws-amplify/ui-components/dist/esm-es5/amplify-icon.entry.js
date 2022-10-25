import { r as registerInstance } from './index-83f2275b.js';
import { i as icons } from './icons-c10e1d4d.js';
var amplifyIconCss = ".sc-amplify-icon-h{--width:auto;--height:auto;--icon-fill-color:var(--amplify-white)}svg.sc-amplify-icon{fill:var(--icon-fill-color);width:var(--width);height:var(--height)}";
var AmplifyIcon = /** @class */ (function () {
    function AmplifyIcon(hostRef) {
        registerInstance(this, hostRef);
    }
    AmplifyIcon.prototype.validateName = function (newValue) {
        var isBlank = typeof newValue == null;
        if (isBlank) {
            throw new Error('name: required');
        }
    };
    // https://stenciljs.com/docs/templating-jsx#avoid-shared-jsx-nodes
    AmplifyIcon.prototype.render = function () {
        return icons[this.name]();
    };
    Object.defineProperty(AmplifyIcon, "watchers", {
        get: function () {
            return {
                "name": ["validateName"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return AmplifyIcon;
}());
AmplifyIcon.style = amplifyIconCss;
export { AmplifyIcon as amplify_icon };
