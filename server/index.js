const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));




const PORT = 3000;

app.listen(
  PORT,
  () => console.log(`listening on ${PORT}`)
);