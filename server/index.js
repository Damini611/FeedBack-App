//https://stackoverflow.com/questions/46677752/the-difference-between-requirex-and-import-x/46677972
const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(5000);
