var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var lists = require('./routes/lists');
app.use('/api/lists', lists);

var todos = require('./routes/todos');
app.use('/api/lists/:list_id/todos', todos);

app.use('/*', function(req, res){
  res.sendfile(__dirname + '/public/index.html');
});

app.get('*', function(req, res){
  res.sendStatus(404);
});

module.exports = app;
