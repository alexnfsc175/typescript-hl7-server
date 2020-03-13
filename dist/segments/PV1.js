"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../base/HL7Obj");
const datatypes_1 = require("../datatypes");
const depth_1 = require("../base/depth");
/**
 * Patient visit
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/Segments/PV1
 */
class PV1 extends HL7Obj_1.HL7Obj {
    constructor() {
        super(new depth_1.Depth(depth_1.DepthEnum.SEGMENT));
        this.segment = new datatypes_1.ST(this.depth.peekDown());
        this.set_ID = new datatypes_1.SI(this.depth.peekDown());
        this.patient_class = new datatypes_1.IS(this.depth.peekDown());
        this.assigned_patient_location = new datatypes_1.PL(this.depth.peekDown());
        this.admission_type = new datatypes_1.IS(this.depth.peekDown());
        this.preadmit_number = new datatypes_1.CX(this.depth.peekDown());
        this.prior_patient_location = new datatypes_1.PL(this.depth.peekDown());
        this.attending_doctor = new datatypes_1.XCN(this.depth.peekDown());
        this.referring_doctor = new datatypes_1.XCN(this.depth.peekDown());
        this.consulting_doctor = new datatypes_1.XCN(this.depth.peekDown());
        this.hospital_service = new datatypes_1.IS(this.depth.peekDown());
        this.temporary_location = new datatypes_1.PL(this.depth.peekDown());
        this.predmit_test_indicator = new datatypes_1.IS(this.depth.peekDown());
        this.readmission_indicator = new datatypes_1.IS(this.depth.peekDown());
        this.admit_source = new datatypes_1.IS(this.depth.peekDown());
        this.ambulatory_status = new datatypes_1.IS(this.depth.peekDown());
        this.vip_indicator = new datatypes_1.IS(this.depth.peekDown());
        this.admitting_doctor = new datatypes_1.XCN(this.depth.peekDown());
        this.patient_type = new datatypes_1.IS(this.depth.peekDown());
        this.visit_number = new datatypes_1.CX(this.depth.peekDown());
        this.financial_class = new datatypes_1.FC(this.depth.peekDown());
        this.charge_price_indicator = new datatypes_1.IS(this.depth.peekDown());
        this.courtesy_code = new datatypes_1.IS(this.depth.peekDown());
        this.credit_rating = new datatypes_1.IS(this.depth.peekDown());
        this.contract_code = new datatypes_1.IS(this.depth.peekDown());
        this.contract_effective_date = new datatypes_1.DT(this.depth.peekDown());
        this.contract_amount = new datatypes_1.NM(this.depth.peekDown());
        this.contract_period = new datatypes_1.NM(this.depth.peekDown());
        this.interest_code = new datatypes_1.IS(this.depth.peekDown());
        this.transfer_to_bad_debt_code = new datatypes_1.IS(this.depth.peekDown());
        this.transfer_to_bad_debt_date = new datatypes_1.DT(this.depth.peekDown());
        this.bad_debt_agency_code = new datatypes_1.IS(this.depth.peekDown());
        this.bad_debt_transfer_amount = new datatypes_1.NM(this.depth.peekDown());
        this.bad_debt_recovery_amount = new datatypes_1.NM(this.depth.peekDown());
        this.delete_account_indicator = new datatypes_1.IS(this.depth.peekDown());
        this.delete_account_date = new datatypes_1.DT(this.depth.peekDown());
        this.discharge_disposition = new datatypes_1.IS(this.depth.peekDown());
        this.discharged_to_location = new datatypes_1.Z_DL(this.depth.peekDown());
        this.diet_type = new datatypes_1.IS(this.depth.peekDown());
        this.servicing_facility = new datatypes_1.IS(this.depth.peekDown());
        this.bed_status = new datatypes_1.IS(this.depth.peekDown());
        this.account_status = new datatypes_1.IS(this.depth.peekDown());
        this.pending_location = new datatypes_1.PL(this.depth.peekDown());
        this.prior_temporary_location = new datatypes_1.PL(this.depth.peekDown());
        this.admit_date_time = new datatypes_1.TS(this.depth.peekDown());
        this.discharge_date_time = new datatypes_1.TS(this.depth.peekDown());
        this.current_patient_balance = new datatypes_1.NM(this.depth.peekDown());
        this.total_charges = new datatypes_1.NM(this.depth.peekDown());
        this.total_adjustments = new datatypes_1.NM(this.depth.peekDown());
        this.total_payments = new datatypes_1.NM(this.depth.peekDown());
        this.alternate_visit_ID = new datatypes_1.CX(this.depth.peekDown());
        this.visit_indicator = new datatypes_1.IS(this.depth.peekDown());
        this.other_healthcare_provider = new datatypes_1.XCN(this.depth.peekDown());
        this.hl7_obj_array = [
            this.segment,
            this.set_ID,
            this.patient_class,
            this.assigned_patient_location,
            this.admission_type,
            this.preadmit_number,
            this.prior_patient_location,
            this.attending_doctor,
            this.referring_doctor,
            this.consulting_doctor,
            this.hospital_service,
            this.temporary_location,
            this.predmit_test_indicator,
            this.readmission_indicator,
            this.admit_source,
            this.ambulatory_status,
            this.vip_indicator,
            this.admitting_doctor,
            this.patient_type,
            this.visit_number,
            this.financial_class,
            this.charge_price_indicator,
            this.courtesy_code,
            this.credit_rating,
            this.contract_code,
            this.contract_effective_date,
            this.contract_amount,
            this.contract_period,
            this.interest_code,
            this.transfer_to_bad_debt_code,
            this.transfer_to_bad_debt_date,
            this.bad_debt_agency_code,
            this.bad_debt_transfer_amount,
            this.bad_debt_recovery_amount,
            this.delete_account_indicator,
            this.delete_account_date,
            this.discharge_disposition,
            this.discharged_to_location,
            this.diet_type,
            this.servicing_facility,
            this.bed_status,
            this.account_status,
            this.pending_location,
            this.prior_temporary_location,
            this.admit_date_time,
            this.discharge_date_time,
            this.current_patient_balance,
            this.total_charges,
            this.total_adjustments,
            this.total_payments,
            this.alternate_visit_ID,
            this.visit_indicator,
            this.other_healthcare_provider,
        ];
    }
}
exports.PV1 = PV1;
