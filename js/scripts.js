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
//inches to cent
var userLengthImperial = parseInt(prompt("Enter Length in inches"));
var cm = userLengthImperial * 2.54;
var lengthConversionImperial = "cm: " + cm.toFixed();
alert(lengthConversionImperial);

var userLengthMetric = parseInt(prompt("Enter Length in centimeters"));
var inches = userLengthMetric / 2.54;
var lengthConversionMetric = "in: " + inches.toFixed();
alert(lengthConversionMetric);

//Temperature
var userTempImperial = parseInt(prompt("Enter Farenheit Temperature"));
var celcius = (userTempImperial - 32) * 5 / 9;
var tempConversionImperial = "Celcius:" + celcius.toFixed();
alert(tempConversionImperial);

var userTempMetric = parseInt(prompt("Enter Celcius Temperature"));
var farenheit = userTempMetric * 9 / 5 + 32;
var tempConversionMetric = "Farenheit:" + farenheit.toFixed();
alert(tempConversionMetric);
