import { HL7Obj } from '../base';
import { ST, SI, EI, CE, ID, TS, CQ, XCN, XTN, TQ, NM, Z_CU, Z_PA, Z_PR, Z_CP, Z_SS } from '../datatypes';
/**
 * Observation request segment
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/Segments/OBR
 */
export declare class OBR extends HL7Obj {
    /** OBR-0 */ segment: ST;
    /** OBR-1 */ set_id: SI;
    /** OBR-2 */ placer_order_number: EI;
    /** OBR-3 */ filler_order_number: EI;
    /** OBR-4 */ universal_service_id: CE;
    /** OBR-5 */ priority: ID;
    /** OBR-6 */ requested_datetime: TS;
    /** OBR-7 */ observation_datetime: TS;
    /** OBR-8 */ observation_end_datetime: TS;
    /** OBR-9 */ collection_volume: CQ;
    /** OBR-10 */ collector_id: XCN;
    /** OBR-11 */ specimen_action_code: ID;
    /** OBR-12 */ danger_code: CE;
    /** OBR-13 */ relevant_clinical_info: ST;
    /** OBR-14 */ specimen_recieved_datetime: TS;
    /** OBR-15 */ specimen_source: Z_SS;
    /** OBR-16 */ ordering_provider: XCN;
    /** OBR-17 */ order_callback_number: XTN;
    /** OBR-18 */ placer_field_1: ST;
    /** OBR-19 */ placer_field_2: ST;
    /** OBR-20 */ filler_field_1: ST;
    /** OBR-21 */ filler_field_2: ST;
    /** OBR-22 */ results_change_datetime: TS;
    /** OBR-23 */ charge_to_practice: Z_CP;
    /** OBR-24 */ diagnostic_service_section_id: ID;
    /** OBR-25 */ result_status: ID;
    /** OBR-26 */ parent_result: Z_PR;
    /** OBR-27 */ quantity_timing: TQ;
    /** OBR-28 */ result_copies_to: XCN;
    /** OBR-29 */ parent: Z_PA;
    /** OBR-30 */ transportation_mode: ID;
    /** OBR-31 */ reason_for_study: CE;
    /** OBR-32 */ principal_result_interpreter: Z_CU;
    /** OBR-33 */ assistant_result_interpreter: Z_CU;
    /** OBR-34 */ technician: Z_CU;
    /** OBR-35 */ transcriptionist: Z_CU;
    /** OBR-36 */ scheduled_datetime: TS;
    /** OBR-37 */ number_of_sample_containers: NM;
    /** OBR-38 */ transport_logistics_of_sample: CE;
    /** OBR-39 */ collectors_comments: CE;
    /** OBR-40 */ transport_arrangement_responsibility: CE;
    /** OBR-41 */ transport_arranged: ID;
    /** OBR-42 */ esccort_required: ID;
    /** OBR-43 */ planned_patient_transport_comment: CE;
    /** OBR-44 */ procedure_code: ST;
    /** OBR-45 */ procedure_code_modifier: ST;
    /** OBR-46 */ placer_supplemental_service_info: ST;
    /** OBR-47 */ filler_supplemental_service_info: ST;
    /** OBR-48 */ medically_necessary_duplicate_procedure_reason: ST;
    /** OBR-49 */ result_handling: ST;
    /** OBR-50 */ parent_universal_service_id: ST;
    /** OBR-51 */ observation_group_id: ST;
    /** OBR-52 */ parent_observation_group_id: ST;
    /** OBR-53 */ alternate_placer_order_number: ST;
    /** OBR-54 */ parent_order: ST;
    constructor();
}
