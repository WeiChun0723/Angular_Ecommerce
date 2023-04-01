"use strict";
/*
function ArrayList(...data:number[]) {
    return new Array().concat(data);
}
function ArrayList(...data:string[]) {
    return new Array().concat(data);
}
function ArrayList(...data:any[]) {
    return new Array().concat(data);
}

let mynumberarray:number[] = ArrayList(10, 20, 30, 40, 50, 60);
let mystringarray:string[] = ArrayList("John", "Peter", "Parker", "David");
let mixedarray:string[] = ArrayList(10, "John", 20, "Peter", "Parker", "David");
*/
function ArrayList() {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    return new Array().concat(data);
}
var mynumberarray = ArrayList(10, 20, 30, 40, 50, 60);
var mystringarray = ArrayList("John", "Peter", "Parker", "David");
var Customer = /** @class */ (function () {
    function Customer(code, passport) {
        this.code = code;
        this.passport = passport;
    }
    return Customer;
}());
var customer01 = new Customer(97409, 483834832);
var customer02 = new Customer("C97409", 483834832);
var customer03 = new Customer(97409, "E483834832");
var customer04 = new Customer("C97409", "E483834832");
