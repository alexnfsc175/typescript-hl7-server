"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
const __1 = require("..");
const TX_1 = require("../TX");
const ST_1 = require("../ST");
/**
 * CM for OBR-26 -- parent_result
 */
class Z_PR extends base_1.HL7Obj {
    constructor(depth) {
        super(depth);
        this.observation_id_of_parent_result = new __1.CE(this.depth.peekDown());
        this.sub_id_of_parent_result = new ST_1.ST(this.depth.peekDown());
        this.result_from_parent = new TX_1.TX(this.depth.peekDown());
        this.hl7_obj_array = [
            this.observation_id_of_parent_result,
            this.sub_id_of_parent_result,
            this.result_from_parent,
        ];
    }
}
exports.Z_PR = Z_PR;
