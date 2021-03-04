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
    .then(result1 => {
      res.json(result1.rows);
    });
});

app.get('/api/results', (req, res) => {
  const sql = `
    select * from results
  `;

  db.query(sql)
    .then(result2 => {
      res.json(result2.rows);
    });
});

app.get('/api/users', (req, res) => {
  const sql = `
    select * from users
  `;

  db.query(sql)
    .then(result3 => {
      res.json(result3.rows);
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

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
