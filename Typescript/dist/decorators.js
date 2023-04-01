"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function isFound(data, key) {
    return !(data.indexOf(key) === -1);
}
// when somebody calls getCurrentBalance method since it is already
// decorated with @log the log function gets called instead of executing
// getCurrentBalance method.
// The getCurrentBalance method (original method) is passed to the log function in
// typedPropertyDescriptor.value attribute
// The log function will return typedPropertyDescriptor, and now 
// the function inside the typedPropertyDescriptor.value attribute will be executed
function log(data) {
    return function (target, key, typedPropertyDescriptor) {
        // console.log("I am inside the log function");
        var originalMethod = typedPropertyDescriptor.value;
        typedPropertyDescriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log("Author:", data.author);
            if (isFound(data.capture, "ipaddress"))
                console.log("IP Address");
            if (isFound(data.capture, "starttime"))
                console.log("Start Time");
            if (isFound(data.capture, "endtime"))
                console.log("End Time");
            console.log("Hello Welcome to Decorators");
            var result = originalMethod.apply(this, args);
            // originalMethod.call(this, ...args);
            console.log("Leaving the original method");
            return result;
        };
        // console.log("I am leaving the log function");
        return typedPropertyDescriptor;
    };
}
var Banking = /** @class */ (function () {
    function Banking(currentBalance) {
        this.currentBalance = currentBalance;
    }
    Banking.prototype.getCurrentBalance = function () {
        console.log("Current Balance:", this.currentBalance);
    };
    Banking.prototype.withdraw = function (amount) {
        this.currentBalance = this.currentBalance - amount;
        return this.currentBalance;
    };
    Banking.prototype.transfer = function (accountNumber, amount) {
        console.log("Acount Number:", accountNumber);
        this.currentBalance = this.currentBalance - amount;
        return this.currentBalance;
    };
    __decorate([
        log({
            author: "Peter Parker",
            capture: ["ipaddress", "starttime", "endtime"]
        })
    ], Banking.prototype, "getCurrentBalance", null);
    __decorate([
        log({
            author: "Peter Parker",
            capture: ["ipaddress", "starttime", "endtime"]
        })
    ], Banking.prototype, "withdraw", null);
    __decorate([
        log({
            author: "Peter Parker",
            capture: ["ipaddress", "starttime", "endtime"]
        })
    ], Banking.prototype, "transfer", null);
    return Banking;
}());
var banking = new Banking(4200);
banking.getCurrentBalance();
// console.log("Current Balance after withdraw:", banking.withdraw(500));
// console.log("Current Balance after transfer:", banking.transfer("ABC-123-456", 500));
