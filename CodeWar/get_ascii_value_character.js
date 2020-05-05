function getASCII(c) {
    // ...
    return c.charCodeAt(0);
}

console.log(getASCII('A'), "should be => 65");
console.log(getASCII(' '), "should be => 32");
console.log(getASCII('!'), "should be => 33");