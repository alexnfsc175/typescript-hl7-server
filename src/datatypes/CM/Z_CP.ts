import {HL7Obj, Depth} from '../../base';
import {MO} from '../MO';
import {CE} from '../CE';
/**
 * CM for OBR - Charge_to_practice
 */

export class Z_CP extends HL7Obj {
  dollar_amount: MO;
  charge_code: CE;

  constructor(depth: Depth) {
    super(depth);

    this.dollar_amount = new MO(this.depth.peekDown());
    this.charge_code = new CE(this.depth.peekDown());

    this.hl7_obj_array = [this.dollar_amount, this.charge_code];
  }
}
