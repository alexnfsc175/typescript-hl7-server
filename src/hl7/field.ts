// import { Component } from './component';
import {Delimiters} from './delimiters';

export class Field {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any[];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(...args: any[]) {
    // for (let index = 0; index < args.length; index++) {
    //   const element = args[index];
    //   const components: Component[] = [];
    //   if (Array.isArray(element)) {
    //     for (let index = 0; index < element.length; index++) {
    //       const componentArg = element[index];
    //       components.push(new Component(componentArg));
    //     }
    //     this.value.push(components);
    //   } else {
    //     this.value.push(new Component(element));
    //   }
    // }
  }

  toString(delimiters: Delimiters): string {
    let returnString = '';

    for (let i = 0; i < this.value.length; i++) {
      if (Array.isArray(this.value[i])) {
        for (let ii = 0; ii < this.value[i].length; ii++) {
          returnString += this.value[i][ii].toString(delimiters);
          if (ii !== this.value[i].length - 1)
            returnString += delimiters.componentSeperator;
        }
      } else {
        returnString += this.value[i].toString(delimiters);
      }

      if (i !== this.value.length - 1)
        returnString += delimiters.repititionCharacter;
    }

    return returnString;
  }
}
