import {HL7Obj, Depth} from '../base';
import {NM} from './NM';
import {ID} from './ID';

/**
 * Money
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/MO
 */
export class MO extends HL7Obj {
  quantity: NM;
  denomination: ID;

  constructor(depth: Depth) {
    super(depth);

    this.quantity = new NM(this.depth.peekDown());
    this.denomination = new ID(this.depth.peekDown());

    this.hl7_obj_array = [this.quantity, this.denomination];
  }
}
