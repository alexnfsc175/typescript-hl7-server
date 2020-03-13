"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
const ST_1 = require("../ST");
const DT_1 = require("../DT");
/**
 * CM for OBR - Charge_to_practice
 */
class Z_AI extends base_1.HL7Obj {
    constructor(depth) {
        super(depth);
        this.authorization_number = new ST_1.ST(this.depth.peekDown());
        this.date = new DT_1.DT(this.depth.peekDown());
        this.source = new ST_1.ST(this.depth.peekDown());
        this.hl7_obj_array = [this.authorization_number, this.date, this.source];
    }
}
exports.Z_AI = Z_AI;
