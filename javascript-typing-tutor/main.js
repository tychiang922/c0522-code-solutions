var $span = document.querySelectorAll('span');
var $button = document.querySelector('button');
var $overlay = document.querySelector('.overlay');
var keyCount = 0;
var type = 'grumpy wizards make toxic brew';

function key(event) {
  if (keyCount === $span.length) {
    $button.className = '';
    $overlay.className = 'overlay';
  } else if (event.key === type[keyCount]) {
    $span[keyCount].className = 'green';
    if (keyCount + 1 !== $span.length) {
      $span[keyCount + 1].className = 'underline';
      keyCount++;
    } else {
      keyCount++;
    }
  } else {
    $span[keyCount].className = 'red underline';
  }
}

function play(event) {
  $button.className = 'hide';
  $overlay.className = 'overlay hide';
  keyCount = 0;
  $span[0].className = 'underline';
  for (var spanIndex = 1; spanIndex < $span.length; spanIndex++) {
    $span[spanIndex].className = '';
  }
}

document.addEventListener('keydown', key);
document.addEventListener('click', play);
