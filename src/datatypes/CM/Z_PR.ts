import {HL7Obj, Depth} from '../../base';

import {CE} from '..';
import {TX} from '../TX';
import {ST} from '../ST';

/**
 * CM for OBR-26 -- parent_result
 */
export class Z_PR extends HL7Obj {
  observation_id_of_parent_result: CE;
  sub_id_of_parent_result: ST;
  result_from_parent: TX;

  constructor(depth: Depth) {
    super(depth);

    this.observation_id_of_parent_result = new CE(this.depth.peekDown());
    this.sub_id_of_parent_result = new ST(this.depth.peekDown());
    this.result_from_parent = new TX(this.depth.peekDown());

    this.hl7_obj_array = [
      this.observation_id_of_parent_result,
      this.sub_id_of_parent_result,
      this.result_from_parent,
    ];
  }
}
