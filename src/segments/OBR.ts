import {HL7Obj, Depth, DepthEnum} from '../base';
import {
  ST,
  SI,
  EI,
  CE,
  ID,
  TS,
  CQ,
  XCN,
  XTN,
  TQ,
  NM,
  Z_CU,
  Z_PA,
  Z_PR,
  Z_CP,
  Z_SS,
} from '../datatypes';

/**
 * Observation request segment
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/Segments/OBR
 */
export class OBR extends HL7Obj {
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

  // I think these are part of a different HL7 version

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

  constructor() {
    super(new Depth(DepthEnum.SEGMENT));

    this.segment = new ST(this.depth.peekDown());
    this.set_id = new SI(this.depth.peekDown());
    this.placer_order_number = new EI(this.depth.peekDown());
    this.filler_order_number = new EI(this.depth.peekDown());
    this.universal_service_id = new CE(this.depth.peekDown());
    this.priority = new ID(this.depth.peekDown());
    this.requested_datetime = new TS(this.depth.peekDown());
    this.observation_datetime = new TS(this.depth.peekDown());
    this.observation_end_datetime = new TS(this.depth.peekDown());
    this.collection_volume = new CQ(this.depth.peekDown());
    this.collector_id = new XCN(this.depth.peekDown());
    this.specimen_action_code = new ID(this.depth.peekDown());
    this.danger_code = new CE(this.depth.peekDown());
    this.relevant_clinical_info = new ST(this.depth.peekDown());
    this.specimen_recieved_datetime = new TS(this.depth.peekDown());
    this.specimen_source = new Z_SS(this.depth.peekDown());
    this.ordering_provider = new XCN(this.depth.peekDown());
    this.order_callback_number = new XTN(this.depth.peekDown());
    this.placer_field_1 = new ST(this.depth.peekDown());
    this.placer_field_2 = new ST(this.depth.peekDown());
    this.filler_field_1 = new ST(this.depth.peekDown());
    this.filler_field_2 = new ST(this.depth.peekDown());
    this.results_change_datetime = new TS(this.depth.peekDown());
    this.charge_to_practice = new Z_CP(this.depth.peekDown());
    this.diagnostic_service_section_id = new ID(this.depth.peekDown());
    this.result_status = new ID(this.depth.peekDown());
    this.parent_result = new Z_PR(this.depth.peekDown());
    this.quantity_timing = new TQ(this.depth.peekDown());
    this.result_copies_to = new XCN(this.depth.peekDown());
    this.parent = new Z_PA(this.depth.peekDown());
    this.transportation_mode = new ID(this.depth.peekDown());
    this.reason_for_study = new CE(this.depth.peekDown());
    this.principal_result_interpreter = new Z_CU(this.depth.peekDown());
    this.assistant_result_interpreter = new Z_CU(this.depth.peekDown());
    this.technician = new Z_CU(this.depth.peekDown());
    this.transcriptionist = new Z_CU(this.depth.peekDown());
    this.scheduled_datetime = new TS(this.depth.peekDown());
    this.number_of_sample_containers = new NM(this.depth.peekDown());
    this.transport_logistics_of_sample = new CE(this.depth.peekDown());
    this.collectors_comments = new CE(this.depth.peekDown());
    this.transport_arrangement_responsibility = new CE(this.depth.peekDown());
    this.transport_arranged = new ID(this.depth.peekDown());
    this.esccort_required = new ID(this.depth.peekDown());
    this.planned_patient_transport_comment = new CE(this.depth.peekDown());

    // I think these are part of a different HL7 version

    this.procedure_code = new ST(this.depth.peekDown());
    this.procedure_code_modifier = new ST(this.depth.peekDown());
    this.placer_supplemental_service_info = new ST(this.depth.peekDown());
    this.filler_supplemental_service_info = new ST(this.depth.peekDown());
    this.medically_necessary_duplicate_procedure_reason = new ST(
      this.depth.peekDown(),
    );
    this.result_handling = new ST(this.depth.peekDown());
    this.parent_universal_service_id = new ST(this.depth.peekDown());
    this.observation_group_id = new ST(this.depth.peekDown());
    this.parent_observation_group_id = new ST(this.depth.peekDown());
    this.alternate_placer_order_number = new ST(this.depth.peekDown());
    this.parent_order = new ST(this.depth.peekDown());

    this.hl7_obj_array = [
      this.segment,
      this.set_id,
      this.placer_order_number,
      this.filler_order_number,
      this.universal_service_id,
      this.priority,
      this.requested_datetime,
      this.observation_datetime,
      this.observation_end_datetime,
      this.collection_volume,
      this.collector_id,
      this.specimen_action_code,
      this.danger_code,
      this.relevant_clinical_info,
      this.specimen_recieved_datetime,
      this.specimen_source,
      this.ordering_provider,
      this.order_callback_number,
      this.placer_field_1,
      this.placer_field_2,
      this.filler_field_1,
      this.filler_field_2,
      this.results_change_datetime,
      this.charge_to_practice,
      this.diagnostic_service_section_id,
      this.result_status,
      this.parent_result,
      this.quantity_timing,
      this.result_copies_to,
      this.parent,
      this.transportation_mode,
      this.reason_for_study,
      this.principal_result_interpreter,
      this.assistant_result_interpreter,
      this.technician,
      this.transcriptionist,
      this.scheduled_datetime,
      this.number_of_sample_containers,
      this.transport_logistics_of_sample,
      this.collectors_comments,
      this.transport_arrangement_responsibility,
      this.transport_arranged,
      this.esccort_required,
      this.planned_patient_transport_comment,
      this.procedure_code,
      this.procedure_code_modifier,
      this.placer_supplemental_service_info,
      this.filler_supplemental_service_info,
      this.medically_necessary_duplicate_procedure_reason,
      this.result_handling,
      this.parent_universal_service_id,
      this.observation_group_id,
      this.parent_observation_group_id,
      this.alternate_placer_order_number,
      this.parent_order,
    ];
  }
}
