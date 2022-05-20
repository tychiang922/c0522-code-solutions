/* exported getStudentNames */
function getStudentNames(students) {
  var nameArray = [];
  for (var studentsIndex = 0; studentsIndex < students.length; studentsIndex++) {
    for (var name in students[studentsIndex]) {
      nameArray.push(students[studentsIndex][name]);
    }
  }
  return nameArray;
}
