const checkNonbulean = (data)=>{
    if (data)
        return (true);
    return false;
}

console.log(checkNonbulean(1));
console.log(checkNonbulean("qwfwef"));
console.log(checkNonbulean(23.233));
console.log(checkNonbulean(true));
console.log(checkNonbulean({a : 1}));
console.log(checkNonbulean([1,2,23,3]));
console.log(checkNonbulean(new Date()));
console.log(checkNonbulean(new Map()));
console.log(checkNonbulean(new Set()));
console.log(checkNonbulean([]));
console.log(checkNonbulean({}));
console.log(checkNonbulean(()=>{}));
console.log("***************************")
console.log(checkNonbulean(0));
console.log(checkNonbulean(""));
console.log(checkNonbulean(NaN));
console.log(checkNonbulean());// undifend
console.log(checkNonbulean(undefined));
console.log(checkNonbulean(null));