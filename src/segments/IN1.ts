import {HL7Obj, Depth, DepthEnum} from '../base';
import {
  ST,
  SI,
  CE,
  CX,
  XON,
  XAD,
  XPN,
  XTN,
  DT,
  IS,
  TS,
  ID,
  XCN,
  NM,
  CP,
  Z_AI,
} from '../datatypes';

/**
 * Insurance
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/Segments/IN1
 */
export class IN1 extends HL7Obj {
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

  constructor() {
    super(new Depth(DepthEnum.SEGMENT));

    this.segment = new ST(this.depth.peekDown());
    this.set_id = new SI(this.depth.peekDown());
    this.insurance_plan_id = new CE(this.depth.peekDown());
    this.insurance_company_id = new CX(this.depth.peekDown());
    this.insurance_company_name = new XON(this.depth.peekDown());
    this.insurance_company_address = new XAD(this.depth.peekDown());
    this.insurance_company_contact_person = new XPN(this.depth.peekDown());
    this.insurance_company_contact_phone = new XTN(this.depth.peekDown());
    this.group_number = new ST(this.depth.peekDown());
    this.group_name = new XON(this.depth.peekDown());
    this.insured_group_employee_id = new CX(this.depth.peekDown());
    this.insured_group_employee_name = new XON(this.depth.peekDown());
    this.plan_effecitve_date = new DT(this.depth.peekDown());
    this.plan_expiration_date = new DT(this.depth.peekDown());
    this.authorization_information = new Z_AI(this.depth.peekDown());
    this.plan_type = new IS(this.depth.peekDown());
    this.name_of_insured = new XPN(this.depth.peekDown());
    this.insured_ralationship_to_patient = new IS(this.depth.peekDown());
    this.insured_date_of_birth = new TS(this.depth.peekDown());
    this.insured_address = new XAD(this.depth.peekDown());
    this.assignment_of_benefits = new IS(this.depth.peekDown());
    this.coordination_of_benefits = new IS(this.depth.peekDown());
    this.coordination_of_benefits_priority = new ST(this.depth.peekDown());
    this.notice_of_admission_flag = new ID(this.depth.peekDown());
    this.notice_of_admission_date = new DT(this.depth.peekDown());
    this.report_of_eligibility_flag = new ID(this.depth.peekDown());
    this.report_of_eligibility_date = new DT(this.depth.peekDown());
    this.release_information_code = new IS(this.depth.peekDown());
    this.preadmit_cert = new ST(this.depth.peekDown());
    this.verification_datetime = new TS(this.depth.peekDown());
    this.verification_by = new XCN(this.depth.peekDown());
    this.type_of_agreement_code = new IS(this.depth.peekDown());
    this.billing_status = new IS(this.depth.peekDown());
    this.lifetime_reserve_days = new NM(this.depth.peekDown());
    this.delay_before_LR_day = new NM(this.depth.peekDown());
    this.company_plan_code = new IS(this.depth.peekDown());
    this.policy_number = new ST(this.depth.peekDown());
    this.policy_deductible = new CP(this.depth.peekDown());
    this.policy_limit_amount = new CP(this.depth.peekDown());
    this.policy_limit_days = new NM(this.depth.peekDown());
    this.room_rate_semi_private = new CP(this.depth.peekDown());
    this.room_rate_private = new CP(this.depth.peekDown());
    this.insured_employment_status = new CE(this.depth.peekDown());
    this.insured_sex = new IS(this.depth.peekDown());
    this.insured_employer_address = new XAD(this.depth.peekDown());
    this.verification_status = new ST(this.depth.peekDown());
    this.prior_insurance_plan_id = new IS(this.depth.peekDown());
    this.converage_type = new IS(this.depth.peekDown());
    this.handicap = new IS(this.depth.peekDown());
    this.insured_id = new CX(this.depth.peekDown());

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
