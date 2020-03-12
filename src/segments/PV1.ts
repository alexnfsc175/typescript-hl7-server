import {HL7Obj} from '../base/HL7Obj';
import {ST, IS, PL, CX, XCN, FC, DT, NM, TS, SI, Z_DL} from '../datatypes';
import {Depth, DepthEnum} from '../base/depth';

/**
 * Patient visit
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/Segments/PV1
 */
export class PV1 extends HL7Obj {
  /**PV1-00*/ segment: ST;
  /**PV1-01*/ set_ID: SI;
  /**PV1-02*/ patient_class: IS;
  /**PV1-03*/ assigned_patient_location: PL;
  /**PV1-04*/ admission_type: IS;
  /**PV1-05*/ preadmit_number: CX;
  /**PV1-06*/ prior_patient_location: PL;
  /**PV1-07*/ attending_doctor: XCN;
  /**PV1-08*/ referring_doctor: XCN;
  /**PV1-09*/ consulting_doctor: XCN;
  /**PV1-10*/ hospital_service: IS;
  /**PV1-11 */ temporary_location: PL;
  /**PV1-12 */ predmit_test_indicator: IS;
  /**PV1-13 */ readmission_indicator: IS;
  /**PV1-14 */ admit_source: IS;
  /**PV1-15 */ ambulatory_status: IS;
  /**PV1-16 */ vip_indicator: IS;
  /**PV1-17 */ admitting_doctor: XCN;
  /**PV1-18 */ patient_type: IS;
  /**PV1-19 */ visit_number: CX;
  /**PV1-20 */ financial_class: FC;
  /**PV1-21 */ charge_price_indicator: IS;
  /**PV1-22 */ courtesy_code: IS;
  /**PV1-23 */ credit_rating: IS;
  /**PV1-24 */ contract_code: IS;
  /**PV1-25 */ contract_effective_date: DT;
  /**PV1-26 */ contract_amount: NM;
  /**PV1-27 */ contract_period: NM;
  /**PV1-28 */ interest_code: IS;
  /**PV1-29 */ transfer_to_bad_debt_code: IS;
  /**PV1-30 */ transfer_to_bad_debt_date: DT;
  /**PV1-31 */ bad_debt_agency_code: IS;
  /**PV1-32 */ bad_debt_transfer_amount: NM;
  /**PV1-33 */ bad_debt_recovery_amount: NM;
  /**PV1-34 */ delete_account_indicator: IS;
  /**PV1-35 */ delete_account_date: DT;
  /**PV1-36 */ discharge_disposition: IS;
  /**PV1-37 */ discharged_to_location: Z_DL;
  /**PV1-38 */ diet_type: IS;
  /**PV1-39 */ servicing_facility: IS;
  /**PV1-40 */ bed_status: IS;
  /**PV1-41 */ account_status: IS;
  /**PV1-42 */ pending_location: PL;
  /**PV1-43 */ prior_temporary_location: PL;
  /**PV1-44 */ admit_date_time: TS;
  /**PV1-45 */ discharge_date_time: TS;
  /**PV1-46 */ current_patient_balance: NM;
  /**PV1-47 */ total_charges: NM;
  /**PV1-48 */ total_adjustments: NM;
  /**PV1-49 */ total_payments: NM;
  /**PV1-50 */ alternate_visit_ID: CX;
  /**PV1-51 */ visit_indicator: IS;
  /**PV1-52 */ other_healthcare_provider: XCN;

  constructor() {
    super(new Depth(DepthEnum.SEGMENT));

    this.segment = new ST(this.depth.peekDown());
    this.set_ID = new SI(this.depth.peekDown());
    this.patient_class = new IS(this.depth.peekDown());
    this.assigned_patient_location = new PL(this.depth.peekDown());
    this.admission_type = new IS(this.depth.peekDown());
    this.preadmit_number = new CX(this.depth.peekDown());
    this.prior_patient_location = new PL(this.depth.peekDown());
    this.attending_doctor = new XCN(this.depth.peekDown());
    this.referring_doctor = new XCN(this.depth.peekDown());
    this.consulting_doctor = new XCN(this.depth.peekDown());
    this.hospital_service = new IS(this.depth.peekDown());
    this.temporary_location = new PL(this.depth.peekDown());
    this.predmit_test_indicator = new IS(this.depth.peekDown());
    this.readmission_indicator = new IS(this.depth.peekDown());
    this.admit_source = new IS(this.depth.peekDown());
    this.ambulatory_status = new IS(this.depth.peekDown());
    this.vip_indicator = new IS(this.depth.peekDown());
    this.admitting_doctor = new XCN(this.depth.peekDown());
    this.patient_type = new IS(this.depth.peekDown());
    this.visit_number = new CX(this.depth.peekDown());
    this.financial_class = new FC(this.depth.peekDown());
    this.charge_price_indicator = new IS(this.depth.peekDown());
    this.courtesy_code = new IS(this.depth.peekDown());
    this.credit_rating = new IS(this.depth.peekDown());
    this.contract_code = new IS(this.depth.peekDown());
    this.contract_effective_date = new DT(this.depth.peekDown());
    this.contract_amount = new NM(this.depth.peekDown());
    this.contract_period = new NM(this.depth.peekDown());
    this.interest_code = new IS(this.depth.peekDown());
    this.transfer_to_bad_debt_code = new IS(this.depth.peekDown());
    this.transfer_to_bad_debt_date = new DT(this.depth.peekDown());
    this.bad_debt_agency_code = new IS(this.depth.peekDown());
    this.bad_debt_transfer_amount = new NM(this.depth.peekDown());
    this.bad_debt_recovery_amount = new NM(this.depth.peekDown());
    this.delete_account_indicator = new IS(this.depth.peekDown());
    this.delete_account_date = new DT(this.depth.peekDown());
    this.discharge_disposition = new IS(this.depth.peekDown());
    this.discharged_to_location = new Z_DL(this.depth.peekDown());
    this.diet_type = new IS(this.depth.peekDown());
    this.servicing_facility = new IS(this.depth.peekDown());
    this.bed_status = new IS(this.depth.peekDown());
    this.account_status = new IS(this.depth.peekDown());
    this.pending_location = new PL(this.depth.peekDown());
    this.prior_temporary_location = new PL(this.depth.peekDown());
    this.admit_date_time = new TS(this.depth.peekDown());
    this.discharge_date_time = new TS(this.depth.peekDown());
    this.current_patient_balance = new NM(this.depth.peekDown());
    this.total_charges = new NM(this.depth.peekDown());
    this.total_adjustments = new NM(this.depth.peekDown());
    this.total_payments = new NM(this.depth.peekDown());
    this.alternate_visit_ID = new CX(this.depth.peekDown());
    this.visit_indicator = new IS(this.depth.peekDown());
    this.other_healthcare_provider = new XCN(this.depth.peekDown());

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
