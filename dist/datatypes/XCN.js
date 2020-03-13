"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../base");
const ST_1 = require("./ST");
const _1 = require(".");
//<ID number (ST)> ^ <family name (ST)> ^ <given name (ST)> ^ <middle initial or name (ST)> ^ <suffix (e.g., JR or III) (ST)> ^ <prefix (e.g., DR) (ST)> ^ <degree (e.g., MD) (ST)> ^ <source table (IS)> ^ <assigning authority (HD)> ^ <name type code(ID)> ^ <identifier check digit (ST)> ^ <code identifying the check digit scheme employed (ID )> ^ <identifier type code (IS)> ^ <assigning facility (HD)>
/**
 * Extended Composite ID Number And Name
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/XCN
 */
class XCN extends base_1.HL7Obj {
    constructor(depth) {
        super(depth);
        this.id = new ST_1.ST(this.depth.peekDown());
        this.family_name = new ST_1.ST(this.depth.peekDown());
        this.given_name = new ST_1.ST(this.depth.peekDown());
        this.middle_name = new ST_1.ST(this.depth.peekDown());
        this.suffix = new ST_1.ST(this.depth.peekDown());
        this.prefix = new ST_1.ST(this.depth.peekDown());
        this.degree = new ST_1.ST(this.depth.peekDown());
        this.source_table = new _1.IS(this.depth.peekDown());
        this.assigning_authority = new _1.HD(this.depth.peekDown());
        this.name_type_code = new _1.ID(this.depth.peekDown());
        this.identifier_check_digit = new ST_1.ST(this.depth.peekDown());
        this.employed_check_digit_schema = new _1.ID(this.depth.peekDown());
        this.id_type_code = new _1.IS(this.depth.peekDown());
        this.assigning_facility = new _1.HD(this.depth.peekDown());
        this.hl7_obj_array = [
            this.id,
            this.family_name,
            this.given_name,
            this.middle_name,
            this.suffix,
            this.prefix,
            this.degree,
            this.source_table,
            this.assigning_authority,
            this.name_type_code,
            this.identifier_check_digit,
            this.employed_check_digit_schema,
            this.id_type_code,
            this.assigning_facility,
        ];
    }
}
exports.XCN = XCN;
