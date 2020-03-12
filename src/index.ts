// import {
//   buildACK,
//   wrapInMLLP,
//   getSegmentNameFromString,
//   normalizeNewLines,
//   getMSHFromMessage,
// } from './hl7Utils';

// // import { MLLPServer } from './network/mllp';
// import * as net from 'net';
// import {MSH, PID, OBX} from './segments';

// // const axios = require('axios');

// const mllp = new MLLPServer('0.0.0.0', 6200);
// mllp.on('mllp', event => {
//   let message = event.message as string;
//   const socket = event.socket as net.Socket;

//   try {
//     console.log(message);
//     message = normalizeNewLines(message);
//     const msh: MSH = getMSHFromMessage(message);
//     console.log(message);

//     // ALEX TEST
//     const obx_segments = message
//       .split('\n')
//       .filter(segment_string => {
//         const segment_name = getSegmentNameFromString(segment_string);
//         return segment_name === 'OBX';
//       })
//       .map(obx_segments_string => {
//         const obx = new OBX();
//         obx.fromString(obx_segments_string);
//         return obx;
//       });
//     // .forEach(obx => {
//     //     console.log(JSON.stringify(obx))
//     // });

//     // console.log(obx_segments);
//     // ALEX TEST

//     if (msh.message_type.event.value == 'ORM') {
//       console.log('ORM');

//       const segment_strings = message.split('\n');

//       ['MSH| ...', 'PID| ...', 'PV1| ...', 'ORC| ...', 'OBR| ...'];

//       // GET PID
//       const pid_segments_strings = segment_strings.filter(segment_string => {
//         const segment_name = getSegmentNameFromString(segment_string);
//         return segment_name === 'PID';
//       });

//       ['PID|...'];

//       const pid = new PID();
//       pid.fromString(pid_segments_strings[0]);
//       console.log(pid.toString());

//       // MAP to MODEL
//       const patient_model = {
//         gt_id: pid.external_id.toString(),
//         mrn: pid.internal_id.toString(),
//       };

//       console.log(patient_model);

//       // Call API to save to DB
//       // axios.post('http://localhost:8888/patient', patient_model)
//       //     .then((result: any) => {
//       //         console.log(result);
//       //     }).catch((err: any) => {
//       //         console.error(err);
//       //     });
//     }

//     // const ack = buildACK(message, 'AA');
//     // socket.write(wrapInMLLP(ack));

//     const msg = `MSH|^~\&|HL7emulator||winspiroPRO||20200309093828||ORM^O01||D|2.1
// PID|1|123|123||Andrade^Alex||19891023|M||2054||||||||123
// ORC|NW|123456||||N
// OBR|1|123456||Spirometry||20200309093828||||||||||^Andrade^Alex^^^^|||||||||||^^^^^R
// OBX|1|NM|H||189|CM|||||||||||
// OBX|2|NM|W||86|KG|||||||||||
// NTE|1||Urgente`;
//     socket.write(msg);
//   } catch (error) {
//     // console.error(error);
//     const ack = buildACK(message, 'AE', error.message);
//     socket.write(wrapInMLLP(ack));
//   }
// });

// mllp.start();
