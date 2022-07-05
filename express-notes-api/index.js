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
    res.status(200).send(notesArray);
  });
  app.get('/api/notes/:id', (req, res) => {
    const id = req.params.id;
    const idString = (req.params.id).toString();
    if (id <= 0) {
      const errorMsg = {
        error: 'id must be a postive integer'
      };
      res.status(400).send(errorMsg);
    } else if (txtParsed.notes[idString] === undefined) {
      const errorMissingMsg = {
        error: `cannot find note with id ${id}`
      };
      res.status(404).send(errorMissingMsg);
    }
    const notesSpecific = txtParsed.notes[id];
    res.status(200).send(notesSpecific);
  });
});
