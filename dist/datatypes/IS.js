"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../base/HL7Obj");
/**
 * Coded value for user-defined tables
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/IS
 */
class IS extends HL7Obj_1.HL7Obj {
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
exports.IS = IS;
