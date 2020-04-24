function DNAStrand(dna) {
    //your code here
    let res = [];
    let temp = {
        'A': 'T',
        'G': 'C'
    }

    let splittedDna = dna.split('');

    for (let i = 0; i < splittedDna.length; i++) {
        if (splittedDna[i] === 'A') {
            res.push('T');
        } else if (splittedDna[i] === 'T') {
            res.push('A');
        } else if (splittedDna[i] === 'C') {
            res.push('G');
        } else if (splittedDna[i] === 'G') {
            res.push('C');
        }
    }
    return res.join('');
}

console.log(DNAStrand("ATTGC")) // "TAACG"
console.log(DNAStrand("GTAT")) // "CATA"