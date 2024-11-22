//JavaScript Callbacks
const printSome = (some)=>{
    console.log(`some is : ${some}`);
    return(some);
}

const getSome = (a,b,callBack)=>{
    return(callBack(a+b));
}

console.log(getSome(4,5,printSome));
// Note
// When you pass a function as an argument, remember not to use parenthesis.

// Right: myCalculator(5, 5, myDisplayer);

// Wrong: myCalculator(5, 5, myDisplayer());


// exmples
const nums = [1,2,3,4,5,11,33,44,545,55,0,-11,8,3,464];

const filterNums = (nums,callBack)=>{// callBack return bool
    let i = 0;
    const newData = []
    while (i < nums.length )// -1 for last ele
    {
        if (callBack(nums[i]))
            newData.push(nums[i]);
        i++;
    }
    return (newData);
}

// console.log(filterNums(nums,(x)=> x <= 10));//callback function
// /Asynchronous JavaScript
//Functions running in parallel with other functions are called asynchronous
//A good example is JavaScript setTimeout()



