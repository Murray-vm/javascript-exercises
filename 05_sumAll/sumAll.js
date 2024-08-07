const sumAll = function(startInt, endInt) {

    if (!Number.isInteger(startInt) || !Number.isInteger(endInt) || startInt * endInt < 0  ) {
        return "ERROR"
    }

    let total = 0
    if (startInt > endInt) { 
        [startInt, endInt] = [endInt, startInt]
    }

    for (let i = startInt; i <= endInt; i++) {
        total += i 
    }
   
    return total 
};

// Do not edit below this line
module.exports = sumAll;
