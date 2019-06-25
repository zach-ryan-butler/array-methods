const { map, filter, findIndex } = require('./index');

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

describe('findIndex method', () => {
    it('returns an indice', () => {
        const numbers = [1, 2, 3];
        const foundIndex = findIndex(numbers, number => number === 1);
        expect(foundIndex).toEqual(0);
    });
    it('returns an indice that passes condition', () => {
        const numbers = [1, 2, 3];
        const foundIndex = findIndex(numbers, number => number > 2);
        expect(foundIndex).toEqual(2);
    });
    it('returns -1 if findIndex cannot find index', () => {
        const numbers = [1, 2, 3];
        const foundIndex = findIndex(numbers, number => number > 10);
        expect(foundIndex).toEqual(-1);
    });
});

