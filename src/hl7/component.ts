import { Delimiters } from './delimiters';

export class Component {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any[];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(...args: any[]) {
    if (args.length > 0) {
      for (const arg of args) {
        this.value.push(arg);
      }
    }
  }

  toString(delimiters: Delimiters): string {
    let returnString = '';

    for (let i = 0; i < this.value.length; i++) {
      if (Array.isArray(this.value[i])) {
        for (let ii = 0; ii < this.value[i].length; ii++) {
          returnString += this.value[i][ii];
          if (ii !== this.value[i].length - 1)
            returnString += delimiters.subcomponentSeperator;
        }
      } else {
        returnString += this.value[i];
      }

      if (i !== this.value.length - 1)
        returnString += delimiters.repititionCharacter;
    }
    return returnString;
  }
}
