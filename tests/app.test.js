import { parseCSVToJSON } from '../src/app';

describe("Parse CSV to JSON", () => {
  test("should return data as expected", () => {
    const input = `field_1,field_2,field_3
      aaa,bbb,ccc
      xxx,yyy,zzz`;

    const output = [["field_1", "field_2", "field_3"], ["aaa", "bbb", "ccc"], ["xxx", "yyy", "zzz"]];

    let data = '';
    parseCSVToJSON(input)
      .on('data', chunk => data += chunk)
      .on('end', () => expect(data).toBe(output));
  })
})