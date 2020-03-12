import {HL7Obj} from '../base/HL7Obj';
import {NM} from './NM';
import {CE} from './CE';
import {Depth} from '../base/depth';

//<quantity (NM)> ^ <units (CE)>
/**
 * Composite Quantity With Units
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/CQ
 */
export class CQ extends HL7Obj {
  quantity: NM;
  units: CE;

  constructor(depth: Depth) {
    super(depth);

    this.quantity = new NM(this.depth.peekDown());
    this.units = new CE(this.depth.peekDown());

    this.hl7_obj_array = [this.quantity, this.units];
  }
}
