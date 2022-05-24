var brightnessClick = true;
var $circle = document.querySelector('.circle');
var $body = document.querySelector('body');
function circleClick(event) {
  if (brightnessClick === true) {
    $body.className = 'light-background';
    $circle.className = 'circle light';
    brightnessClick = false;
  } else {
    $body.className = 'dark-background';
    $circle.className = 'circle dark';
    brightnessClick = true;
  }
}

$circle.addEventListener('click', circleClick);
