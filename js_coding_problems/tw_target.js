const getTargetSome = (arr, target)=>{
    let i = 0;
    let j = 0;
    while (i < arr.length)
    {
        j = i + 1;
        while (j < arr.length)
        {
            if (arr[i] + arr[j] === target)
                return [arr[i], arr[j]];
            j++;
        }
        i++;
    }
    return [];
}
console.log(getTargetSome([1,2,3,4,15], 5))