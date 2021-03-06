var express = require('express');
var router = express.Router();
var List = require('../models/list');

var bodyParser = require('body-parser');
var urlencode = bodyParser.urlencoded({ extended: false });

router.route('/')
  .get(function (req, res, next) {
    List.all(function (err, data) {
      if(err){ res.sendStatus(404); return; }
      res.status(200).json(data);
    });
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
  .get(function(req, res, next) {
    List.read(req.params.id, function (err, data) {
      if(err){ res.sendStatus(404); return; }
      res.status(200).json(data);
    });
  })

  .put(function(req, res, next) {
    next(new Error('not implemented'));
  })

  .delete(function(req, res, next) {
    List.delete(req.params.id, function (err, data) {
      if(err){ res.sendStatus(404); return; }
      res.sendStatus(204);
    });
  });

module.exports = router;
