import {HL7Obj} from '../base/HL7Obj';
import {TS, CE, ST, ID} from '../datatypes';
import {Depth, DepthEnum} from '../base/depth';

/**
 * Accident
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/Segments/ACC
 */
export class ACC extends HL7Obj {
  accident_datetime: TS;
  accident_code: CE;
  accident_location: ST;
  auto_accident_sate: CE;
  accident_job_related_indicator: ID;
  accident_death_indicator: ID;

  constructor() {
    super(new Depth(DepthEnum.SEGMENT));

    this.accident_datetime = new TS(this.depth.peekDown());
    this.accident_code = new CE(this.depth.peekDown());
    this.accident_location = new ST(this.depth.peekDown());
    this.auto_accident_sate = new CE(this.depth.peekDown());
    this.accident_job_related_indicator = new ID(this.depth.peekDown());
    this.accident_death_indicator = new ID(this.depth.peekDown());

    this.hl7_obj_array = [
      this.accident_datetime,
      this.accident_code,
      this.accident_location,
      this.auto_accident_sate,
      this.accident_job_related_indicator,
      this.accident_death_indicator,
    ];
  }
}
