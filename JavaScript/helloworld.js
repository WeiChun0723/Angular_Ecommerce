"use strict"

var product = "Television";
var quantity = 10;
var price = 1245.75;
var totalPrice = quantity * price;

// console is not JavaScript Object
// In ECMA specification you cannot see any description about console 
// console is a node api (I/O)
console.log("Product:", product);
console.log("Quantity:", quantity);
console.log("Price:", price);
console.log("Total Price:", totalPrice);

// similarly console in the web application also not a valid javascript
// console is the api provided by the browser
// ECMA is only for JavaScript not for Browser APIs
// document, window, history
// there can be one browser in future that do not provide us document object
// but still comply to ECMA specification
// this is another important reason why we have to use a framework
// However this browser apis are standardized by another body called MDN

var quantity = "ten";

x = 10; // variables can be used before they were declared (variable hoisting)
var x;

var totalPrice = quantity * price; // multipling string with number that gives you NAN
// NAN not a number
console.log(totalPrice); 

// in es5 you do not have block scope feature
// you have only function scope feature
var z = 10;
{
    var z = 15;
    console.log(z); // 15
}
console.log(z); // 10 unfortunetly it turns out as 15

// they do have tools like babel which can convert ES6 code to ES5 code

// ECMA is also very slow
// why not we go for a super set of javascript => typescript, coffeescript, A+script
// we will our code using typescript and then we will pass it to tsc (typscript compiler)
// which will emit as ES5 code