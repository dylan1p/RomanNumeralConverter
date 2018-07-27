const assert = require('assert');
const RomanNumeral = require('../romanNumeral');

describe('Roman numeral converter', () => {
    it('null or empty when creating should return \'value required\'', () => {
        assert.throws(()=> { new RomanNumeral() }, "value required" );
    });
});
