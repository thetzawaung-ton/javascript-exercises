const pascal = function(input, result = []) {
    if(input === 1) {
        result.push(input);
    } else {
        const add0ToResult = [0].concat(pascal(input - 1), [0]);
        for(let i = 0; i < add0ToResult.length - 1; i++) {
            result.push(add0ToResult[i] + add0ToResult[i + 1]);
        }
    }
    return result;
};
  
// Do not edit below this line
module.exports = pascal;
