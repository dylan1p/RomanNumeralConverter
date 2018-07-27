const assert = require('assert');
const RomanNumeral = require('../romanNumeral');

describe('Roman numeral converter', () => {
    it('null or empty when creating should return \'value required\'', () => {
        assert.throws(()=> { new RomanNumeral() }, "value required" );
    });
    describe('Converting numbers to Roman Numeral', () => {
        it('0 as value should return \'invalid range\'', () => {
            const romanNumeral = new RomanNumeral(0);
            assert.throws(()=> { romanNumeral.toString() }, "invalid range" );
        });
        it('10000 as value should return \'invalid range\'', () => {
            const romanNumeral = new RomanNumeral(10000);
            assert.throws(()=> { romanNumeral.toString() }, "invalid range" );
        });
        it('over 3999 as value should return \'invalid range\'', () => {
            const romanNumeral = new RomanNumeral(4000);
            assert.throws(()=> { romanNumeral.toString() }, "invalid range" );
        });
    });
});
