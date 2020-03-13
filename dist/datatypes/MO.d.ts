import { HL7Obj, Depth } from '../base';
import { NM } from './NM';
import { ID } from './ID';
/**
 * Money
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/MO
 */
export declare class MO extends HL7Obj {
    quantity: NM;
    denomination: ID;
    constructor(depth: Depth);
}
