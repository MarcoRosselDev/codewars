/* Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. */
function evenOrOdd(number) {
  return number % 2 === 0? "Even": "Odd";
}
console.log(evenOrOdd(2));
console.log(evenOrOdd(4));
console.log(evenOrOdd(5));
console.log(evenOrOdd(3));