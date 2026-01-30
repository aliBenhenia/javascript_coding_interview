
const custom_map = (arr,fn)=>{
    const new_arr = [];
    let i = 0;
    while (i < arr.length)
    {
        new_arr.push(fn(arr[i]));
        i++
    }
    return new_arr;
}
const nums = [1,2,3,4];
const maped = custom_map(nums, ((item)=> item + 1));
// console.log(maped);

// remov
