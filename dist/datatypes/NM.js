"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../base");
/**
 * Numeric
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/DataTypes/NM
 */
class NM extends base_1.HL7Obj {
    constructor(depth) {
        super(depth);
        this.shouldBeBlank = true;
        this.value = 0;
        this.hl7_obj_array = [this.value];
    }
    isNumericalCharacter(input) {
        if (input !== '') {
            if (input[0] >= '0' && input[0] <= '9') {
                return true;
            }
        }
        return false;
    }
    fromString(input) {
        this.shouldBeBlank = !this.isNumericalCharacter(input);
        this.value = Number(input);
        // console.log(this.value);
        // console.log(this.shouldBeBlank);
    }
    toString() {
        if (this.shouldBeBlank) {
            return '';
        }
        return this.value.toString();
    }
}
exports.NM = NM;
