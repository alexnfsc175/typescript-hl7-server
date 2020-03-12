import {HL7Obj, Depth} from '../base';
import {ID} from './ID';

/**
 * Processing Type
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/PT
 */
export class PT extends HL7Obj {
  id: ID;
  mode: ID;

  constructor(depth: Depth) {
    super(depth);

    this.id = new ID(this.depth.peekDown());
    this.mode = new ID(this.depth.peekDown());

    this.hl7_obj_array = [this.id, this.mode];
  }
}
