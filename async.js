//JavaScript Callbacks
const printSome = (some)=>{
    console.log(`some is : ${some}`);
    return(some);
}

const getSome = (a,b,callBack)=>{
    return(callBack(a+b));
}

console.log(getSome(4,5,printSome));