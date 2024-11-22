const print = (...rest)=>{
    console.log(rest.filter((n)=> n<= 10).map((n)=> n * 2))
    
}

// print(1,2,3,100,8)


const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5]; // Spread elements into a new array
console.log(moreNumbers); // [1, 2, 3, 4, 5]
