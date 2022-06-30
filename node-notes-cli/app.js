const fs = require('fs');
fs.readFile('data.json', 'utf-8', (err, txt) => {
  if (err) throw err;
  const txtParsed = JSON.parse(txt);
  if (process.argv[2] === 'read') {
    for (const key in txtParsed.notes) {
      console.log(`${key}: ${txtParsed.notes[key]}`);
    }
  }
  if (process.argv[2] === 'create') {
    txtParsed.notes[txtParsed.nextId] = process.argv[3];
    txtParsed.nextId++;
    const txtParsedJSON = JSON.stringify(txtParsed, null, 2);
    fs.writeFile('data.json', txtParsedJSON, err => {
      if (err) throw err;
    });
  }
  if (process.argv[2] === 'delete') {
    delete txtParsed.notes[process.argv[3]];
    const txtParsedJSON = JSON.stringify(txtParsed, null, 2);
    fs.writeFile('data.json', txtParsedJSON, err => {
      if (err) throw err;
    });
  }
  if (process.argv[2] === 'update') {
    txtParsed.notes[process.argv[3]] = process.argv[4];
    const txtParsedJSON = JSON.stringify(txtParsed, null, 2);
    fs.writeFile('data.json', txtParsedJSON, err => {
      if (err) throw err;
    });
  }
});
