import { HL7Obj } from '../base/HL7Obj';
import { ST, IS, PL, CX, XCN, FC, DT, NM, TS, SI, Z_DL } from '../datatypes';
/**
 * Patient visit
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/Segments/PV1
 */
export declare class PV1 extends HL7Obj {
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
    constructor();
}
