module.exports = function(val) {
    const RomanNumeralMap = {
        'M'  : 1000,
        'CM' : 900,
        'D'  : 500,
        'CD' : 400,
        'C'  : 100,
        'XC' : 90,
        'L'  : 50,
        'XL' : 40,
        'X'  : 10,
        'IX' : 9,
        'V'  : 5,
        'IV' : 4,
        'I'  : 1
    };

    if(val === undefined || val === null || val === '') {
        throw new Error('value required');
    }

    function toInt() {
        let results = 0;
        let valToUpperCase = val.toUpperCase();

        Object.entries(RomanNumeralMap).forEach(([key, value]) => {
            while(valToUpperCase.indexOf(key)===0) {
                results += value;
                valToUpperCase = valToUpperCase.slice(key.length, valToUpperCase.length);
            }
        });
        if(valToUpperCase.length > 0) {
            throw new Error('invalid value');
        }
        return results;
    }

    function toString() {
        if(+val < 1 || +val > 3999) {
            throw new Error('invalid range');
        }
        let results = '';
        let valCopy = val;

        Object.entries(RomanNumeralMap).forEach(([key, value]) => {
            while(valCopy%value < valCopy) {
                results += key;
                valCopy -= value;
            }
        });
        return results;
    }

    return ({
        toInt: toInt,
        toString: toString
    });
};
