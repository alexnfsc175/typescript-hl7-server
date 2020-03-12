import {Depth, HL7Obj} from '../base';
import {IS} from './IS';

/**
 * Job Code Class
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/JCC
 */
export class JCC extends HL7Obj {
  job_code: IS;
  job_class: IS;

  constructor(depth: Depth) {
    super(depth);

    this.job_code = new IS(this.depth.peekDown());
    this.job_class = new IS(this.depth.peekDown());

    this.hl7_obj_array = [this.job_code, this.job_class];
  }
}
