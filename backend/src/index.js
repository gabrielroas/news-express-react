const express = require('express');
const routes = require('./routes');
const cors = require('cors');
require('./database');

const app = express();

app.use(express.json({limit: '50mb'})); // FOR UNLIMITED TEXT
app.use(express.urlencoded({limit: '50mb'})); 
app.use(cors())
app.use(routes);

app.listen(3333);
