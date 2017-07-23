function matrixElementsSum(matrix) {
    let result = 0, cannotAddIndex = [];
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] === 0){
                cannotAddIndex.push(j);
            } else if(cannotAddIndex.indexOf(j) === -1){
                result += matrix[i][j];
            }
        }
    }
    return result;
}