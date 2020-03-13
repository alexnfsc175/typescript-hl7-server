"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../base/HL7Obj");
const datatypes_1 = require("../datatypes");
const depth_1 = require("../base/depth");
//braden is one of the best men i know
/**
 * Message header segment
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/Segments/MSH
 */
class MSH extends HL7Obj_1.HL7Obj {
    constructor() {
        super(new depth_1.Depth(depth_1.DepthEnum.SEGMENT));
        this.segment = new datatypes_1.ST(this.depth.peekDown());
        this.field_separators = new datatypes_1.ST(this.depth.peekDown());
        this.encoding_characters = new datatypes_1.ST(this.depth.peekDown());
        this.sending_application = new datatypes_1.HD(this.depth.peekDown());
        this.sending_facility = new datatypes_1.HD(this.depth.peekDown());
        this.receiving_application = new datatypes_1.HD(this.depth.peekDown());
        this.receiving_facility = new datatypes_1.HD(this.depth.peekDown());
        this.datetime = new datatypes_1.TS(this.depth.peekDown());
        this.security = new datatypes_1.ST(this.depth.peekDown());
        this.message_type = new datatypes_1.Z_MT(this.depth.peekDown());
        this.message_control_id = new datatypes_1.ST(this.depth.peekDown());
        this.processing_id = new datatypes_1.PT(this.depth.peekDown());
        this.version_id = new datatypes_1.ID(this.depth.peekDown());
        this.sequence_number = new datatypes_1.NM(this.depth.peekDown());
        this.continuation_pointer = new datatypes_1.ST(this.depth.peekDown());
        this.accept_ack_type = new datatypes_1.ID(this.depth.peekDown());
        this.application_ack_type = new datatypes_1.ID(this.depth.peekDown());
        this.country_code = new datatypes_1.ID(this.depth.peekDown());
        this.character_set = new datatypes_1.ID(this.depth.peekDown());
        this.principal_language = new datatypes_1.CE(this.depth.peekDown());
        // Alex
        this.alternate_character_scheme = new datatypes_1.ID(this.depth.peekDown());
        this.message_profile_identifier = new datatypes_1.EI(this.depth.peekDown());
        this.sending_responsible_organization = new datatypes_1.XON(this.depth.peekDown());
        this.receiving_responsible_organization = new datatypes_1.XON(this.depth.peekDown());
        this.sending_network_address = new datatypes_1.HD(this.depth.peekDown());
        this.receiving_network_address = new datatypes_1.HD(this.depth.peekDown());
        this.hl7_obj_array = [
            this.segment,
            this.field_separators,
            this.encoding_characters,
            this.sending_application,
            this.sending_facility,
            this.receiving_application,
            this.receiving_facility,
            this.datetime,
            this.security,
            this.message_type,
            this.message_control_id,
            this.processing_id,
            this.version_id,
            this.sequence_number,
            this.continuation_pointer,
            this.accept_ack_type,
            this.application_ack_type,
            this.country_code,
            this.character_set,
            this.principal_language,
            // Alex
            this.alternate_character_scheme,
            this.message_profile_identifier,
            this.sending_responsible_organization,
            this.receiving_responsible_organization,
            this.sending_network_address,
            this.receiving_network_address,
        ];
    }
}
exports.MSH = MSH;
