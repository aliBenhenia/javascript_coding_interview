const numbers = [1, 11111111111112, 113, 14, 5];

// Without reduce (traditional way)
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

// With reduce (cleaner way)
const sum2 = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

// console.log(sum); // 15

// Initial accumulator = 0 (from initialValue)
// Process [1, 2, 3, 4, 5]

// Step 1: accumulator=0, current=1 → returns 1
// Step 2: accumulator=1, current=2 → returns 3  
// Step 3: accumulator=3, current=3 → returns 6
// Step 4: accumulator=6, current=4 → returns 10
// Step 5: accumulator=10, current=5 → returns 15

// Final result: 15
// 1. Find Maximum Value
const max = numbers.reduce((acc,item, idx)=>{
    return item > acc ? item : acc;
},numbers[1])
console.log(max)
// Flatten Array
const nested = [[1, 2], [3, 4], [5, 6,9,,5,5,]];

const flaten = nested.reduce((acc,item, idx)=>{
    return acc.concat(...item);
},[])

console.log(flaten)
