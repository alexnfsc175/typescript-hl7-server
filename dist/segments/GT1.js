"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../base/HL7Obj");
const datatypes_1 = require("../datatypes");
const depth_1 = require("../base/depth");
// gaurentor
/**
 * Guarantor
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/Segments/GT1
 */
class GT1 extends HL7Obj_1.HL7Obj {
    constructor() {
        super(new depth_1.Depth(depth_1.DepthEnum.SEGMENT));
        this.segment = new datatypes_1.ST(this.depth.peekDown());
        this.set_id = new datatypes_1.SI(this.depth.peekDown());
        this.gaurantor_number = new datatypes_1.CX(this.depth.peekDown());
        this.gaurentor_name = new datatypes_1.XPN(this.depth.peekDown());
        this.gaurentor_spouse_name = new datatypes_1.XPN(this.depth.peekDown());
        this.gaurentor_address = new datatypes_1.XAD(this.depth.peekDown());
        this.gaurentor_phone_home = new datatypes_1.XTN(this.depth.peekDown());
        this.gaurentor_phone_business = new datatypes_1.XTN(this.depth.peekDown());
        this.gaurentor_dob = new datatypes_1.TS(this.depth.peekDown());
        this.gaurentor_sex = new datatypes_1.IS(this.depth.peekDown());
        this.gaurentor_type = new datatypes_1.IS(this.depth.peekDown());
        this.gaurentor_relationship = new datatypes_1.SI(this.depth.peekDown());
        this.gaurentor_ssn = new datatypes_1.ST(this.depth.peekDown());
        this.gaurentor_date_begin = new datatypes_1.DT(this.depth.peekDown());
        this.gaurentor_date_end = new datatypes_1.DT(this.depth.peekDown());
        this.gaurentor_priority = new datatypes_1.NM(this.depth.peekDown());
        this.guarentor_employer_name = new datatypes_1.XPN(this.depth.peekDown());
        this.guarentor_employer_address = new datatypes_1.XAD(this.depth.peekDown());
        this.guarentor_employer_phone = new datatypes_1.XTN(this.depth.peekDown());
        this.guarentor_employee_id = new datatypes_1.CX(this.depth.peekDown());
        this.guarentor_employment_status = new datatypes_1.IS(this.depth.peekDown());
        this.guarentor_organization_name = new datatypes_1.XON(this.depth.peekDown());
        this.guarantor_billing_hold_flag = new datatypes_1.ID(this.depth.peekDown());
        this.guarantor_credit_rating_code = new datatypes_1.CE(this.depth.peekDown());
        this.guarantor_death_datetime = new datatypes_1.TS(this.depth.peekDown());
        this.guarantor_death_flag = new datatypes_1.ID(this.depth.peekDown());
        this.guarantor_charge_adjustment_code = new datatypes_1.CE(this.depth.peekDown());
        this.guarantor_household_annual_income = new datatypes_1.CP(this.depth.peekDown());
        this.guarantor_household_size = new datatypes_1.NM(this.depth.peekDown());
        this.guarantor_employer_id = new datatypes_1.CX(this.depth.peekDown());
        this.guarantor_marital_status_code = new datatypes_1.IS(this.depth.peekDown());
        this.guarantor_hire_effective_date = new datatypes_1.DT(this.depth.peekDown());
        this.employment_stop_date = new datatypes_1.DT(this.depth.peekDown());
        this.living_dependency = new datatypes_1.IS(this.depth.peekDown());
        this.ambulatory_status = new datatypes_1.IS(this.depth.peekDown());
        this.citizenship = new datatypes_1.IS(this.depth.peekDown());
        this.primary_language = new datatypes_1.CE(this.depth.peekDown());
        this.living_arrangement = new datatypes_1.IS(this.depth.peekDown());
        this.publicity_indicator = new datatypes_1.CE(this.depth.peekDown());
        this.protection_indicator = new datatypes_1.ID(this.depth.peekDown());
        this.student_indicator = new datatypes_1.IS(this.depth.peekDown());
        this.religion = new datatypes_1.IS(this.depth.peekDown());
        this.mothers_maiden_name = new datatypes_1.XPN(this.depth.peekDown());
        this.nationality = new datatypes_1.CE(this.depth.peekDown());
        this.ethnic_group = new datatypes_1.IS(this.depth.peekDown());
        this.contact_persons_name = new datatypes_1.XPN(this.depth.peekDown());
        this.contact_persons_phone = new datatypes_1.XTN(this.depth.peekDown());
        this.contact_reason = new datatypes_1.CE(this.depth.peekDown());
        this.contact_relationship = new datatypes_1.IS(this.depth.peekDown());
        this.job_title = new datatypes_1.ST(this.depth.peekDown());
        this.job_code = new datatypes_1.JCC(this.depth.peekDown());
        this.guarantor_employers_organization_name = new datatypes_1.XON(this.depth.peekDown());
        this.handicap = new datatypes_1.IS(this.depth.peekDown());
        this.job_status = new datatypes_1.IS(this.depth.peekDown());
        this.guarantor_financial_class = new datatypes_1.FC(this.depth.peekDown());
        this.guarantor_race = new datatypes_1.IS(this.depth.peekDown());
        this.hl7_obj_array = [
            this.segment,
            this.set_id,
            this.gaurantor_number,
            this.gaurentor_name,
            this.gaurentor_spouse_name,
            this.gaurentor_address,
            this.gaurentor_phone_home,
            this.gaurentor_phone_business,
            this.gaurentor_dob,
            this.gaurentor_sex,
            this.gaurentor_type,
            this.gaurentor_relationship,
            this.gaurentor_ssn,
            this.gaurentor_date_begin,
            this.gaurentor_date_end,
            this.gaurentor_priority,
            this.guarentor_employer_name,
            this.guarentor_employer_address,
            this.guarentor_employer_phone,
            this.guarentor_employee_id,
            this.guarentor_employment_status,
            this.guarentor_organization_name,
            this.guarantor_billing_hold_flag,
            this.guarantor_credit_rating_code,
            this.guarantor_death_datetime,
            this.guarantor_death_flag,
            this.guarantor_charge_adjustment_code,
            this.guarantor_household_annual_income,
            this.guarantor_household_size,
            this.guarantor_employer_id,
            this.guarantor_marital_status_code,
            this.guarantor_hire_effective_date,
            this.employment_stop_date,
            this.living_dependency,
            this.ambulatory_status,
            this.citizenship,
            this.primary_language,
            this.living_arrangement,
            this.publicity_indicator,
            this.protection_indicator,
            this.student_indicator,
            this.religion,
            this.mothers_maiden_name,
            this.nationality,
            this.ethnic_group,
            this.contact_persons_name,
            this.contact_persons_phone,
            this.contact_reason,
            this.contact_relationship,
            this.job_title,
            this.job_code,
            this.guarantor_employers_organization_name,
            this.handicap,
            this.job_status,
            this.guarantor_financial_class,
            this.guarantor_race,
        ];
    }
}
exports.GT1 = GT1;
