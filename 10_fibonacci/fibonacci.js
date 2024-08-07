const fibonacci = function(num) {
    let count
    if (typeof num !== 'number') {
        count = parseInt(num)
    } else {
        count = num
    }

    if (count < 0) return "OOPS";
    if (count == 0) return 0;
    
    let firstNum = 1
    let secondNum = 0

    for (let i = 2; i <= num; i++) {
        let current = firstNum + secondNum
        secondNum = firstNum
        firstNum = secondNum
        firstNum = current
    }

    return firstNum
};

// Do not edit below this line
module.exports = fibonacci;
