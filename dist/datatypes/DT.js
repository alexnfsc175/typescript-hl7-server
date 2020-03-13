"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../base/HL7Obj");
//FIXME: Fix this
/**
 *  Date
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/DT
 */
class DT extends HL7Obj_1.HL7Obj {
    constructor(depth) {
        super(depth);
        this.value = '';
        this.hl7_obj_array = [this.value];
    }
    fromString(input) {
        this.value = input;
    }
    toString() {
        return this.value;
    }
}
exports.DT = DT;
