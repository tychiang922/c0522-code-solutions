var $circle = document.querySelectorAll('.circle');
var $images = document.querySelectorAll('.images');
var currentView = 1;

for (var cIndex = 0; cIndex < $circle.length; cIndex++) {
  $circle[cIndex].addEventListener('click', function circleClick(event) {
    var clickDataView = event.target.getAttribute('data-view');
    currentView = clickDataView;
    viewCheck();
  });
}

var $arrow = document.querySelectorAll('.arrow');
for (var arrowIndex = 0; arrowIndex < $arrow.length; arrowIndex++) {
  $arrow[arrowIndex].addEventListener('click', function arrowClick(event) {
    if (event.target.matches('.left')) {
      if (currentView === 1) {
        currentView = 5;
      } else {
        currentView--;
      }
    }
    if (event.target.matches('.right')) {
      if (currentView === 5) {
        currentView = 1;
      } else {
        currentView++;
      }
    }
    viewCheck();
  });
}

function viewCheck() {
  var currentViewString = currentView.toString();
  for (var imgIndex = 0; imgIndex < $images.length; imgIndex++) {
    var imgDataView = $images[imgIndex].getAttribute('data-view');
    if (imgDataView === currentViewString) {
      $images[imgIndex].setAttribute('class', 'images');
    } else {
      $images[imgIndex].setAttribute('class', 'images hidden');
    }
  }
  for (var circleIndex = 0; circleIndex < $circle.length; circleIndex++) {
    var circleDataView = $circle[circleIndex].getAttribute('data-view');
    if (circleDataView === currentViewString) {
      $circle[circleIndex].setAttribute('class', 'circle fa-solid fa-circle');
    } else {
      $circle[circleIndex].setAttribute('class', 'circle fa-solid fa-circle-notch');
    }
  }
}

function imgCarousel() {
  currentView++;
  if (currentView > 5) {
    currentView = 1;
  }
  viewCheck();
}

setInterval(imgCarousel, 3000);
