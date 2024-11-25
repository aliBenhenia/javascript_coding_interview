const getUnique = (nums)=>{
    return Array.from(new Set(nums)); // set for uniqe values 
    // from to convert from Set ds to array
}

console.log(getUnique([443,3,3,3,3,3,3,65]))