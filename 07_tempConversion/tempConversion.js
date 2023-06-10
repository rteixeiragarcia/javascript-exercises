const convertToCelsius = function(temp) {
  let celsius = (temp - 32) * (5 / 9);
  let celsiusRounded = Math.round(celsius * 10) / 10;

  return celsiusRounded;
};

const convertToFahrenheit = function(temp) {
  let fah = temp * 9 / 5 + 32;
  let fahRounded = Math.round(fah * 10) / 10;

  return fahRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
