var number = parseInt(prompt("Enter the number: "));
var n1 = 1, n2 = 2, newValue;

console.log("fibonaci series");

for (let i = 1; i <= number; i++) {
    console.log(n1);
    newValue = n1 + n2;
    n1 = n2;
    n2 = newValue;
}