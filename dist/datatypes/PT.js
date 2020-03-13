"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../base");
const ID_1 = require("./ID");
/**
 * Processing Type
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/PT
 */
class PT extends base_1.HL7Obj {
    constructor(depth) {
        super(depth);
        this.id = new ID_1.ID(this.depth.peekDown());
        this.mode = new ID_1.ID(this.depth.peekDown());
        this.hl7_obj_array = [this.id, this.mode];
    }
}
exports.PT = PT;
