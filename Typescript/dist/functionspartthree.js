"use strict";
/*
function sayHello(name:string):string { }
let sayHello = function (name:string):string { }
*/
var greeting = function (name) {
    return "Hello " + name;
};
console.log(greeting("Peter"));
// function declaration
var onClick = function (func) {
    func();
};
// function calling by passing another function as argument
onClick(function () {
    console.log("Passing lamdba function as argument");
});
