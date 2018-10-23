const express = require('express');
const path = require('path');
const mma = require('mma');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, '..', 'build/')));

app.get('/api/fighter/:name', (req, res) => {

  mma.fighter(req.params.name, function(data) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data));
  });

});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Check out the app at http://localhost:${PORT}`);
});
