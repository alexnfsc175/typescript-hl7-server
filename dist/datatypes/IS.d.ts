import { HL7Obj } from '../base/HL7Obj';
import { Depth } from '../base/depth';
/**
 * Coded value for user-defined tables
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/IS
 */
export declare class IS extends HL7Obj {
    value: string;
    constructor(depth: Depth);
    fromString(input: string): void;
    toString(): string;
}
