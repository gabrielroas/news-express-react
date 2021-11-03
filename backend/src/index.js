const express = require('express');
const routes = require('./routes');
const cors = require('cors');
require('./database');

const app = express();
const port = 3333;

app.use(express.json({limit: '50mb'})); // FOR UNLIMITED TEXT
app.use(express.urlencoded({limit: '50mb'})); 

app.use(cors())

app.use(routes);

const listener = app.listen(port, function(){
  console.log('Listening on port ' + listener.address().port);
});