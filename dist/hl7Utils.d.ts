import { MSH } from './segments';
import { HL7Obj } from './base';
export declare function normalizeNewLines(input: string): string;
export declare function getSegmentNameFromString(input: string): string;
export declare function buildSegmentNameFromString(input: string): Promise<HL7Obj>;
export declare function getMSHFromMessage(input: string): MSH;
export declare function wrapInMLLP(data: string): string;
export declare function buildACK(message: string, ack_code: string, error_message?: string): string;
