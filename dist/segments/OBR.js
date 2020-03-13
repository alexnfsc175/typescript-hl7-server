"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../base");
const datatypes_1 = require("../datatypes");
/**
 * Observation request segment
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/Segments/OBR
 */
class OBR extends base_1.HL7Obj {
    constructor() {
        super(new base_1.Depth(base_1.DepthEnum.SEGMENT));
        this.segment = new datatypes_1.ST(this.depth.peekDown());
        this.set_id = new datatypes_1.SI(this.depth.peekDown());
        this.placer_order_number = new datatypes_1.EI(this.depth.peekDown());
        this.filler_order_number = new datatypes_1.EI(this.depth.peekDown());
        this.universal_service_id = new datatypes_1.CE(this.depth.peekDown());
        this.priority = new datatypes_1.ID(this.depth.peekDown());
        this.requested_datetime = new datatypes_1.TS(this.depth.peekDown());
        this.observation_datetime = new datatypes_1.TS(this.depth.peekDown());
        this.observation_end_datetime = new datatypes_1.TS(this.depth.peekDown());
        this.collection_volume = new datatypes_1.CQ(this.depth.peekDown());
        this.collector_id = new datatypes_1.XCN(this.depth.peekDown());
        this.specimen_action_code = new datatypes_1.ID(this.depth.peekDown());
        this.danger_code = new datatypes_1.CE(this.depth.peekDown());
        this.relevant_clinical_info = new datatypes_1.ST(this.depth.peekDown());
        this.specimen_recieved_datetime = new datatypes_1.TS(this.depth.peekDown());
        this.specimen_source = new datatypes_1.Z_SS(this.depth.peekDown());
        this.ordering_provider = new datatypes_1.XCN(this.depth.peekDown());
        this.order_callback_number = new datatypes_1.XTN(this.depth.peekDown());
        this.placer_field_1 = new datatypes_1.ST(this.depth.peekDown());
        this.placer_field_2 = new datatypes_1.ST(this.depth.peekDown());
        this.filler_field_1 = new datatypes_1.ST(this.depth.peekDown());
        this.filler_field_2 = new datatypes_1.ST(this.depth.peekDown());
        this.results_change_datetime = new datatypes_1.TS(this.depth.peekDown());
        this.charge_to_practice = new datatypes_1.Z_CP(this.depth.peekDown());
        this.diagnostic_service_section_id = new datatypes_1.ID(this.depth.peekDown());
        this.result_status = new datatypes_1.ID(this.depth.peekDown());
        this.parent_result = new datatypes_1.Z_PR(this.depth.peekDown());
        this.quantity_timing = new datatypes_1.TQ(this.depth.peekDown());
        this.result_copies_to = new datatypes_1.XCN(this.depth.peekDown());
        this.parent = new datatypes_1.Z_PA(this.depth.peekDown());
        this.transportation_mode = new datatypes_1.ID(this.depth.peekDown());
        this.reason_for_study = new datatypes_1.CE(this.depth.peekDown());
        this.principal_result_interpreter = new datatypes_1.Z_CU(this.depth.peekDown());
        this.assistant_result_interpreter = new datatypes_1.Z_CU(this.depth.peekDown());
        this.technician = new datatypes_1.Z_CU(this.depth.peekDown());
        this.transcriptionist = new datatypes_1.Z_CU(this.depth.peekDown());
        this.scheduled_datetime = new datatypes_1.TS(this.depth.peekDown());
        this.number_of_sample_containers = new datatypes_1.NM(this.depth.peekDown());
        this.transport_logistics_of_sample = new datatypes_1.CE(this.depth.peekDown());
        this.collectors_comments = new datatypes_1.CE(this.depth.peekDown());
        this.transport_arrangement_responsibility = new datatypes_1.CE(this.depth.peekDown());
        this.transport_arranged = new datatypes_1.ID(this.depth.peekDown());
        this.esccort_required = new datatypes_1.ID(this.depth.peekDown());
        this.planned_patient_transport_comment = new datatypes_1.CE(this.depth.peekDown());
        // I think these are part of a different HL7 version
        this.procedure_code = new datatypes_1.ST(this.depth.peekDown());
        this.procedure_code_modifier = new datatypes_1.ST(this.depth.peekDown());
        this.placer_supplemental_service_info = new datatypes_1.ST(this.depth.peekDown());
        this.filler_supplemental_service_info = new datatypes_1.ST(this.depth.peekDown());
        this.medically_necessary_duplicate_procedure_reason = new datatypes_1.ST(this.depth.peekDown());
        this.result_handling = new datatypes_1.ST(this.depth.peekDown());
        this.parent_universal_service_id = new datatypes_1.ST(this.depth.peekDown());
        this.observation_group_id = new datatypes_1.ST(this.depth.peekDown());
        this.parent_observation_group_id = new datatypes_1.ST(this.depth.peekDown());
        this.alternate_placer_order_number = new datatypes_1.ST(this.depth.peekDown());
        this.parent_order = new datatypes_1.ST(this.depth.peekDown());
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
exports.OBR = OBR;
