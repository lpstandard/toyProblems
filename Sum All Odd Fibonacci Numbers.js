// Given a positive integer num, return the sum of all odd Fibonacci numbers 
// that are less than or equal to num. For example, sumFibs(10) should return 
// 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber;
        }

        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }

    return result;
}

console.log(sumFibs(4));