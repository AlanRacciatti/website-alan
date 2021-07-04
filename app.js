const { resolveSoa } = require('dns');
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, './public')));

app.use(express.static(path.join(__dirname, './views')));

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening port 3000');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './views/home.html'));
});