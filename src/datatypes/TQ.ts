import {HL7Obj, Depth} from '../base';
import {TX, ST, TS, ID} from '.';

/**
 * Timing Quantity
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/TQ
 */
export class TQ extends HL7Obj {
  quantity: ST; // FIXME: Should be CQ
  interval: ST;
  duration: ST;
  start_datetime: TS;
  end_datetime: TS;
  priority: ID;
  condition: ST;
  text: TX;
  conjunction: ID;
  order_sequencing: ST;

  constructor(depth: Depth) {
    super(depth);

    this.quantity = new ST(this.depth.peekDown()); // FIXME: Should be CQ
    this.interval = new ST(this.depth.peekDown());
    this.duration = new ST(this.depth.peekDown());
    this.start_datetime = new TS(this.depth.peekDown());
    this.end_datetime = new TS(this.depth.peekDown());
    this.priority = new ID(this.depth.peekDown());
    this.condition = new ST(this.depth.peekDown());
    this.text = new TX(this.depth.peekDown());
    this.conjunction = new ID(this.depth.peekDown());
    this.order_sequencing = new ST(this.depth.peekDown());

    this.hl7_obj_array = [
      this.quantity,
      this.interval,
      this.duration,
      this.start_datetime,
      this.end_datetime,
      this.priority,
      this.condition,
      this.text,
      this.conjunction,
      this.order_sequencing,
    ];
  }
}
