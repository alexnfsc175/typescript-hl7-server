import { HL7Obj } from '../base';
import { ST, SI, CE, CX, XON, XAD, XPN, XTN, DT, IS, TS, ID, XCN, NM, CP, Z_AI } from '../datatypes';
/**
 * Insurance
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/Segments/IN1
 */
export declare class IN1 extends HL7Obj {
    /** IN1-0*/ segment: ST;
    /** IN1-1*/ set_id: SI;
    /** IN1-2*/ insurance_plan_id: CE;
    /** IN1-3*/ insurance_company_id: CX;
    /** IN1-4*/ insurance_company_name: XON;
    /** IN1-5*/ insurance_company_address: XAD;
    /** IN1-6*/ insurance_company_contact_person: XPN;
    /** IN1-7*/ insurance_company_contact_phone: XTN;
    /** IN1-8*/ group_number: ST;
    /** IN1-9*/ group_name: XON;
    /** IN1-10*/ insured_group_employee_id: CX;
    /** IN1-11*/ insured_group_employee_name: XON;
    /** IN1-12*/ plan_effecitve_date: DT;
    /** IN1-13*/ plan_expiration_date: DT;
    /** IN1-14*/ authorization_information: Z_AI;
    /** IN1-15*/ plan_type: IS;
    /** IN1-16*/ name_of_insured: XPN;
    /** IN1-17*/ insured_ralationship_to_patient: IS;
    /** IN1-18*/ insured_date_of_birth: TS;
    /** IN1-19*/ insured_address: XAD;
    /** IN1-20*/ assignment_of_benefits: IS;
    /** IN1-21*/ coordination_of_benefits: IS;
    /** IN1-22*/ coordination_of_benefits_priority: ST;
    /** IN1-23*/ notice_of_admission_flag: ID;
    /** IN1-24*/ notice_of_admission_date: DT;
    /** IN1-25*/ report_of_eligibility_flag: ID;
    /** IN1-26*/ report_of_eligibility_date: DT;
    /** IN1-27*/ release_information_code: IS;
    /** IN1-28*/ preadmit_cert: ST;
    /** IN1-29*/ verification_datetime: TS;
    /** IN1-30*/ verification_by: XCN;
    /** IN1-31*/ type_of_agreement_code: IS;
    /** IN1-32*/ billing_status: IS;
    /** IN1-33*/ lifetime_reserve_days: NM;
    /** IN1-34*/ delay_before_LR_day: NM;
    /** IN1-35*/ company_plan_code: IS;
    /** IN1-36*/ policy_number: ST;
    /** IN1-37*/ policy_deductible: CP;
    /** IN1-38*/ policy_limit_amount: CP;
    /** IN1-39*/ policy_limit_days: NM;
    /** IN1-40*/ room_rate_semi_private: CP;
    /** IN1-41*/ room_rate_private: CP;
    /** IN1-42*/ insured_employment_status: CE;
    /** IN1-43*/ insured_sex: IS;
    /** IN1-44*/ insured_employer_address: XAD;
    /** IN1-45*/ verification_status: ST;
    /** IN1-46*/ prior_insurance_plan_id: IS;
    /** IN1-47*/ converage_type: IS;
    /** IN1-48*/ handicap: IS;
    /** IN1-49*/ insured_id: CX;
    constructor();
}
