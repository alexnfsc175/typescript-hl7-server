"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../base");
const datatypes_1 = require("../datatypes");
/**
 *  Message acknowledgement segment
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/Segments/MSA
 */
class MSA extends base_1.HL7Obj {
    constructor() {
        super(new base_1.Depth(base_1.DepthEnum.SEGMENT));
        this.segment = new datatypes_1.ST(new base_1.Depth(base_1.DepthEnum.FEILD));
        this.ack_code = new datatypes_1.ID(new base_1.Depth(base_1.DepthEnum.FEILD));
        this.message_control_id = new datatypes_1.ST(new base_1.Depth(base_1.DepthEnum.FEILD));
        this.text_message = new datatypes_1.ST(new base_1.Depth(base_1.DepthEnum.FEILD));
        this.expected_sequence = new datatypes_1.NM(new base_1.Depth(base_1.DepthEnum.FEILD));
        this.delayed_ack_type = new datatypes_1.ST(new base_1.Depth(base_1.DepthEnum.FEILD));
        this.error_condition = new datatypes_1.CE(new base_1.Depth(base_1.DepthEnum.FEILD));
        this.hl7_obj_array = [
            this.segment,
            this.ack_code,
            this.message_control_id,
            this.text_message,
            this.expected_sequence,
            this.delayed_ack_type,
            this.error_condition,
        ];
    }
}
exports.MSA = MSA;
