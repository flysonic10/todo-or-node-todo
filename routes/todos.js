var express = require('express');
var router = express.Router({mergeParams: true});
var List = require('../models/list');
var Todo = require('../models/todo');

var bodyParser = require('body-parser');
var urlencode = bodyParser.urlencoded({ extended: false });
var async = require('async');

router.route('/')
  .all(function(req, res, next) {
    next();
  })
  .get(function(req, res, next) {
    List.read(req.params.id, function (err, data) {
      if(err){ res.sendStatus(404); return; }

      var listTodos = [];
      async.each(data.todos, function (todo, callback) {
        Todo.read(todo, function (err, data) {
          if(err){ return next(err); }
          console.log(data);
          listTodos.push(data);
          callback();
        });
      }, function(err){
        if(err){ res.sendStatus(404); return; }
        res.status(200).json({todos: listTodos});
      });
    });
  })
  .put(function(req, res, next) {
    next(new Error('not implemented'));
  })
  .post(urlencode, function(req, res, next) {
    next(new Error('not implemented'));
  })
  .delete(function(req, res, next) {
    next(new Error('not implemented'));
  });

router.route('/:id')
  .all(function(req, res, next) {
    next();
  })
  .get(function(req, res, next) {
    console.log(req);
    // next(new Error('not implemented'));
  })
  .put(function(req, res, next) {
    next(new Error('not implemented'));
  })
  .post(urlencode, function(req, res, next) {
    next(new Error('not implemented'));
  })
  .delete(function(req, res, next) {
    next(new Error('not implemented'));
  });

module.exports = router;
