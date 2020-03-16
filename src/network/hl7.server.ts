import * as net from 'net';
import {EventEmitter} from 'events';
import {buildACK} from '../hl7Utils';

export interface Message {
  message: string;
  socket: net.Socket;
  isMllp: boolean;
}

export interface Events {
  message: (message: Message) => void;
}

export interface HL7Server {
  start(): void;
  stop(): void;
  wrapInMLLP(data: string): string;
  on<K extends keyof Events>(event: K, listener: Events[K]): this;
  on(event: string, listener: Function): this;
}

interface ServerOptions {
  header?: string;
  trailer?: string;
  name?: string;
  mllp?: boolean;
  sendAck?: boolean;
}

const VT = String.fromCharCode(0x0b);
const FS = String.fromCharCode(0x1c);
const CR = String.fromCharCode(0x0d);

export class HL7Server extends EventEmitter {
  private header = VT;
  private trailer = FS + CR;
  private started = new Date();
  private messageCount = 0;
  private name = '';
  private mllp = false;
  private sendAck = true;

  host: string;
  port: number;
  private message: string;

  server: net.Server;
  socket: net.Socket;

  constructor(host: string, port: number, options?: ServerOptions) {
    super();

    if (options) {
      this.header = options.header ?? this.header;
      this.trailer = options.trailer ?? this.trailer;
      this.name = options.name ?? this.name;
      this.mllp = options.mllp ?? this.mllp;
      this.sendAck = options.sendAck ?? this.sendAck;
    }

    this.host = host || '127.0.0.1';
    this.port = port || 6000;
    this.message = '';

    // this.socket = new net.Socket();

    this.server = net.createServer(socket => {
      this.socket = socket;
      socket.on('data', async data => {
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
            const ack = buildACK(this.message, 'AA');
            this.socket.write(this.wrapInMLLP(ack));
          }
        } catch (error) {
          const ack = buildACK(this.message, 'AE', error.message);
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

  public start() {
    this.server.listen(this.port, this.host);
    this.emit('started');
  }

  public stop() {
    this.server.close();
    this.server.removeAllListeners();
    this.emit('stopped');
  }

  public wrapInMLLP(data: string): string {
    return this.header + data + this.trailer;
  }
}
