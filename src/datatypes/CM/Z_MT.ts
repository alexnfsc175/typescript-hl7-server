import {HL7Obj, Depth} from '../../base';
import {ST} from '../ST';
/**
 * CM for MSH-8 <message type>
 */
export class Z_MT extends HL7Obj {
  event: ST;
  trigger: ST;
  message: ST; // Alex

  constructor(depth: Depth) {
    super(depth);

    this.event = new ST(this.depth.peekDown());
    this.trigger = new ST(this.depth.peekDown());
    this.message = new ST(this.depth.peekDown());

    this.hl7_obj_array = [this.event, this.trigger, this.message];
  }
}
