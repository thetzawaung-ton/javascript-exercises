const findTheOldest = function(array) {
    const todayDate = new Date();
    const sortByAge = array.sort((a,b) => 
        ((b.yearOfDeath || todayDate.getFullYear()) - b.yearOfBirth) - 
        ((a.yearOfDeath || todayDate.getFullYear()) - a.yearOfBirth));
    return sortByAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;
