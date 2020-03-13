import { HL7Obj, Depth } from '../base';
import { ST } from './ST';
import { HD, IS, ID } from '.';
/**
 * Extended Composite ID Number And Name
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/XCN
 */
export declare class XCN extends HL7Obj {
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
    constructor(depth: Depth);
}
