import {MSH, OBX, PID, OBR} from '../segments';
import {
  getSegmentNameFromString,
  buildSegmentNameFromString,
} from '../hl7Utils';
import {NTE} from '../segments/NTE';

// const testMSH =
//   'MSH|^~&|INTELLIGO|MEDICALIS|COREPOINT|HL7|20190809063113||ORM^O01|558108|P|2.5||||||';

// const testMSH = `MSH|^~\&|HL7emulator||winspiroPRO||20200309093828||ORM^O01|12312|D|2.1
// PID|1|123|123||Smith^John^J^III^DR^PHD^L||19891023|M||2054||||||||123
// ORC|NW|123456||||N
// OBR|1|123456||Spirometry||20200309093828||||||||||^Andrade^Alex^^^^|||||||||||^^^^^R
// OBX|1|NM|H||189|CM|||||||||||
// OBX|2|NM|W||86|KG|||||||||||
// NTE|2|L|No antibodies to HIV-1 detected
// NTE|1||Urgente`;
const testMSH = `MSH|^~\&|MINDRAY_VS900^00A0370098006640^EUI-64||||20200212125541||ORU^R01^ORU_R01|13|P|2.6|||AL|NE||UNICODE UTF-8|||IHE_PCD_001^IHE PCD^1.3.6.1.4.1.19376.1.6.1.1.1^ISO
PID|||2eefgghy^^^Hospital^PI||TEST^SR T3ST^^^^^L||19891023|M
PV1||I|INTER^^1^1|||||||||||||||||||||||||||||||||||||||||20200212
OBR|1|13^MINDRAY_VS900^00A0370098006640^EUI-64|13^MINDRAY_VS900^00A0370098006640^EUI-64|182777000^monitoring of patient^SCT|||20200212125541
OBX|1|NM|150456^MDC_PULS_OXIM_SAT_O2^MDC|1.3.1.150456|100|262688^MDC_DIM_PERCENT^MDC||DEMO|||R|||20200212125541||||00A0370098006640^^00A0370098006640^EUI-64
OBX|2|NM|149530^MDC_PULS_OXIM_PULS_RATE^MDC|1.3.1.149530|80|264864^MDC_DIM_BEAT_PER_MIN^MDC||DEMO|||R|||20200212125541
OBX|3|NM|150488^MDC_BLD_PERF_INDEX^MDC|1.3.1.150488|12.00|262688^MDC_DIM_PERCENT^MDC||DEMO|||R|||20200212125541
OBX|4|NM|150301^MDC_PRESS_CUFF_SYS^MDC|1.1.9.150301|166|266016^MDC_DIM_MMHG^MDC||DEMO|||R|||20200212125008|||^APERIODIC
OBX|5|NM|150303^MDC_PRESS_CUFF_MEAN^MDC|1.1.9.150303|122|266016^MDC_DIM_MMHG^MDC||DEMO|||R|||20200212125008|||^APERIODIC
OBX|6|NM|150302^MDC_PRESS_CUFF_DIA^MDC|1.1.9.150302|100|266016^MDC_DIM_MMHG^MDC||DEMO|||R|||20200212125008|||^APERIODIC
`;

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

const segments = testMSH
  .split('\n')
  .filter(segment => {
    return !!segment;
  })
  .map(segment => {
    // const segment_name = getSegmentNameFromString(segment_string);
    // console.log('build: ', segment);
    // return segment_name === 'OBR';
    return buildSegmentNameFromString(segment);
  });

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async function main() {
  const segmentsInstances = await Promise.all(segments);

  segmentsInstances.forEach(s => {
    // console.log('seg: ', s.toString());

    if (s instanceof MSH) {
      console.log('ip: ', s.message_profile_identifier.universal_id.value);
    }
    if (s instanceof OBR) {
      console.log('aparelho : ', s.placer_order_number.namespace_id.value);
    }
    // s.toString();
  });
})();

// .map(obx_segments_string => {
// const obx = new OBX();
// obx.fromString(obx_segments_string);
// console.log(obx.value_type.value);
// console.log(obx.observation_id);
// console.log(obx.observation_method);
// console.log(obx.observation_result_status);
// console.log(obx.observation_sub_id);
// console.log(obx.observation_value.value);
// return obx;

// const pid = new PID();
// pid.fromString(obx_segments_string);
// console.log(pid.patient_name.family.value);
// console.log(pid.patient_name.given.value);
// console.log(pid.patient_name.middle.value);
// console.log(pid.patient_name.suffix.value);
// console.log(pid.patient_name.degree.value);
// console.log(pid.patient_name.name_type_code.value);

// const nte = new NTE();
// console.log(obx_segments_string);
// nte.fromString(obx_segments_string);
// console.log('segment:', nte.segment.value);
// console.log('set_id:', nte.set_id.value);
// console.log('source_comment: ', nte.source_comment.value);
// console.log('comment:', nte.comment.value);

//   const obx = new OBR();
//   obx.fromString(obx_segments_string);

//   console.log(obx.placer_order_number.namespace_id.value);
//   console.log(obx.filler_order_number.entity_id.value);
//   console.log(obx.filler_order_number.universal_id.value);
//   console.log(obx.filler_order_number.universal_id_type.value);
// });
