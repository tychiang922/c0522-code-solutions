var $userList = document.querySelector('#user-list');
function getUserData() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log('value of xhr.status: ', xhr.status);
    console.log('value of xhr.response: ', xhr.response);
    for (var userIndex = 0; userIndex < xhr.response.length; userIndex++) {
      var $li = document.createElement('li');
      $li.textContent = xhr.response[userIndex].name;
      $userList.append($li);
    }
  });
  xhr.send();
}
getUserData();
