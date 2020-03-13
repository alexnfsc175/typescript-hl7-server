"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const hl7_server_1 = require("../network/hl7.server");
const fs_1 = tslib_1.__importDefault(require("fs"));
const util_1 = require("util");
const path_1 = require("path");
const hl7Utils_1 = require("../hl7Utils");
const segments_1 = require("../segments");
const readdir = util_1.promisify(fs_1.default.readdir);
const readFile = util_1.promisify(fs_1.default.readFile);
const server = new hl7_server_1.HL7Server('0.0.0.0', 6663);
server.start();
server.on('message', async ({ message, isMllp }) => {
    const segments = message
        .split('\n')
        .filter(s => !!s)
        .map(segment => {
        return hl7Utils_1.buildSegmentNameFromString(segment);
    });
    const segmentsInstances = await Promise.all(segments);
    segmentsInstances.forEach(s => {
        if (s instanceof segments_1.MSH) {
            console.log('ip: ', s.message_profile_identifier.universal_id.value);
        }
        if (s instanceof segments_1.OBR) {
            console.log('aparelho : ', s.placer_order_number.namespace_id.value);
        }
        if (s instanceof segments_1.OBX) {
            console.log('Identifier: ', s.observation_id.id.value);
            console.log('Text: ', s.observation_id.text.value);
            console.log('Name Of Coding System: ', s.observation_id.coding_system_name.value);
        }
    });
});
async function createHL7(path) {
    path = path.replace(/_/g, '\\');
    console.log(path);
    const entries = await readdir(path, { withFileTypes: true });
    const readFilesPromise = entries
        .filter(e => !e.isDirectory())
        .map(entry => path_1.join(path, entry.name))
        .map(async (filePath) => {
        console.log(filePath);
        return readFile(filePath, { flag: 'r' });
    });
    const readFiles = await Promise.all(readFilesPromise);
    let i = 0;
    for (const filesBuffer of readFiles) {
        ++i;
        fs_1.default.writeFileSync(`${path}/hl7/message_hl7_${i}.hl7`, hl7Utils_1.wrapInMLLP(hl7Utils_1.normalizeNewLines(filesBuffer.toString())), { encoding: 'utf8' });
    }
}
exports.createHL7 = createHL7;
// eslint-disable-next-line @typescript-eslint/no-floating-promises
// (async function main() {
//   // eslint-disable-next-line
//   const d = await createHL7('C:_Users_Convex_Documents_dev_testHl7');
// })();
