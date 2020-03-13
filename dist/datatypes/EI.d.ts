import { HL7Obj } from '../base/HL7Obj';
import { ST } from './ST';
import { Depth } from '../base/depth';
import { IS } from './IS';
import { ID } from './ID';
/**
 * Entity Identifier
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/EI
 */
export declare class EI extends HL7Obj {
    entity_id: ST;
    namespace_id: IS;
    universal_id: ST;
    universal_id_type: ID;
    constructor(depth: Depth);
}
