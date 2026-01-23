// SHARED toy box (prototype)
const toyBox = {
  play: function() { console.log("Playing!") }  // ✅ ONE copy
};

// Kids only have their own names
const kid1 = { name: "Ali" };
const kid2 = { name: "Sam" };

// Connect kids to toy box
kid1.__proto__ = toyBox;  // "Hey kid1, use toyBox's toys!"
kid2.__proto__ = toyBox;  // "Hey kid2, use SAME toyBox!"

kid1.play();  // "Playing!" (from toyBox)
kid2.play();  // "Playing!" (from SAME toyBox)

// kid1.play === kid2.play ✅ TRUE! Same toy!
//Prototype = Shared Function Box

class Car {
    constructor(name , price)
    {
        this.name = name;
        this.price = price;
    }
    print ()
    {
        console.log(this.name)
        console.log(this.price)
    }
}
const car1 = new Car(`toyota`, 10000);
const car2 = new Car(`rangerover`, 30000);
car1.print();
car2.print();
if (car1 instanceof Car)
     console.log(`ye is it!!`)