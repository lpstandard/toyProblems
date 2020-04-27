function pigIt(str) {
    //Code here
    return str.split(' ').map(word => {
        if (word == '!' || word == '?' || word == '.') {
            return word.slice(1) + word[0]
        } else {
            return word.slice(1) + word[0] + 'ay';
        }
    }).join(' ');
}

console.log(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay');
console.log(pigIt('This is my string'), 'hisTay siay ymay tringsay');