function isLucky(n) {
    splitted = n.toString().split('');
    let firstHalf = splitted.splice(0, Math.floor(splitted.length / 2)), secondHalf = splitted; 
    
    firstHalf = firstHalf.map((value) => {
        return Number(value);
    });
    
    secondHalf = secondHalf.map((value) => {
        return Number(value);
    });
    
    let SumOfFirst = firstHalf.reduce((memo, value) => {
        return memo + value;
    });
    
    let SumOfSecond = secondHalf.reduce((memo, value) => {
        return memo + value;
    });
    
    if(SumOfFirst === SumOfSecond){
        return true;
    }
    
    return false;
}