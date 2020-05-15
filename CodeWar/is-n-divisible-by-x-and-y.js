function isDivisible(n, x, y) {
    if (n % x == 0 && n % y === 0) {
        return true
    }
    return false
}

console.log(isDivisible(3, 3, 4), false);
console.log(isDivisible(12, 3, 4), true);
console.log(isDivisible(8, 3, 4), false);
console.log(isDivisible(48, 3, 4), true);