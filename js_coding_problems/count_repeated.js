const countFrequency = (arr)=>{
  let res = new Map();
  for (let i = 0; i < arr.length;i++)
  {
    if (res.has(arr[i]))
        res.set(arr[i], res.get(arr[i]) + 1)// incremnt counter
    else
        res.set(arr[i],1);
  }
  return res;
}

const countFrequency2 = (arr)=>{
 let obj = {};
  for (let i = 0; i < arr.length;i++)
  {
    if (obj[arr[i]])// if key exist
        obj[arr[i]] = obj[arr[i]] + 1
    else
        obj[arr[i]] = 1;
  }
  return obj
}

console.log(countFrequency2(["k","b","a","b","a","h","h"]));