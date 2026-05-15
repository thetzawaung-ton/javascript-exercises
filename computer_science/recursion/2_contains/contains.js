const contains = function(object, input) {
    for(const prop in object) {
        if(Object.values(object).includes(input)) {
            return true
        }
        if(typeof object[prop] === "object") {
            if(contains(object[prop], input)) {
                return true
            }
        }
    }
    return false
};
  
// Do not edit below this line
module.exports = contains;
