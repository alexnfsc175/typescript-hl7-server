"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../base/HL7Obj");
/**
 * Text Data
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/TX
 */
class TX extends HL7Obj_1.HL7Obj {
    constructor(depth) {
        super(depth);
        this.hl7_obj_array = [this.value];
    }
    fromString(input) {
        this.value = input;
    }
    toString() {
        return this.value;
    }
}
exports.TX = TX;
