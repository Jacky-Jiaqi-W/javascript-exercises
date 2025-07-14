const findTheOldest = function(array) {
    array.sort((person1, person2) => {
        const person1Age = (person1.yearOfDeath === undefined)
            ? (new Date()).getFullYear() - person1.yearOfBirth
            : person1.yearOfDeath - person1.yearOfBirth
        const person2Age = (person2.yearOfDeath === undefined)
            ? (new Date()).getFullYear() - person2.yearOfBirth
            : person2.yearOfDeath - person2.yearOfBirth
        return person1Age - person2Age;
    });
    return array.at(-1);
};

// Do not edit below this line
module.exports = findTheOldest;
