"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../base");
const datatypes_1 = require("../datatypes");
/**
 * Notes and comments segment
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/Segments/NTE
 */
class NTE extends base_1.HL7Obj {
    constructor() {
        super(new base_1.Depth(base_1.DepthEnum.SEGMENT));
        this.segment = new datatypes_1.ST(this.depth.peekDown());
        this.set_id = new datatypes_1.SI(this.depth.peekDown());
        this.source_comment = new datatypes_1.ID(this.depth.peekDown());
        this.comment = new datatypes_1.ST(this.depth.peekDown());
        this.hl7_obj_array = [
            this.segment,
            this.set_id,
            this.source_comment,
            this.comment,
        ];
    }
}
exports.NTE = NTE;
