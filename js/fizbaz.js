let i = 1;  // Start from 1 because we want to check from 1 to 100
while (i <= 100) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");  // Divisible by both 3 and 5
    } else if (i % 3 == 0) {
        console.log("Fizz");      // Divisible by 3
    } else if (i % 5 == 0) {
        console.log("Buzz");      // Divisible by 5
    } else {
        console.log(i);           // Neither divisible by 3 nor 5, print the number
    }
    i++;
}
