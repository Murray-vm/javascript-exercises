const leapYears = function(year) {
    const isDivisableByFour = year % 4 === 0
    const isDivisableByHundred = year % 100 === 0
    const isDivisableByFourHundred = year % 400 === 0

    return isDivisableByFour && (isDivisableByFourHundred || !isDivisableByHundred)

};

// Do not edit below this line
module.exports = leapYears;
