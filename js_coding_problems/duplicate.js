const remove_duplicates = (arr)=>{
    const setted = new Set(arr);
    return [...setted];
}
console.log(remove_duplicates([1,1,1,23,3,3,3,3,3,4,4,3,5]))