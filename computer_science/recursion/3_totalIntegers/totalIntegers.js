const totalIntegers = function(input, total = 0) {
    if(typeof input !== "object") {
        return undefined
    }
    if(Array.isArray(input)) {
        input.forEach(item=> {
            if(Number.isInteger(item)) {
                total += 1;
            }
            if(Array.isArray(item)){
                total = totalIntegers(item, total)
            }else if(typeof item === "object") {
                total = totalIntegers(item, total)
            }
        })
    }else if(typeof input === "object") {
        for(const prop in input) {
            if(Number.isInteger(input[prop])) {
                total += 1
            }
            if(Array.isArray(input[prop])) {
                total = totalIntegers(input[prop], total)
            } else if(typeof input[prop] === "object") {
                total = totalIntegers(input[prop], total)
            }
        }
    }
    return total;
};
  
// Do not edit below this line
module.exports = totalIntegers;
