module.exports = function(num) {
    if(num === undefined || null) {
        throw new Error('value required');
    }
    function toInt() {
    }
    function toString() {
    }
    return ({
        toInt: toInt,
        toString: toString
    });
}
