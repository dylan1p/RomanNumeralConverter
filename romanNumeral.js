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
    }

    toString() {
        if(+this.val < 1 || +this.val > 3999) {
            throw new Error('invalid range');
        }
        return this.convertToString(this.romanNumeralValues, this.romanNumerals, this.val);
    }

    convertToString(romanNumeralValues, romanNumerals, numberValue, stringValue='') {
        if(numberValue < 1) return stringValue;

        for(let i=0; i<romanNumeralValues.length; i++) {
            if(numberValue%romanNumeralValues[i] < numberValue) {
                const newNumberValue = (numberValue -= romanNumeralValues[i]);
                return this.convertToString(romanNumeralValues, romanNumerals, newNumberValue, stringValue.concat(romanNumerals[i]));
            }
        }
    }
};

module.exports = RomanNumeral;
