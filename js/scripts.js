// var add = function (number1, number2) {
//   return number1 + number2
// };
//
// var subtract = function (number1, number2) {
// 	return number1 - number2
// } ;
//
// var multiply = function (number1, number2) {
// 	return number1 * number2
// } ;
//
// var divide = function (number1, number2) {
// 	return number1 / number2
// } ;
//
//
var userTempImperial = parseInt(prompt("Enter Farenheit Temperature"));
var celcius = (userTempImperial - 32) * 5 / 9;
var tempConversionImperial = "Celcius:" + celcius.toFixed();
alert(tempConversionImperial);

var userTempMetric = parseInt(prompt("Enter Celcius Temperature"));
var farenheit = userTempMetric * 9 / 5 + 32;
var tempConversionMetric = "Farenheit:" + farenheit.toFixed();
alert(tempConversionMetric);
