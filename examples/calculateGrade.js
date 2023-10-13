let grade1 = 10;
let grade2 = 9;
let grade3 = 8;
let grade4 = 7;

let total =
  parseFloat(grade1) +
  parseFloat(grade2) +
  parseFloat(grade3) +
  parseFloat(grade4);
let average = total / 4;

console.log("Your average grade is: " + average);

if (average < 7) {
  console.log("Study more to pass!");
} else {
  console.log("Congratulations, you have passed!");
}
