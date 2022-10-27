import { EventEmitter } from '../../stencil-public-runtime';
import { ChatResult } from '../../common/types/interactions-types';
declare enum ChatState {
    Initial = 0,
    Listening = 1,
    SendingText = 2,
    SendingVoice = 3,
    Error = 4
}
declare enum MessageFrom {
    Bot = "bot",
    User = "user"
}
interface Message {
    content: string;
    from: MessageFrom;
}
declare enum ChatErrorType {
    Recoverable = 0,
    Unrecoverable = 1
}
interface ChatError {
    message: string;
    errorType: ChatErrorType;
}
/**
 * @slot header - Title content placed at the top
 */
export declare class AmplifyChatbot {
    /** Name of the bot */
    botName: string;
    /** Clear messages when conversation finishes */
    clearOnComplete: boolean;
    /** Continue listening to users after they send the message */
    conversationModeOn: boolean;
    /** Greeting message displayed to users */
    welcomeMessage: string;
    /** Text placed in the top header */
    botTitle: string;
    /** Whether voice chat is enabled */
    voiceEnabled: boolean;
    /** Whether text chat is enabled */
    textEnabled: boolean;
    /** Amount of silence (in ms) to wait for */
    silenceTime: number;
    /** Noise threshold between -1 and 1. Anything below is considered a silence. */
    silenceThreshold: number;
    /** Messages in current session */
    messages: Message[];
    /** Text input box value  */
    text: string;
    /** Current app state */
    chatState: ChatState;
    /** Toast error */
    error: ChatError;
    element: HTMLAmplifyChatbotElement;
    private audioRecorder;
    submitHandler(_event: CustomEvent): void;
    /** Event emitted when conversation is completed */
    chatCompleted: EventEmitter<ChatResult>;
    /**
     * Lifecycle functions
     */
    componentWillLoad(): void;
    componentDidRender(): void;
    private validateProps;
    /**
     * Handlers
     */
    private handleSubmit;
    private handleMicButton;
    private handleSilence;
    private handleTextChange;
    private handleCancelButton;
    private handleToastClose;
    /**
     * Visualization
     */
    private visualizer;
    /**
     * Interactions helpers
     */
    private sendTextMessage;
    private sendVoiceMessage;
    private appendToChat;
    /**
     * State control methods
     */
    private setError;
    private reset;
    /**
     * Rendering methods
     */
    private messageJSX;
    private listeningFooterJSX;
    private footerJSX;
    private errorToast;
    render(): any;
}
export {};