import { HL7Obj, Depth } from '../base';
import { ID, ST, NM } from '.';
/**
 * Extended Telecommunication Number
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/XTN
 */
export declare class XTN extends HL7Obj {
    private validatePhoneNumber;
    validated_number: ST;
    telecom_use_code: ID;
    telecom_equipment_type: ID;
    email: ST;
    country_code: NM;
    area_code: NM;
    phone_number: NM;
    extension: NM;
    text: ST;
    constructor(depth: Depth);
}
