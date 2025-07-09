const sumAll = function(firstNumber, secondNumber) {
    if (!Number.isInteger(firstNumber)
        || !Number.isInteger(secondNumber)
        || firstNumber < 0
        || secondNumber < 0) {
            return 'ERROR';
        }
    
    const startNum = Math.min(firstNumber, secondNumber);
    const endNum = Math.max(firstNumber, secondNumber);
    let sum = 0;
    for (let i = startNum; i <= endNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
