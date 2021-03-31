require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const { Pool } = require('pg');
const ClientError = require('./client-error'); // eslint-disable-line

const db = new Pool({
  connectionString: process.env.DATABASE_URL
});

const app = express();

app.use(express.json());

app.use(staticMiddleware);

app.get('/api/bodyparts', (req, res) => {
  const sql = `
    select * from bodyparts
  `;

  db.query(sql)
    .then(result => {
      res.json(result.rows);
    });
});

app.get('/api/symptoms', (req, res) => {
  const sql = `
    select * from symptoms
  `;

  db.query(sql)
    .then(result => {
      res.json(result.rows);
    });
});

app.get('/api/results', (req, res) => {
  const sql = `
    select * from results
  `;

  db.query(sql)
    .then(result => {
      res.json(result.rows);
    });
});

app.get('/api/users', (req, res) => {
  const sql = `
    select * from users
  `;

  db.query(sql)
    .then(result => {
      res.json(result.rows);
    });
});

// Create profile
app.post('/api/users', (req, res, next) => {
  const { firstName, lastName, email, password, gender, dateOfBirth, city, zipCode, height, weight } = req.body.user;

  if (!firstName || !lastName || !email || !password || !gender || !dateOfBirth || !city || !zipCode || !height || !weight) {
    return res.status(400).json({
      error: 'There is a field that is missing.'
    });
  }

  const values = [firstName, lastName, email, password, gender, dateOfBirth, city, zipCode, height, weight];

  const sql = `
    insert into "users" ("firstName", "lastName", "email", "password", "gender", "dateOfBirth", "city", "zipCode", "height", "weight")
    values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    returning *;
    `;

  db.query(sql, values)
    .then(result => {
      const info = result.rows[0];
      res.status(201).send(info);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

// Login

app.post('/api/login', function (req, res, next) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      error: 'Email and Password are required.'
    });
  }

  const param = [email, password];

  const sql = `
        select "email", "password"
          from "users"
          where "email" = ($1)
          and "password" = ($2)
      `;

  db.query(sql, param)
    .then(result => {
      const user = result.rows;
      if (!user.length) {
        return res.status(400).json({
          error: 'Invalid login.'
        });
      } else {
        return res.status(200).json({
          message: 'You have entered a valid Email and Password.'
        });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

// symptoms from head/neck
app.post('/api/symptoms/headneck/', (req, res, next) => {
  const { params } = req.body;
  const sql = `
    select "symptomId",
           "bodyPartId",
           "symptomname"
          from "symptoms"
          where "bodyPartId" = 1
  `;

  db.query(sql, params)
    .then(result => {
      res.json(result.rows);
    });
});

// symptoms from shoulders/arms/hands
app.post('/api/symptoms/shouldersarmshands', (req, res, next) => {
  const { params } = req.body;
  const sql = `
    select "symptomId",
           "bodyPartId",
           "symptomname"
          from "symptoms"
          where "bodyPartId" = 2
  `;

  db.query(sql, params)
    .then(result => {
      res.json(result.rows);
    });
});

// symptoms from chest
app.post('/api/symptoms/chest', (req, res, next) => {
  const { params } = req.body;
  const sql = `
    select "symptomId",
           "bodyPartId",
           "symptomname"
          from "symptoms"
          where "bodyPartId" = 3
  `;

  db.query(sql, params)
    .then(result => {
      res.json(result.rows);
    });
});

// symptoms from abdomen
app.post('/api/symptoms/abdomen', (req, res, next) => {
  const { params } = req.body;
  const sql = `
    select "symptomId",
           "bodyPartId",
           "symptomname"
          from "symptoms"
          where "bodyPartId" = 4
  `;

  db.query(sql, params)
    .then(result => {
      res.json(result.rows);
    });
});

// symptoms from legs/feet
app.post('/api/symptoms/legsfeet', (req, res, next) => {
  const { params } = req.body;
  const sql = `
    select "symptomId",
           "bodyPartId",
           "symptomname"
          from "symptoms"
          where "bodyPartId" = 5
  `;

  db.query(sql, params)
    .then(result => {
      res.json(result.rows);
    });
});

// diagnosis from head/neck
app.post('/api/diagnosis/headneckdiagnosis', (req, res, next) => {
  const { symptomId } = req.body;
  const sql = `
    select "diagnosisId",
           "symptomId",
           "diagnosisname"
          from "diagnosis"
          where "symptomId" = ($1)
  `;

  const params = [symptomId];
  db.query(sql, params)
    .then(result => {
      res.json(result.rows);
    });
});

// diagnosis shoulders/arms/hands
app.post('/api/diagnosis/shouldersarmshandsdiagnosis', (req, res, next) => {
  const { symptomId } = req.body;
  const sql = `
    select "diagnosisId",
           "symptomId",
           "diagnosisname"
          from "diagnosis"
          where "symptomId" = ($1)
  `;

  const params = [symptomId];
  db.query(sql, params)
    .then(result => {
      res.json(result.rows);
    });
});

// diagnosis chest
app.post('/api/diagnosis/chestdiagnosis', (req, res, next) => {
  const { symptomId } = req.body;
  const sql = `
    select "diagnosisId",
           "symptomId",
           "diagnosisname"
          from diagnosis
          where "symptomId" = ($1)
  `;

  const params = [symptomId];
  db.query(sql, params)
    .then(result => {
      res.json(result.rows);
    });
});

// diagnosis abdomen
app.post('/api/diagnosis/abdomendiagnosis', (req, res, next) => {
  const { symptomId } = req.body;
  const sql = `
    select "diagnosisId",
           "symptomId",
           "diagnosisname"
          from diagnosis
          where "symptomId" = ($1)
  `;

  const params = [symptomId];
  db.query(sql, params)
    .then(result => {
      res.json(result.rows);
    });
});

// diagnosis legs/feet
app.post('/api/diagnosis/legsfeetdiagnosis', (req, res, next) => {
  const { symptomId } = req.body;
  const sql = `
    select "diagnosisId",
           "symptomId",
           "diagnosisname"
          from diagnosis
          where "symptomId" = ($1)
  `;

  const params = [symptomId];
  db.query(sql, params)
    .then(result => {
      res.json(result.rows);
    });
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
