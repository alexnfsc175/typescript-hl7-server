import { HL7Obj } from '../base/HL7Obj';
import { ID } from './ID';
import { NM } from './NM';
import { CE } from './CE';
import { MO } from './MO';
import { Depth } from '../base/depth';
/**
 * Composite Price
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/CP
 */
export declare class CP extends HL7Obj {
    price: MO;
    price_type: ID;
    from_value: NM;
    to_value: NM;
    range_units: CE;
    range_type: ID;
    constructor(depth: Depth);
}
