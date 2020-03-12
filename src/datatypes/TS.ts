import {HL7Obj, Depth} from '../base';
import {ST} from '.';

/**
 * Time Stamp
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/TS
 */
export class TS extends HL7Obj {
  datetime: ST;
  precision: ST;

  constructor(depth: Depth) {
    super(depth);

    this.datetime = new ST(this.depth.peekDown());
    this.precision = new ST(this.depth.peekDown());

    this.hl7_obj_array = [this.datetime, this.precision];
  }
}
