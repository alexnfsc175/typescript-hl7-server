import {MSH, wrapInMLLP, normalizeNewLines} from '..';
import path from 'path';
import fs from 'fs';

export class HL7FileWriter {
  dest: string;
  constructor(dest: string) {
    this.dest = dest;
  }

  send(message: string) {
    const msh_string = normalizeNewLines(message).split('\n')[0];
    const msh = new MSH();
    msh.fromString(msh_string);
    const messageId = msh.message_control_id.toString();
    fs.writeFileSync(
      path.join(this.dest, messageId + '.hl7'),
      wrapInMLLP(message),
    );
  }
}
