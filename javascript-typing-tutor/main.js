var $span = document.querySelectorAll('span');
var keyCount = 0;
var type = 'grumpy wizards make toxic brew';

function key(event) {
  if (event.key === type[keyCount]) {
    $span[keyCount].className = 'green';
    if (keyCount + 1 !== $span.length) {
      $span[keyCount + 1].className = 'underline';
      keyCount++;
    }
  } else {
    $span[keyCount].className = 'red underline';
  }
}

document.addEventListener('keydown', key);
