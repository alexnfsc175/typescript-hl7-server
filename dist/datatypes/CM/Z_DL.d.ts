import { HL7Obj, Depth } from '../../base';
import { IS } from '../IS';
import { TS } from '../TS';
/**
 * CM for PV1 discharged_to_location
 */
export declare class Z_DL extends HL7Obj {
    discharge_location: IS;
    effective_date: TS;
    constructor(depth: Depth);
}
