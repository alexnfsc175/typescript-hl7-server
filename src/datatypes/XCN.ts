import {HL7Obj, Depth} from '../base';
import {ST} from './ST';
import {HD, IS, ID} from '.';

//<ID number (ST)> ^ <family name (ST)> ^ <given name (ST)> ^ <middle initial or name (ST)> ^ <suffix (e.g., JR or III) (ST)> ^ <prefix (e.g., DR) (ST)> ^ <degree (e.g., MD) (ST)> ^ <source table (IS)> ^ <assigning authority (HD)> ^ <name type code(ID)> ^ <identifier check digit (ST)> ^ <code identifying the check digit scheme employed (ID )> ^ <identifier type code (IS)> ^ <assigning facility (HD)>

/**
 * Extended Composite ID Number And Name
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/XCN
 */
export class XCN extends HL7Obj {
  /** XCN 1 */ id: ST;
  /** XCN 2 */ family_name: ST;
  /** XCN 3 */ given_name: ST;
  /** XCN 4 */ middle_name: ST;
  /** XCN 5 */ suffix: ST;
  /** XCN 6 */ prefix: ST;
  /** XCN 7 */ degree: ST;
  /** XCN 8 */ source_table: IS;
  /** XCN 9 */ assigning_authority: HD;
  /** XCN 10 */ name_type_code: ID;
  /** XCN 11 */ identifier_check_digit: ST;
  /** XCN 12 */ employed_check_digit_schema: ID;
  /** XCN 13 */ id_type_code: IS;
  /** XCN 14 */ assigning_facility: HD;

  constructor(depth: Depth) {
    super(depth);

    this.id = new ST(this.depth.peekDown());
    this.family_name = new ST(this.depth.peekDown());
    this.given_name = new ST(this.depth.peekDown());
    this.middle_name = new ST(this.depth.peekDown());
    this.suffix = new ST(this.depth.peekDown());
    this.prefix = new ST(this.depth.peekDown());
    this.degree = new ST(this.depth.peekDown());
    this.source_table = new IS(this.depth.peekDown());
    this.assigning_authority = new HD(this.depth.peekDown());
    this.name_type_code = new ID(this.depth.peekDown());
    this.identifier_check_digit = new ST(this.depth.peekDown());
    this.employed_check_digit_schema = new ID(this.depth.peekDown());
    this.id_type_code = new IS(this.depth.peekDown());
    this.assigning_facility = new HD(this.depth.peekDown());

    this.hl7_obj_array = [
      this.id,
      this.family_name,
      this.given_name,
      this.middle_name,
      this.suffix,
      this.prefix,
      this.degree,
      this.source_table,
      this.assigning_authority,
      this.name_type_code,
      this.identifier_check_digit,
      this.employed_check_digit_schema,
      this.id_type_code,
      this.assigning_facility,
    ];
  }
}
