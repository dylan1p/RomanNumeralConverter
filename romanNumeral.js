class RomanNumeral {
    constructor(val) {
        if(val === undefined || val === null || val === '') {
            throw new Error('value required');
        }
        this.romanNumerals = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
        this.romanNumeralValues = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
        this.val = val;
    }

    toInt() {
        return this.convertToInteger(this.romanNumeralValues, this.romanNumerals, this.val);
    }

    convertToInteger(romanNumeralValues, romanNumerals, stringValue, numberValue=0, previousRomanNumeralValue) {
        if(stringValue.length === 0) return numberValue;

        for(let i=0; i<romanNumerals.length; i++) {
            if(stringValue.indexOf(romanNumerals[i]) === 0) {
                if(romanNumeralValues[i] > previousRomanNumeralValue) {
                    throw new Error('invalid value');
                }

                const newNumberValue = (numberValue + romanNumeralValues[i])
                const remaindingStringValue = stringValue.slice(romanNumerals[i].length, stringValue.length);

                return this.convertToInteger(romanNumeralValues, romanNumerals, remaindingStringValue, newNumberValue, romanNumeralValues[i]);
            }
        }
        throw new Error('invalid value');
    }

    toString() {
        if(+val < 1 || +val > 3999) {
            throw new Error('invalid range');
        }
        return this.convertToString(this.romanNumeralValues, this.romanNumerals, this.val);
    }

    convertToString(romanNumeralValues, romanNumerals, numberValue, stringValue='') {
        if(numberValue < 1) return stringValue;

        for(let i=0; i<romanNumeralValues.length; i++) {
            if(numberValue%romanNumeralValues[i] < numberValue) {
                const remaindingNumberValue = (numberValue -= romanNumeralValues[i]);
                const newStringValue = stringValue.concat(romanNumerals[i]);

                return this.convertToString(romanNumeralValues, romanNumerals, remaindingNumberValue, newStringValue);
            }
        }
    }
};

module.exports = RomanNumeral;
