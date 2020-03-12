import {HL7Obj} from '../base/HL7Obj';
import {ST} from './ST';
import {IS} from './IS';
import {DT} from './DT';
import {Depth} from '../base/depth';

/**
 * Driver's License Number
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/DLN
 */
export class DLN extends HL7Obj {
  /** 1 */ license_number: ST;
  /** 2 */ issuing_state: IS;
  /** 3 */ expiration_date: DT;

  constructor(depth: Depth) {
    super(depth);

    this.license_number = new ST(this.depth.peekDown());
    this.issuing_state = new IS(this.depth.peekDown());
    this.expiration_date = new DT(this.depth.peekDown());

    this.hl7_obj_array = [
      this.license_number,
      this.issuing_state,
      this.expiration_date,
    ];
  }
}
