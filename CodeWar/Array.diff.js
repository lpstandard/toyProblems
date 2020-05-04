function arrayDiff(a, b) {

    return a.filter(value => {
        return b.indexOf(value) === -1;
    })

}

console.log(arrayDiff([], [4, 5]), "should be => []")
console.log(arrayDiff([3, 4], [3]), "should be => [4]")
console.log(arrayDiff([1, 8, 2], []), "should be => [1, 8, 2]")
