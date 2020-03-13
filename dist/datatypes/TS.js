"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../base");
const _1 = require(".");
/**
 * Time Stamp
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/TS
 */
class TS extends base_1.HL7Obj {
    constructor(depth) {
        super(depth);
        this.datetime = new _1.ST(this.depth.peekDown());
        this.precision = new _1.ST(this.depth.peekDown());
        this.hl7_obj_array = [this.datetime, this.precision];
    }
}
exports.TS = TS;
