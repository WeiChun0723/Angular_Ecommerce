// how do we declare variables in typescript
// let keyword
// Every variable is attched with a particular data type
let product:string = "Television";
let quantity:number = 10;
let price:number = 1455.75;
let isAvailable:boolean = true;

console.log("Product:", product);

// the variables declared with let keyword has the block scope feature
let x:number = 10;
{
    let x:number = 15;
    console.log(x); // 15
}
console.log(x); // 10

console.log("Hello World !!!");
console.log("Welcome to Hello World");