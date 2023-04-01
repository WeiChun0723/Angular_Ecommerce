sayHello(); // function hoisting

function sayHello():void {
    console.log("hello");
}

sayHello();

// by adding ? you can make compulsory parameter to optional parameter
// you can make compulsory parameter to optional parameter by assigning a default value
function simpleInterest(principle:number, period?:number, rate:number=6):number {
    if (period === undefined) period = 1;
    let interest:number = (principle * period * rate) / 100;
    return interest;
}

console.log("Interest:", simpleInterest(1000, 1, 6));
console.log("Interest:", simpleInterest(1000, 1));
console.log("Interest:", simpleInterest(1000));

// what if we cannot predict the number of arguments during the function creation
function sum(mynumbers:number[]) {
    let total:number = 0;
    for (let index=0; index<mynumbers.length; index++) {
        total = total + mynumbers[index];
    }
    return total;
}

console.log(sum([10, 20, 30, 40, 50]));
console.log(sum([10, 20, 30, 40, 50, 60, 70, 80]));

// however what if the caller is not able to put the values inside an array
// in javascript we have something called rest paramters
function total(...mynumbers:number[]) {
    let total:number = 0;
    for (let index=0; index<mynumbers.length; index++) {
        total = total + mynumbers[index];
    }
    return total;
}

// JSRE will take all arguments and place them 
// inside an array and pass the array to the function
console.log(total(10, 20, 30, 40, 50));

// in javascript we do have 3 dot operator called spread operator
let mynumbers:number[] = [10, 20, 30, 40, 50, 60, 70]
console.log(total(...mynumbers)); // then explode the items inside the box

let firstarray:number[] = [10, 20, 30, 40, 50];
let secondarray:number[] = [60, 70, 80, 90];
let result01:[number[], number[]] = [firstarray, secondarray];
console.log(result01);
let result02:number[] = [...firstarray, ...secondarray];
console.log(result02);