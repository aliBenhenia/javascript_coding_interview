const getSum = (arr)=>{
    let res = 0;
    arr.forEach(n => {res =  res + (n);});
    return ((res));
}

console.log(getSum([1,2,3,4]))