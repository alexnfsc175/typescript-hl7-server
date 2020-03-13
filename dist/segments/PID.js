"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../base");
const datatypes_1 = require("../datatypes");
// import { SIGABRT } from 'constants';
const XPN_1 = require("../datatypes/XPN");
/**
 * Patient Identification
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/Segments/PID
 */
class PID extends base_1.HL7Obj {
    constructor() {
        super(new base_1.Depth(base_1.DepthEnum.SEGMENT));
        this.segment = new datatypes_1.ST(this.depth.peekDown());
        this.set_id = new datatypes_1.SI(this.depth.peekDown());
        this.external_id = new datatypes_1.CX(this.depth.peekDown());
        this.internal_id = new datatypes_1.CX(this.depth.peekDown());
        this.alternate_id = new datatypes_1.CX(this.depth.peekDown());
        this.patient_name = new XPN_1.XPN(this.depth.peekDown());
        this.mothers_maiden_name = new XPN_1.XPN(this.depth.peekDown());
        this.datetime_of_birth = new datatypes_1.TS(this.depth.peekDown());
        this.sex = new datatypes_1.IS(this.depth.peekDown());
        this.patient_alias = new XPN_1.XPN(this.depth.peekDown());
        this.race = new datatypes_1.IS(this.depth.peekDown());
        this.patient_address = new datatypes_1.XAD(this.depth.peekDown());
        this.country_code = new datatypes_1.IS(this.depth.peekDown());
        this.phone_home = new datatypes_1.XTN(this.depth.peekDown());
        this.phone_business = new datatypes_1.XTN(this.depth.peekDown());
        this.primary_language = new datatypes_1.CE(this.depth.peekDown());
        this.marital_status = new datatypes_1.IS(this.depth.peekDown());
        this.religion = new datatypes_1.IS(this.depth.peekDown());
        this.account_number = new datatypes_1.CX(this.depth.peekDown());
        this.ssn = new datatypes_1.ST(this.depth.peekDown());
        this.drivers_license = new datatypes_1.DLN(this.depth.peekDown());
        this.mothers_id = new datatypes_1.CX(this.depth.peekDown());
        this.ethnic_group = new datatypes_1.IS(this.depth.peekDown());
        this.birth_place = new datatypes_1.ST(this.depth.peekDown());
        this.multiple_birth_indicator = new datatypes_1.ID(this.depth.peekDown());
        this.birth_order = new datatypes_1.NM(this.depth.peekDown());
        this.citizenship = new datatypes_1.IS(this.depth.peekDown());
        this.veterans_military_status = new datatypes_1.CE(this.depth.peekDown());
        this.nationality = new datatypes_1.CE(this.depth.peekDown());
        this.death_datetime = new datatypes_1.TS(this.depth.peekDown());
        this.death_indicator = new datatypes_1.ID(this.depth.peekDown());
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
exports.PID = PID;
