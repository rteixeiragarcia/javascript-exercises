const add = function() {
	let array = Array.from(arguments);

  return array.reduce(function(sum, current) {
    return sum += current;
  }, 0);
};

const subtract = function(num1, num2) {
	let array = Array.from(arguments);

  return array.reduce(function(sub, current) {
    let subTotal = -1 * sub - current;
    return subTotal;
  }, 0)
};

const sum = function(array) {
	 return array.reduce(function(sum, current) {
    return sum + current;
  }, 0)
};

const multiply = function() {
  let array = Array.from(arguments);

  return array.reduce(function(multi, current) {
    return multi *= current;
  }, 1)
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
  let array = [];

  for (let i = 1; i <= num; i++) {
    array.push(i);
  }

  return array.reduce(function(factorial, current) {
    return factorial *= current;
  }, 1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
