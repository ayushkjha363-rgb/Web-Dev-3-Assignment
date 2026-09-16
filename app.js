const isEven = require("./modules/isEven");

console.log("Checking some numbers...");

let numbers = [2, 5, 8, 11, 20];

numbers.forEach(function (number) {
    if (isEven(number)) {
        console.log(`${number}, is Even`);
    } else {
        console.log(`${number}, is Odd`);
    }
});

console.log("Done.");