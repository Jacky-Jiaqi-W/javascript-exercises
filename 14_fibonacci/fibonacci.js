const fibonacci = function(index) {
    index = +index;
    if (index < 0) {
        return "OOPS";
    } else if (index < 2) {
        return index;
    }
    let prevPrev = 0;
    let prev = 1;
    // const fibonacciSeq = [0, 1];
    for (let i = 2; i <= index; i++) {
        let curr = prevPrev + prev;
        prevPrev = prev;
        prev = curr;
    }
    return prev;
};

// Do not edit below this line
module.exports = fibonacci;
