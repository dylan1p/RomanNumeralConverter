class RomanNumeral {
    constructor(val) {
        if(val === undefined || val === null || val === '') {
            throw new Error('value required');
        }
        this.RomanNumeralMap = {
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
        this.val = val;
    }

    toInt() {
        let results = 0;
        let valToUpperCase = this.val.toUpperCase();

        Object.entries(this.RomanNumeralMap).forEach(([key, value]) => {
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

    toString() {
        if(+this.val < 1 || +this.val > 3999) {
            throw new Error('invalid range');
        }
        let results = '';
        let valCopy = this.val;

        Object.entries(this.RomanNumeralMap).forEach(([key, value]) => {
            while(valCopy%value < valCopy) {
                results += key;
                valCopy -= value;
            }
        });
        return results;
    }
};

module.exports = RomanNumeral;
