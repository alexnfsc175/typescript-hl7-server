import { HL7Obj, Depth } from '../base';
import { IS } from './IS';
import { HD } from './HD';
import { ST } from './ST';
/**
 * Person Location
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/PL
 */
export declare class PL extends HL7Obj {
    point_of_care: IS;
    room: IS;
    bed: IS;
    facility: HD;
    location_status: IS;
    person_location_type: IS;
    building: IS;
    floor: IS;
    location_description: ST;
    constructor(depth: Depth);
}
