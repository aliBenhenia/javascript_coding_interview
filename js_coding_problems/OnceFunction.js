const OnceFunction = (func) => {
    let isExecuted = false;
    let result;
    
    function executor(args) {
        if (!isExecuted) {
            result = func(args);  // Handle arguments
            isExecuted = true;
        }
        return result;
    }
    
    return { executor };
};

// Test with arguments
const greetOnce = OnceFunction((name) => {
    console.log('Greeting:', name);
    return `Hello, ${name}!`;
});

console.log(greetOnce.executor('Alice')); // "Greeting: Alice", "Hello, Alice!"
console.log(greetOnce.executor('Bob'));   // Just "Hello, Alice!" (no greeting)