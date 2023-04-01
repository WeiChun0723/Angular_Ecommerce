/*
function sayHello(name:string):string { }
let sayHello = function (name:string):string { }
*/
let greeting = (name:string):string => { 
    return "Hello " + name;
}

console.log(greeting("Peter"));

// function declaration
let onClick = (func:any) => {
    func();
}

// function calling by passing another function as argument
onClick(() => {
    console.log("Passing lamdba function as argument");
})