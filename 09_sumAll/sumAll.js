const sumAll = function(integer1, integer2) {
    if(!Number.isInteger(integer1) || !Number.isInteger(integer2)
    || integer1 < 0 || integer2 < 0) {
        return "ERROR"
    }

    let order = [integer1, integer2].sort((a,b) => a - b);
    let result = 0;

    for(let i = order[0]; i <= order[1]; i++) {
        result += i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
