import { HL7Obj } from '../base/HL7Obj';
import { Depth } from '../base/depth';
/**
 *  Date
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/DT
 */
export declare class DT extends HL7Obj {
    value: string;
    constructor(depth: Depth);
    fromString(input: string): void;
    toString(): string;
}
