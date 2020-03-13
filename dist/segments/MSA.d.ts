import { HL7Obj } from '../base';
import { ID, ST, NM, CE } from '../datatypes';
/**
 *  Message acknowledgement segment
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/Segments/MSA
 */
export declare class MSA extends HL7Obj {
    /** MSA-0 */ segment: ST;
    /** MSA-1 */ ack_code: ID;
    /** MSA-2 */ message_control_id: ST;
    /** MSA-3 */ text_message: ST;
    /** MSA-4 */ expected_sequence: NM;
    /** MSA-5 */ delayed_ack_type: ID;
    /** MSA-6 */ error_condition: CE;
    constructor();
}
