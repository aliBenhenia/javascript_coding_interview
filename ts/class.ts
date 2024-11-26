class Person {
    // Property declaration with types
    private name: string;
    age: number;
  
    // Constructor to initialize properties
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    // Method to display information about the person
    greet(): void {
    //   console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
    getName():string{
        return (this.name);
    }
    setName(name:string):void{
        this.name = name;
    }
  }
  
  // Creating an instance of the Person class
  const person1 = new Person("Alice", 30);
  person1.greet();  // Output: Hello, my name is Alice and I am 30 years old.

//   console.log(person1.getName())
  person1.setName("mr...")
//   console.log(person1.getName())

class Vehicle{
    protected price:number;

    constructor(price:number)
    {
        this.price = price;
    }
    protected getPriceParent():number{
        return(this.price);
    }
}
class Bike extends Vehicle
{
    private static global_ : number = 112;// access it without instabce of Blueprint...
    constructor(price:number)
    {
        super(price);// pass to parent..
    }
   static print():void{
        console.log("==>",this.global_);
    }
    getPrice():number{
        return(this.getPriceParent());
    }
}
  
const b1 = new Bike(1000);
console.log(b1.getPrice());
console.log(Bike.print());
// console.log(b1.getPriceParent()); cnat access becAUSE its protected...