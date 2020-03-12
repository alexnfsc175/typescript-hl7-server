import {HL7Obj} from '../base/HL7Obj';
import {Depth} from '../base/depth';

//FIXME: Fix this
/**
 *  Date
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/DT
 */
export class DT extends HL7Obj {
  value: string;

  constructor(depth: Depth) {
    super(depth);
    this.value = '';
    this.hl7_obj_array = [(this.value as unknown) as DT];
  }
  fromString(input: string): void {
    this.value = input;
  }
  toString() {
    return this.value;
  }
}
