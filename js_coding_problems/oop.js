// ========== OOP IN JAVASCRIPT - ALL CONCEPTS ==========

// 1. BASIC CLASS
class Animal {
    // Constructor runs when 'new' is used
    constructor(name) {
        this.name = name; // Property
    }
    
    // Method
    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

// 2. INHERITANCE (extends)
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call parent constructor
        this.breed = breed;
    }
    
    // Method overriding (POLYMORPHISM)
    speak() {
        console.log(`${this.name} barks!`);
    }
    
    // New method
    fetch() {
        console.log(`${this.name} fetches the ball`);
    }
}

// 3. ENCAPSULATION (Private fields)
class BankAccount {
    #balance = 0; // Private field (starts with #)
    
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }
    
    // Getter (computed property)
    get balance() {
        return this.#balance;
    }
    
    // Setter
    set balance(value) {
        if (value >= 0) {
            this.#balance = value;
        }
    }
}

// 4. STATIC (Class-level)
class MathHelper {
    static PI = 3.14159;
    
    static add(a, b) {
        return a + b;
    }
}

// 5. 'this' BINDING FIXES
class Button {
    constructor(label) {
        this.label = label;
        
        // Problem: 'this' is lost in event handlers
        // this.click = function() {
        //     console.log(this.label); // ❌ undefined
        // };
        
        // Solution 1: Arrow function (binds 'this')
        this.click = () => {
            console.log(this.label); // ✅ Works
        };
    }
    
    // Solution 2: Bind in constructor
    constructor(label) {
        this.label = label;
        this.doubleClick = this.doubleClick.bind(this);
    }
    
    doubleClick() {
        console.log(`Double: ${this.label}`);
    }
}

// 6. ABSTRACTION (Hide complexity)
class Car {
    start() {
        this.#checkEngine();
        this.#fuelPump();
        console.log('Car started');
    }
    
    #checkEngine() { console.log('Checking engine...'); }
    #fuelPump() { console.log('Starting fuel pump...'); }
}

// ========== USAGE ==========
const dog = new Dog('Rex', 'Labrador');
dog.speak(); // "Rex barks!" (Polymorphism)
dog.fetch(); // "Rex fetches the ball"

const account = new BankAccount();
account.deposit(100);
console.log(account.balance); // 100 (using getter)
// account.#balance = 999; // ❌ Error: private field

console.log(MathHelper.PI); // 3.14159 (Static property)
console.log(MathHelper.add(5, 3)); // 8 (Static method)

const btn = new Button('Submit');
const clickFn = btn.click;
clickFn(); // "Submit" ✅ (arrow function preserved 'this')

const car = new Car();
car.start(); // "Car started" (hides internal steps)
// car.#checkEngine(); // ❌ Error: private method

// ========== PROTOTYPE (OLD WAY) ==========
function OldAnimal(name) {
    this.name = name;
}
OldAnimal.prototype.speak = function() {
    console.log(`${this.name} makes a sound`);
};

const oldDog = new OldAnimal('Buddy');
oldDog.speak(); // Same as class

// Check inheritance chain
console.log(dog instanceof Dog); // true
console.log(dog instanceof Animal); // true
console.log(dog.__proto__ === Dog.prototype); // true