"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = exports.Status = exports.Passport = void 0;
var Passport = /** @class */ (function () {
    function Passport(country, passportNumber) {
        this.country = country;
        this.passportNumber = passportNumber;
    }
    return Passport;
}());
exports.Passport = Passport;
var Status = /** @class */ (function () {
    function Status(status, remark) {
        this.status = status;
        this.remark = remark;
    }
    return Status;
}());
exports.Status = Status;
var Student = /** @class */ (function () {
    function Student(firstName, lastName, icNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.icNumber = icNumber;
        this.retrieveStatus();
    }
    Student.prototype.retrieveStatus = function () {
        this.status = new Status(true, "All Ok");
    };
    Student.prototype.display = function () {
        console.log("First Name:", this.firstName);
        console.log("Last Name:", this.lastName);
        console.log("IC Number:", this.icNumber);
    };
    return Student;
}());
exports.Student = Student;
