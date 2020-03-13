"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const net = tslib_1.__importStar(require("net"));
const events_1 = require("events");
const VT = String.fromCharCode(0x0b);
const FS = String.fromCharCode(0x1c);
const CR = String.fromCharCode(0x0d);
class HL7Client extends events_1.EventEmitter {
    constructor(host, port, options) {
        var _a, _b, _c, _d, _e, _f, _g;
        super();
        this.header = VT;
        this.trailer = FS + CR;
        this.started = new Date();
        this.name = '';
        this.messageCount = 0;
        this.connected = true;
        this.reconnect = true;
        this.keepalive = false;
        this.awaitingResponse = false;
        this.mllp = true;
        if (options) {
            this.header = (_a = options.header) !== null && _a !== void 0 ? _a : this.header;
            this.trailer = (_b = options.trailer) !== null && _b !== void 0 ? _b : this.trailer;
            this.name = (_c = options.name) !== null && _c !== void 0 ? _c : this.name;
            this.connected = (_d = options.connected) !== null && _d !== void 0 ? _d : this.connected;
            this.keepalive = (_e = options.keepalive) !== null && _e !== void 0 ? _e : this.keepalive;
            this.reconnect = (_f = options.reconnect) !== null && _f !== void 0 ? _f : this.reconnect;
            this.mllp = (_g = options.mllp) !== null && _g !== void 0 ? _g : this.mllp;
        }
        this.host = host || '127.0.0.1';
        this.port = port || 6000;
        this.message = '';
        this.socket = new net.Socket();
    }
    write(message) {
        if (this.awaitingResponse) {
            throw new Error('Can not send while awaiting response');
        }
        if (!this.socket) {
            this.connect();
        }
        if (this.mllp) {
            this.socket.write(VT + message + FS + CR);
        }
        else {
            this.socket.write(message);
        }
        this.awaitingResponse = true;
    }
    listen() {
        this.socket.on('data', data => {
            let strData = data.toString();
            // Check for the start of the MLLP message
            const isMllp = strData.indexOf(this.header) > -1;
            if (this.mllp || isMllp) {
                this.message = ''; // Reset the message
                strData = strData.replace(this.header, '');
            }
            // Append the strData to the message
            this.message += strData;
            // Check for closing tags
            const isClosedMllp = strData.indexOf(this.trailer) > -1;
            if (this.mllp || isClosedMllp) {
                this.message = this.message.replace(this.trailer, ''); // Remove the trailer
            }
            this.messageCount += 1;
            this.awaitingResponse = false;
            this.emit('message', { message: this.message, socket: this.socket });
            if (!this.keepalive) {
                //   // return ack before stop?
                this.stop();
            }
        });
    }
    start() {
        this.connect();
        this.emit('started');
    }
    connect() {
        this.socket.connect(this.port, this.host);
        this.socket.on('error', err => {
            this.emit('error', err);
        });
        this.socket.on('connect', () => {
            this.connected = true;
            this.listen();
            this.emit('connect');
        });
        this.socket.on('close', () => {
            this.connected = false;
            this.emit('close');
        });
    }
    stop() {
        if (this.socket) {
            this.socket.removeAllListeners();
            this.socket.destroy();
            this.message = '';
            this.awaitingResponse = false;
        }
        this.emit('stopped');
    }
    wrapInMLLP(message) {
        return this.header + message + this.trailer;
    }
}
exports.HL7Client = HL7Client;
