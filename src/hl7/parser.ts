import { Delimiters } from './delimiters';

export interface ParserOptions {
  segmentSeperator: string;
}
export class Parser {
  delimiters: Delimiters;

  constructor(options: ParserOptions) {
    this.delimiters = {
      fieldSeperator: '|',
      componentSeperator: '^',
      subcomponentSeperator: '&',
      escapeCharacter: '\\',
      repititionCharacter: '~',
      segmentSeperator: options ? options.segmentSeperator : '\r',
    };
  }
}
