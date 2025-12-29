const palindromes = function (str) {
    let trimStr = str.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
    let reverseStr = trimStr.split('').reverse().join('');

    return trimStr === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
