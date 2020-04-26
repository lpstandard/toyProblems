function iqTest(numbers) {
    debugger

    let even = [];
    let odd = [];

    numbers = numbers.split(' ').map((value) => {
        return Number(value)
    })
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            even.push({ num: numbers[i], pos: i + 1 });
        } else {
            odd.push({ num: numbers[i], pos: i + 1 });
        }
    }
    return even.length > odd.length ? odd[0]['pos'] : even[0]['pos'];

}

debugger
console.log(iqTest("2 4 7 8 10"), 'should be 3');
console.log(iqTest("1 2 2"), 'should be 1');

