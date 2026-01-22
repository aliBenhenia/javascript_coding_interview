const test = [
  {name: "Ali", age: 20},
  {name: "Sara", age: 20},
  {name: "Omar", age: 55},
  {name: "Lina", age: 30}
]
const grouped_by_property = (arr) => {
  const grouped = new Map();

  for (let i = 0; i < arr.length; i++) {
    const key = arr[i].age;

    if (grouped.has(key)) {
      grouped.get(key).push(arr[i]); // push to existing array
    } else {
      grouped.set(key, [arr[i]]);   // create new array
    }
  }

  return grouped;
}
console.log(grouped_by_property(test))
const res = {
  20: [
    {name: "Ali", age: 20},
    {name: "Omar", age: 20}
  ],
  30: [
    {name: "Sara", age: 30},
    {name: "Lina", age: 30}
  ]
}
