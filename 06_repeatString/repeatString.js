const repeatString = function(str, num) {
    let result = [];
    for(let i = 1; i <= num; i++) {
        result.push(str);
    }

    if(num < 0){
        return 'ERROR';
    }

    return result.join('');
    
};

// Do not edit below this line
module.exports = repeatString;
