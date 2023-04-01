"use strict";
// let x1:number = 10;
// let x2:string = "10";
var x1 = 10;
var x2 = "10";
if (x1 == x2) { // == operator does not take data type into consideration
    console.log("Equals");
}
if (x1 === x2) { // always try to use === or !== instead of == or !=
    console.log("Equals");
}
else {
    console.log("Not Equals");
}
// index is a block scope variable
// valid only inside the block
for (var index_1 = 1; index_1 <= 12; index_1++) {
    console.log(index_1, "x", 5, "=", index_1 * 5);
}
var index = 1;
while (index <= 12) {
    console.log(index, "x", 7, "=", index * 7);
    index++;
}
