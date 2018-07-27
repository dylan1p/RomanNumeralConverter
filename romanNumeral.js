module.exports = function(num) {
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
    if(num === undefined || null) {
        throw new Error('value required');
    }
    function toInt() {
    }
    function toString() {
        if(+num < 1 || +num > 3999) {
            throw new Error('invalid range');
        }
        let results = '';
        let numCopy = num;

        Object.entries(RomanNumeralMap).forEach(([key, value]) => {
            while(numCopy%value < numCopy) {
                results += key;
                numCopy -= value;
            }
        });
        return results;
    }
    return ({
        toInt: toInt,
        toString: toString
    });
};
