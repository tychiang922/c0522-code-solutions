function handleFocus(event) {
  console.log('focus has been fired');
  console.log('value of target name: ', event.target.name);
}

function handleBlur(event) {
  console.log('blur has been fired');
  console.log('value of target name: ', event.target.name);
}

function handleInput(event) {
  console.log('value of input: ', event.target.name);
  console.log('value of target.value: ', event.target.value);
}

var $userName = document.querySelector('#user-name');
var $userEmail = document.querySelector('#user-email');
var $userMsg = document.querySelector('#user-message');

$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handleInput);

$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('input', handleInput);

$userMsg.addEventListener('focus', handleFocus);
$userMsg.addEventListener('blur', handleBlur);
$userMsg.addEventListener('input', handleInput);
