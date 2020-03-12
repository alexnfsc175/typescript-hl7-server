import {HL7Obj, Depth} from '../base';

import {ID, ST, NM} from '.';
//In Version 2.3, replaces the TN data type. [NNN] [(999)]999-9999 [X99999] [B99999] [C any text] ^ <telecommunication use code (ID)> ^ <telecommunication equipment type (ID)> ^ <email address (ST)> ^ <country code (NM)> ^ <area/city code (NM)> ^ <phone number (NM)> ^ <extension (NM)> ^ <any text (ST)>
/**
 * Extended Telecommunication Number
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/XTN
 */
export class XTN extends HL7Obj {
  private validatePhoneNumber(input: String): boolean {
    return true; // TODO: Fix Me
  }

  validated_number: ST;
  telecom_use_code: ID;
  telecom_equipment_type: ID;
  email: ST;
  country_code: NM;
  area_code: NM;
  phone_number: NM;
  extension: NM;
  text: ST;

  constructor(depth: Depth) {
    super(depth);

    this.validated_number = new ST(this.depth.peekDown());
    this.telecom_use_code = new ID(this.depth.peekDown());
    this.telecom_equipment_type = new ID(this.depth.peekDown());
    this.email = new ST(this.depth.peekDown());
    this.country_code = new NM(this.depth.peekDown());
    this.area_code = new NM(this.depth.peekDown());
    this.phone_number = new NM(this.depth.peekDown());
    this.extension = new NM(this.depth.peekDown());
    this.text = new ST(this.depth.peekDown());

    this.hl7_obj_array = [
      this.validated_number,
      this.telecom_use_code,
      this.telecom_equipment_type,
      this.email,
      this.country_code,
      this.area_code,
      this.phone_number,
      this.extension,
      this.text,
    ];
  }
}
