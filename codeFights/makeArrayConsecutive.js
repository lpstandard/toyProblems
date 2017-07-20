function makeArrayConsecutive2(statues) {
    statues = statues.sort((a, b) => { return a - b });
    let count = 0;
    let min = statues[0];
    let max = statues[statues.length - 1];
    console.log(statues);
    for(let i = min; i < max; i++){
    // iterate over the sorted array; if a value can't be found
    // count will be increased by one. 
        if(statues.indexOf(i) === -1){
            count++;
        }    
    }
    
    return count;
}
