const fs = require('fs');
const express = require('express');
const app = express();

app.listen(3000, () => {
});

fs.readFile('data.json', 'utf-8', (err, txt) => {
  if (err) throw err;
  const txtParsed = JSON.parse(txt);
  const notesArray = [];
  for (const key in txtParsed.notes) {
    notesArray.push(txtParsed.notes[key]);
  }
  app.get('/api/notes', (req, res) => {
    res.json(notesArray);
  });
});
