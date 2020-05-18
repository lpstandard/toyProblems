function twoOldestAges(ages) {

    ages.sort((a, b) => {
        return a - b;
    });

    return ages.slice(ages.length - 2, ages.length);
}

console.log(twoOldestAges([1, 2, 10, 8]), '[8, 10]')  