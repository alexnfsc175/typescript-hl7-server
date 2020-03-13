"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DepthEnum;
(function (DepthEnum) {
    DepthEnum[DepthEnum["SEGMENT"] = 0] = "SEGMENT";
    DepthEnum[DepthEnum["FEILD"] = 1] = "FEILD";
    DepthEnum[DepthEnum["COMPONENT"] = 2] = "COMPONENT";
    DepthEnum[DepthEnum["SUB_COMPONENT"] = 3] = "SUB_COMPONENT";
})(DepthEnum = exports.DepthEnum || (exports.DepthEnum = {}));
class Depth {
    constructor(depth) {
        this.depth = depth;
    }
    getDelimeter() {
        switch (this.depth) {
            case DepthEnum.SEGMENT:
                return Depth.SEGMENT_DELIMETER;
            case DepthEnum.FEILD:
                return Depth.FEILD_DELIMETER;
            case DepthEnum.COMPONENT:
                return Depth.COMPONENT_DELIMETER;
            case DepthEnum.SUB_COMPONENT:
                return Depth.SUB_COMPONENT_DELIMETER;
        }
    }
    peekDown() {
        let peekDepth = this.depth + 1;
        if (peekDepth > 4) {
            peekDepth = 4;
        }
        return new Depth(peekDepth);
    }
    peekUp() {
        let peekDepth = this.depth - 1;
        if (peekDepth < 0) {
            peekDepth = 0;
        }
        return new Depth(peekDepth);
    }
}
exports.Depth = Depth;
Depth.SEGMENT_DELIMETER = '\n';
Depth.FEILD_DELIMETER = '|';
Depth.COMPONENT_DELIMETER = '^';
Depth.SUB_COMPONENT_DELIMETER = '&';
Depth.REPEAT_DELIMETER = '~';
