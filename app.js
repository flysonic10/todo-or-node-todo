var express = require('express');
var app = express();


/**
 * Web App Routes
 */
app.use(express.static(__dirname + '/public'));

app.get('/lists', function (req, res) {
  res.redirect('/');
});

/**
 * API Routes
 */
var lists = require('./routes/lists');
app.use('/api/lists', lists);

var todos = require('./routes/todos');
app.use('/api/lists/:list_id/todos', todos);

/**
 * Catch-all Route
 */
app.get('*', function(req, res){
  res.sendStatus(404);
});

module.exports = app;
