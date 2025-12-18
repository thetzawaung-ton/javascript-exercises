const convertToCelsius = function(fahrenheit) {
  let celsiusValue = ((fahrenheit - 32) * 5 / 9);
  if (!Number.isInteger(celsiusValue)) {
    celsiusValue = Number(celsiusValue.toFixed(1));
  }
  return celsiusValue;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheitValue = (celsius * 9 / 5 + 32);
  if(!Number.isInteger(fahrenheitValue)) {
    fahrenheitValue = Number(fahrenheitValue.toFixed(1));
  } 
  return fahrenheitValue;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
