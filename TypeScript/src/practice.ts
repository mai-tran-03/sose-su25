// for each number from 1-100, the program prints the number
for (let i = 1; i <= 100; i++) {
    console.log(i);
};

// - If the number is evenly divisible by 3, the program also prints "fizz"
// - If the number is evenly divisible by 5, the program also prints "buzz"
// - If it's evenly divisible by both, it prints "fizzbuzz"
// - The program should use a method to determine what to print.
function printFizzbuzz(number: number): string {
    if ((number % 3 == 0) && (number % 5 == 0)) {
        return "fizzbuzz";
    } else if (number % 3 == 0) {
        return "fizz";
    } else if (number % 5 == 0) {
        return "buzz";
    }
    return "";
}

console.log(printFizzbuzz(15));
console.log(printFizzbuzz(9));
console.log(printFizzbuzz(20));