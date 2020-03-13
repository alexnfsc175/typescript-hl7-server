"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../base");
const datatypes_1 = require("../datatypes");
/**
 * Insurance
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/Segments/IN1
 */
class IN1 extends base_1.HL7Obj {
    constructor() {
        super(new base_1.Depth(base_1.DepthEnum.SEGMENT));
        this.segment = new datatypes_1.ST(this.depth.peekDown());
        this.set_id = new datatypes_1.SI(this.depth.peekDown());
        this.insurance_plan_id = new datatypes_1.CE(this.depth.peekDown());
        this.insurance_company_id = new datatypes_1.CX(this.depth.peekDown());
        this.insurance_company_name = new datatypes_1.XON(this.depth.peekDown());
        this.insurance_company_address = new datatypes_1.XAD(this.depth.peekDown());
        this.insurance_company_contact_person = new datatypes_1.XPN(this.depth.peekDown());
        this.insurance_company_contact_phone = new datatypes_1.XTN(this.depth.peekDown());
        this.group_number = new datatypes_1.ST(this.depth.peekDown());
        this.group_name = new datatypes_1.XON(this.depth.peekDown());
        this.insured_group_employee_id = new datatypes_1.CX(this.depth.peekDown());
        this.insured_group_employee_name = new datatypes_1.XON(this.depth.peekDown());
        this.plan_effecitve_date = new datatypes_1.DT(this.depth.peekDown());
        this.plan_expiration_date = new datatypes_1.DT(this.depth.peekDown());
        this.authorization_information = new datatypes_1.Z_AI(this.depth.peekDown());
        this.plan_type = new datatypes_1.IS(this.depth.peekDown());
        this.name_of_insured = new datatypes_1.XPN(this.depth.peekDown());
        this.insured_ralationship_to_patient = new datatypes_1.IS(this.depth.peekDown());
        this.insured_date_of_birth = new datatypes_1.TS(this.depth.peekDown());
        this.insured_address = new datatypes_1.XAD(this.depth.peekDown());
        this.assignment_of_benefits = new datatypes_1.IS(this.depth.peekDown());
        this.coordination_of_benefits = new datatypes_1.IS(this.depth.peekDown());
        this.coordination_of_benefits_priority = new datatypes_1.ST(this.depth.peekDown());
        this.notice_of_admission_flag = new datatypes_1.ID(this.depth.peekDown());
        this.notice_of_admission_date = new datatypes_1.DT(this.depth.peekDown());
        this.report_of_eligibility_flag = new datatypes_1.ID(this.depth.peekDown());
        this.report_of_eligibility_date = new datatypes_1.DT(this.depth.peekDown());
        this.release_information_code = new datatypes_1.IS(this.depth.peekDown());
        this.preadmit_cert = new datatypes_1.ST(this.depth.peekDown());
        this.verification_datetime = new datatypes_1.TS(this.depth.peekDown());
        this.verification_by = new datatypes_1.XCN(this.depth.peekDown());
        this.type_of_agreement_code = new datatypes_1.IS(this.depth.peekDown());
        this.billing_status = new datatypes_1.IS(this.depth.peekDown());
        this.lifetime_reserve_days = new datatypes_1.NM(this.depth.peekDown());
        this.delay_before_LR_day = new datatypes_1.NM(this.depth.peekDown());
        this.company_plan_code = new datatypes_1.IS(this.depth.peekDown());
        this.policy_number = new datatypes_1.ST(this.depth.peekDown());
        this.policy_deductible = new datatypes_1.CP(this.depth.peekDown());
        this.policy_limit_amount = new datatypes_1.CP(this.depth.peekDown());
        this.policy_limit_days = new datatypes_1.NM(this.depth.peekDown());
        this.room_rate_semi_private = new datatypes_1.CP(this.depth.peekDown());
        this.room_rate_private = new datatypes_1.CP(this.depth.peekDown());
        this.insured_employment_status = new datatypes_1.CE(this.depth.peekDown());
        this.insured_sex = new datatypes_1.IS(this.depth.peekDown());
        this.insured_employer_address = new datatypes_1.XAD(this.depth.peekDown());
        this.verification_status = new datatypes_1.ST(this.depth.peekDown());
        this.prior_insurance_plan_id = new datatypes_1.IS(this.depth.peekDown());
        this.converage_type = new datatypes_1.IS(this.depth.peekDown());
        this.handicap = new datatypes_1.IS(this.depth.peekDown());
        this.insured_id = new datatypes_1.CX(this.depth.peekDown());
        this.hl7_obj_array = [
            this.segment,
            this.set_id,
            this.insurance_plan_id,
            this.insurance_company_id,
            this.insurance_company_name,
            this.insurance_company_address,
            this.insurance_company_contact_person,
            this.insurance_company_contact_phone,
            this.group_number,
            this.group_name,
            this.insured_group_employee_id,
            this.insured_group_employee_name,
            this.plan_effecitve_date,
            this.plan_expiration_date,
            this.authorization_information,
            this.plan_type,
            this.name_of_insured,
            this.insured_ralationship_to_patient,
            this.insured_date_of_birth,
            this.insured_address,
            this.assignment_of_benefits,
            this.coordination_of_benefits,
            this.coordination_of_benefits_priority,
            this.notice_of_admission_flag,
            this.notice_of_admission_date,
            this.report_of_eligibility_flag,
            this.report_of_eligibility_date,
            this.release_information_code,
            this.preadmit_cert,
            this.verification_datetime,
            this.verification_by,
            this.type_of_agreement_code,
            this.billing_status,
            this.lifetime_reserve_days,
            this.delay_before_LR_day,
            this.company_plan_code,
            this.policy_number,
            this.policy_deductible,
            this.policy_limit_amount,
            this.policy_limit_days,
            this.room_rate_semi_private,
            this.room_rate_private,
            this.insured_employment_status,
            this.insured_sex,
            this.insured_employer_address,
            this.verification_status,
            this.prior_insurance_plan_id,
            this.converage_type,
            this.handicap,
            this.insured_id,
        ];
    }
}
exports.IN1 = IN1;
