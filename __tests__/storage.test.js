import { getHashInfo } from '../src/storage';


describe('Base getHashInfo test', () => {
  it('Multiple calls with same hash should return equal results', () => {
    const hash1 = '81034604124871734yyggwf';
    const hash2 = 'asdlasdjqubqbeq123';
    expect(getHashInfo(hash1)).toBe(getHashInfo(hash1));
    expect(getHashInfo(hash2)).not.toBe(getHashInfo(hash1));
  });

});
