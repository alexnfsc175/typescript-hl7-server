"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../base");
const ST_1 = require("./ST");
const ID_1 = require("./ID");
const HD_1 = require("./HD");
const _1 = require(".");
/**
 * Extended Composite Name And ID For Organizations
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/XON
 */
class XON extends base_1.HL7Obj {
    constructor(depth) {
        super(depth);
        this.organization_name = new ST_1.ST(this.depth.peekDown());
        this.organization_name_type_code = new _1.IS(this.depth.peekDown());
        this.id = new _1.NM(this.depth.peekDown());
        this.check_digit = new _1.NM(this.depth.peekDown());
        this.code_for_check_digit_schema = new ID_1.ID(this.depth.peekDown());
        this.assigning_authority = new HD_1.HD(this.depth.peekDown());
        this.id_type_code = new _1.IS(this.depth.peekDown());
        this.assigning_facility = new HD_1.HD(this.depth.peekDown());
        this.hl7_obj_array = [
            this.organization_name,
            this.organization_name_type_code,
            this.id,
            this.check_digit,
            this.code_for_check_digit_schema,
            this.assigning_authority,
            this.id_type_code,
            this.assigning_facility,
        ];
    }
}
exports.XON = XON;
