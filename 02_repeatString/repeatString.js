const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR"
    }
    
    let reapeatString = ""
    for (let i = 1; i <= num; i++)
        reapeatString += string
    return reapeatString

};

// Do not edit below this line
module.exports = repeatString;
