import {HL7Obj, Depth} from '../base';
import {ST} from './ST';
import {IS} from './IS';

/**
 * Extended Person Name
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/XPN
 */
export class XPN extends HL7Obj {
  family: ST;
  given: ST;
  middle: ST;
  suffix: ST;
  prefix: ST;
  degree: ST;
  name_type_code: IS;

  constructor(depth: Depth) {
    super(depth);

    this.family = new ST(this.depth.peekDown());
    this.given = new ST(this.depth.peekDown());
    this.middle = new ST(this.depth.peekDown());
    this.suffix = new ST(this.depth.peekDown());
    this.prefix = new ST(this.depth.peekDown());
    this.degree = new ST(this.depth.peekDown());
    this.name_type_code = new IS(this.depth.peekDown());

    this.hl7_obj_array = [
      this.family,
      this.given,
      this.middle,
      this.suffix,
      this.prefix,
      this.degree,
      this.name_type_code,
    ];
  }
}
