var express = require('express');
var router = express.Router();
var List = require('../models/list');

var bodyParser = require('body-parser');
var urlencode = bodyParser.urlencoded({ extended: false });

router.route('/')
  .all(function(req, res, next) {
    next();
  })
  .get(function(req, res, next) {
    next(new Error('not implemented'));
  })
  .put(function(req, res, next) {
    next(new Error('not implemented'));
  })
  .post(urlencode, function(req, res, next) {
    var newList = req.body;
    List.create(newList.name, newList.todos, function (err, data) {
      if(err){ res.sendStatus(404); return; }
      res.status(201).json({id: data});
    });
  })
  .delete(function(req, res, next) {
    next(new Error('not implemented'));
  });

router.route('/:id')
  .all(function(req, res, next) {
    next();
  })
  .get(function(req, res, next) {
    List.read(req.params.id, function (err, data) {
      if(err){ res.sendStatus(404); return; }
      res.status(200).json(data);
    });
  })
  .put(function(req, res, next) {
    next(new Error('not implemented'));
  })
  .post(function(req, res, next) {
    next(new Error('not implemented'));
  })
  .delete(function(req, res, next) {
    next(new Error('not implemented'));
  });

module.exports = router;
