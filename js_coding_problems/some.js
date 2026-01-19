const numbers = [1, 3, 5, 7, 8, 9];

// Question: Is there ANY even number?
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true (because 8 is even)