const centuryFromYear = (year) => {
  return year % 100 !== 0 ? Math.floor(year / 100) : Math.floor(year / 100) + 1;

}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));