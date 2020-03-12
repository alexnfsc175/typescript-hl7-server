import {HL7Obj, Depth, DepthEnum} from '../base';
import {SI, ST, ID} from '../datatypes';

/**
 * Notes and comments segment
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/Segments/NTE
 */
export class NTE extends HL7Obj {
  segment: ST;
  set_id: SI;
  source_comment: ID;
  comment: ST;

  constructor() {
    super(new Depth(DepthEnum.SEGMENT));

    this.segment = new ST(this.depth.peekDown());
    this.set_id = new SI(this.depth.peekDown());
    this.source_comment = new ID(this.depth.peekDown());
    this.comment = new ST(this.depth.peekDown());

    this.hl7_obj_array = [
      this.segment,
      this.set_id,
      this.source_comment,
      this.comment,
    ];
  }
}
