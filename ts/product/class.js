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
var Person = /** @class */ (function () {
    // Constructor to initialize properties
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    // Method to display information about the person
    Person.prototype.greet = function () {
        //   console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
    Person.prototype.getName = function () {
        return (this.name);
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    return Person;
}());
// Creating an instance of the Person class
var person1 = new Person("Alice", 30);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
//   console.log(person1.getName())
person1.setName("mr...");
//   console.log(person1.getName())
var Vehicle = /** @class */ (function () {
    function Vehicle(price) {
        this.price = price;
    }
    Vehicle.prototype.getPriceParent = function () {
        return (this.price);
    };
    return Vehicle;
}());
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike(price) {
        return _super.call(this, price) || this; // pass to parent..
    }
    Bike.prototype.print = function () {
        console.log(this.price);
    };
    Bike.prototype.getPrice = function () {
        return (this.getPriceParent());
    };
    return Bike;
}(Vehicle));
var b1 = new Bike(1000);
console.log(b1.getPrice());
// console.log(b1.getPriceParent()); cnat access becAUSE its protected...
