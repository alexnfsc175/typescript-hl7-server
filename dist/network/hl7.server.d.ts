/// <reference types="node" />
import * as net from 'net';
import { EventEmitter } from 'events';
interface ServerOptions {
    header?: string;
    trailer?: string;
    name?: string;
    mllp?: boolean;
    sendAck?: boolean;
}
export declare class HL7Server extends EventEmitter {
    private header;
    private trailer;
    private started;
    private messageCount;
    private name;
    private mllp;
    private sendAck;
    host: string;
    port: number;
    private message;
    server: net.Server;
    socket: net.Socket;
    constructor(host: string, port: number, options?: ServerOptions);
    start(): void;
    stop(): void;
    wrapInMLLP(data: string): string;
}
export {};
