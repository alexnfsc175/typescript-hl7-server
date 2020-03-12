import {HL7Obj} from '../base/HL7Obj';
import {ST, SI, ID, CE, NM, TS, XCN} from '../datatypes';
import {Depth, DepthEnum} from '../base/depth';

/**
 * Observation segment
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/Segments/OBX
 */
export class OBX extends HL7Obj {
  segment: ST;
  set_id: SI;
  value_type: ID;
  observation_id: CE;
  observation_sub_id: ST;
  observation_value: ST;
  units: CE;
  references_range: ST;
  abnormal_flags: ID;
  probability: NM;
  nature_of_abnormal_test: ID;
  observation_result_status: ID;
  date_last_observed_normal_values: TS;
  user_defined_access_checks: ST;
  observation_datetime: TS;
  producer_id: CE;
  responsible_observer: XCN;
  observation_method: CE;

  constructor() {
    super(new Depth(DepthEnum.SEGMENT));

    this.segment = new ST(this.depth.peekDown());
    this.set_id = new SI(this.depth.peekDown());
    this.value_type = new ID(this.depth.peekDown());
    this.observation_id = new CE(this.depth.peekDown());
    this.observation_sub_id = new ST(this.depth.peekDown());
    this.observation_value = new ST(this.depth.peekDown());
    this.units = new CE(this.depth.peekDown());
    this.references_range = new ST(this.depth.peekDown());
    this.abnormal_flags = new ID(this.depth.peekDown());
    this.probability = new NM(this.depth.peekDown());
    this.nature_of_abnormal_test = new ID(this.depth.peekDown());
    this.observation_result_status = new ID(this.depth.peekDown());
    this.date_last_observed_normal_values = new TS(this.depth.peekDown());
    this.user_defined_access_checks = new ST(this.depth.peekDown());
    this.observation_datetime = new TS(this.depth.peekDown());
    this.producer_id = new CE(this.depth.peekDown());
    this.responsible_observer = new XCN(this.depth.peekDown());
    this.observation_method = new CE(this.depth.peekDown());

    this.hl7_obj_array = [
      this.segment,
      this.set_id,
      this.value_type,
      this.observation_id,
      this.observation_sub_id,
      this.observation_value,
      this.units,
      this.references_range,
      this.abnormal_flags,
      this.probability,
      this.nature_of_abnormal_test,
      this.observation_result_status,
      this.date_last_observed_normal_values,
      this.user_defined_access_checks,
      this.observation_datetime,
      this.producer_id,
      this.responsible_observer,
      this.observation_method,
    ];
  }
}
