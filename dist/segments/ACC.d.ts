import { HL7Obj } from '../base/HL7Obj';
import { TS, CE, ST, ID } from '../datatypes';
/**
 * Accident
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/Segments/ACC
 */
export declare class ACC extends HL7Obj {
    accident_datetime: TS;
    accident_code: CE;
    accident_location: ST;
    auto_accident_sate: CE;
    accident_job_related_indicator: ID;
    accident_death_indicator: ID;
    constructor();
}
