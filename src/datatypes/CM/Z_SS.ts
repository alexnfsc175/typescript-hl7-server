import {HL7Obj, Depth} from '../../base';
import {CE} from '../CE';
import {TX} from '../TX';
/**
 * CM for OBR - speciemen_source
 */

export class Z_SS extends HL7Obj {
  specimen_name: CE;
  additives: TX;
  freetext: TX;
  body_site: CE;
  site_modifier: CE;
  collection_method_modifier_code: CE;

  constructor(depth: Depth) {
    super(depth);

    this.specimen_name = new CE(this.depth.peekDown());
    this.additives = new TX(this.depth.peekDown());
    this.freetext = new TX(this.depth.peekDown());
    this.body_site = new CE(this.depth.peekDown());
    this.site_modifier = new CE(this.depth.peekDown());
    this.collection_method_modifier_code = new CE(this.depth.peekDown());

    this.hl7_obj_array = [
      this.specimen_name,
      this.additives,
      this.freetext,
      this.body_site,
      this.site_modifier,
      this.collection_method_modifier_code,
    ];
  }
}
