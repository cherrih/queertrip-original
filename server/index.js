const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/cities', (req, res) => {
  db.find((err, result) => {
    if (err) {
      res.status(404).end();
    } else {
      res.send(result);
    }
  });
});

app.listen(3000, () => {
  console.log('listening on port 3000!');
});
