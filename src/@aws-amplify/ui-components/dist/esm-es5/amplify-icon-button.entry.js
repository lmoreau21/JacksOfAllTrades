import { r as registerInstance, h } from './index-83f2275b.js';
var amplifyIconButtonCss = ":host{--button-color:var(--amplify-secondary-contrast);--button-background-hover:var(--amplify-secondary-color)}.action-button button{position:relative;padding:0;background:none;height:54px;width:54px;cursor:pointer;outline:none;text-decoration:none;border:none;border-radius:30px;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;color:var(--button-color);fill:currentColor}.action-button button:hover{background-color:var(--button-background-hover);-webkit-box-shadow:0.3px 0.3px 0.3px rgba(0, 0, 0, 0.3);box-shadow:0.3px 0.3px 0.3px rgba(0, 0, 0, 0.3)}.action-button button:hover>.tooltip{display:block}.action-button button:hover>svg{-webkit-filter:none;filter:none}.action-button button:focus{outline:none}.action-button button svg{width:1.8em;height:1.8em;-webkit-filter:drop-shadow(1px 1px 1px var(--amplify-grey));filter:drop-shadow(1px 1px 1px var(--amplify-grey))}";
var AmplifyIconButton = /** @class */ (function () {
    function AmplifyIconButton(hostRef) {
        registerInstance(this, hostRef);
        /** (Optional) The tooltip that will show on hover of the button */
        this.tooltip = null;
        /** (Optional) Whether or not to show the tooltip automatically */
        this.autoShowTooltip = false;
    }
    AmplifyIconButton.prototype.render = function () {
        return (h("span", { class: "action-button" }, h("amplify-tooltip", { text: this.tooltip, shouldAutoShow: this.autoShowTooltip }, h("button", null, h("amplify-icon", { name: this.name })))));
    };
    return AmplifyIconButton;
}());
AmplifyIconButton.style = amplifyIconButtonCss;
export { AmplifyIconButton as amplify_icon_button };