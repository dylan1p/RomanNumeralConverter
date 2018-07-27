module.exports = function(num) {
    if(num === undefined || null) {
        throw new Error('value required');
    }
    function toInt() {
    }
    function toString() {
        if(+num < 1 || +num > 3999) {
            throw new Error('invalid range');
        }
    }
    return ({
        toInt: toInt,
        toString: toString
    });
};
