const powerSumDigTerm = require('./index');

function testing(actual, expected) {
    expect(actual).toEqual(expected);
}
describe('powerSumDigTerm', function () {
    it('powerSumDigTerm', function () {
        testing(powerSumDigTerm(1), 81);
        testing(powerSumDigTerm(2), 512);
        testing(powerSumDigTerm(3), 2401);
        testing(powerSumDigTerm(4), 4913);
        testing(powerSumDigTerm(5), 5832);
        testing(powerSumDigTerm(6), 17576);
    });
});
