var express = require('express');
var router = express.Router();
var Todo = require('../models/todo');

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
    next(new Error('not implemented'));
  })
  .delete(function(req, res, next) {
    next(new Error('not implemented'));
  });

module.exports = router;
