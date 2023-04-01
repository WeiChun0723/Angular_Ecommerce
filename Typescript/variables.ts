let firstname:string = "Khairi";

// inference data type
let lastname = "Abu Bakar";
// lastname = 10;
console.log(typeof lastname);

let identificationnumber; // you should not do this in typescript
console.log(typeof identificationnumber);

identificationnumber = 97409;
identificationnumber = "97409";

// mixed data type
let passportnumber:(number | string);
passportnumber = 97409;
passportnumber = "97409";
// passportnumber = true;

let fruits:string[] = ["apple", "orange", "mango", "durian"];
console.log(fruits.length);
console.log(fruits[0], fruits[1], fruits[2], fruits[3]);

let customer:[string, number, number, string[]] = 
    ["Peter Parker", 97410, 2583.25, ["television", "radio"]]