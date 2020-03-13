import { HL7Obj, Depth } from '../../base';
import { MO } from '../MO';
import { CE } from '../CE';
/**
 * CM for OBR - Charge_to_practice
 */
export declare class Z_CP extends HL7Obj {
    dollar_amount: MO;
    charge_code: CE;
    constructor(depth: Depth);
}
