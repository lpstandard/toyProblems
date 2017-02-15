/*
Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more 
readable format. The friendly display should use month names instead of numbers 
and ordinal dates instead of cardinal (1st instead of 1). Do not display information 
that is redundant or that can be inferred by the user: if the date range ends in less 
than a year from when it begins, do not display the ending year. Additionally, if the 
date range begins in the current year (i.e. it is currently the year 2016) and ends 
within one year, the year should not be displayed at the beginning of the friendly range.
If the range ends in the same month that it begins, do not display the ending year or month.
*/
function makeFriendlyDates(arr) {
  var date1 = arr[0].split('-');
  var date2 = arr[1].split('-');
  var result = [];
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
                'September','October', 'November', 'December'];
  
  date1[1] = Number(date1[1]) - 1;
  date2[1] = Number(date2[1]) - 1;
  date1[2] = Number(date1[2]);
  date2[2] = Number(date2[2]);
  date1[0] = Number(date1[0]);
  date2[0] = Number(date2[0]);
  
  if(date1[1] === date2[1]){
    result.push(months[date1[1]] + " " + dayTransfer(date1[2]));
    result.push(dayTransfer(date2[2]));
    return result;    
  } else if(date2[0] - date1[0] > 1){
    result.push(months[date1[1]] + " " + dayTransfer(date1[2]) + ", " + date1[0]);
    result.push(months[date2[1]] + " " + dayTransfer(date2[2]) + ", " + date2[0]);
    return result;
  } else {
    result.push(months[date1[1]] + ' ' + dayTransfer(date1[2]));
    result.push(months[date2[1]] + ' ' + dayTransfer(date2[2]));
    return result;
  }
  
  function dayTransfer(day){
    if(day === 1){
      return day + 'st';      
    } else if(day === 3){
      return day + 'rd';
    } else {
      return day + 'th';
    }

  }
}

makeFriendlyDates(["2016-12-01", "2018-02-03"]);