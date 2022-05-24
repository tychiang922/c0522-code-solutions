var brightnessClick = 0;
var $circle = document.querySelector('.circle');
var $body = document.querySelector('body');
function circleClick(event) {
  brightnessClick++;
  if (brightnessClick % 2 === 0) {
    $body.className = 'light-background';
    $circle.className = 'circle light';
  } else {
    $body.className = 'dark-background';
    $circle.className = 'circle dark';
  }
}

$circle.addEventListener('click', circleClick);
