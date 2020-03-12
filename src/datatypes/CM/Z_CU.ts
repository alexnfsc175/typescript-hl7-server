import {HL7Obj, Depth} from '../../base';

import {TS} from '../TS';
import {IS} from '../IS';
import {HD} from '../HD';
import {ST} from '../ST';

/**
 * Clinical User - OBR
 *  - principal_interpreter
 *  - assistant_inperpreter
 *  - technician
 *  - transcriptionist
 */
export class Z_CU extends HL7Obj {
  name: ST; // TODO: FIX CN
  start_datetime: TS;
  end_datetime: TS;
  point_of_care: IS;
  room: IS;
  bed: IS;
  facility: HD;
  location_satus: IS;
  patient_location_type: IS;
  building: IS;
  floor: IS;

  constructor(depth: Depth) {
    super(depth);

    this.name = new ST(this.depth.peekDown()); // TODO: FIX CN
    this.start_datetime = new TS(this.depth.peekDown());
    this.end_datetime = new TS(this.depth.peekDown());
    this.point_of_care = new IS(this.depth.peekDown());
    this.room = new IS(this.depth.peekDown());
    this.bed = new IS(this.depth.peekDown());
    this.facility = new HD(this.depth.peekDown());
    this.location_satus = new IS(this.depth.peekDown());
    this.patient_location_type = new IS(this.depth.peekDown());
    this.building = new IS(this.depth.peekDown());
    this.floor = new IS(this.depth.peekDown());

    this.hl7_obj_array = [
      this.name,
      this.start_datetime,
      this.end_datetime,
      this.point_of_care,
      this.room,
      this.bed,
      this.facility,
      this.location_satus,
      this.patient_location_type,
      this.building,
      this.floor,
    ];
  }
}
