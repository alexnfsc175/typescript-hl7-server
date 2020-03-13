"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const segments_1 = require("./segments");
function normalizeNewLines(input) {
    let normalized_newlines = input.replace(new RegExp(/\r/, 'g'), '\n');
    // console.log(typeof (normalizeNewlines))
    normalized_newlines = normalized_newlines.replace(new RegExp(/\n{2,}/, 'g'), '\n');
    return normalized_newlines;
}
exports.normalizeNewLines = normalizeNewLines;
function getSegmentNameFromString(input) {
    return input.substr(0, 3);
}
exports.getSegmentNameFromString = getSegmentNameFromString;
async function buildSegmentNameFromString(input) {
    let Segment = undefined;
    const segmentName = getSegmentNameFromString(input);
    try {
        Segment = await Promise.resolve().then(() => __importStar(require(`./segments/${segmentName}`)));
    }
    catch (e) {
        console.error(e);
    }
    // console.log(new Segment[segmentName](input));
    const instance = new Segment[segmentName]();
    instance.fromString(input);
    return instance;
}
exports.buildSegmentNameFromString = buildSegmentNameFromString;
function getMSHFromMessage(input) {
    const msh_string = input.split('\n')[0];
    const msh = new segments_1.MSH();
    msh.fromString(msh_string);
    return msh;
}
exports.getMSHFromMessage = getMSHFromMessage;
function wrapInMLLP(data) {
    const VT = String.fromCharCode(0x0b);
    const FS = String.fromCharCode(0x1c);
    const CR = String.fromCharCode(0x0d);
    return VT + data + FS + CR;
}
exports.wrapInMLLP = wrapInMLLP;
function buildACK(message, ack_code, error_message = '') {
    const msh_string = message.split('\n')[0];
    const msh = new segments_1.MSH();
    const ack_msh = new segments_1.MSH();
    msh.fromString(msh_string);
    ack_msh.fromString(msh_string);
    ack_msh.sending_application.fromString(msh.receiving_application.toString());
    ack_msh.sending_facility.fromString(msh.receiving_facility.toString());
    ack_msh.receiving_application.fromString(msh.sending_application.toString());
    ack_msh.receiving_facility.fromString(msh.sending_facility.toString());
    const ack_msa = new segments_1.MSA();
    ack_msa.segment.fromString('MSA');
    ack_msa.ack_code.value = ack_code;
    ack_msa.text_message.value = error_message;
    ack_msa.message_control_id.fromString(msh.message_control_id.toString());
    return [ack_msh.toString(), ack_msa.toString()].join('\n');
}
exports.buildACK = buildACK;
