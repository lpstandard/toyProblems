// Assume we are dealing with an environment which could 
// only store integers within the 32-bit signed integer 
// range: [−231,  231 − 1]. For the purpose of this problem, 
// assume that your function returns 0 when the reversed 
// integer overflows.


var reverse = function (x) {
    let res;
    let temp = Math.abs(x).toString().split('').reverse().join('');
    if (x < 0 && temp > 2147483647 || temp > 2147483647) {
        res = 0
    } else if (x < 0) {
        x = Math.abs(x);
        res = -1 * temp;
    } else {
        res = temp;
    }

    return res;
};