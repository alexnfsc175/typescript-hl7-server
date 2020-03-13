"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../base");
const ST_1 = require("./ST");
const IS_1 = require("./IS");
/**
 * Extended Person Name
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/XPN
 */
class XPN extends base_1.HL7Obj {
    constructor(depth) {
        super(depth);
        this.family = new ST_1.ST(this.depth.peekDown());
        this.given = new ST_1.ST(this.depth.peekDown());
        this.middle = new ST_1.ST(this.depth.peekDown());
        this.suffix = new ST_1.ST(this.depth.peekDown());
        this.prefix = new ST_1.ST(this.depth.peekDown());
        this.degree = new ST_1.ST(this.depth.peekDown());
        this.name_type_code = new IS_1.IS(this.depth.peekDown());
        this.hl7_obj_array = [
            this.family,
            this.given,
            this.middle,
            this.suffix,
            this.prefix,
            this.degree,
            this.name_type_code,
        ];
    }
}
exports.XPN = XPN;
