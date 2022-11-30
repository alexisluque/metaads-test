const removeNb = require("./index");

describe('removeNb', () => {
    it('test', () => {
        expect(removeNb(26)).toEqual([
            [15, 21],
            [21, 15],
        ]); 
        expect(removeNb(100)).toEqual([]);
    });
});
