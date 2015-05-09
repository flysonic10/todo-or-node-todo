var express = require('express');
var router = express.Router();

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
  .post(function(req, res, next) {
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
    next(new Error('not implemented'));
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
