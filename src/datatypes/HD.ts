import {HL7Obj} from '../base/HL7Obj';
import {ID, ST, IS} from '.';
import {Depth} from '../base/depth';

/**
 * Hierarchic Designator
 * @see  https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/HD
 */
export class HD extends HL7Obj {
  /** 1*/ namespace_id: IS;
  /** 1*/ universal_id: ST;
  /** 1*/ universal_id_type: ID;

  constructor(depth: Depth) {
    super(depth);

    this.namespace_id = new IS(this.depth.peekDown());
    this.universal_id = new ST(this.depth.peekDown());
    this.universal_id_type = new ID(this.depth.peekDown());

    this.hl7_obj_array = [
      this.namespace_id,
      this.universal_id,
      this.universal_id_type,
    ];
  }
}
