var express = require('express');
var app = express();

app.get('/', function (req, resp) {
  resp.send('OK');
});

var lists = require('./routes/lists');
app.use('/lists', lists);

var todos = require('./routes/todos');
app.use('/lists/:list_id/todos', todos);

app.get('*', function(req, res){
  res.sendStatus(404);
});

module.exports = app;
