import {HL7Obj, Depth} from '../base';

/**
 * Sequence ID
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/SI
 */
export class SI extends HL7Obj {
  value: number;
  private shouldBeBlank = false;
  private isNumericalCharacter(input: String): Boolean {
    if (input !== '') {
      if (input[0] >= '0' && input[0] <= '9') {
        return true;
      }
    }
    return false;
  }
  constructor(depth: Depth) {
    super(depth);
    this.value = 0;
    this.hl7_obj_array = [(this.value as unknown) as SI];
  }
  fromString(input: string): void {
    this.shouldBeBlank = !this.isNumericalCharacter(input);
    this.value = Number(input);
    // console.log(this.value);
    // console.log(this.shouldBeBlank);
  }
  toString() {
    if (this.shouldBeBlank) {
      return '';
    }
    return this.value.toString();
  }
}
