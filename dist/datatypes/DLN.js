"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../base/HL7Obj");
const ST_1 = require("./ST");
const IS_1 = require("./IS");
const DT_1 = require("./DT");
/**
 * Driver's License Number
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/DLN
 */
class DLN extends HL7Obj_1.HL7Obj {
    constructor(depth) {
        super(depth);
        this.license_number = new ST_1.ST(this.depth.peekDown());
        this.issuing_state = new IS_1.IS(this.depth.peekDown());
        this.expiration_date = new DT_1.DT(this.depth.peekDown());
        this.hl7_obj_array = [
            this.license_number,
            this.issuing_state,
            this.expiration_date,
        ];
    }
}
exports.DLN = DLN;
