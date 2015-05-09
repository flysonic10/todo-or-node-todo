var express = require('express');
var app = express();

app.get('/', function (req, resp) {
  resp.send('OK');
});

module.exports = app;
