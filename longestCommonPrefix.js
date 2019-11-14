// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "". 

var longestCommonPrefix = function(strs) {
  if(!strs.length){
    return '';
  }
    for(let i = 0 ; i < strs[0].length; i++){
      for(let j = 1; j < strs.length; j++){
        const str = strs[j];  // str = 'flow', str = 'flight'
        if(str[i] !== strs[0][i]){
          return str.slice(0, i);
        }
      }
        
    }
    return strs[0];
  }


console.log(longestCommonPrefix(['flower', 'flow', 'flight']));