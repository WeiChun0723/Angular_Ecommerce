// let x1:number = 10;
// let x2:string = "10";
let x1:any = 10;
let x2:any = "10";
if (x1 == x2) { // == operator does not take data type into consideration
    console.log("Equals");
}
if (x1 === x2) { // always try to use === or !== instead of == or !=
    console.log("Equals");
} else {
    console.log("Not Equals");
}

// index is a block scope variable
// valid only inside the block
for (let index:number = 1; index <= 12; index++) {
    console.log(index, "x", 5, "=", index*5);
}

let index:number = 1;
while (index <= 12) {
    console.log(index, "x", 7, "=", index*7);
    index++;
}