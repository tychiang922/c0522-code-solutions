var $taskList = document.querySelector('.task-list');

function click(event) {
  console.log('value of event.target: ', event.target);
  console.log('value of event.target.tagName: ', event.target.tagName);
  if (event.target && event.target.tagName === 'BUTTON') {
    var closest = event.target.closest('.task-list-item');
    console.log(closest);
    closest.remove();
  }
}

$taskList.addEventListener('click', click);
