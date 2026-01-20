const numbers = [1, 3, 5, 7, 9];
const x = numbers// deep copy has same refrence memory addresss 
const y = [...numbers]// shallow copy, 

// Question: Is there ANY even number?
const hasEven = numbers.some(num => num % 2 === 0);
const hasEven2 = numbers.every(num => num % 2 === 0);

console.log(hasEven); // true (because 8 is even)
