import {HL7Obj, Depth} from '../base';
import {ST} from './ST';
import {ID} from './ID';
import {HD} from './HD';
import {IS, NM} from '.';

/**
 * Extended Composite Name And ID For Organizations
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/XON
 */
export class XON extends HL7Obj {
  /** XON 1 */ organization_name: ST;
  /** XON 2 */ organization_name_type_code: IS;
  /** XON 3 */ id: NM;
  /** XON 4 */ check_digit: NM;
  /** XON 5 */ code_for_check_digit_schema: ID;
  /** XON 6 */ assigning_authority: HD;
  /** XON 7 */ id_type_code: IS;
  /** XON 8 */ assigning_facility: HD;

  constructor(depth: Depth) {
    super(depth);

    this.organization_name = new ST(this.depth.peekDown());
    this.organization_name_type_code = new IS(this.depth.peekDown());
    this.id = new NM(this.depth.peekDown());
    this.check_digit = new NM(this.depth.peekDown());
    this.code_for_check_digit_schema = new ID(this.depth.peekDown());
    this.assigning_authority = new HD(this.depth.peekDown());
    this.id_type_code = new IS(this.depth.peekDown());
    this.assigning_facility = new HD(this.depth.peekDown());

    this.hl7_obj_array = [
      this.organization_name,
      this.organization_name_type_code,
      this.id,
      this.check_digit,
      this.code_for_check_digit_schema,
      this.assigning_authority,
      this.id_type_code,
      this.assigning_facility,
    ];
  }
}
