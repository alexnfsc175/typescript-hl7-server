import {HL7Obj} from '../base/HL7Obj';
import {ST} from './ST';
import {HD} from './HD';
import {IS} from './IS';
import {Depth} from '../base/depth';

//<ID number (ST)> ^ <family name (ST)> ^ <given name (ST)> ^ <middle initial or name (ST)> ^ <suffix (e.g., JR or III) (ST)> ^ <prefix (e.g., DR) (ST)> ^ <degree (e.g., MD) (ST)> ^ <source table (IS)> ^ <assigning authority (HD)>

/**
 * CN - Composite ID Number And Name
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/CN
 */
export class CN extends HL7Obj {
  id: ST;
  family_name: ST;
  given_name: ST;
  middle_name: ST;
  suffix: ST;
  prefix: ST;
  degree: ST;
  source_table: IS;
  assigning_authority: HD;

  constructor(depth: Depth) {
    super(depth);

    this.id = new ST(this.depth.peekDown());
    this.family_name = new ST(this.depth.peekDown());
    this.given_name = new ST(this.depth.peekDown());
    this.middle_name = new ST(this.depth.peekDown());
    this.suffix = new ST(this.depth.peekDown());
    this.prefix = new ST(this.depth.peekDown());
    this.degree = new ST(this.depth.peekDown());
    this.source_table = new IS(this.depth.peekDown());
    this.assigning_authority = new HD(this.depth.peekDown());

    this.hl7_obj_array = [
      this.id,
      this.family_name,
      this.given_name,
      this.middle_name,
      this.suffix,
      this.prefix,
      this.degree,
      this.source_table,
      this.assigning_authority,
    ];
  }
}
