const add = function(a, b) {
	return a+b
};

const subtract = function(a, b) {
	return a-b
};

const sum = function(array) {
	return array.reduce(function(sum, item){return sum + item},0);
};

const multiply = function(array) {
  return array.reduce(function(mult, item){return mult * item},1);
};

const power = function(num, power) {
  let j = 1;
  for(let i=0; i<power; i++)
    j *= num;
  return j
};

const factorial = function(num) {
  let arr = [1];
  for(let i=1; i<=num; i++){
    arr[i-1] = i;
  }
  return arr.reduce(function(fact, item){return fact*= item}, 1);
};
console.log(factorial(4));
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
