import { HL7Obj } from '../base';
import { SI, ST, ID } from '../datatypes';
/**
 * Notes and comments segment
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/Segments/NTE
 */
export declare class NTE extends HL7Obj {
    segment: ST;
    set_id: SI;
    source_comment: ID;
    comment: ST;
    constructor();
}
