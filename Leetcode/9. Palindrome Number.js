var isPalindrome = function (x) {
    let res = x.toString().split('').reverse().join('');
    console.log(typeof(res));
    return x == res;

};

// console.log(isPalindrome(123));
console.log(isPalindrome(121));
// console.log(isPalindrome(-121));