var bookList = [
  {
    isbn: '12345-123',
    title: 'Harry Potter',
    author: 'J.K. Rowling'
  },
  {
    isbn: '12345-124',
    title: 'Star Wars',
    author: 'George Lucas'
  },
  {
    isbn: '12345=125',
    title: 'Title',
    author: 'Author'
  }
];
console.log('value of bookList: ', bookList);
console.log('value of typeof bookList: ', typeof bookList);

JSON.stringify(bookList);
console.log('value of JSON.stringify(bookList): ', bookList);
console.log('value of typeof JSON.stringify(bookList): ', typeof bookList);

var student = '{"id": 961736, "name": "Tim Chiang"}';
console.log('value of student: ', student);
console.log('value of typeof student: ', typeof student);
var parsedStudent = JSON.parse(student);
console.log('value of JSON.parse(student): ', parsedStudent);
console.log('value of typeof JSON.parse(student): ', typeof parsedStudent);
