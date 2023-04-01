"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BankCard = /** @class */ (function () {
    function BankCard() {
    }
    BankCard.prototype.borrowMoney = function () {
        throw new Error("Method not implemented.");
    };
    BankCard.prototype.transfer = function (accountnumber, amount) {
        throw new Error("Method not implemented.");
    };
    BankCard.prototype.withdraw = function (amount) {
        throw new Error("Method not implemented.");
    };
    return BankCard;
}());
function doBorrowMoney() {
    return new BankCard();
}
var myCard = doBorrowMoney();
myCard.borrowMoney();
var Human = /** @class */ (function () {
    function Human() {
    }
    return Human;
}());
var Male = /** @class */ (function (_super) {
    __extends(Male, _super);
    function Male() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Male;
}(Human));
var Female = /** @class */ (function (_super) {
    __extends(Female, _super);
    function Female() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Female;
}(Human));
function getGender(sex) {
    if (sex == "M")
        return new Male();
    return new Female();
}
// polymorphism
var human = getGender("F");
var human01 = getGender("F");
/*
@AtmCard
@DebitCard
@CreditCard
class BankCard {}
*/ 
