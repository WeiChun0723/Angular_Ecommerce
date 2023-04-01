// create an annonymous function / function without name
// assign the annonymous function to a variable
// overhere sayHi is not function name it is variable name
let sayHi:() => void = function () {
    console.log("hi");
}

sayHi();

let calculateSI = function(principle:number, period:number, rate:number):number {
    let interest:number = (principle * period * rate) / 100;
    return interest;
}

console.log("Interest Amount:" + calculateSI(1000, 1, 6));

let callback:(func:(x:number, y:number, z:number) => number) => void
        = function(func:(x:number, y:number, z:number) => number) {
    console.log("We are going to calulate Simple Interest");
    console.log("Interest Amount:" + func(1000, 1, 6));
}

callback(calculateSI);