import {MSH, OBX, PID} from '../segments';
import {getSegmentNameFromString} from '../hl7Utils';

// const testMSH =
//   'MSH|^~&|INTELLIGO|MEDICALIS|COREPOINT|HL7|20190809063113||ORM^O01|558108|P|2.5||||||';

const testMSH = `MSH|^~\&|HL7emulator||winspiroPRO||20200309093828||ORM^O01||D|2.1
PID|1|123|123||Smith^John^J^III^DR^PHD^L||19891023|M||2054||||||||123
ORC|NW|123456||||N
OBR|1|123456||Spirometry||20200309093828||||||||||^Andrade^Alex^^^^|||||||||||^^^^^R
OBX|1|NM|H||189|CM|||||||||||
OBX|2|NM|W||86|KG|||||||||||
NTE|1||Urgente`;

const msh = new MSH();
msh.fromString(testMSH);

console.log(msh.toString());
// console.log(msh.message_type.event.value);
console.log('field_separators: ', msh.field_separators.value);
console.log('encoding_characters: ', msh.encoding_characters.value);
console.log(
  'sending_application: ',
  msh.sending_application.namespace_id.value,
);
console.log('sending_facility: ', msh.sending_facility.namespace_id.value);
console.log(
  'receiving_application: ',
  msh.receiving_application.namespace_id.value,
);
console.log('receiving_facility: ', msh.receiving_facility.namespace_id.value);
console.log('datetime: ', msh.datetime.datetime.value);
console.log('message_type.code: ', msh.message_type.event.value);
console.log('message_type.trigger: ', msh.message_type.trigger.value);
console.log('message_control_id: ', msh.message_control_id.value);
console.log('processing_id: ', msh.processing_id.id.value);
// console.log(msh.encoding_characters.value);
// console.log(msh.sending_application);

// console.log(msh);
msh.message_type.event.fromString('MYORM');
msh.sending_application.namespace_id.fromString('Getconnect');
msh.receiving_facility.namespace_id.fromString('DeviceBridge');
console.log(msh.toString());

const obx_segments = testMSH
  .split('\n')
  .filter(segment_string => {
    const segment_name = getSegmentNameFromString(segment_string);
    console.log(segment_name);
    return segment_name === 'PID';
  })
  .map(obx_segments_string => {
    // const obx = new OBX();
    // obx.fromString(obx_segments_string);
    // console.log(obx.value_type.value);
    // console.log(obx.observation_id);
    // console.log(obx.observation_method);
    // console.log(obx.observation_result_status);
    // console.log(obx.observation_sub_id);
    // console.log(obx.observation_value.value);
    // return obx;

    const pid = new PID();
    pid.fromString(obx_segments_string);
    console.log(pid.patient_name.family.value);
    console.log(pid.patient_name.given.value);
    console.log(pid.patient_name.middle.value);
    console.log(pid.patient_name.suffix.value);
    console.log(pid.patient_name.degree.value);
    console.log(pid.patient_name.name_type_code.value);
  });
