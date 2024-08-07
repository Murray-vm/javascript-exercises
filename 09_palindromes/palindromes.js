const alphanumerical = "abcdefghijklmnopqrstuvwxyz1234567890"

const palindromes = function (string) {
    const array = string.toLowerCase().split("");
    const filteredArray = array.filter(letter => alphanumerical.includes(letter))
    const filteredString = filteredArray.join("")
    const reversedString = filteredArray.reverse().join("")
    return  filteredString === reversedString 
};

// Do not edit below this line
module.exports = palindromes;
