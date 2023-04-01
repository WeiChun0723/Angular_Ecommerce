"use strict";
// create an annonymous function / function without name
// assign the annonymous function to a variable
// overhere sayHi is not function name it is variable name
var sayHi = function () {
    console.log("hi");
};
sayHi();
var calculateSI = function (principle, period, rate) {
    var interest = (principle * period * rate) / 100;
    return interest;
};
console.log("Interest Amount:" + calculateSI(1000, 1, 6));
var callback = function (func) {
    console.log("We are going to calulate Simple Interest");
    console.log("Interest Amount:" + func(1000, 1, 6));
};
callback(calculateSI);
