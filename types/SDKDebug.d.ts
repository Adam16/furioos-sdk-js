export = SDKDebug;
declare class SDKDebug {
    constructor(localServerAddress: any);
    ws: WebSocket;
    _wsOnError(event: any): void;
    _wsOnClose(event: any): void;
    _wsOnMessage(event: any): void;
    _wsOnSendError(event: any): void;
    onSDKMessage(onSDKMessageCallback: any): void;
    _onSDKMessageCallback: any;
    sendSDKMessage(data: any): void;
}
