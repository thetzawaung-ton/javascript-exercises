const permutations = function(arr, result = []) {
    if(arr.length <= 1) {
        result.push(arr);
    } else {
        for(const item of arr) {
            const otherItems = arr.filter(nestedItem => nestedItem !== item);
            const otherPermutations = permutations(otherItems)
            for(let i = 0; i < otherPermutations.length; i++) {
                result.push([item].concat(otherPermutations[i]));
            }
        }
    }
    return result;
};
  
// Do not edit below this line
module.exports = permutations;
