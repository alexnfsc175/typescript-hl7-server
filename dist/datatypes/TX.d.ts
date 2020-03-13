import { HL7Obj } from '../base/HL7Obj';
import { Depth } from '../base/depth';
/**
 * Text Data
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/TX
 */
export declare class TX extends HL7Obj {
    value: string;
    constructor(depth: Depth);
    fromString(input: string): void;
    toString(): string;
}
