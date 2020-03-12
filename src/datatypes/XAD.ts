import {HL7Obj, Depth} from '../base';
import {ST} from './ST';
import {ID} from './ID';
import {IS} from './IS';

/**
 * Extended Address
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/XAD
 */
export class XAD extends HL7Obj {
  street: ST;
  other: ST;
  city: ST;
  zip: ST;
  country: ID;
  address_type: ID;
  other_geographic_designation: ST;
  country_code: IS;
  census_tract: IS;

  constructor(depth: Depth) {
    super(depth);
    this.street = new ST(this.depth.peekDown());
    this.other = new ST(this.depth.peekDown());
    this.city = new ST(this.depth.peekDown());
    this.zip = new ST(this.depth.peekDown());
    this.country = new ID(this.depth.peekDown());
    this.address_type = new ID(this.depth.peekDown());
    this.other_geographic_designation = new ST(this.depth.peekDown());
    this.country_code = new IS(this.depth.peekDown());
    this.census_tract = new IS(this.depth.peekDown());

    this.hl7_obj_array = [
      this.street,
      this.other,
      this.city,
      this.zip,
      this.country,
      this.address_type,
      this.other_geographic_designation,
      this.country_code,
      this.census_tract,
    ];
  }
}
