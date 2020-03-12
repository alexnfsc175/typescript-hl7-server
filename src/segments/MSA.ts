import {HL7Obj, Depth, DepthEnum} from '../base';
import {ID, ST, NM, CE} from '../datatypes';

/**
 *  Message acknowledgement segment
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/Segments/MSA
 */
export class MSA extends HL7Obj {
  /** MSA-0 */ segment: ST;
  /** MSA-1 */ ack_code: ID;
  /** MSA-2 */ message_control_id: ST;
  /** MSA-3 */ text_message: ST;
  /** MSA-4 */ expected_sequence: NM;
  /** MSA-5 */ delayed_ack_type: ID;
  /** MSA-6 */ error_condition: CE;

  constructor() {
    super(new Depth(DepthEnum.SEGMENT));

    this.segment = new ST(new Depth(DepthEnum.FEILD));
    this.ack_code = new ID(new Depth(DepthEnum.FEILD));
    this.message_control_id = new ST(new Depth(DepthEnum.FEILD));
    this.text_message = new ST(new Depth(DepthEnum.FEILD));
    this.expected_sequence = new NM(new Depth(DepthEnum.FEILD));
    this.delayed_ack_type = new ST(new Depth(DepthEnum.FEILD));
    this.error_condition = new CE(new Depth(DepthEnum.FEILD));

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
