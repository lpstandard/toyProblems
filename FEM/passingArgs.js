const ifElse = (condition, isTrue, isFalse, ...args) => {
  console.log(args);
  return condition ? isTrue(...args) : isFalse(...args);
  isTrue('hi', 'bye', 'hola');
}

ifElse();