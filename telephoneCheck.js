
function telephoneCheck(str) {

  var reg = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/gm; 
  if(str.match(reg)) {
    return true;
  } else {
    return false;
  }
  
}



console.log(telephoneCheck("10 (757) 622-7382"));