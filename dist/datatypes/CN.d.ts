import { HL7Obj } from '../base/HL7Obj';
import { ST } from './ST';
import { HD } from './HD';
import { IS } from './IS';
import { Depth } from '../base/depth';
/**
 * CN - Composite ID Number And Name
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/CN
 */
export declare class CN extends HL7Obj {
    id: ST;
    family_name: ST;
    given_name: ST;
    middle_name: ST;
    suffix: ST;
    prefix: ST;
    degree: ST;
    source_table: IS;
    assigning_authority: HD;
    constructor(depth: Depth);
}
