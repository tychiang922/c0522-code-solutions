/* exported getStudentNames */
function getStudentNames(students) {
  var nameArray = [];
  for (var studentsIndex = 0; studentsIndex < students.length; studentsIndex++) {
    nameArray.push(students[studentsIndex].name);
  }
  return nameArray;
}
