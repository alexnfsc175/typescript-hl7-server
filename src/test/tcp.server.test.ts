import {HL7Server} from '../network/hl7.server';
import fs from 'fs';
import {promisify} from 'util';
import {join} from 'path';
import {
  wrapInMLLP,
  normalizeNewLines,
  buildSegmentNameFromString,
} from '../hl7Utils';
import {MSH, OBR, OBX} from '../segments';

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);

const server = new HL7Server('0.0.0.0', 6663);
server.start();
server.on('message', async ({message, isMllp}) => {
  const segments = (<string>message)
    .split('\n')
    .filter(s => !!s)
    .map(segment => {
      return buildSegmentNameFromString(segment);
    });

  const segmentsInstances = await Promise.all(segments);

  segmentsInstances.forEach(s => {
    if (s instanceof MSH) {
      console.log('ip: ', s.message_profile_identifier.universal_id.value);
    }
    if (s instanceof OBR) {
      console.log('aparelho : ', s.placer_order_number.namespace_id.value);
    }
    if (s instanceof OBX) {
      console.log('Identifier: ', s.observation_id.id.value);
      console.log('Text: ', s.observation_id.text.value);
      console.log(
        'Name Of Coding System: ',
        s.observation_id.coding_system_name.value,
      );
    }
  });
});

export async function createHL7(path: string) {
  path = path.replace(/_/g, '\\');
  console.log(path);
  const entries = await readdir(path, {withFileTypes: true});

  const readFilesPromise = entries
    .filter(e => !e.isDirectory())
    .map(entry => join(path, entry.name))
    .map(async filePath => {
      console.log(filePath);
      return readFile(filePath, {flag: 'r'});
    });

  const readFiles = await Promise.all(readFilesPromise);

  let i = 0;
  for (const filesBuffer of readFiles) {
    ++i;
    fs.writeFileSync(
      `${path}/hl7/message_hl7_${i}.hl7`,
      wrapInMLLP(normalizeNewLines(filesBuffer.toString())),
      {encoding: 'utf8'},
    );
  }
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
// (async function main() {
//   // eslint-disable-next-line
//   const d = await createHL7('C:_Users_Convex_Documents_dev_testHl7');
// })();
