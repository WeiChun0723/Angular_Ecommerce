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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graduate = void 0;
var student_1 = require("./student");
var Graduate = /** @class */ (function (_super) {
    __extends(Graduate, _super);
    function Graduate(firstName, lastName, icNumber, alumniNumber) {
        var _this = _super.call(this, firstName, lastName, icNumber) || this;
        _this.alumniNumber = alumniNumber;
        return _this;
    }
    Graduate.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("Alumni Number:", this.alumniNumber);
    };
    return Graduate;
}(student_1.Student));
exports.Graduate = Graduate;
