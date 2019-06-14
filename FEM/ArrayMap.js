// Go fix it :D
// Oh no, the map
// method for arrays has been disabled. Can you fix it?
// In case you haven't come across the map method for arrays,
//  here is how it works:
Array.prototype.map = Array => {
  let result = [];

  for (let i = 0; i < Array.length; i++) {
    result.push(Array[i]);
  }

  return result;
};
