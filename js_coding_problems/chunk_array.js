const chunk_array = (arr, num) => {
    if (num <= 0) return [];
    
    const times = Math.ceil(arr.length / num); // Use ceil for last chunk
    const new_arr = [];
    
    for (let i = 0; i < num; i++) {
        const chunked = [];
        const start = i * times;
        const end = Math.min(start + times, arr.length);
        
        for (let j = start; j < end; j++) {
            chunked.push(arr[j]);
        }
        
        if (chunked.length > 0) {
            new_arr.push(chunked);
        }
    }
    
    return new_arr;
};

console.log(chunk_array([112,2,3,,34,4,4,3,3], 3));
// Output: [[112, 2, 3, undefined], [34, 4, 4, 3], [3]]
// Still not exactly what you want!