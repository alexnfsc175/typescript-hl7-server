import { HL7Obj, Depth } from '../base';
import { ST } from '.';
/**
 * Time Stamp
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/TS
 */
export declare class TS extends HL7Obj {
    datetime: ST;
    precision: ST;
    constructor(depth: Depth);
}
