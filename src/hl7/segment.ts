import {Field} from './field';

export class Segment {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fields: any[];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(...args: any[]) {
    if (args.length >= 1) {
      this.name = args[0];
    }
    if (args.length >= 2) {
      for (let index = 0; index < args.length; index++) {
        const element = args[index];
        if (Array.isArray(element)) {
          const fields: Field[] = [];

          // for (let i = 0; i < element.length; i++) {
          //   fields.push(new Field(element[i]));
          // }
          this.fields.push(fields);
        } else {
          if (index >= 1) {
            this.fields.push(new Field(args[index]));
          }
        }
      }
    }
  }
}
