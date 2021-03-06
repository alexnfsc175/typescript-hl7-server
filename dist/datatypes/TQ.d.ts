import { HL7Obj, Depth } from '../base';
import { TX, ST, TS, ID } from '.';
/**
 * Timing Quantity
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/TQ
 */
export declare class TQ extends HL7Obj {
    quantity: ST;
    interval: ST;
    duration: ST;
    start_datetime: TS;
    end_datetime: TS;
    priority: ID;
    condition: ST;
    text: TX;
    conjunction: ID;
    order_sequencing: ST;
    constructor(depth: Depth);
}
