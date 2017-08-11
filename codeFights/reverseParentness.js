function reverseParentheses(s) {
        
    if(s.includes('(')){
        return reverseParentheses(reversed(s));
    }
        return s;
}

    const reversed = (s) => {
        let regex = /\(([^()]*)\)/i, subStr = regex.exec(s)[1];    
        subStr = subStr.split("").reverse().join('');
        return s.replace(regex, subStr);
    }
    
    