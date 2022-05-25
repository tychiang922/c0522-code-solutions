function handleFocus(event) {
  console.log('focus has been fired');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('blur has been fired');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log('value of input: ', event.target.name);
  console.log('value of target.value: ', event.target.value);
}

var $input = document.querySelector('input');
var $textArea = document.querySelector('textarea');

$input.addEventListener('focus', handleFocus);
$input.addEventListener('blur', handleBlur);
$input.addEventListener('input', handleInput);

$textArea.addEventListener('focus', handleFocus);
$textArea.addEventListener('blur', handleBlur);
$textArea.addEventListener('input', handleInput);
