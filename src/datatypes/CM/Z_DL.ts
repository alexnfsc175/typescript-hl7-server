import {HL7Obj, Depth} from '../../base';
import {IS} from '../IS';
import {TS} from '../TS';
/**
 * CM for PV1 discharged_to_location
 */
export class Z_DL extends HL7Obj {
  discharge_location: IS;
  effective_date: TS;

  constructor(depth: Depth) {
    super(depth);

    this.discharge_location = new IS(this.depth.peekDown());
    this.effective_date = new TS(this.depth.peekDown());

    this.hl7_obj_array = [this.discharge_location, this.effective_date];
  }
}
