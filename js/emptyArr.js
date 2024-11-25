let data = [1,2,2,3,34];
// console.log(data);
data = []; // recomded if u dont have ref to another var
// console.log(data);
// 
let data2 = [1,2,2,3,34];
let copp = data2;
data2.length = 0;// use this one...
// data2 = []

console.log(data2);
console.log(copp);
