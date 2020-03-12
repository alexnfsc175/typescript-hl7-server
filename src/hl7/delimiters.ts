export interface Delimiters {
  fieldSeperator: string;
  componentSeperator: string;
  subcomponentSeperator: string;
  escapeCharacter: string;
  repititionCharacter: string;
  segmentSeperator: string;
}

export const enum DefaultDelimiters {
  fieldSeperator = '|',
  componentSeperator = '^',
  subcomponentSeperator = '&',
  escapeCharacter = '\\',
  repititionCharacter = '~',
  segmentSeperator = '\r',
}
