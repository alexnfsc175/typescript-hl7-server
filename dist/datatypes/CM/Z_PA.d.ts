import { HL7Obj, Depth } from '../../base';
import { EI } from '../EI';
/**
 * CM for ORC-8 <parent>
 */
export declare class Z_PA extends HL7Obj {
    parents_placer_order_number: EI;
    parents_filler_order_number: EI;
    constructor(depth: Depth);
}
