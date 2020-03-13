"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
const MO_1 = require("../MO");
const CE_1 = require("../CE");
/**
 * CM for OBR - Charge_to_practice
 */
class Z_CP extends base_1.HL7Obj {
    constructor(depth) {
        super(depth);
        this.dollar_amount = new MO_1.MO(this.depth.peekDown());
        this.charge_code = new CE_1.CE(this.depth.peekDown());
        this.hl7_obj_array = [this.dollar_amount, this.charge_code];
    }
}
exports.Z_CP = Z_CP;
