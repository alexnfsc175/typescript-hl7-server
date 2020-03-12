import {HL7Obj} from '../base/HL7Obj';
import {ST, HD, ID, CE, Z_MT, NM, PT, TS, XON, EI} from '../datatypes';
import {Depth, DepthEnum} from '../base/depth';
//braden is one of the best men i know
/**
 * Message header segment
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/Segments/MSH
 */
export class MSH extends HL7Obj {
  /** MSH-0*/ segment: ST;
  /** MSH-1*/ field_separators: ST;
  /** MSH-2*/ encoding_characters: ST;
  /** MSH-3*/ sending_application: HD;
  /** MSH-4*/ sending_facility: HD;
  /** MSH-5*/ receiving_application: HD;
  /** MSH-6*/ receiving_facility: HD;
  /** MSH-7*/ datetime: TS;
  /** MSH-8*/ security: ST;
  /** MSH-9*/ message_type: Z_MT;
  /** MSH-10*/ message_control_id: ST;
  /** MSH-11*/ processing_id: PT;
  /** MSH-12*/ version_id: ID;
  /** MSH-13*/ sequence_number: NM;
  /** MSH-14*/ continuation_pointer: ST;
  /** MSH-15*/ accept_ack_type: ID;
  /** MSH-16*/ application_ack_type: ID;
  /** MSH-17*/ country_code: ID;
  /** MSH-18*/ character_set: ID;
  /** MSH-19*/ principal_language: CE;
  // Alex
  /** MSH-20*/ alternate_character_scheme: ID;
  /** MSH-21*/ message_profile_identifier: EI;
  /** MSH-22*/ sending_responsible_organization: XON;
  /** MSH-23*/ receiving_responsible_organization: XON;
  /** MSH-24*/ sending_network_address: HD;
  /** MSH-25*/ receiving_network_address: HD;

  constructor() {
    super(new Depth(DepthEnum.SEGMENT));
    this.segment = new ST(this.depth.peekDown());
    this.field_separators = new ST(this.depth.peekDown());
    this.encoding_characters = new ST(this.depth.peekDown());
    this.sending_application = new HD(this.depth.peekDown());
    this.sending_facility = new HD(this.depth.peekDown());
    this.receiving_application = new HD(this.depth.peekDown());
    this.receiving_facility = new HD(this.depth.peekDown());
    this.datetime = new TS(this.depth.peekDown());
    this.security = new ST(this.depth.peekDown());
    this.message_type = new Z_MT(this.depth.peekDown());
    this.message_control_id = new ST(this.depth.peekDown());
    this.processing_id = new PT(this.depth.peekDown());
    this.version_id = new ID(this.depth.peekDown());
    this.sequence_number = new NM(this.depth.peekDown());
    this.continuation_pointer = new ST(this.depth.peekDown());
    this.accept_ack_type = new ID(this.depth.peekDown());
    this.application_ack_type = new ID(this.depth.peekDown());
    this.country_code = new ID(this.depth.peekDown());
    this.character_set = new ID(this.depth.peekDown());
    this.principal_language = new CE(this.depth.peekDown());

    // Alex
    this.alternate_character_scheme = new ID(this.depth.peekDown());
    this.message_profile_identifier = new EI(this.depth.peekDown());
    this.sending_responsible_organization = new XON(this.depth.peekDown());
    this.receiving_responsible_organization = new XON(this.depth.peekDown());
    this.sending_network_address = new HD(this.depth.peekDown());
    this.receiving_network_address = new HD(this.depth.peekDown());

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
