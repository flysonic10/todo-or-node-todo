var express = require('express');
var app = express();

app.get('/', function (req, resp) {
  resp.send('OK');
});

var lists = require('./routes/lists');
app.use('/lists', lists);

module.exports = app;
