export enum DepthEnum {
  SEGMENT,
  FEILD,
  COMPONENT,
  SUB_COMPONENT,
}
export class Depth {
  static SEGMENT_DELIMETER = '\n';
  static FEILD_DELIMETER = '|';
  static COMPONENT_DELIMETER = '^';
  static SUB_COMPONENT_DELIMETER = '&';
  static REPEAT_DELIMETER = '~';

  constructor(private depth: DepthEnum) {}

  getDelimeter(): string {
    switch (this.depth) {
      case DepthEnum.SEGMENT:
        return Depth.SEGMENT_DELIMETER;
      case DepthEnum.FEILD:
        return Depth.FEILD_DELIMETER;
      case DepthEnum.COMPONENT:
        return Depth.COMPONENT_DELIMETER;
      case DepthEnum.SUB_COMPONENT:
        return Depth.SUB_COMPONENT_DELIMETER;
    }
  }
  peekDown(): Depth {
    let peekDepth = this.depth + 1;
    if (peekDepth > 4) {
      peekDepth = 4;
    }
    return new Depth(peekDepth);
  }
  peekUp(): Depth {
    let peekDepth = this.depth - 1;
    if (peekDepth < 0) {
      peekDepth = 0;
    }
    return new Depth(peekDepth);
  }
}
