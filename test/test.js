const assert = require('assert');
const RomanNumeral = require('../romanNumeral');

describe('Roman numeral converter', () => {
    it('null or empty when creating should return \'value required\'', () => {
        assert.throws(()=> { new RomanNumeral() }, 'value required' );
    });
    it('\'\' as value should return \'value required\'', () => {
        assert.throws(()=> { new RomanNumeral('') }, 'value required' );
    });

    describe('Converting Numbers to Roman Numerals', () => {
        it('0 as value should return \'invalid range\'', () => {
            const romanNumeral = new RomanNumeral(0);
            assert.throws(()=> { romanNumeral.toString() }, 'invalid range' );
        });
        it('10000 as value should return \'invalid range\'', () => {
            const romanNumeral = new RomanNumeral(10000);
            assert.throws(()=> { romanNumeral.toString() }, 'invalid range' );
        });
        it('over 3999 as value should return \'invalid range\'', () => {
            const romanNumeral = new RomanNumeral(4000);
            assert.throws(()=> { romanNumeral.toString() }, 'invalid range' );
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

    describe('Convert Roman Numerals to Numbers', () => {
        it('I as value should return 1', () => {
            const romanNumeral = new RomanNumeral('I');
            assert.equal(romanNumeral.toInt(), 1);
        });
        it('III as value should return 3', () => {
            const romanNumeral = new RomanNumeral('III');
            assert.equal(romanNumeral.toInt(), 3);
        });
        it('IIII as value should return 4', () => {
            const romanNumeral = new RomanNumeral('IIII');
            assert.equal(romanNumeral.toInt(), 4);
        });
        it('IV as value should return 4', () => {
            const romanNumeral = new RomanNumeral('IV');
            assert.equal(romanNumeral.toInt(), 4);
        });
        it('V as value should return 5', () => {
            const romanNumeral = new RomanNumeral('V');
            assert.equal(romanNumeral.toInt(), 5);
        });
        it('CDXXIX as value should return 429', () => {
            const romanNumeral = new RomanNumeral('CDXXIX');
            assert.equal(romanNumeral.toInt(), 429);
        });
        it('MCDLXXXII as value should return 1482', () => {
            const romanNumeral = new RomanNumeral('MCDLXXXII');
            assert.equal(romanNumeral.toInt(), 1482);
        });
        it('MCMLXXX as value should return 1980', () => {
            const romanNumeral = new RomanNumeral('MCMLXXX');
            assert.equal(romanNumeral.toInt(), 1980);
        });
        it('MMMMCMXCIX as value should return 4999', () => {
            const romanNumeral = new RomanNumeral('MMMMCMXCIX');
            assert.equal(romanNumeral.toInt(), 4999);
        });
    });

    describe('invalid values', () => {
        it('MMMMDMXCIX as value should return \'invalid value\'', () => {
            const romanNumeral = new RomanNumeral('MMMMDMXCIX');
            assert.throws(()=> { romanNumeral.toInt() }, 'invalid value' );
        });
        it('DM as value should return \'invalid value\'', () => {
            const romanNumeral = new RomanNumeral('DM');
            assert.throws(()=> { romanNumeral.toInt() }, 'invalid value' );
        });
        it('CD1X as value should return \'invalid value\'', () => {
            const romanNumeral = new RomanNumeral('CD1X');
            assert.throws(()=> { romanNumeral.toInt() }, 'invalid value' );
        });
        it('\'error\' as value should return \'invalid value\'', () => {
            const romanNumeral = new RomanNumeral('error');
            assert.throws(()=> { romanNumeral.toInt() }, 'invalid value' );
        });
    })
});
p
