const isPrime = (n)=>{
    if (n <= 1) return 0;
    let i = 2;
    while (i < n * n)// loop untle reach sqaure root
    {
        if (n % i == 0) return 0;//not prime
        i += 2;
    }
    return n;
};

let i = 0;
while (i <= 100)
{
    if (isPrime(i))
        console.log(isPrime(i));
    i++;
}
console.log()