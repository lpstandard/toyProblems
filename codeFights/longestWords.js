function allLongestStrings(inputArray) {
    let longestword = inputArray[0].length;
    
    for(let i = 1; i < inputArray.length; i++){
        if(inputArray[i].length > longestword){
            longestword = inputArray[i].length;
        }
    }
    
    inputArray = inputArray.filter((e) => {
        return e.length === longestword;
    });
    return inputArray;
}
