const thisIsTrue = true;
const thisIsFalse = false;

const determinedFunction = (callback, errorcallback) => {
    if (thisIsTrue) {
        callback();
    } else {
        errorcallback();
    }
}
