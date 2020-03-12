import {HL7Obj} from '../base/HL7Obj';
import {ST} from './ST';
import {Depth} from '../base/depth';
import {IS} from './IS';
import {ID} from './ID';

//<entity identifier (ST)> ^ <namespace ID (IS)> ^ <universal ID (ST)> ^ <universal ID type (ID)>

/**
 * Entity Identifier
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/EI
 */
export class EI extends HL7Obj {
  entity_id: ST;
  namespace_id: IS;
  universal_id: ST;
  universal_id_type: ID;

  constructor(depth: Depth) {
    super(depth);

    this.entity_id = new ST(this.depth.peekDown());
    this.namespace_id = new IS(this.depth.peekDown());
    this.universal_id = new ST(this.depth.peekDown());
    this.universal_id_type = new ID(this.depth.peekDown());

    this.hl7_obj_array = [
      this.entity_id,
      this.namespace_id,
      this.universal_id,
      this.universal_id_type,
    ];
  }
}
