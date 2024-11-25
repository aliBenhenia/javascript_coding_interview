const returnOnlyEven = (arr)=>{
    const filtered = arr.filter((e)=> (e % 2 == 0)); // even 2 4 6..etc
    return (filtered);
}

console.log(returnOnlyEven([1,2,3,4,5,6]))