"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../base");
const NM_1 = require("./NM");
const ID_1 = require("./ID");
/**
 * Money
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/MO
 */
class MO extends base_1.HL7Obj {
    constructor(depth) {
        super(depth);
        this.quantity = new NM_1.NM(this.depth.peekDown());
        this.denomination = new ID_1.ID(this.depth.peekDown());
        this.hl7_obj_array = [this.quantity, this.denomination];
    }
}
exports.MO = MO;
