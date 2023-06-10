const reverseString = function(string) {
    let reverseString = "";

    for (let i = string.length - 1; i > -1; i--) {
        reverseString = reverseString.concat(string.charAt(i));
    }

    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
