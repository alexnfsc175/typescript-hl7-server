import {HL7Obj} from '../base/HL7Obj';
import {Depth, DepthEnum} from '../base/depth';
import {ST, ID, TS, CE, XCN, EI, PL, XTN, TQ, Z_PA} from '../datatypes';

/**
 * Common order segment
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/Segments/ORC
 */
export class ORC extends HL7Obj {
  /** ORC-0 */ segment: ST;
  /** ORC-1 */ order_control: ID;
  /** ORC-2 */ placer_order_number: EI;
  /** ORC-3 */ filler_order_number: EI;
  /** ORC-4 */ placer_groupe_number: EI;
  /** ORC-5 */ order_status: ID;
  /** ORC-6 */ response_flag: ID;
  /** ORC-7 */ quantity_timing: TQ;
  /** ORC-8 */ parent: Z_PA;
  /** ORC-9 */ datetime_transaction: TS;
  /** ORC-10 */ entered_by: XCN;
  /** ORC-11 */ verified_by: XCN;
  /** ORC-12 */ ordering_provider: XCN;
  /** ORC-13 */ enterers_location: PL;
  /** ORC-14 */ call_back_phone_number: XTN;
  /** ORC-15 */ order_effective_datetime: TS;
  /** ORC-16 */ order_control_code_reason: CE;
  /** ORC-17 */ entering_organization: CE;
  /** ORC-18 */ entering_device: CE;
  /** ORC-19 */ action_by: XCN;

  constructor() {
    super(new Depth(DepthEnum.SEGMENT));

    this.segment = new ST(new Depth(DepthEnum.FEILD));
    this.order_control = new ID(new Depth(DepthEnum.FEILD));
    this.placer_order_number = new EI(new Depth(DepthEnum.FEILD));
    this.filler_order_number = new EI(new Depth(DepthEnum.FEILD));
    this.placer_groupe_number = new EI(new Depth(DepthEnum.FEILD));
    this.order_status = new ID(new Depth(DepthEnum.FEILD));
    this.response_flag = new ID(new Depth(DepthEnum.FEILD));
    this.quantity_timing = new TQ(new Depth(DepthEnum.FEILD));
    this.parent = new Z_PA(new Depth(DepthEnum.FEILD)); // TODOld THis
    this.datetime_transaction = new TS(new Depth(DepthEnum.FEILD));
    this.entered_by = new XCN(new Depth(DepthEnum.FEILD));
    this.verified_by = new XCN(new Depth(DepthEnum.FEILD));
    this.ordering_provider = new XCN(new Depth(DepthEnum.FEILD));
    this.enterers_location = new PL(new Depth(DepthEnum.FEILD));
    this.call_back_phone_number = new XTN(new Depth(DepthEnum.FEILD));
    this.order_effective_datetime = new TS(new Depth(DepthEnum.FEILD));
    this.order_control_code_reason = new CE(new Depth(DepthEnum.FEILD));
    this.entering_organization = new CE(new Depth(DepthEnum.FEILD));
    this.entering_device = new CE(new Depth(DepthEnum.FEILD));
    this.action_by = new XCN(new Depth(DepthEnum.FEILD));

    this.hl7_obj_array = [
      this.segment,
      this.order_control,
      this.placer_order_number,
      this.filler_order_number,
      this.placer_groupe_number,
      this.order_status,
      this.response_flag,
      this.quantity_timing,
      this.parent,
      this.datetime_transaction,
      this.entered_by,
      this.verified_by,
      this.ordering_provider,
      this.enterers_location,
      this.call_back_phone_number,
      this.order_effective_datetime,
      this.order_control_code_reason,
      this.entering_organization,
      this.entering_device,
      this.action_by,
    ];
  }
}
