"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../base");
const IS_1 = require("./IS");
/**
 * Job Code Class
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/JCC
 */
class JCC extends base_1.HL7Obj {
    constructor(depth) {
        super(depth);
        this.job_code = new IS_1.IS(this.depth.peekDown());
        this.job_class = new IS_1.IS(this.depth.peekDown());
        this.hl7_obj_array = [this.job_code, this.job_class];
    }
}
exports.JCC = JCC;
