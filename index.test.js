const { map, filter } = require('./index');

describe('array function', () => {
    it('maps an array', () => {
        const numbers = [1, 2, 3];
        const doubled = map(numbers, number => number * 2);
        // const result = map(array, doubledNum);
        expect(doubled).toEqual([2, 4, 6]);
    });
});

describe('filter function', () => {
    it('returns an array', () => {
        const numbers = [1, 2, 3];
        const filtered = filter(numbers, number => number * 2);
        expect(filtered).toEqual(expect.any(Array));
    });
    it('iterates over array and returns same array length', () => {
        const numbers = [1, 2, 3];
        const filtered = filter(numbers, number => number * 2);
        expect(filtered).toHaveLength(numbers.length);
    });
    it('returns filtered array from callback if thruthy', () => {
        const numbers = [1, 2, 3];
        const filtered = filter(numbers, number => number > 2);
        expect(filtered).toEqual([3]);
    });
});

