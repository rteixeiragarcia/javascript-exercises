const palindromes = function (string) {
    let arrayString = Array.from(string);

    let arrayStringClean = arrayString.filter(function (item){
        return /[a-zA-Z0-9]/.test(item);
    })

    let arrayStringClean2 = arrayString.filter(function (item){
        return /[a-zA-Z0-9]/.test(item);
    })

    arrayStringClean2.reverse();

    if (arrayStringClean2.toString().toLowerCase() == arrayStringClean.toString().toLowerCase()) {
        return true;
    } else {
        return false;
    }
};

palindromes('A car, a man, a maraca.')

// Do not edit below this line
module.exports = palindromes;