/// <reference types="node" />
import * as net from 'net';
import { EventEmitter } from 'events';
interface Options {
    header?: string;
    trailer?: string;
    name?: string;
    connected?: boolean;
    reconnect?: boolean;
    keepalive?: boolean;
    once?: boolean;
    mllp?: boolean;
}
export declare class HL7Client extends EventEmitter {
    private header;
    private trailer;
    private started;
    private name;
    messageCount: number;
    host: string;
    port: number;
    private message;
    private connected;
    private reconnect;
    private keepalive;
    private awaitingResponse;
    private mllp;
    socket: net.Socket;
    constructor(host: string, port: number, options?: Options);
    write(message: string): void;
    private listen;
    start(): void;
    private connect;
    stop(): void;
    wrapInMLLP(message: string): string;
}
export {};
