const express = require('express');
require('dotenv').config();
const routes = require('./routes');
const app = express();
const port = 3000;


app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(routes);

app.listen(port, () => {
  console.log(`${port}`)
})