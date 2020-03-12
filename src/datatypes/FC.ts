import {HL7Obj} from '../base/HL7Obj';
import {ID} from './ID';
import {TS} from './TS';
import {Depth} from '../base/depth';

/**
 * Financial Class
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/FC
 */
export class FC extends HL7Obj {
  financial_class: ID;
  effective_date: TS;

  constructor(depth: Depth) {
    super(depth);

    this.financial_class = new ID(this.depth.peekDown());
    this.effective_date = new TS(this.depth.peekDown());

    this.hl7_obj_array = [this.financial_class, this.effective_date];
  }
}
