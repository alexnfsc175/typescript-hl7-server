import { HL7Obj } from '../base/HL7Obj';
import { NM } from './NM';
import { CE } from './CE';
import { Depth } from '../base/depth';
/**
 * Composite Quantity With Units
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/CQ
 */
export declare class CQ extends HL7Obj {
    quantity: NM;
    units: CE;
    constructor(depth: Depth);
}
