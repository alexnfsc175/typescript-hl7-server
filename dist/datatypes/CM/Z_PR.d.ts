import { HL7Obj, Depth } from '../../base';
import { CE } from '..';
import { TX } from '../TX';
import { ST } from '../ST';
/**
 * CM for OBR-26 -- parent_result
 */
export declare class Z_PR extends HL7Obj {
    observation_id_of_parent_result: CE;
    sub_id_of_parent_result: ST;
    result_from_parent: TX;
    constructor(depth: Depth);
}
