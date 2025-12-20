const convertToCelsius = function(tempFahren) {
  const asCelsius = Math.round((tempFahren-32)*(5/9)*10)/10;
  return asCelsius;
};

const convertToFahrenheit = function(tempCelsius) {
  const asFahrenheit = Math.round((tempCelsius*(9/5)+32)*10)/10;
  return asFahrenheit;
};

convertToCelsius(32) // fahrenheit to celsius, should return 0

convertToFahrenheit(0) // celsius to fahrenheit, should return 32

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
