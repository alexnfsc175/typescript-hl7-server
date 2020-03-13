import { HL7Obj, Depth } from '../base';
import { ST } from './ST';
import { ID } from './ID';
import { IS } from './IS';
/**
 * Extended Address
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/XAD
 */
export declare class XAD extends HL7Obj {
    street: ST;
    other: ST;
    city: ST;
    zip: ST;
    country: ID;
    address_type: ID;
    other_geographic_designation: ST;
    country_code: IS;
    census_tract: IS;
    constructor(depth: Depth);
}
