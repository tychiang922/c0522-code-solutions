const express = require('express');
const app = express();
const grades = {};
let nextId = 1;
app.listen(3000, () => {
});
app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const key in grades) {
    gradesArray.push(grades[key]);
  }
  res.json(gradesArray);
});

app.use(express.json());
app.post('/api/grades', (req, res) => {
  grades[nextId] = req.body;
  grades[nextId].id = nextId;
  nextId++;
  res.status(201).send(req.body);
});
