import { HL7Obj } from '../base/HL7Obj';
import { ST, CX, SI, XAD, XTN, TS, IS, NM, ID, CE, XON, XPN, CP, FC, JCC, DT } from '../datatypes';
/**
 * Guarantor
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/Segments/GT1
 */
export declare class GT1 extends HL7Obj {
    /** GT1-0*/ segment: ST;
    /** GT1-1*/ set_id: SI;
    /** GT1-2*/ gaurantor_number: CX;
    /** GT1-3*/ gaurentor_name: XPN;
    /** GT1-4*/ gaurentor_spouse_name: XPN;
    /** GT1-5*/ gaurentor_address: XAD;
    /** GT1-6*/ gaurentor_phone_home: XTN;
    /** GT1-7*/ gaurentor_phone_business: XTN;
    /** GT1-8*/ gaurentor_dob: TS;
    /** GT1-9*/ gaurentor_sex: IS;
    /** GT1-10*/ gaurentor_type: IS;
    /** GT1-11*/ gaurentor_relationship: SI;
    /** GT1-12*/ gaurentor_ssn: ST;
    /** GT1-13*/ gaurentor_date_begin: DT;
    /** GT1-14*/ gaurentor_date_end: DT;
    /** GT1-15*/ gaurentor_priority: NM;
    /** GT1-16*/ guarentor_employer_name: XPN;
    /** GT1-17*/ guarentor_employer_address: XAD;
    /** GT1-18*/ guarentor_employer_phone: XTN;
    /** GT1-19*/ guarentor_employee_id: CX;
    /** GT1-20*/ guarentor_employment_status: IS;
    /** GT1-21*/ guarentor_organization_name: XON;
    /** GT1-22*/ guarantor_billing_hold_flag: ID;
    /** GT1-23*/ guarantor_credit_rating_code: CE;
    /** GT1-24*/ guarantor_death_datetime: TS;
    /** GT1-25*/ guarantor_death_flag: ID;
    /** GT1-26*/ guarantor_charge_adjustment_code: CE;
    /** GT1-27*/ guarantor_household_annual_income: CP;
    /** GT1-28*/ guarantor_household_size: NM;
    /** GT1-29*/ guarantor_employer_id: CX;
    /** GT1-30*/ guarantor_marital_status_code: IS;
    /** GT1-31*/ guarantor_hire_effective_date: DT;
    /** GT1-32*/ employment_stop_date: DT;
    /** GT1-33*/ living_dependency: IS;
    /** GT1-34*/ ambulatory_status: IS;
    /** GT1-35*/ citizenship: IS;
    /** GT1-36*/ primary_language: CE;
    /** GT1-37*/ living_arrangement: IS;
    /** GT1-38*/ publicity_indicator: CE;
    /** GT1-39*/ protection_indicator: ID;
    /** GT1-40*/ student_indicator: IS;
    /** GT1-41*/ religion: IS;
    /** GT1-42*/ mothers_maiden_name: XPN;
    /** GT1-43*/ nationality: CE;
    /** GT1-44*/ ethnic_group: IS;
    /** GT1-45*/ contact_persons_name: XPN;
    /** GT1-46*/ contact_persons_phone: XTN;
    /** GT1-47*/ contact_reason: CE;
    /** GT1-48*/ contact_relationship: IS;
    /** GT1-49*/ job_title: ST;
    /** GT1-50*/ job_code: JCC;
    /** GT1-51*/ guarantor_employers_organization_name: XON;
    /** GT1-52*/ handicap: IS;
    /** GT1-53*/ job_status: IS;
    /** GT1-54*/ guarantor_financial_class: FC;
    /** GT1-55*/ guarantor_race: IS;
    constructor();
}
