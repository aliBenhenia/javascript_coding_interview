const factorial = (n)=>{
    if (n == 0) // base case
        return 1;
    return (factorial(n - 1) * n);
}

console.log(factorial(5))