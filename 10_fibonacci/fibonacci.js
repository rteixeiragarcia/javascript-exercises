const fibonacci = function(value) {
    let array = [1, 1];

    for (let i = 2; i < value; i++) {
        array[i] = array[i-2] + array[i-1];
    }

    if (value <= 0) {
        return "OOPS";
    } else {
        return array[array.length - 1];
    };
};

// Do not edit below this line
module.exports = fibonacci;
