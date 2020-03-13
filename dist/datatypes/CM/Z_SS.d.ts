import { HL7Obj, Depth } from '../../base';
import { CE } from '../CE';
import { TX } from '../TX';
/**
 * CM for OBR - speciemen_source
 */
export declare class Z_SS extends HL7Obj {
    specimen_name: CE;
    additives: TX;
    freetext: TX;
    body_site: CE;
    site_modifier: CE;
    collection_method_modifier_code: CE;
    constructor(depth: Depth);
}
