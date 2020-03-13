import { HL7Obj, Depth } from '../../base';
import { ST } from '../ST';
/**
 * CM for MSH-8 <message type>
 */
export declare class Z_MT extends HL7Obj {
    event: ST;
    trigger: ST;
    message: ST;
    constructor(depth: Depth);
}
