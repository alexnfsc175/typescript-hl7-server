import {HL7Obj} from '../base/HL7Obj';
import {HD} from './HD';
import {ID} from './ID';
import {NM} from './NM';
import {Depth} from '../base/depth';

//<ID number (NM)> ^ <check digit (NM)> ^ <code identifying the check digit scheme employed (ID)> ^ < assigning authority (HD)>

/**
 * Extended Composite ID With Check Digit
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/CX
 */
export class CX extends HL7Obj {
  id: NM;
  check_digit: NM;
  code_for_check_digit: ID;
  assigning_authority: HD;

  constructor(depth: Depth) {
    super(depth);

    this.id = new NM(this.depth.peekDown());
    this.check_digit = new NM(this.depth.peekDown());
    this.code_for_check_digit = new ID(this.depth.peekDown());
    this.assigning_authority = new HD(this.depth.peekDown());

    this.hl7_obj_array = [
      this.id,
      this.check_digit,
      this.code_for_check_digit,
      this.assigning_authority,
    ];
  }
}
