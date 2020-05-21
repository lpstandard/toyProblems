function solve([a, b, c]) {
    return Math.min(a + b, b + c, c + a, Math.floor((a + b + c) / 2));
}

console.log(solve([4, 1, 1]), 2);
console.log(solve([8, 2, 8]), 9);
console.log(solve([8, 1, 4]), 5);
console.log(solve([7, 4, 10]), 10);
console.log(solve([12, 12, 12]), 18);
console.log(solve([1, 23, 2]), 3);