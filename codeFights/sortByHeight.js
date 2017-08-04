function sortByHeight(a) {
    let count = 0, copy = a;
    copy = copy.filter((elem) => {
        return elem != -1;
    }).sort((a, b) => { return a - b; });
    
    for(let i = 0; i < a.length; i++){
        if(a[i] != -1){
            a[i] = copy[count];
            count++;
        }
    }
    return a;
}
