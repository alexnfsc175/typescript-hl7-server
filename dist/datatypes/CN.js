"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../base/HL7Obj");
const ST_1 = require("./ST");
const HD_1 = require("./HD");
const IS_1 = require("./IS");
//<ID number (ST)> ^ <family name (ST)> ^ <given name (ST)> ^ <middle initial or name (ST)> ^ <suffix (e.g., JR or III) (ST)> ^ <prefix (e.g., DR) (ST)> ^ <degree (e.g., MD) (ST)> ^ <source table (IS)> ^ <assigning authority (HD)>
/**
 * CN - Composite ID Number And Name
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/CN
 */
class CN extends HL7Obj_1.HL7Obj {
    constructor(depth) {
        super(depth);
        this.id = new ST_1.ST(this.depth.peekDown());
        this.family_name = new ST_1.ST(this.depth.peekDown());
        this.given_name = new ST_1.ST(this.depth.peekDown());
        this.middle_name = new ST_1.ST(this.depth.peekDown());
        this.suffix = new ST_1.ST(this.depth.peekDown());
        this.prefix = new ST_1.ST(this.depth.peekDown());
        this.degree = new ST_1.ST(this.depth.peekDown());
        this.source_table = new IS_1.IS(this.depth.peekDown());
        this.assigning_authority = new HD_1.HD(this.depth.peekDown());
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
        ];
    }
}
exports.CN = CN;
