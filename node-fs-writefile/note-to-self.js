const fs = require('fs');

fs.writeFile('note.txt', process.argv[2] + '\n', 'utf-8', err => {
  if (err) throw err;
});
