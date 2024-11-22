function createCounter() {
    let count = 0; // Private variable

    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}



const counter = createCounter();
// console.log(counter.increment()); // 1
// console.log(counter.increment()); // 1
// console.log(counter.increment()); // 2
// console.log(counter.getCount());  // 2
// console.log(counter.decrement()); // 1

// opbject my case
const data = {
    counter : 0,
    increment : function(){
        this.counter++;
    },
}
data.increment();
data.increment();
data.increment();

console.log(data.counter)


//Example 1: Basic Closure
function outerFunction() {
    let count = 0; // A variable in the outer scope

    function innerFunction() {
        count++; // Access the outer variable
        console.log(count);
    }

    return innerFunction; // Return the inner function
}

const myClosure = outerFunction(); // outerFunction runs and returns innerFunction
myClosure(); // Output: 1 (innerFunction remembers `count`)
myClosure(); // Output: 2 (it still remembers `count`)

//Example 2: Using Closures to Create Private Variables
function createCounter() {
    let count = 0; // Private variable

    return {
        increment: function () {
            count++;
            console.log(count);
        },
        reset: function () {
            count = 0;
            console.log("Reset to:", count);
        },
    };
}

const counter = createCounter();
counter.increment(); // Output: 1
counter.increment(); // Output: 2
counter.reset();     // Output: Reset to: 0
