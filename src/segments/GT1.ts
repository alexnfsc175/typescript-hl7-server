import {HL7Obj} from '../base/HL7Obj';
import {
  ST,
  CX,
  SI,
  XAD,
  XTN,
  TS,
  IS,
  NM,
  ID,
  CE,
  XON,
  XPN,
  CP,
  FC,
  JCC,
  DT,
} from '../datatypes';
import {Depth, DepthEnum} from '../base/depth';
// gaurentor
/**
 * Guarantor
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/Segments/GT1
 */
export class GT1 extends HL7Obj {
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

  constructor() {
    super(new Depth(DepthEnum.SEGMENT));

    this.segment = new ST(this.depth.peekDown());
    this.set_id = new SI(this.depth.peekDown());
    this.gaurantor_number = new CX(this.depth.peekDown());
    this.gaurentor_name = new XPN(this.depth.peekDown());
    this.gaurentor_spouse_name = new XPN(this.depth.peekDown());
    this.gaurentor_address = new XAD(this.depth.peekDown());
    this.gaurentor_phone_home = new XTN(this.depth.peekDown());
    this.gaurentor_phone_business = new XTN(this.depth.peekDown());
    this.gaurentor_dob = new TS(this.depth.peekDown());
    this.gaurentor_sex = new IS(this.depth.peekDown());
    this.gaurentor_type = new IS(this.depth.peekDown());
    this.gaurentor_relationship = new SI(this.depth.peekDown());
    this.gaurentor_ssn = new ST(this.depth.peekDown());
    this.gaurentor_date_begin = new DT(this.depth.peekDown());
    this.gaurentor_date_end = new DT(this.depth.peekDown());
    this.gaurentor_priority = new NM(this.depth.peekDown());
    this.guarentor_employer_name = new XPN(this.depth.peekDown());
    this.guarentor_employer_address = new XAD(this.depth.peekDown());
    this.guarentor_employer_phone = new XTN(this.depth.peekDown());
    this.guarentor_employee_id = new CX(this.depth.peekDown());
    this.guarentor_employment_status = new IS(this.depth.peekDown());
    this.guarentor_organization_name = new XON(this.depth.peekDown());
    this.guarantor_billing_hold_flag = new ID(this.depth.peekDown());
    this.guarantor_credit_rating_code = new CE(this.depth.peekDown());
    this.guarantor_death_datetime = new TS(this.depth.peekDown());
    this.guarantor_death_flag = new ID(this.depth.peekDown());
    this.guarantor_charge_adjustment_code = new CE(this.depth.peekDown());
    this.guarantor_household_annual_income = new CP(this.depth.peekDown());
    this.guarantor_household_size = new NM(this.depth.peekDown());
    this.guarantor_employer_id = new CX(this.depth.peekDown());
    this.guarantor_marital_status_code = new IS(this.depth.peekDown());
    this.guarantor_hire_effective_date = new DT(this.depth.peekDown());
    this.employment_stop_date = new DT(this.depth.peekDown());
    this.living_dependency = new IS(this.depth.peekDown());
    this.ambulatory_status = new IS(this.depth.peekDown());
    this.citizenship = new IS(this.depth.peekDown());
    this.primary_language = new CE(this.depth.peekDown());
    this.living_arrangement = new IS(this.depth.peekDown());
    this.publicity_indicator = new CE(this.depth.peekDown());
    this.protection_indicator = new ID(this.depth.peekDown());
    this.student_indicator = new IS(this.depth.peekDown());
    this.religion = new IS(this.depth.peekDown());
    this.mothers_maiden_name = new XPN(this.depth.peekDown());
    this.nationality = new CE(this.depth.peekDown());
    this.ethnic_group = new IS(this.depth.peekDown());
    this.contact_persons_name = new XPN(this.depth.peekDown());
    this.contact_persons_phone = new XTN(this.depth.peekDown());
    this.contact_reason = new CE(this.depth.peekDown());
    this.contact_relationship = new IS(this.depth.peekDown());
    this.job_title = new ST(this.depth.peekDown());
    this.job_code = new JCC(this.depth.peekDown());
    this.guarantor_employers_organization_name = new XON(this.depth.peekDown());
    this.handicap = new IS(this.depth.peekDown());
    this.job_status = new IS(this.depth.peekDown());
    this.guarantor_financial_class = new FC(this.depth.peekDown());
    this.guarantor_race = new IS(this.depth.peekDown());

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
