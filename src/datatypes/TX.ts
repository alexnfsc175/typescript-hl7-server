import {HL7Obj} from '../base/HL7Obj';
import {Depth} from '../base/depth';

/**
 * Text Data
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/TX
 */
export class TX extends HL7Obj {
  value: string;

  constructor(depth: Depth) {
    super(depth);
    this.hl7_obj_array = [(this.value as unknown) as TX];
  }
  fromString(input: string): void {
    this.value = input;
  }
  toString() {
    return this.value;
  }
}
