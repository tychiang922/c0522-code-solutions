var timer = 4;
var $h1 = document.querySelector('h1');
var timerNum;
function timerAction() {
  if (timer === 0) {
    clearInterval(timerNum);
    timerNum = null;
    $h1.textContent = '~Earth Beeeelooowww Us~';
  } else {
    $h1.textContent = timer;
    timer--;
  }
}
if (!timerNum) {
  timerNum = setInterval(timerAction, 1000);
}
