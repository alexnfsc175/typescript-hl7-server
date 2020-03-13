import { HL7Obj } from '../base/HL7Obj';
import { ST } from './ST';
import { Depth } from '../base/depth';
/**
 * Coded Element
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/CE
 */
export declare class CE extends HL7Obj {
    /** 1 */ id: ST;
    /** 2 */ text: ST;
    /** 3 */ coding_system_name: ST;
    /** 4 */ alternate_id: ST;
    /** 5 */ alternate_text: ST;
    /** 6 */ alternate_coding_system_name: ST;
    constructor(depth: Depth);
}
