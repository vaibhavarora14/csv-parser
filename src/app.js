import { Readable } from 'stream';
import { splitComma } from './split-comma';

const parseCSVToJSON = (csvCode) => {
  const rows = splitRows(csvCode);
  const stream = Readable.from(rows);

  return stream.pipe(splitComma);
};

function* splitRows(text) {
  const rows = text.split(/\n/);
  yield* rows;
}

module.exports = { parseCSVToJSON }