let count = 3;
let nIntervId;

const countDown = () => {
  if (count <= 0) {
    console.log('Blast off!');
    clearInterval(nIntervId);
    nIntervId = null;
  } else {
    console.log(count);
    count--;
  }
};
nIntervId = setInterval(() => countDown(), 1000);
