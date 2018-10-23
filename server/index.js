const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const mma = require('mma');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/api/fighter/:name', (req, res) => {

  mma.fighter(req.params.name, function(data) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data));
  });


});

app.listen(process.env.PORT || 3001, () =>
  console.log('Express server is running on localhost:3001')
);
