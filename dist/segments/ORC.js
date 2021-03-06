"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../base/HL7Obj");
const depth_1 = require("../base/depth");
const datatypes_1 = require("../datatypes");
/**
 * Common order segment
 * @see https://hl7-definition.caristix.com/v2/HL7v2.3/Segments/ORC
 */
class ORC extends HL7Obj_1.HL7Obj {
    constructor() {
        super(new depth_1.Depth(depth_1.DepthEnum.SEGMENT));
        this.segment = new datatypes_1.ST(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        this.order_control = new datatypes_1.ID(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        this.placer_order_number = new datatypes_1.EI(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        this.filler_order_number = new datatypes_1.EI(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        this.placer_groupe_number = new datatypes_1.EI(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        this.order_status = new datatypes_1.ID(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        this.response_flag = new datatypes_1.ID(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        this.quantity_timing = new datatypes_1.TQ(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        this.parent = new datatypes_1.Z_PA(new depth_1.Depth(depth_1.DepthEnum.FEILD)); // TODOld THis
        this.datetime_transaction = new datatypes_1.TS(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        this.entered_by = new datatypes_1.XCN(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        this.verified_by = new datatypes_1.XCN(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        this.ordering_provider = new datatypes_1.XCN(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        this.enterers_location = new datatypes_1.PL(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        this.call_back_phone_number = new datatypes_1.XTN(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        this.order_effective_datetime = new datatypes_1.TS(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        this.order_control_code_reason = new datatypes_1.CE(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        this.entering_organization = new datatypes_1.CE(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        this.entering_device = new datatypes_1.CE(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        this.action_by = new datatypes_1.XCN(new depth_1.Depth(depth_1.DepthEnum.FEILD));
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
exports.ORC = ORC;
