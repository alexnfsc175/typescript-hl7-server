"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
const ST_1 = require("../ST");
/**
 * CM for MSH-8 <message type>
 */
class Z_MT extends base_1.HL7Obj {
    constructor(depth) {
        super(depth);
        this.event = new ST_1.ST(this.depth.peekDown());
        this.trigger = new ST_1.ST(this.depth.peekDown());
        this.message = new ST_1.ST(this.depth.peekDown());
        this.hl7_obj_array = [this.event, this.trigger, this.message];
    }
}
exports.Z_MT = Z_MT;
