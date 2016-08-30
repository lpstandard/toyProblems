// Convert the characters &, <, >, " (double quote), and ' (apostrophe),
// in a string to their corresponding HTML entities.

function convertHTML(str) {

  let regex1 = /[&]/g, regex2 = /[<]/g, regex3 = /[>]/g, regex4 = /["]/g, regex5 = /[']/g; 

  let html = {
    '&': '&amp;', 
    '<': '&lt;', 
    '>': '&gt;', 
    '\"': '&quot;', 
    '\'': '&apos;'
  }; 

  str = str.split('').map((entity) => {
    return html[entity]|| entity; 
  }).join('');

  return str;
}

console.log(convertHTML("Dolce & Gabbana"));