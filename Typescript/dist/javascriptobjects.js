"use strict";
// javascript object we use {}
var khairi = {
    firstname: "Khairi",
    lastname: "Abu Bakar",
    icNumber: 720102121234,
    products: ["Television", "Radio"],
    addresses: [
        {
            street: "Taman Serdang Perdana",
            state: "Selangor"
        },
        {
            street: "Taman Equine Park",
            state: "Selangor"
        }
    ],
    display: function (x, y) {
        console.log("First Name:", this.firstname);
        console.log("Last Name:", this.lastname);
        console.log(x, y);
    },
    print: function () {
        var _this = this;
        return function () {
            console.log("First Name:", _this.firstname);
        };
    }
};
var john = {
    firstname: "John",
    lastname: "David",
    icNumber: 820102121234,
    products: ["Computer", "Laptop"],
    addresses: [
        {
            street: "Taman Serdang Perdana",
            state: "Perak"
        },
        {
            street: "Taman Equine Park",
            state: "Kedah"
        }
    ]
};
if (khairi.display)
    khairi.display(10, 20);
if (khairi.print)
    khairi.print()();
if (khairi.display)
    khairi.display.call(john, 10, 20);
if (khairi.display)
    khairi.display.apply(john, [10, 20]);
if (khairi.display) {
    var callmelater = khairi.display.bind(john);
    callmelater(10, 20);
}
