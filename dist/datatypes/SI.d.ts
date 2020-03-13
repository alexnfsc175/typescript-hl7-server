import { HL7Obj, Depth } from '../base';
/**
 * Sequence ID
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/SI
 */
export declare class SI extends HL7Obj {
    value: number;
    private shouldBeBlank;
    private isNumericalCharacter;
    constructor(depth: Depth);
    fromString(input: string): void;
    toString(): string;
}
