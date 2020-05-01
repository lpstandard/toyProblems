function evaporator(content, evap_per_day, threshold) {
    var res = 1;
    var left = 1 - (evap_per_day * .01); // .9
    
    while(left >= (threshold * .01)){  
      left -= left * (evap_per_day * .01);
      res ++;
    }
    return res;
}

console.log(evaporator(10, 10, 10), "should be => 22")