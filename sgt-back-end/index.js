const express = require('express');
const app = express();
const pg = require('pg');
const keys = ['name', 'course', 'score'];
function keyCheck(gradeEntry) {
  for (let keyIndex = 0; keyIndex < keys.length; keyIndex++) {
    if (gradeEntry[keys[keyIndex]] === undefined) {
      return true;
    }
  }
  return false;
}

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.listen(3000, () => {
});

app.get('/api/grades', (req, res, next) => {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      res.status(200).send(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.use(express.json());
app.post('/api/grades', (req, res, next) => {
  const gradeEntry = req.body;
  if (keyCheck(gradeEntry)) {
    res.status(400).json({
      error: 'missing key'
    });
    return;
  } else if (!Number.isInteger(gradeEntry.score) || gradeEntry < 0 || gradeEntry > 100) {
    res.status(400).json({
      error: 'invalid score'
    });
    return;
  }
  const sql = `
    insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
    returning *;
  `;
  const params = [gradeEntry.name, gradeEntry.course, gradeEntry.score];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      res.status(201).send(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  const gradeEntry = req.body;
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  } else if (keyCheck(gradeEntry)) {
    res.status(400).send({
      error: 'invalid key'
    });
  } else if (!Number.isInteger(gradeEntry.score) || gradeEntry < 0 || gradeEntry > 100) {
    res.status(400).json({
      error: 'invalid score'
    });
    return;
  }
  const sql = `
    update "grades"
    set "name" = $1,
        "course" = $2,
        "score" = $3
    where "gradeId" = $4
    returning *;
  `;
  const params = [gradeEntry.name, gradeEntry.course, gradeEntry.score, gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.status(200).send(grade);
      }

    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).send({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const sql = `
       delete from "grades"
        where "gradeId" = $1
    returning *;
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).send({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.status(204).send(grade);
      }
    });
});
