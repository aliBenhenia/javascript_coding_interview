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
;
var n1 = {
    user: "ewfnnaskjnsdjknvsjknvkjnvjndvjj",
    name: "ggg"
};
console.log(n1.name);
console.log(n1.user);
