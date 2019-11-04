let items = [
  {id: 0, value: 1},
  {id: 1, value: 2},
  {id: 2, value: 3},
  {id: 3, value: 4},
  {id: 4, value: 5},
]

const filtered = items.filter(item => {
  return item.id === 3;
})

const mapped = items.map(item => {
  return item.id - 3;
})

const findItem = items.find(item => {
  return item.id === 3;
})

items.forEach(item => {
  console.log('foreach', item['value']);
})

const hasValueGreaterThan3 = items.some(item => {
  return item.value > 3;
})

const checkValue = items.some(item => {
  return item.value > 3;
})

const reduced = items.reduce((memo, item) => {
  return memo + item.value;
}, 0)

const included = items.includes(item => {
  return item.value === 3;
})

console.log(filtered); // [ { id: 3, value: 4 } ]

console.log(mapped); // [ -3, -2, -1, 0, 1 ]

console.log(findItem); // { id: 3, value: 4 }

console.log(hasValueGreaterThan3); // true

console.log('checkValue', checkValue); // true

console.log('reduceMethod', reduced); // 15

console.log('includes', included); // 
