import { HL7Obj } from '../base/HL7Obj';
import { ST, SI, ID, CE, NM, TS, XCN } from '../datatypes';
/**
 * Observation segment
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/Segments/OBX
 */
export declare class OBX extends HL7Obj {
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
    constructor();
}
