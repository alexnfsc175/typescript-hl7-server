import { HL7Obj, Depth } from '../base';
import { ST } from './ST';
import { IS } from './IS';
/**
 * Extended Person Name
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/XPN
 */
export declare class XPN extends HL7Obj {
    family: ST;
    given: ST;
    middle: ST;
    suffix: ST;
    prefix: ST;
    degree: ST;
    name_type_code: IS;
    constructor(depth: Depth);
}
