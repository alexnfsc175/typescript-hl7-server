import {HL7Obj} from '../base/HL7Obj';
import {Depth} from '../base/depth';

/**
 * String Data
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/ST
 */
export class ST extends HL7Obj {
  value: string;

  constructor(depth: Depth) {
    super(depth);
    this.value = '';
    this.hl7_obj_array = [(this.value as unknown) as ST];
  }
  fromString(input: string): void {
    this.value = input;
  }
  toString(): string {
    return this.value as string;
  }
}
