import { HL7Obj, Depth } from '../base';
import { ID } from './ID';
/**
 * Processing Type
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/PT
 */
export declare class PT extends HL7Obj {
    id: ID;
    mode: ID;
    constructor(depth: Depth);
}
