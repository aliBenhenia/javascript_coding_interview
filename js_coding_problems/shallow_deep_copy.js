// deep copy vs shallow copy

// in normal
const x = [1,2,3];
const y = x;// deep copy = both has same reference
x.push(1111)
console.log(x) // also update origin arr,. 

// shalow = spread , create new mememory adress 
const y2 = [...x];
y2.push(9999)

console.log(x) // doent update origin
// [] == [] is false, has not the same refrence...
