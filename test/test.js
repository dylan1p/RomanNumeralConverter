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
        it('1 as value should return I', () => {
            const romanNumeral = new RomanNumeral(1);
            assert.equal(romanNumeral.toString(), 'I')
        });
        it('3 as value should return III', () => {
            const romanNumeral = new RomanNumeral(3);
            assert.equal(romanNumeral.toString(), 'III')
        });
        it('4 as value should return IV', () => {
            const romanNumeral = new RomanNumeral(4);
            assert.equal(romanNumeral.toString(), 'IV')
        });
        it('5 as value should return V', () => {
            const romanNumeral = new RomanNumeral(5);
            assert.equal(romanNumeral.toString(), 'V')
        });
        it('1968 as value should return MCMLXVIII', () => {
            const romanNumeral = new RomanNumeral(1968);
            assert.equal(romanNumeral.toString(), 'MCMLXVIII')
        });
        it('1473 as value should return MCDLXXIII', () => {
            const romanNumeral = new RomanNumeral(1968);
            assert.equal(romanNumeral.toString(), 'MCMLXVIII')
        });
        it('2999 as value should return MMCMXCIX', () => {
            const romanNumeral = new RomanNumeral(2999);
            assert.equal(romanNumeral.toString(), 'MMCMXCIX')
        });
        it('3000 as value should return MMM', () => {
            const romanNumeral = new RomanNumeral(3000);
            assert.equal(romanNumeral.toString(), 'MMM')
        });
    });
});
