function abbrevName(name) {

    // code away
    let splitted = name.split(' ');
    let arr = [];

    return splitted.reduce((acc, cur) => {
        arr.push(acc[0] + cur[0])
        return arr.toString().split('').join('.');
    })


}

console.log(abbrevName("Sam Harris"), "S.H")
console.log(abbrevName("Patrick Feenan"), "P.F");
console.log(abbrevName("Evan Cole"), "E.C");
console.log(abbrevName("P Favuzzi"), "P.F");
console.log(abbrevName("David Mendieta"), "D.M");