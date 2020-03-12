import {HL7Obj, Depth} from '../../base';
import {EI} from '../EI';
//<parent's placer order number (EI)> ^ <parent's filler order number (EI)>

/**
 * CM for ORC-8 <parent>
 */
export class Z_PA extends HL7Obj {
  parents_placer_order_number: EI;
  parents_filler_order_number: EI;

  constructor(depth: Depth) {
    super(depth);

    this.parents_placer_order_number = new EI(this.depth.peekDown());
    this.parents_filler_order_number = new EI(this.depth.peekDown());

    this.hl7_obj_array = [
      this.parents_placer_order_number,
      this.parents_filler_order_number,
    ];
  }
}
