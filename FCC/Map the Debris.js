
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447; //gravitational constant.

  return arr.reduce(function(memo, obj){
    var objPeriod = Math.round(2*Math.PI*Math.sqrt(Math.pow(earthRadius + obj.avgAlt, 3)/GM));
    memo.push({name: obj.name, orbitalPeriod: objPeriod});
    return memo;
  }, []);
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);