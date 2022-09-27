import { Component, Host, h, Prop, State, Listen, Event, Element, } from '@stencil/core';
import { I18n } from '@aws-amplify/core';
import { Interactions } from '@aws-amplify/interactions';
import { AudioRecorder, visualize } from '../../common/audio-control';
import { NO_INTERACTIONS_MODULE_FOUND } from '../../common/constants';
import { Translations } from '../../common/Translations';
// enum for possible bot states
var ChatState;
(function (ChatState) {
    ChatState[ChatState["Initial"] = 0] = "Initial";
    ChatState[ChatState["Listening"] = 1] = "Listening";
    ChatState[ChatState["SendingText"] = 2] = "SendingText";
    ChatState[ChatState["SendingVoice"] = 3] = "SendingVoice";
    ChatState[ChatState["Error"] = 4] = "Error";
})(ChatState || (ChatState = {}));
// Message types
var MessageFrom;
(function (MessageFrom) {
    MessageFrom["Bot"] = "bot";
    MessageFrom["User"] = "user";
})(MessageFrom || (MessageFrom = {}));
// Error types
var ChatErrorType;
(function (ChatErrorType) {
    ChatErrorType[ChatErrorType["Recoverable"] = 0] = "Recoverable";
    ChatErrorType[ChatErrorType["Unrecoverable"] = 1] = "Unrecoverable";
})(ChatErrorType || (ChatErrorType = {}));
/**
 * @slot header - Title content placed at the top
 */
export class AmplifyChatbot {
    constructor() {
        /** Clear messages when conversation finishes */
        this.clearOnComplete = false;
        /** Continue listening to users after they send the message */
        this.conversationModeOn = false;
        /** Text placed in the top header */
        this.botTitle = Translations.CHATBOT_TITLE;
        /** Whether voice chat is enabled */
        this.voiceEnabled = false;
        /** Whether text chat is enabled */
        this.textEnabled = true;
        /** Amount of silence (in ms) to wait for */
        this.silenceTime = 1500;
        /** Noise threshold between -1 and 1. Anything below is considered a silence. */
        this.silenceThreshold = 0.2;
        /** Messages in current session */
        this.messages = [];
        /** Text input box value  */
        this.text = '';
        /** Current app state */
        this.chatState = ChatState.Initial;
        /**
         * Rendering methods
         */
        this.messageJSX = (messages) => {
            const messageList = messages.map(message => (h("div", { class: `bubble ${message.from}` }, message.content)));
            if (this.chatState === ChatState.SendingText ||
                this.chatState === ChatState.SendingVoice) {
                // if waiting for voice message, show animation on user side because app is waiting for transcript. Else put it on bot side.
                const client = this.chatState === ChatState.SendingText
                    ? MessageFrom.Bot
                    : MessageFrom.User;
                messageList.push(h("div", { class: `bubble ${client}` },
                    h("div", { class: `dot-flashing ${client}` },
                        h("span", { class: "dot left" }),
                        h("span", { class: "dot middle" }),
                        h("span", { class: "dot right" }))));
            }
            return messageList;
        };
    }
    // Occurs when user presses enter in input box
    submitHandler(_event) {
        this.sendTextMessage();
    }
    /**
     * Lifecycle functions
     */
    componentWillLoad() {
        if (!Interactions || typeof Interactions.onComplete !== 'function') {
            throw new Error(NO_INTERACTIONS_MODULE_FOUND);
        }
        this.validateProps();
    }
    componentDidRender() {
        // scroll to the bottom if necessary
        const body = this.element.shadowRoot.querySelector('.body');
        body.scrollTop = body.scrollHeight;
    }
    validateProps() {
        if (!this.voiceEnabled && !this.textEnabled) {
            this.setError(Translations.CHAT_DISABLED_ERROR, ChatErrorType.Unrecoverable);
            return;
        }
        else if (!this.botName) {
            this.setError(Translations.NO_BOT_NAME_ERROR, ChatErrorType.Unrecoverable);
            return;
        }
        if (this.welcomeMessage)
            this.appendToChat(this.welcomeMessage, MessageFrom.Bot);
        // Initialize AudioRecorder if voice is enabled
        if (this.voiceEnabled) {
            this.audioRecorder = new AudioRecorder({
                time: this.silenceTime,
                amplitude: this.silenceThreshold,
            });
            this.audioRecorder.init().catch(err => {
                this.setError(err, ChatErrorType.Recoverable);
            });
        }
        // Callback function to be called after chat is completed
        const onComplete = (err, data) => {
            this.chatCompleted.emit({
                data,
                err,
            });
            if (this.clearOnComplete) {
                this.reset();
            }
            else {
                this.chatState = ChatState.Initial;
            }
        };
        try {
            Interactions.onComplete(this.botName, onComplete);
        }
        catch (err) {
            this.setError(err, ChatErrorType.Unrecoverable);
        }
    }
    /**
     * Handlers
     */
    handleSubmit(event) {
        event.preventDefault();
        this.sendTextMessage();
    }
    handleMicButton() {
        if (this.chatState !== ChatState.Initial)
            return;
        this.audioRecorder.stop();
        this.chatState = ChatState.Listening;
        this.audioRecorder.startRecording(() => this.handleSilence(), (data, length) => this.visualizer(data, length));
    }
    handleSilence() {
        this.chatState = ChatState.SendingVoice;
        this.audioRecorder.stopRecording();
        this.audioRecorder.exportWAV().then(blob => {
            this.sendVoiceMessage(blob);
        });
    }
    handleTextChange(event) {
        const target = event.target;
        this.text = target.value;
    }
    handleCancelButton() {
        this.audioRecorder.clear();
        this.chatState = ChatState.Initial;
    }
    handleToastClose(errorType) {
        this.error = undefined; // clear error
        // if error is recoverable, reset the app state to initial
        if (errorType === ChatErrorType.Recoverable) {
            this.chatState = ChatState.Initial;
        }
    }
    /**
     * Visualization
     */
    visualizer(dataArray, bufferLength) {
        const canvas = this.element.shadowRoot.querySelector('canvas');
        visualize(dataArray, bufferLength, canvas);
    }
    /**
     * Interactions helpers
     */
    async sendTextMessage() {
        if (this.text.length === 0 || this.chatState !== ChatState.Initial)
            return;
        const text = this.text;
        this.text = '';
        this.appendToChat(text, MessageFrom.User);
        this.chatState = ChatState.SendingText;
        let response;
        try {
            response = await Interactions.send(this.botName, text);
        }
        catch (err) {
            this.setError(err, ChatErrorType.Recoverable);
            return;
        }
        if (response.message) {
            this.appendToChat(response.message, MessageFrom.Bot);
        }
        this.chatState = ChatState.Initial;
    }
    async sendVoiceMessage(audioInput) {
        const interactionsMessage = {
            content: audioInput,
            options: {
                messageType: 'voice',
            },
        };
        let response;
        try {
            response = await Interactions.send(this.botName, interactionsMessage);
        }
        catch (err) {
            this.setError(err, ChatErrorType.Recoverable);
            return;
        }
        this.chatState = ChatState.Initial;
        const dialogState = response.dialogState;
        if (response.inputTranscript)
            this.appendToChat(response.inputTranscript, MessageFrom.User);
        this.appendToChat(response.message, MessageFrom.Bot);
        await this.audioRecorder
            .play(response.audioStream)
            .then(() => {
            // if conversationMode is on, chat is incomplete, and mic button isn't pressed yet, resume listening.
            if (this.conversationModeOn &&
                dialogState !== 'Fulfilled' &&
                dialogState !== 'Failed' &&
                this.chatState === ChatState.Initial) {
                this.handleMicButton();
            }
        })
            .catch(err => this.setError(err, ChatErrorType.Recoverable));
    }
    appendToChat(content, from) {
        this.messages = [
            ...this.messages,
            {
                content,
                from,
            },
        ];
    }
    /**
     * State control methods
     */
    setError(error, errorType) {
        const message = typeof error === 'string' ? error : error.message;
        this.chatState = ChatState.Error;
        this.error = { message, errorType };
    }
    reset() {
        this.chatState = ChatState.Initial;
        this.text = '';
        this.error = undefined;
        this.messages = [];
        if (this.welcomeMessage)
            this.appendToChat(this.welcomeMessage, MessageFrom.Bot);
        this.audioRecorder && this.audioRecorder.clear();
    }
    listeningFooterJSX() {
        const visualization = h("canvas", { height: "50" });
        const cancelButton = (h("amplify-button", { "data-test": "chatbot-cancel-button", handleButtonClick: () => this.handleCancelButton(), class: "icon-button", variant: "icon", icon: "ban" }));
        return [visualization, cancelButton];
    }
    footerJSX() {
        if (this.chatState === ChatState.Listening)
            return this.listeningFooterJSX();
        const inputPlaceholder = this.textEnabled
            ? Translations.TEXT_INPUT_PLACEHOLDER
            : Translations.VOICE_INPUT_PLACEHOLDER;
        const textInput = (h("amplify-input", { placeholder: I18n.get(inputPlaceholder), description: "text", handleInputChange: evt => this.handleTextChange(evt), value: this.text, disabled: this.chatState === ChatState.Error || !this.textEnabled }));
        const micButton = this.voiceEnabled && (h("amplify-button", { "data-test": "chatbot-mic-button", handleButtonClick: () => this.handleMicButton(), class: "icon-button", variant: "icon", icon: "microphone", disabled: this.chatState === ChatState.Error ||
                this.chatState !== ChatState.Initial }));
        const sendButton = this.textEnabled && (h("amplify-button", { "data-test": "chatbot-send-button", class: "icon-button", variant: "icon", icon: "send", handleButtonClick: () => this.sendTextMessage(), disabled: this.chatState === ChatState.Error ||
                this.chatState !== ChatState.Initial }));
        return [textInput, micButton, sendButton];
    }
    errorToast() {
        if (!this.error)
            return;
        const { message, errorType } = this.error;
        return (h("amplify-toast", { message: I18n.get(message), handleClose: () => this.handleToastClose(errorType) }));
    }
    render() {
        return (h(Host, null,
            h("div", { class: "amplify-chatbot" },
                h("slot", { name: "header" },
                    h("div", { class: "header", "data-test": "chatbot-header" }, I18n.get(this.botTitle))),
                h("div", { class: "body", "data-test": "chatbot-body" }, this.messageJSX(this.messages)),
                h("form", { onSubmit: e => this.handleSubmit(e) },
                    h("div", { class: "footer", "data-test": "chatbot-footer" }, this.footerJSX())),
                this.errorToast())));
    }
    static get is() { return "amplify-chatbot"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["amplify-chatbot.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["amplify-chatbot.css"]
    }; }
    static get properties() { return {
        "botName": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Name of the bot"
            },
            "attribute": "bot-name",
            "reflect": false
        },
        "clearOnComplete": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Clear messages when conversation finishes"
            },
            "attribute": "clear-on-complete",
            "reflect": false,
            "defaultValue": "false"
        },
        "conversationModeOn": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Continue listening to users after they send the message"
            },
            "attribute": "conversation-mode-on",
            "reflect": false,
            "defaultValue": "false"
        },
        "welcomeMessage": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Greeting message displayed to users"
            },
            "attribute": "welcome-message",
            "reflect": false
        },
        "botTitle": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Text placed in the top header"
            },
            "attribute": "bot-title",
            "reflect": false,
            "defaultValue": "Translations.CHATBOT_TITLE"
        },
        "voiceEnabled": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Whether voice chat is enabled"
            },
            "attribute": "voice-enabled",
            "reflect": false,
            "defaultValue": "false"
        },
        "textEnabled": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Whether text chat is enabled"
            },
            "attribute": "text-enabled",
            "reflect": false,
            "defaultValue": "true"
        },
        "silenceTime": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Amount of silence (in ms) to wait for"
            },
            "attribute": "silence-time",
            "reflect": false,
            "defaultValue": "1500"
        },
        "silenceThreshold": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Noise threshold between -1 and 1. Anything below is considered a silence."
            },
            "attribute": "silence-threshold",
            "reflect": false,
            "defaultValue": "0.2"
        }
    }; }
    static get states() { return {
        "messages": {},
        "text": {},
        "chatState": {},
        "error": {}
    }; }
    static get events() { return [{
            "method": "chatCompleted",
            "name": "chatCompleted",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Event emitted when conversation is completed"
            },
            "complexType": {
                "original": "ChatResult",
                "resolved": "ChatResult",
                "references": {
                    "ChatResult": {
                        "location": "import",
                        "path": "../../common/types/interactions-types"
                    }
                }
            }
        }]; }
    static get elementRef() { return "element"; }
    static get listeners() { return [{
            "name": "formSubmit",
            "method": "submitHandler",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
