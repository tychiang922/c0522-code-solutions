const fs = require('fs');
const random = Math.random().toString() + '\n';
fs.writeFile('random.txt', random, err => {
  if (err) throw err;
});
