import { calculate } from "./rpl";

describe('rpl calculator tests', () => {
    it('calculates sum', () => {
        expect(calculate('1 2 +')).toEqual([3]);
    });

    it('calculates diff', () => {
        expect(calculate('2 1 -')).toEqual([1]);
    });

    it('calculates multiplication', () => {
        expect(calculate('2 2 *')).toEqual([4]);
    });

    it('calculates division', () => {
        expect(calculate('6 3 /')).toEqual([2]);
    });

    it('calculates multiple operators', () => {
        expect(calculate('1 2 3 - +')).toEqual([0]);
    });

    it('throws error in case of wrong arguments order', () => {
        expect(() => calculate('1 + 2')).toThrowError('Insufficient operands');
    });

    it('throws error in case of wrong input values', () => {
        expect(() => calculate('1 t z +')).toThrowError('Input is not valid');
    });

    it('throws error in case of division by 0', () => {
        expect(() => calculate('1 0 /')).toThrowError('Division by 0');
    });
});