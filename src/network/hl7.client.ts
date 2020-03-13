import * as net from 'net';
import {EventEmitter} from 'events';

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

const VT = String.fromCharCode(0x0b);
const FS = String.fromCharCode(0x1c);
const CR = String.fromCharCode(0x0d);

export class HL7Client extends EventEmitter {
  private header = VT;
  private trailer = FS + CR;
  private started = new Date();
  private name = '';
  messageCount = 0;
  host: string;
  port: number;
  private message: string;
  private connected = true;
  private reconnect = true;
  private keepalive = false;
  private awaitingResponse = false;
  private mllp = true;

  socket: net.Socket;

  constructor(host: string, port: number, options?: Options) {
    super();

    if (options) {
      this.header = options.header ?? this.header;
      this.trailer = options.trailer ?? this.trailer;
      this.name = options.name ?? this.name;

      this.connected = options.connected ?? this.connected;
      this.keepalive = options.keepalive ?? this.keepalive;
      this.reconnect = options.reconnect ?? this.reconnect;
      this.mllp = options.mllp ?? this.mllp;
    }

    this.host = host || '127.0.0.1';
    this.port = port || 6000;
    this.message = '';

    this.socket = new net.Socket();
  }

  public write(message: string) {
    if (this.awaitingResponse) {
      throw new Error('Can not send while awaiting response');
    }

    if (!this.socket) {
      this.connect();
    }

    if (this.mllp) {
      this.socket.write(VT + message + FS + CR);
    } else {
      this.socket.write(message);
    }

    this.awaitingResponse = true;
  }

  private listen() {
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

      this.emit('message', {message: this.message, socket: this.socket});

      if (!this.keepalive) {
        //   // return ack before stop?
        this.stop();
      }
    });
  }

  public start() {
    this.connect();
    this.emit('started');
  }

  private connect() {
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

  public stop() {
    if (this.socket) {
      this.socket.removeAllListeners();
      this.socket.destroy();
      this.message = '';
      this.awaitingResponse = false;
    }
    this.emit('stopped');
  }

  public wrapInMLLP(message: string): string {
    return this.header + message + this.trailer;
  }
}
