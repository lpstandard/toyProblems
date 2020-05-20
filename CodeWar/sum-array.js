// Sum Numbers
function sum(numbers) {
    "use strict";
    if (numbers.length === 0) {
        return 0;
    }
    return numbers.reduce((accum, cuur) => {
        return accum + cuur;
    })

};

console.log(sum([]), '0');
console.log(sum([1, 5.2, 4, 0, -1]), '9.2');