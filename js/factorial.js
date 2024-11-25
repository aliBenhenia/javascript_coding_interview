// const factorial = (n)=>{
//     if (n == 0) // base case
//         return 1;
//     return (factorial(n - 1) * n);
// }
// // https://www.keka.com/javascript-coding-interview-questions-and-answers
// console.log(factorial(5))

const dd = (s)=>{
    let cc = s.split("").reverse().join("");
    return (s === cc);
}

console.log(dd("mada"))