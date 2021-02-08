require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const { Pool } = require('pg');

const db = new Pool({
  connectionString: process.env.DATABASE_URL
});

const app = express();

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

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
