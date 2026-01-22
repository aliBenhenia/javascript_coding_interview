const k = [1,[2,[3],[11,[1,[1,[55,[1,1,1,1,[1]]]]]]]];
const flaten_array = (arr, res)=>{

    for (let i = 0; i < arr.length; i++)
    {
        if (Array.isArray(arr[i]))
            flaten_array(arr[i], res); // recurse deeper
        else
            res.push(arr[i]);// base case: stop recursion
    }
    return res;
}
console.log(flaten_array(k,[]))