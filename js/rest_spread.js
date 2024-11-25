const print = (...rest)=>{
    console.log(rest.filter((n)=> n<= 10).map((n)=> n * 2))
    
}

// print(1,2,3,100,8)


const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5]; // Spread elements into a new array
console.log(moreNumbers); // [1, 2, 3, 4, 5]
// 1. Optional Chaining (?.) Operator
// The optional chaining operator (?.) allows you to safely access properties or call methods on an object that might be null or undefined, without throwing an error. Instead of manually checking if a value exists before accessing it, optional chaining automatically returns undefined if a reference is null or undefined at any point in the chain.

// Syntax
// javascript
// Copy code
// object?.property
// object?.method()
// object?.[key]