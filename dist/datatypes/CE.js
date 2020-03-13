"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../base/HL7Obj");
const ST_1 = require("./ST");
// <identifier (ST)> ^ <text (ST)> ^ <name of coding system (ST)> ^ <alternate identifier (ST)> ^ <alternate text (ST)> ^ <name of alternate coding system (ST)>
/**
 * Coded Element
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/CE
 */
class CE extends HL7Obj_1.HL7Obj {
    constructor(depth) {
        super(depth);
        this.id = new ST_1.ST(this.depth.peekDown());
        this.text = new ST_1.ST(this.depth.peekDown());
        this.coding_system_name = new ST_1.ST(this.depth.peekDown());
        this.alternate_id = new ST_1.ST(this.depth.peekDown());
        this.alternate_text = new ST_1.ST(this.depth.peekDown());
        this.alternate_coding_system_name = new ST_1.ST(this.depth.peekDown());
        this.hl7_obj_array = [
            this.id,
            this.text,
            this.coding_system_name,
            this.alternate_id,
            this.alternate_text,
            this.alternate_coding_system_name,
        ];
    }
}
exports.CE = CE;
