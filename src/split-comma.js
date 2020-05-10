import { Transform } from 'stream';

class SplitComma extends Transform {
  constructor() {
    super();
  }

  _transform(chunk, _, done) {
    const string = chunk.toString('utf8');
    const stringArray = string.split(',');

    for (const data of stringArray) {
      this.push(data);
    }

    done();
  }
}

export const splitComma = new SplitComma();