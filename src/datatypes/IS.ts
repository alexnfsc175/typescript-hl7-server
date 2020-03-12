import {HL7Obj} from '../base/HL7Obj';
import {Depth} from '../base/depth';

/**
 * Coded value for user-defined tables
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/IS
 */
export class IS extends HL7Obj {
  value: string;

  constructor(depth: Depth) {
    super(depth);
    this.value = '';
    this.hl7_obj_array = [(this.value as unknown) as IS];
  }
  fromString(input: string): void {
    this.value = input;
  }
  toString() {
    return this.value;
  }
}
