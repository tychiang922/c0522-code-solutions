var $overlay = document.querySelector('.overlay');
var $hiddenbox = document.querySelector('.hidden-box');
var $open = document.querySelector('.open');
var $close = document.querySelector('.close');

function open(event) {
  $overlay.className = 'overlay';
  $hiddenbox.className = 'hidden-box';
}

function close(event) {
  $overlay.className = 'hidden overlay';
  $hiddenbox.className = 'hidden hidden-box';
}

$open.addEventListener('click', open);
$close.addEventListener('click', close);
