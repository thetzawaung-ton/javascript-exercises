const reverseString = function(string) {
    let result = '';
    for(let i = string.length; i >= 1; i--) {
        let sliceFromLast = string.slice(i-1, i);
        result += sliceFromLast;
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
