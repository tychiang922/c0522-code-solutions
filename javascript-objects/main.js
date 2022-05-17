var student = {
  firstName: 'Tim',
  lastName: 'Chiang',
  age: 24
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Research Assistant';
console.log('value of student livesInIrvine: ', student.livesInIrvine);
console.log('value of student previousOccupation: ', student.previousOccupation);
console.log('value of student', student);

var vehicle = {
  make: 'Honda',
  model: 'Pilot',
  year: '2004'
};
vehicle['color'] = 'silver';
vehicle['isConvertible'] = false;
console.log('value of vehicle color: ', vehicle['color']);
console.log('value of vehicle isConvertible: ', vehicle['isConvertible']);
console.log('value of vehicle', vehicle);

var pet = {
  name: 'Kumi',
  type: 'Formosan Mountain Dog'
};
delete pet.name;
delete pet.type;
console.log('value of pet', pet);
