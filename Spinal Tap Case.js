//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var regex = /\s+|_+/g; 

  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  str = str.replace(regex, '-').toLowerCase();

  return str;
}

console.log(spinalCase('thisIsSpinalTap'));
