import { HL7Obj } from '../base/HL7Obj';
import { ID, ST, IS } from '.';
import { Depth } from '../base/depth';
/**
 * Hierarchic Designator
 * @see  https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/HD
 */
export declare class HD extends HL7Obj {
    /** 1*/ namespace_id: IS;
    /** 1*/ universal_id: ST;
    /** 1*/ universal_id_type: ID;
    constructor(depth: Depth);
}
