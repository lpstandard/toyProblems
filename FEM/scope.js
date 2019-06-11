// Find variable in the parent's scope
const findSomeone = () => {
  const speak = () => {
    console.log(who); // cannot find variable who in the child context so find it in the parent context
  };

  let who = "Why hello there, Prof. Plum!"; // parent context

  return speak;
};

const someoneSpeak = findSomeone();

someoneSpeak; // "Why hello there, Prof. Plum!"

// 
const makeTimer = () => {
  let elapsed = 0;
  const stopWatch = () => { return elapsed; };
  const increase = () => elapsed++;
  setInterval(increase, 1000);
  return stopWatch;
}

let timer = makeTimer();

timer();