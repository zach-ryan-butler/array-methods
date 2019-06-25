const { map } = require('./index');

describe('array function', () => {
    it('maps an array', () => {
        const array = [1, 2, 3];
        const doubled = map(array, x => x * 2);
        // const result = map(array, doubledNum);
        expect(doubled).toEqual([2, 4, 6]);
    });
});

