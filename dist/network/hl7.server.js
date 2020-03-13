"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const net = tslib_1.__importStar(require("net"));
const events_1 = require("events");
const hl7Utils_1 = require("../hl7Utils");
const VT = String.fromCharCode(0x0b);
const FS = String.fromCharCode(0x1c);
const CR = String.fromCharCode(0x0d);
class HL7Server extends events_1.EventEmitter {
    constructor(host, port, options) {
        var _a, _b, _c, _d, _e;
        super();
        this.header = VT;
        this.trailer = FS + CR;
        this.started = new Date();
        this.messageCount = 0;
        this.name = '';
        this.mllp = false;
        this.sendAck = true;
        if (options) {
            this.header = (_a = options.header) !== null && _a !== void 0 ? _a : this.header;
            this.trailer = (_b = options.trailer) !== null && _b !== void 0 ? _b : this.trailer;
            this.name = (_c = options.name) !== null && _c !== void 0 ? _c : this.name;
            this.mllp = (_d = options.mllp) !== null && _d !== void 0 ? _d : this.mllp;
            this.sendAck = (_e = options.sendAck) !== null && _e !== void 0 ? _e : this.sendAck;
        }
        this.host = host || '127.0.0.1';
        this.port = port || 6000;
        this.message = '';
        // this.socket = new net.Socket();
        this.server = net.createServer(socket => {
            this.socket = socket;
            socket.on('data', async (data) => {
                try {
                    let strData = data.toString();
                    // Check for the start of the MLLP message
                    const isMllp = strData.indexOf(this.header) > -1;
                    if (isMllp || this.mllp) {
                        this.message = ''; // Reset the message
                        strData = strData.replace(this.header, '');
                    }
                    // Append the strData to the message
                    this.message += strData;
                    // Check for closing tags
                    const isClosedMllp = strData.indexOf(this.trailer) > -1;
                    if (isClosedMllp || this.mllp) {
                        this.message = this.message.replace(this.trailer, ''); // Remove the trailer
                        // Emit the Data after the trailer
                        // Push the message into the Event Loop
                        // Offload the responsibility of creating an ACK
                        // const context = this.getSummary();
                        // context.socket = socket;
                    }
                    this.emit('message', {
                        message: this.message,
                        socket: socket,
                        isMllp,
                    });
                    this.messageCount += 1;
                    if (this.sendAck || this.mllp) {
                        const ack = hl7Utils_1.buildACK(this.message, 'AA');
                        this.socket.write(this.wrapInMLLP(ack));
                    }
                }
                catch (error) {
                    const ack = hl7Utils_1.buildACK(this.message, 'AE', error.message);
                    console.log('ackError: ', ack);
                    this.socket.write(this.wrapInMLLP(ack));
                }
            });
        });
        this.server.on('error', err => {
            // console.error(err);
            this.emit('error', err);
        });
        this.server.on('connection', () => {
            this.emit('connection');
        });
        this.server.on('close', () => {
            this.emit('close');
        });
    }
    start() {
        this.server.listen(this.port, this.host);
        this.emit('started');
    }
    stop() {
        this.server.close();
        this.server.removeAllListeners();
        this.emit('stopped');
    }
    wrapInMLLP(data) {
        return this.header + data + this.trailer;
    }
}
exports.HL7Server = HL7Server;
