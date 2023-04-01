"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
sayHello(); // function hoisting
function sayHello() {
    console.log("hello");
}
sayHello();
// by adding ? you can make compulsory parameter to optional parameter
// you can make compulsory parameter to optional parameter by assigning a default value
function simpleInterest(principle, period, rate) {
    if (rate === void 0) { rate = 6; }
    if (period === undefined)
        period = 1;
    var interest = (principle * period * rate) / 100;
    return interest;
}
console.log("Interest:", simpleInterest(1000, 1, 6));
console.log("Interest:", simpleInterest(1000, 1));
console.log("Interest:", simpleInterest(1000));
// what if we cannot predict the number of arguments during the function creation
function sum(mynumbers) {
    var total = 0;
    for (var index_1 = 0; index_1 < mynumbers.length; index_1++) {
        total = total + mynumbers[index_1];
    }
    return total;
}
console.log(sum([10, 20, 30, 40, 50]));
console.log(sum([10, 20, 30, 40, 50, 60, 70, 80]));
// however what if the caller is not able to put the values inside an array
// in javascript we have something called rest paramters
function total() {
    var mynumbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        mynumbers[_i] = arguments[_i];
    }
    var total = 0;
    for (var index_2 = 0; index_2 < mynumbers.length; index_2++) {
        total = total + mynumbers[index_2];
    }
    return total;
}
// JSRE will take all arguments and place them 
// inside an array and pass the array to the function
console.log(total(10, 20, 30, 40, 50));
// in javascript we do have 3 dot operator called spread operator
var mynumbers = [10, 20, 30, 40, 50, 60, 70];
console.log(total.apply(void 0, mynumbers)); // then explode the items inside the box
var firstarray = [10, 20, 30, 40, 50];
var secondarray = [60, 70, 80, 90];
var result01 = [firstarray, secondarray];
console.log(result01);
var result02 = __spreadArray(__spreadArray([], firstarray, true), secondarray, true);
console.log(result02);
