// if Roman in s is left > right, add all those associated 
// numbers together
// else use the left one minus the right one
var romanToInt = function (s) {
    let splitted = s.split('');
    let res = 0;
    let current, currentValue, next, nexValue;
    const lists = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    // let keys = Object.keys(lists);
    // for (let keys in lists) {
    //     if (keys[i] < keys[i + 1]) {

    //     }

    // }
    var romanToInt = function (s) {
        let splitted = s.split('');
        let res = 0;
        let current, currentValue, next, nexValue;
        const lists = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }
        for (let i = 0; i < splitted.length; i++) {
            current = splitted[i];
            currentValue = lists[current];
            next = splitted[i + 1];
            nextValue = lists[next];
            if (currentValue < nextValue) {
                res -= currentValue;
            } else {
                res += currentValue;
            }
        }
        return res;
    }
};