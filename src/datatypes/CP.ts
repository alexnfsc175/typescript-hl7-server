import {HL7Obj} from '../base/HL7Obj';
import {ID} from './ID';
import {NM} from './NM';
import {CE} from './CE';
import {MO} from './MO';
import {Depth} from '../base/depth';

/**
 * Composite Price
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/CP
 */
export class CP extends HL7Obj {
  price: MO;
  price_type: ID;
  from_value: NM;
  to_value: NM;
  range_units: CE;
  range_type: ID;

  constructor(depth: Depth) {
    super(depth);

    this.price = new MO(this.depth.peekDown());
    this.price_type = new ID(this.depth.peekDown());
    this.from_value = new NM(this.depth.peekDown());
    this.to_value = new NM(this.depth.peekDown());
    this.range_units = new CE(this.depth.peekDown());
    this.range_type = new ID(this.depth.peekDown());

    this.hl7_obj_array = [
      this.price,
      this.price_type,
      this.from_value,
      this.to_value,
      this.range_units,
      this.range_type,
    ];
  }
}
