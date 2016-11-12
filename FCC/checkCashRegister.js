function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  var money = [
    {name: 'ONE HUNDRED', value: 100.00},  
    {name: 'TWENTY', value: 20.00},  
    {name: 'TEN', value: 10.00},  
    {name: '<FIVE></FIVE>', value: 5.00},  
    {name: 'ONE', value: 1.00},  
    {name: 'QUARTER', value: 0.25},  
    {name: 'DIME', value: 0.10},  
    {name: 'NICKEL', value: 0.05},  
    {name: 'PENNY', value: 0.01}
  ];
  
    var sumCash = cid.reduce(function(accu, next){
      // console.log('accu', accu)     
      // console.log('next1', next[1])
      return accu + next[1];
    }, 0.0); 
    

  // console.log(sumCash(cid))

  if(sumCash < change){
    return "Insufficient Funds"; 
  } else if(sumCash === change){
    return  "Closed";
  } 

  cid = cid.reverse();
  // console.log(cid)
  
  var result = money.reduce(function(accu, next, i){
    // console.log(next.value)
    console.log('accu: ', accu)
    if(change >= next.value){  // change due is greater than
      var currentValue = 0.0;
        while(change >= next.value && cid[i][1] >= next.value){
          currentValue += next.value; 
          change -= next.value;
          change = Math.round(change * 100) / 100;
          cid[i][1] -= next.value; 
        }
      accu.push([next.name, currentValue]);
      return accu; 
    } else {
      return accu;
    }
  }, []);  
    
  return result.length > 0 && change === 0 ? result : "Insufficient Funds"; 
}


var result = checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
// [["QUARTER", 0.50]]
// 
console.log(result);


