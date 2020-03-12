import { Parser } from '../hl7/parser';
import { EventEmitter } from 'events';

export interface TcpServerOptions {
    parser: Parser;
}
export class TcpSver extends EventEmitter {
    constructor(options: TcpServerOptions ,  handler: Function) {
        super();
    }
}
