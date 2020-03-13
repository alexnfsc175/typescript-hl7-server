import { HL7Obj } from '../base/HL7Obj';
import { Depth } from '../base/depth';
/**
 * Coded values for HL7 tables
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/ID
 */
export declare class ID extends HL7Obj {
    value: string;
    constructor(depth: Depth);
    fromString(input: string): void;
    toString(): string;
}
