const express = require('express');
const routes = require('./routes');
const cors = require('cors');
require('./database');

const app = express();

const hostname = '127.0.0.1';
const port = 3333;

app.use(express.json({limit: '50mb'})); // FOR UNLIMITED TEXT
app.use(express.urlencoded({limit: '50mb'})); 

app.use(cors())

app.use(routes);
app.listen(port, hostname, () => {
    console.log(`🏁 Server running at http://${hostname}:${port}/`);
  });