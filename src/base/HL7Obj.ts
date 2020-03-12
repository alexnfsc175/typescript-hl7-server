import {Depth} from './depth';

export class HL7Obj {
  protected hl7_obj_array: HL7Obj[] = [];

  constructor(protected depth: Depth) {}

  setDepth(newDepth: Depth): HL7Obj {
    this.depth = newDepth;
    return this;
  }

  fromString(input: String): void {
    if (input === undefined) {
      this.hl7_obj_array.forEach(value => {
        value.fromString('');
      });
    }
    const splits = input.split(this.depth.peekDown().getDelimeter());

    // TODO: Melhorar essa parte
    if (splits[0] === 'MSH') {
      const msh = input.substring(0, 3);
      const delimeter = input.substring(3, 4);
      splits.shift();
      splits.unshift(msh, delimeter);
    }

    for (
      let splitIndex = 0;
      splitIndex < this.hl7_obj_array.length;
      splitIndex++
    ) {
      this.hl7_obj_array[splitIndex]
        .setDepth(this.depth.peekDown())
        .fromString(splits[splitIndex] || '');
    }
  }
  toString(): String {
    const stringify = this.hl7_obj_array.map(value => {
      return value.setDepth(this.depth.peekDown()).toString();
    });
    let msh = undefined;
    let delimeter = undefined;

    // TODO: Melhorar essa parte
    if (stringify[0] === 'MSH') {
      msh = stringify.shift();
      delimeter = stringify.shift();
    }
    // END

    let ret = stringify.join(this.depth.peekDown().getDelimeter());
    ret = this.removeTrailingDelimeter(ret);

    // TODO: Melhorar essa parte
    if (msh && delimeter) {
      ret = `${msh}${delimeter}${ret}`;
    }
    // END

    return ret;
  }

  private removeTrailingDelimeter(input: string): string {
    const delim = this.depth.peekDown().getDelimeter();
    if (input.length <= 0) {
      return input;
    }

    if (input[input.length - 1] === delim) {
      return this.removeTrailingDelimeter(input.substring(0, input.length - 1));
    } else {
      return input;
    }
  }
}
