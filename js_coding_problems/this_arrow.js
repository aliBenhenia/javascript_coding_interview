const person = {
  name: "Alice",
  
  // 1. Regular function: HAS own 'this'
  sayName: function() {
    console.log("My name is " + this.name); // ✅ "Alice"
  },
  
  // 2. Arrow function: NO own 'this' (inherits from surrounding scope)
  sayNameArrow: () => {
    // 'this' here = global/window (where object is defined)
    console.log("My name is " + this.name); // ❌ undefined
  },
  
  // 3. Nested arrow function - still inherits from object scope
  sayArrowNested: () => {
    setInterval(() => {
      // Arrow inside arrow - still uses parent arrow's 'this'
      console.log(this.name); // ❌ undefined (same problem)
    }, 1000);
  },
  
  // 4. ✅ CORRECT: Regular function with arrow callback
  sayGood: function() {
    setInterval(() => {
      // Arrow inherits 'this' from sayGood (which has 'this' = person)
      console.log("Hello, I'm " + this.name); // ✅ "Alice"
    }, 1000);
  },
  
  // 5. ❌ WRONG: Arrow function as method
  sayBad: () => {
    console.log(this); // Window/global object
    console.log("Bad: " + this.name); // ❌ undefined
  }
};

// Testing all cases:
person.sayName();        // ✅ "My name is Alice"
person.sayNameArrow();   // ❌ "My name is undefined" 
person.sayGood();        // ✅ "Hello, I'm Alice" (repeats)
person.sayBad();         // ❌ "Bad: undefined"

// Start the interval function
person.sayGood(); // This will keep printing every second