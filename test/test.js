const assert = require('assert');
const RomanNumeral = require('../romanNumeral');

describe('Roman numeral converter', () => {
    describe('Converting numbers to Roman Numeral', () => {
        it('null or empty should return \'value required\'', () => {
            assert.throws(()=> { new RomanNumeral() }, "value required" )
        })
    });
});
