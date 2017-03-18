/* eslint no-console: 0 */
const path = require('path');
const express = require('express');
const compress = require('compression');
const stream = require('./server/stream.js');

const port = process.env.PORT || 3001;
const app = express();

console.log('==> ⚪️ Production Mode set');
app.use(compress());

// serve static files
app.use('/dist', express.static('dist'));
app.use('/assets', express.static('assets'));

// serve index.html for all requests
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/noise', (req, res) => {
  console.log('getting noise...', req.query);
  const { width, height, options } = req.query;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(stream.getNoise({ width, height, options })));
});

app.listen(port, err => {
  if (err) {
    console.error('==> 🔴 ', err);
  }
  console.info('==> ✅ Listening on port ', port);
});
