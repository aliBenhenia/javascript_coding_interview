// - [ ]  **First Non-Repeating Character**
    
//     *Problem:* Find first unique char
    
//     *Input:* `"aabbcdd"` → *Output:* `"c"`

function firstNonRepeatingChar(str) {
    //first set fisrt elem, loop around the str, and each el check is exist or not if not return its unique.,  put it in map  , and in other iteration check if exist
    const str_map = new Map();
    for(let i = 0;i < str.length; i++)
    {
        str_map.set(str[i], (str_map.get(str[i]) ||  0) +1) // be attention here
    }
    for(let item of str_map)
    {
        // console.log(item[0])
        if (item[1] === 1)
            return item[0]
    }
    return 0;
}
console.log(firstNonRepeatingChar("adbbcdd"))


//   if(str.indexOf(char) === str.lastIndexOf(char)) // better solution