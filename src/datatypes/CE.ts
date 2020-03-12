import {HL7Obj} from '../base/HL7Obj';
import {ST} from './ST';
import {Depth} from '../base/depth';

// <identifier (ST)> ^ <text (ST)> ^ <name of coding system (ST)> ^ <alternate identifier (ST)> ^ <alternate text (ST)> ^ <name of alternate coding system (ST)>

/**
 * Coded Element
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/CE
 */
export class CE extends HL7Obj {
  /** 1 */ id: ST;
  /** 2 */ text: ST;
  /** 3 */ coding_system_name: ST;
  /** 4 */ alternate_id: ST;
  /** 5 */ alternate_text: ST;
  /** 6 */ alternate_coding_system_name: ST;

  constructor(depth: Depth) {
    super(depth);

    this.id = new ST(this.depth.peekDown());
    this.text = new ST(this.depth.peekDown());
    this.coding_system_name = new ST(this.depth.peekDown());
    this.alternate_id = new ST(this.depth.peekDown());
    this.alternate_text = new ST(this.depth.peekDown());
    this.alternate_coding_system_name = new ST(this.depth.peekDown());

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
