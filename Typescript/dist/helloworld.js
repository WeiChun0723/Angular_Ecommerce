"use strict";
// how do we declare variables in typescript
// let keyword
// Every variable is attched with a particular data type
var product = "Television";
var quantity = 10;
var price = 1455.75;
var isAvailable = true;
console.log("Product:", product);
// the variables declared with let keyword has the block scope feature
var x = 10;
{
    var x_1 = 15;
    console.log(x_1); // 15
}
console.log(x); // 10
console.log("Hello World !!!");
console.log("Welcome to Hello World");
