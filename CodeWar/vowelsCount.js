function getCount(str) {
    var vowelsCount = 0;
    let vowels = {
      'a': true,
      'e': true,
      'i': true,
      'o': true,
      'u': true
    }
    let strArr = str.split('');
    
    return strArr.reduce((vowelsCount, currentLetter) => {
      if(vowels[currentLetter]){
        vowelsCount ++;
      }
      return vowelsCount;
    }, 0)
  
  }
  
  console.log(getCount('abracadabra') == 5)