import {HL7Obj, Depth, DepthEnum} from '../base';
import {ST, TS, IS, XTN, CE, ID, NM, DLN, SI, XAD, CX} from '../datatypes';
// import { SIGABRT } from 'constants';
import {XPN} from '../datatypes/XPN';

/**
 * Patient Identification
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/Segments/PID
 */
export class PID extends HL7Obj {
  /** PID-0 */ segment: ST;
  /** PID-1 */ set_id: SI;
  /** PID-2 */ external_id: CX;
  /** PID-3 */ internal_id: CX;
  /** PID-4 */ alternate_id: CX;
  /** PID-5 */ patient_name: XPN;
  /** PID-6 */ mothers_maiden_name: XPN;
  /** PID-7 */ datetime_of_birth: TS;
  /** PID-8 */ sex: IS;
  /** PID-9 */ patient_alias: XPN;
  /** PID-10 */ race: IS;
  /** PID-11 */ patient_address: XAD;
  /** PID-12 */ country_code: IS;
  /** PID-13 */ phone_home: XTN;
  /** PID-14 */ phone_business: XTN;
  /** PID-15 */ primary_language: CE;
  /** PID-16 */ marital_status: IS;
  /** PID-17 */ religion: IS;
  /** PID-18 */ account_number: CX;
  /** PID-19 */ ssn: ST;
  /** PID-20 */ drivers_license: DLN;
  /** PID-21 */ mothers_id: CX;
  /** PID-22 */ ethnic_group: IS;
  /** PID-23 */ birth_place: ST;
  /** PID-24 */ multiple_birth_indicator: ID;
  /** PID-25 */ birth_order: NM;
  /** PID-26 */ citizenship: IS;
  /** PID-27 */ veterans_military_status: CE;
  /** PID-28 */ nationality: CE;
  /** PID-29 */ death_datetime: TS;
  /** PID-30 */ death_indicator: ID;

  constructor() {
    super(new Depth(DepthEnum.SEGMENT));

    this.segment = new ST(this.depth.peekDown());
    this.set_id = new SI(this.depth.peekDown());
    this.external_id = new CX(this.depth.peekDown());
    this.internal_id = new CX(this.depth.peekDown());
    this.alternate_id = new CX(this.depth.peekDown());
    this.patient_name = new XPN(this.depth.peekDown());
    this.mothers_maiden_name = new XPN(this.depth.peekDown());
    this.datetime_of_birth = new TS(this.depth.peekDown());
    this.sex = new IS(this.depth.peekDown());
    this.patient_alias = new XPN(this.depth.peekDown());
    this.race = new IS(this.depth.peekDown());
    this.patient_address = new XAD(this.depth.peekDown());
    this.country_code = new IS(this.depth.peekDown());
    this.phone_home = new XTN(this.depth.peekDown());
    this.phone_business = new XTN(this.depth.peekDown());
    this.primary_language = new CE(this.depth.peekDown());
    this.marital_status = new IS(this.depth.peekDown());
    this.religion = new IS(this.depth.peekDown());
    this.account_number = new CX(this.depth.peekDown());
    this.ssn = new ST(this.depth.peekDown());
    this.drivers_license = new DLN(this.depth.peekDown());
    this.mothers_id = new CX(this.depth.peekDown());
    this.ethnic_group = new IS(this.depth.peekDown());
    this.birth_place = new ST(this.depth.peekDown());
    this.multiple_birth_indicator = new ID(this.depth.peekDown());
    this.birth_order = new NM(this.depth.peekDown());
    this.citizenship = new IS(this.depth.peekDown());
    this.veterans_military_status = new CE(this.depth.peekDown());
    this.nationality = new CE(this.depth.peekDown());
    this.death_datetime = new TS(this.depth.peekDown());
    this.death_indicator = new ID(this.depth.peekDown());

    this.hl7_obj_array = [
      this.segment,
      this.set_id,
      this.external_id,
      this.internal_id,
      this.alternate_id,
      this.patient_name,
      this.mothers_maiden_name,
      this.datetime_of_birth,
      this.sex,
      this.patient_alias,
      this.race,
      this.patient_address,
      this.country_code,
      this.phone_home,
      this.phone_business,
      this.primary_language,
      this.marital_status,
      this.religion,
      this.account_number,
      this.ssn,
      this.drivers_license,
      this.mothers_id,
      this.ethnic_group,
      this.birth_place,
      this.multiple_birth_indicator,
      this.birth_order,
      this.citizenship,
      this.veterans_military_status,
      this.nationality,
      this.death_datetime,
      this.death_indicator,
    ];
  }
}
