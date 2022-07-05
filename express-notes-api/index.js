const fs = require('fs');
const express = require('express');
const app = express();
const errorMsg = {
  error: 'id must be a postive integer'
};
const errorUnexpected = {
  error: 'An unexpected error occurred.'
};
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

  app.use(express.json());
  app.post('/api/notes', (req, res) => {
    if (Object.keys(req.body).length === 0) {
      const errorMsgEmpty = {
        error: 'content is a required field'
      };
      res.status(400).send(errorMsgEmpty);
    } else {
      req.body.id = txtParsed.nextId;
      txtParsed.notes[txtParsed.nextId] = req.body;
      txtParsed.nextId++;
      const txtParsedJSON = JSON.stringify(txtParsed, null, 2);
      fs.writeFile('data.json', txtParsedJSON, err => {
        if (err) {
          console.error(err);
          res.status(500).send(errorUnexpected);
        } else {
          res.status(201).send(req.body);
        }
      });
    }
  });
  app.delete('/api/notes/:id', (req, res) => {
    const id = req.params.id;
    if (req.params.id < 0) {
      res.status(400).send(errorMsg);
    } else if (txtParsed.notes[id] === undefined) {
      const errorMissingMsg = {
        error: `cannot find note with id ${id}`
      };
      res.status(404).send(errorMissingMsg);
    }
    delete txtParsed.notes[req.params.id];
    const txtParsedJSON = JSON.stringify(txtParsed, null, 2);
    fs.writeFile('data.json', txtParsedJSON, err => {
      if (err) {
        console.error(err);
        res.status(500).send(errorUnexpected);
      } else {
        res.sendStatus(204);
      }
    });
  });
});
