import { HL7Obj } from '../base/HL7Obj';
import { HD } from './HD';
import { ID } from './ID';
import { NM } from './NM';
import { Depth } from '../base/depth';
/**
 * Extended Composite ID With Check Digit
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/CX
 */
export declare class CX extends HL7Obj {
    id: NM;
    check_digit: NM;
    code_for_check_digit: ID;
    assigning_authority: HD;
    constructor(depth: Depth);
}
