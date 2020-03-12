import {HL7Obj, Depth} from '../base';
import {IS} from './IS';
import {HD} from './HD';
import {ST} from './ST';

//<point of care (IS )> ^ <room (IS )> ^ <bed (IS)> ^ <facility (HD)> ^ < location status (IS )> ^ <person location type (IS)> ^ <building (IS )> ^ <floor (IS )> ^ <location description (ST)>

/**
 * Person Location
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/PL
 */
export class PL extends HL7Obj {
  point_of_care: IS;
  room: IS;
  bed: IS;
  facility: HD;
  location_status: IS;
  person_location_type: IS;
  building: IS;
  floor: IS;
  location_description: ST;

  constructor(depth: Depth) {
    super(depth);

    this.point_of_care = new IS(this.depth.peekDown());
    this.room = new IS(this.depth.peekDown());
    this.bed = new IS(this.depth.peekDown());
    this.facility = new HD(this.depth.peekDown());
    this.location_status = new IS(this.depth.peekDown());
    this.person_location_type = new IS(this.depth.peekDown());
    this.building = new IS(this.depth.peekDown());
    this.floor = new IS(this.depth.peekDown());
    this.location_description = new ST(this.depth.peekDown());

    this.hl7_obj_array = [
      this.point_of_care,
      this.room,
      this.bed,
      this.facility,
      this.location_status,
      this.person_location_type,
      this.building,
      this.floor,
      this.location_description,
    ];
  }
}
