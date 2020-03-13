import { HL7Obj, Depth } from '../../base';
import { ST } from '../ST';
import { DT } from '../DT';
/**
 * CM for OBR - Charge_to_practice
 */
export declare class Z_AI extends HL7Obj {
    authorization_number: ST;
    date: DT;
    source: ST;
    constructor(depth: Depth);
}
