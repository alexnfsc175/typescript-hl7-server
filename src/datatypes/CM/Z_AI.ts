import {HL7Obj, Depth} from '../../base';
import {ST} from '../ST';
import {DT} from '../DT';
/**
 * CM for OBR - Charge_to_practice
 */

export class Z_AI extends HL7Obj {
  authorization_number: ST;
  date: DT;
  source: ST;

  constructor(depth: Depth) {
    super(depth);

    this.authorization_number = new ST(this.depth.peekDown());
    this.date = new DT(this.depth.peekDown());
    this.source = new ST(this.depth.peekDown());

    this.hl7_obj_array = [this.authorization_number, this.date, this.source];
  }
}
