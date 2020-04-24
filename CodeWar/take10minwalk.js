function isValidWalk(walk) {
    //insert brilliant code here
    if (walk.length !== 10)
        return false;

    for (let i = 0; i < walk.length; i++) {
        const counts = walk.reduce((counts, direction) => {
            counts[direction]++;
            return counts;
        }, {
                n: 0,
                s: 0,
                e: 0,
                w: 0
            }
        );
        if (counts.n === counts.s && counts.e === counts.w) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return true') // true
console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'])) // false
console.log(isValidWalk(['w'])) // false
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])) // false