export var Player: {
    new (sharedLinkID: any, containerId: any, options: any): import("./classes/Player.js");
    readonly qualityValues: {
        AUTO: number;
        LOW: number;
        MEDIUM: number;
        HIGH: number;
        ULTRA: number;
    };
    readonly regions: {
        EUW: number[];
        USW: number[];
        USE: number[];
        AUE: number[];
    };
};
