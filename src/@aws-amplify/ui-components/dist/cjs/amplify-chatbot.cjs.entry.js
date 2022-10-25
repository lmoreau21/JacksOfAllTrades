'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6d44143a.js');
const core = require('@aws-amplify/core');
require('@aws-amplify/auth');
const Translations = require('./Translations-5f4bb72c.js');
const constants = require('./constants-1335fef8.js');
const interactions = require('@aws-amplify/interactions');

// AudioRecorder settings
const RECORDER_EXPORT_MIME_TYPE = 'application/octet-stream';
const DEFAULT_EXPORT_SAMPLE_RATE = 16000;
const FFT_SIZE = 2048; // window size in samples for Fast Fourier Transform (FFT)
const FFT_MAX_DECIBELS = -10; // maximum power value in the scaling range for the FFT analysis data
const FFT_MIN_DECIBELS = -90; // minimum power value in the scaling range for the FFT analysis data
const FFT_SMOOTHING_TIME_CONSTANT = 0.85; // averaging constant with the last analysis frame

/**
 * Merges multiple buffers into one.
 */
const mergeBuffers = (bufferArray, recLength) => {
    const result = new Float32Array(recLength);
    let offset = 0;
    for (let i = 0; i < bufferArray.length; i++) {
        result.set(bufferArray[i], offset);
        offset += bufferArray[i].length;
    }
    return result;
};
/**
 * Downsamples audio to desired export sample rate.
 */
const downsampleBuffer = (buffer, recordSampleRate, exportSampleRate) => {
    if (exportSampleRate === recordSampleRate) {
        return buffer;
    }
    const sampleRateRatio = recordSampleRate / exportSampleRate;
    const newLength = Math.round(buffer.length / sampleRateRatio);
    const result = new Float32Array(newLength);
    let offsetResult = 0;
    let offsetBuffer = 0;
    while (offsetResult < result.length) {
        const nextOffsetBuffer = Math.round((offsetResult + 1) * sampleRateRatio);
        let accum = 0, count = 0;
        for (let i = offsetBuffer; i < nextOffsetBuffer && i < buffer.length; i++) {
            accum += buffer[i];
            count++;
        }
        result[offsetResult] = accum / count;
        offsetResult++;
        offsetBuffer = nextOffsetBuffer;
    }
    return result;
};
/**
 * converts raw audio values to 16 bit pcm.
 */
const floatTo16BitPCM = (output, offset, input) => {
    let byteOffset = offset;
    for (let i = 0; i < input.length; i++, byteOffset += 2) {
        const s = Math.max(-1, Math.min(1, input[i]));
        output.setInt16(byteOffset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
    }
};
/**
 * Write given strings in big-endian order.
 */
const writeString = (view, offset, string) => {
    for (let i = 0; i < string.length; i++) {
        view.setUint8(offset + i, string.charCodeAt(i));
    }
};
/**
 * Encodes raw pcm audio into a wav file.
 */
const encodeWAV = (samples, exportSampleRate) => {
    /**
     * WAV file consists of three parts: RIFF header, WAVE subchunk, and data subchunk. We precompute the size of them.
     */
    const audioSize = samples.length * 2; // We use 16-bit samples, so we have (2 * sampleLength) bytes.
    const fmtSize = 24; // Byte size of the fmt subchunk: 24 bytes that the audio information that we'll set below.
    const dataSize = 8 + audioSize; // Byte size of the data subchunk: raw sound data plus 8 bytes for the subchunk descriptions.
    const totalByteSize = 12 + fmtSize + dataSize; // Byte size of the whole file, including the chunk header / descriptor.
    // create DataView object to write byte values into
    const buffer = new ArrayBuffer(totalByteSize); // buffer to write the chunk values in.
    const view = new DataView(buffer);
    /**
     * Start writing the .wav file. We write top to bottom, so byte offset (first numeric argument) increases strictly.
     */
    // RIFF header
    writeString(view, 0, 'RIFF'); // At offset 0, write the letters "RIFF"
    view.setUint32(4, fmtSize + dataSize, true); // At offset 4, write the size of fmt and data chunk size combined.
    writeString(view, 8, 'WAVE'); // At offset 8, write the format type "WAVE"
    // fmt subchunk
    writeString(view, 12, 'fmt '); //chunkdId 'fmt '
    view.setUint32(16, fmtSize - 8, true); // fmt subchunk size below this value. We set 8 bytes already, so subtract 8 bytes from fmtSize.
    view.setUint16(20, 1, true); // Audio format code, which is 1 for PCM.
    view.setUint16(22, 1, true); // Number of audio channels. We use mono, ie 1.
    view.setUint32(24, exportSampleRate, true); // Sample rate of the audio file.
    view.setUint32(28, exportSampleRate * 2, true); // Data rate, or # of data bytes per second. Since each sample is 2 bytes, this is 2 * sampleRate.
    view.setUint16(32, 2, true); // block align, # of bytes per sample including all channels, ie. 2 bytes.
    view.setUint16(34, 16, true); // bits per sample, ie. 16 bits
    // data subchunk
    writeString(view, 36, 'data'); // write the chunkId 'data'
    view.setUint32(40, audioSize, true); // Audio byte size
    floatTo16BitPCM(view, 44, samples); // raw pcm values then go here.
    return view;
};
/**
 * Given arrays of raw pcm audio, downsamples the audio to desired sample rate and encodes it to a wav audio file.
 *
 * @param recBuffer {Float32Array[]} - 2d float array containing the recorded raw audio
 * @param recLength {number} - total length of recorded audio
 * @param recordSampleRate {number} - sample rate of the recorded audio
 * @param exportSampleRate {number} - desired sample rate of the exported file
 */
const exportBuffer = (recBuffer, recLength, recordSampleRate, exportSampleRate) => {
    const mergedBuffers = mergeBuffers(recBuffer, recLength);
    const downsampledBuffer = downsampleBuffer(mergedBuffers, recordSampleRate, exportSampleRate);
    const encodedWav = encodeWAV(downsampledBuffer, exportSampleRate);
    const audioBlob = new Blob([encodedWav], {
        type: RECORDER_EXPORT_MIME_TYPE,
    });
    return audioBlob;
};

const logger = new core.Logger('AudioRecorder');
class AudioRecorder {
    constructor(options) {
        // input mic stream is stored in a buffer
        this.streamBuffer = [];
        this.streamBufferLength = 0;
        this.recording = false;
        this.options = options;
    }
    /**
     * This must be called first to enable audio context and request microphone access.
     * Once access granted, it connects all the necessary audio nodes to the context so that it can begin recording or playing.
     */
    async init() {
        if (core.browserOrNode().isBrowser) {
            window.AudioContext =
                window.AudioContext || window.webkitAudioContext;
            this.audioContext = new AudioContext();
            await navigator.mediaDevices
                .getUserMedia({ audio: true })
                .then(stream => {
                this.audioSupported = true;
                this.setupAudioNodes(stream);
            })
                .catch(() => {
                this.audioSupported = false;
                return Promise.reject('Audio is not supported');
            });
        }
        else {
            this.audioSupported = false;
            return Promise.reject('Audio is not supported');
        }
    }
    /**
     * Setup audio nodes after successful `init`.
     */
    async setupAudioNodes(stream) {
        try {
            await this.audioContext.resume();
        }
        catch (err) {
            logger.error(err);
        }
        const sourceNode = this.audioContext.createMediaStreamSource(stream);
        const processorNode = this.audioContext.createScriptProcessor(4096, 1, 1);
        processorNode.onaudioprocess = audioProcessingEvent => {
            if (!this.recording)
                return;
            const stream = audioProcessingEvent.inputBuffer.getChannelData(0);
            this.streamBuffer.push(new Float32Array(stream)); // set to a copy of the stream
            this.streamBufferLength += stream.length;
            this.analyse();
        };
        const analyserNode = this.audioContext.createAnalyser();
        analyserNode.minDecibels = FFT_MIN_DECIBELS;
        analyserNode.maxDecibels = FFT_MAX_DECIBELS;
        analyserNode.smoothingTimeConstant = FFT_SMOOTHING_TIME_CONSTANT;
        sourceNode.connect(analyserNode);
        analyserNode.connect(processorNode);
        processorNode.connect(sourceNode.context.destination);
        this.analyserNode = analyserNode;
    }
    /**
     * Start recording audio and listen for silence.
     *
     * @param onSilence {SilenceHandler} - called whenever silence is detected
     * @param visualizer {Visualizer} - called with audio data on each audio process to be used for visualization.
     */
    async startRecording(onSilence, visualizer) {
        if (this.recording || !this.audioSupported)
            return;
        this.onSilence = onSilence || function () { };
        this.visualizer = visualizer || function () { };
        const context = this.audioContext;
        try {
            await context.resume();
        }
        catch (err) {
            logger.error(err);
        }
        this.start = Date.now();
        this.recording = true;
    }
    /**
     * Pause recording
     */
    stopRecording() {
        if (!this.audioSupported)
            return;
        this.recording = false;
    }
    /**
     * Pause recording and clear audio buffer
     */
    clear() {
        this.stopRecording();
        this.streamBufferLength = 0;
        this.streamBuffer = [];
    }
    /**
     * Plays given audioStream with audioContext
     *
     * @param buffer {Uint8Array} - audioStream to be played
     */
    play(buffer) {
        if (!buffer || !this.audioSupported)
            return;
        const myBlob = new Blob([buffer]);
        return new Promise((res, rej) => {
            const fileReader = new FileReader();
            fileReader.onload = () => {
                if (this.playbackSource)
                    this.playbackSource.disconnect(); // disconnect previous playback source
                this.playbackSource = this.audioContext.createBufferSource();
                const successCallback = (buf) => {
                    this.playbackSource.buffer = buf;
                    this.playbackSource.connect(this.audioContext.destination);
                    this.playbackSource.onended = () => {
                        return res();
                    };
                    this.playbackSource.start(0);
                };
                const errorCallback = err => {
                    return rej(err);
                };
                this.audioContext.decodeAudioData(fileReader.result, successCallback, errorCallback);
            };
            fileReader.onerror = () => rej();
            fileReader.readAsArrayBuffer(myBlob);
        });
    }
    /**
     * Stops playing audio if there's a playback source connected.
     */
    stop() {
        if (this.playbackSource) {
            this.playbackSource.stop();
        }
    }
    /**
     * Called after each audioProcess. Check for silence and give fft time domain data to visualizer.
     */
    analyse() {
        if (!this.audioSupported)
            return;
        const analyser = this.analyserNode;
        analyser.fftSize = FFT_SIZE;
        const bufferLength = analyser.fftSize;
        const dataArray = new Uint8Array(bufferLength);
        const amplitude = this.options.amplitude;
        const time = this.options.time;
        analyser.getByteTimeDomainData(dataArray);
        this.visualizer(dataArray, bufferLength);
        for (let i = 0; i < bufferLength; i++) {
            // Normalize between -1 and 1.
            const curr_value_time = dataArray[i] / 128 - 1.0;
            if (curr_value_time > amplitude || curr_value_time < -1 * amplitude) {
                this.start = Date.now();
            }
        }
        const newtime = Date.now();
        const elapsedTime = newtime - this.start;
        if (elapsedTime > time) {
            this.onSilence();
        }
    }
    /**
     * Encodes recorded buffer to a wav file and exports it to a blob.
     *
     * @param exportSampleRate {number} - desired sample rate of the exported buffer
     */
    async exportWAV(exportSampleRate = DEFAULT_EXPORT_SAMPLE_RATE) {
        if (!this.audioSupported)
            return;
        const recordSampleRate = this.audioContext.sampleRate;
        const blob = exportBuffer(this.streamBuffer, this.streamBufferLength, recordSampleRate, exportSampleRate);
        this.clear();
        return blob;
    }
}

const visualize = (dataArray, bufferLength, canvas) => {
    if (!canvas)
        return;
    if (!core.browserOrNode().isBrowser)
        throw new Error('Visualization is not supported on non-browsers.');
    const { width, height } = canvas.getBoundingClientRect();
    // need to update the default canvas width and height
    canvas.width = width;
    canvas.height = height;
    const canvasCtx = canvas.getContext('2d');
    canvasCtx.fillStyle = 'white';
    canvasCtx.clearRect(0, 0, width, height);
    const draw = () => {
        canvasCtx.fillRect(0, 0, width, height);
        canvasCtx.lineWidth = 1;
        const color = getComputedStyle(document.documentElement).getPropertyValue('--amplify-primary-color');
        canvasCtx.strokeStyle = !color || color === '' ? '#ff9900' : color; // TODO: try separate css variable
        canvasCtx.beginPath();
        const sliceWidth = (width * 1.0) / bufferLength;
        let x = 0;
        for (let i = 0; i < bufferLength || i % 3 === 0; i++) {
            const value = dataArray[i] / 128.0;
            const y = (value * height) / 2;
            if (i === 0) {
                canvasCtx.moveTo(x, y);
            }
            else {
                canvasCtx.lineTo(x, y);
            }
            x += sliceWidth;
        }
        canvasCtx.lineTo(canvas.width, canvas.height / 2);
        canvasCtx.stroke();
    };
    // Register our draw function with requestAnimationFrame.
    requestAnimationFrame(draw);
};

const amplifyChatbotCss = ".bot .dot{background-color:var(--bot-dot-color)}.user .dot{background-color:var(--user-dot-color)}.dot-flashing{width:2.625rem}.dot-flashing .dot{display:inline-block;width:0.625rem;height:0.625rem;border-radius:10rem;opacity:0.65}.dot-flashing .left{-webkit-animation:dot-flashing 1s infinite alternate;animation:dot-flashing 1s infinite alternate;-webkit-animation-delay:0s;animation-delay:0s}.dot-flashing .middle{margin-left:0.375rem;margin-right:0.375rem;-webkit-animation:dot-flashing 1s infinite linear alternate;animation:dot-flashing 1s infinite linear alternate;-webkit-animation-delay:0.5s;animation-delay:0.5s}.dot-flashing .right{-webkit-animation:dot-flashing 1s infinite alternate;animation:dot-flashing 1s infinite alternate;-webkit-animation-delay:1s;animation-delay:1s}@-webkit-keyframes dot-flashing{0%{opacity:0.65}50%,100%{opacity:0.1}}@keyframes dot-flashing{0%{opacity:0.65}50%,100%{opacity:0.1}}:host{--width:28.75rem;--height:37.5rem;--header-color:var(--amplify-secondary-color);--header-size:var(--amplify-text-lg);--bot-background-color:rgb(230, 230, 230);--bot-text-color:black;--bot-dot-color:var(--bot-text-color);--user-background-color:var(--amplify-blue);--user-text-color:var(--amplify-white);--user-dot-color:var(--user-text-color)}.amplify-chatbot{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column;background-color:var(--background-color);border-radius:0.375rem;-webkit-box-shadow:0.0625rem 0rem 0.25rem 0 rgba(0, 0, 0, 0.15);box-shadow:0.0625rem 0rem 0.25rem 0 rgba(0, 0, 0, 0.15);-webkit-box-sizing:border-box;box-sizing:border-box;font-family:var(--amplify-font-family);margin-bottom:1rem;width:100%;height:var(--height);max-width:var(--width)}@media (min-width: 672px){.amplify-chatbot{width:var(--width)}}.header{padding:1.25rem 0.375rem 1.25rem 0.375rem;color:var(--header-color);font-size:var(--header-size);font-weight:bold;text-align:center;word-wrap:break-word}.body{border-top:0.0625rem solid rgba(0, 0, 0, 0.05);padding:1.5rem 1rem 0 1rem;display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-direction:column;flex-direction:column;overflow:auto}.bubble{max-width:100%;padding:0.8em 1.4em;text-align:left;word-wrap:break-word;margin-bottom:0.625rem}.bot{margin-right:auto;background-color:var(--bot-background-color);color:var(--bot-text-color);border-radius:1.5rem 1.5rem 1.5rem 0}.user{margin-left:auto;background-color:var(--user-background-color);color:var(--user-text-color);border-radius:1.5rem 1.5rem 0 1.5rem}.footer{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border-top:0.062rem solid rgba(0, 0, 0, 0.05);padding-right:0.625rem;min-height:3.125rem}.footer amplify-input{--border:none;--margin:0;-ms-flex-positive:1;flex-grow:1}canvas{margin-left:0.625rem;margin-right:0.625rem;-ms-flex-positive:1;flex-grow:1;height:3.125rem}.icon-button{--icon-height:1.25rem;--icon-fill:var(--amplify-primary-color);--padding:0.625rem;--width:auto}";

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
const AmplifyChatbot = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Clear messages when conversation finishes */
        this.clearOnComplete = false;
        /** Continue listening to users after they send the message */
        this.conversationModeOn = false;
        /** Text placed in the top header */
        this.botTitle = Translations.Translations.CHATBOT_TITLE;
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
            const messageList = messages.map(message => (index.h("div", { class: `bubble ${message.from}` }, message.content)));
            if (this.chatState === ChatState.SendingText ||
                this.chatState === ChatState.SendingVoice) {
                // if waiting for voice message, show animation on user side because app is waiting for transcript. Else put it on bot side.
                const client = this.chatState === ChatState.SendingText
                    ? MessageFrom.Bot
                    : MessageFrom.User;
                messageList.push(index.h("div", { class: `bubble ${client}` }, index.h("div", { class: `dot-flashing ${client}` }, index.h("span", { class: "dot left" }), index.h("span", { class: "dot middle" }), index.h("span", { class: "dot right" }))));
            }
            return messageList;
        };
        this.chatCompleted = index.createEvent(this, "chatCompleted", 7);
    }
    // Occurs when user presses enter in input box
    submitHandler(_event) {
        this.sendTextMessage();
    }
    /**
     * Lifecycle functions
     */
    componentWillLoad() {
        if (!interactions.Interactions || typeof interactions.Interactions.onComplete !== 'function') {
            throw new Error(constants.NO_INTERACTIONS_MODULE_FOUND);
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
            this.setError(Translations.Translations.CHAT_DISABLED_ERROR, ChatErrorType.Unrecoverable);
            return;
        }
        else if (!this.botName) {
            this.setError(Translations.Translations.NO_BOT_NAME_ERROR, ChatErrorType.Unrecoverable);
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
            interactions.Interactions.onComplete(this.botName, onComplete);
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
            response = await interactions.Interactions.send(this.botName, text);
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
            response = await interactions.Interactions.send(this.botName, interactionsMessage);
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
        const visualization = index.h("canvas", { height: "50" });
        const cancelButton = (index.h("amplify-button", { "data-test": "chatbot-cancel-button", handleButtonClick: () => this.handleCancelButton(), class: "icon-button", variant: "icon", icon: "ban" }));
        return [visualization, cancelButton];
    }
    footerJSX() {
        if (this.chatState === ChatState.Listening)
            return this.listeningFooterJSX();
        const inputPlaceholder = this.textEnabled
            ? Translations.Translations.TEXT_INPUT_PLACEHOLDER
            : Translations.Translations.VOICE_INPUT_PLACEHOLDER;
        const textInput = (index.h("amplify-input", { placeholder: core.I18n.get(inputPlaceholder), description: "text", handleInputChange: evt => this.handleTextChange(evt), value: this.text, disabled: this.chatState === ChatState.Error || !this.textEnabled }));
        const micButton = this.voiceEnabled && (index.h("amplify-button", { "data-test": "chatbot-mic-button", handleButtonClick: () => this.handleMicButton(), class: "icon-button", variant: "icon", icon: "microphone", disabled: this.chatState === ChatState.Error ||
                this.chatState !== ChatState.Initial }));
        const sendButton = this.textEnabled && (index.h("amplify-button", { "data-test": "chatbot-send-button", class: "icon-button", variant: "icon", icon: "send", handleButtonClick: () => this.sendTextMessage(), disabled: this.chatState === ChatState.Error ||
                this.chatState !== ChatState.Initial }));
        return [textInput, micButton, sendButton];
    }
    errorToast() {
        if (!this.error)
            return;
        const { message, errorType } = this.error;
        return (index.h("amplify-toast", { message: core.I18n.get(message), handleClose: () => this.handleToastClose(errorType) }));
    }
    render() {
        return (index.h(index.Host, null, index.h("div", { class: "amplify-chatbot" }, index.h("slot", { name: "header" }, index.h("div", { class: "header", "data-test": "chatbot-header" }, core.I18n.get(this.botTitle))), index.h("div", { class: "body", "data-test": "chatbot-body" }, this.messageJSX(this.messages)), index.h("form", { onSubmit: e => this.handleSubmit(e) }, index.h("div", { class: "footer", "data-test": "chatbot-footer" }, this.footerJSX())), this.errorToast())));
    }
    get element() { return index.getElement(this); }
};
AmplifyChatbot.style = amplifyChatbotCss;

exports.amplify_chatbot = AmplifyChatbot;
