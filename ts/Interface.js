var printCar = function (carData) {
    console.log(carData.name);
    console.log(carData.price);
};
var c1 = {
    name: "bmw",
    price: { f: "rrrrrr", f2: "Pppppp" },
    print: function () {
        console.log("yaaaaaa");
    }
};
printCar(c1);
c1.print();
var add = function (a, b) {
    console.log("========>", a);
    console.log("========>", b);
};
add(1, 34);
// interface Person {
//     name: string;
//     age: number;
//   speak(a: string): void;
//   spend(a: number): number;
//   }
//   class Me implements Person{
//        name: string;
//       age: number;
//      speak(a: string): void;
//      spend(a: number): number;
//     private idNumber: number;
//      constructor(name: string, age: number) {
//          this.name = name;
//          this.age = age;
//      }
//   }
// A generic interface is an interface in programming that allows you to define methods that can work with different types of data, without specifying the exact type at the time of writing the code. Instead, you can use a placeholder (often called a "type parameter") that gets replaced with a specific type when you actually use the interface. This makes your code more flexible and reusable.
// interface UserPrps<T>{
//     user:T,
//     name:string,
// };
// const n1:UserPrps<string> = { // reausble type..genric type
//     user:"ewfnnaskjnsdjknvsjknvkjnvjndvjj",
//     name :"ggg"
// };
// console.log(n1.name);
// console.log(n1.user);
// interface ApiData<T> {
//     payload: T[];
//     code: number; 
//     date: Date;
//   }
//   interface UserData {
//     name: string;
//     email: string;
//   }
//   async function loadDataFromApi() {
//    const data: ApiData<UserData> = await fetch('/some/api/endpoint'')
//   }
// Conclusion
// Interfaces defines the structure for entities to follow and they can be implemented by functions or classes. We can define optional properties on an interface using ? and read-only properties by using the readonly keyword in the property name.
// Interfaces can be extended to import properties of other interfaces or classes using the extends keyword.
// We can use generics with interfaces to create reusable components.
// Interfaces also help in improving the performance of JavaScript engines.
function prsf(n) {
    n * 4; // calcule soo number>? str? 
    n.name;
    n.age; // but user enter nu or enter undifind prop
}
// const rr ={
//     r:1,
// }
// console.log(rr.rgeg) // main problem in js ,,but ts trow err here....
var innn = {
    name: "julia",
};
var edd;
console.log(edd);
var dfes = [1, 2, 3, 34, 4];
dfes.forEach(function (n) {
    console.log(n);
});
var mm = [74575, 3, 3, 34,];
console.log(mm);
