function isVowel(char){
  return['a', 'e', 'i', 'o', 'u'].includes(char);
}

function countVowels(str){
  var count = 0;
  for(var i = 0; i < str.length; i++){
    if(isVowel(str[i])){
      count++;
    }
  }
 return count; 
}

console.log(isVowel(''));
