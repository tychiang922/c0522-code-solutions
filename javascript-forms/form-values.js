var $contactForm = document.querySelector('#contact-form');
var userData = {};
function submit(event) {
  event.preventDefault();
  userData = {
    name: $contactForm.elements.name.value, email: $contactForm.elements.email.value, message: $contactForm.elements.message.value
  };
  console.log('value of userData: ', userData);
}

$contactForm.addEventListener('submit', submit);
