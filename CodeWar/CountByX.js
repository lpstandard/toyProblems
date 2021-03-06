// Create a function with two arguments that will return a list
// of length (n) with multiples of (x).
// Assume both the given number and the number of times to count
// will be positive numbers greater than 0.
// Return the results as an array (or list in Python, Haskell
// or Elixir).

function countBy(x, n) {
  var z = [];

  for (let i = 1; i <= n; i++) {
    z.push(i * x); // i=1 x=1 i=2 x=1; i=1 x=2 i=2 x=2
  }

  return z;
}

console.log(countBy(1, 10) === [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(countBy(2, 5) === [2, 4, 6, 8, 10]);
