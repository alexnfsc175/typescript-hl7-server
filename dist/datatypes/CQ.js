"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../base/HL7Obj");
const NM_1 = require("./NM");
const CE_1 = require("./CE");
//<quantity (NM)> ^ <units (CE)>
/**
 * Composite Quantity With Units
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/CQ
 */
class CQ extends HL7Obj_1.HL7Obj {
    constructor(depth) {
        super(depth);
        this.quantity = new NM_1.NM(this.depth.peekDown());
        this.units = new CE_1.CE(this.depth.peekDown());
        this.hl7_obj_array = [this.quantity, this.units];
    }
}
exports.CQ = CQ;
