//https://stackoverflow.com/questions/46677752/the-difference-between-requirex-and-import-x/46677972
const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello World this is the first Express App!'));

app.listen(5000);