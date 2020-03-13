"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../base");
const ST_1 = require("./ST");
const ID_1 = require("./ID");
const IS_1 = require("./IS");
/**
 * Extended Address
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/XAD
 */
class XAD extends base_1.HL7Obj {
    constructor(depth) {
        super(depth);
        this.street = new ST_1.ST(this.depth.peekDown());
        this.other = new ST_1.ST(this.depth.peekDown());
        this.city = new ST_1.ST(this.depth.peekDown());
        this.zip = new ST_1.ST(this.depth.peekDown());
        this.country = new ID_1.ID(this.depth.peekDown());
        this.address_type = new ID_1.ID(this.depth.peekDown());
        this.other_geographic_designation = new ST_1.ST(this.depth.peekDown());
        this.country_code = new IS_1.IS(this.depth.peekDown());
        this.census_tract = new IS_1.IS(this.depth.peekDown());
        this.hl7_obj_array = [
            this.street,
            this.other,
            this.city,
            this.zip,
            this.country,
            this.address_type,
            this.other_geographic_designation,
            this.country_code,
            this.census_tract,
        ];
    }
}
exports.XAD = XAD;
