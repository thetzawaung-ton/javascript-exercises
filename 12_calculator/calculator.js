const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((sum, num) => sum + num, 0);
};

const multiply = function(array) {
  return array.reduce((multiply, num) => multiply * num);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
	let result = 1;
  for(let i = num; i >= 1; i--){
    result *= i;
  }
  return result;
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
