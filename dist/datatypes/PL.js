"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../base");
const IS_1 = require("./IS");
const HD_1 = require("./HD");
const ST_1 = require("./ST");
//<point of care (IS )> ^ <room (IS )> ^ <bed (IS)> ^ <facility (HD)> ^ < location status (IS )> ^ <person location type (IS)> ^ <building (IS )> ^ <floor (IS )> ^ <location description (ST)>
/**
 * Person Location
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/PL
 */
class PL extends base_1.HL7Obj {
    constructor(depth) {
        super(depth);
        this.point_of_care = new IS_1.IS(this.depth.peekDown());
        this.room = new IS_1.IS(this.depth.peekDown());
        this.bed = new IS_1.IS(this.depth.peekDown());
        this.facility = new HD_1.HD(this.depth.peekDown());
        this.location_status = new IS_1.IS(this.depth.peekDown());
        this.person_location_type = new IS_1.IS(this.depth.peekDown());
        this.building = new IS_1.IS(this.depth.peekDown());
        this.floor = new IS_1.IS(this.depth.peekDown());
        this.location_description = new ST_1.ST(this.depth.peekDown());
        this.hl7_obj_array = [
            this.point_of_care,
            this.room,
            this.bed,
            this.facility,
            this.location_status,
            this.person_location_type,
            this.building,
            this.floor,
            this.location_description,
        ];
    }
}
exports.PL = PL;
