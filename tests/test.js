var request = require('supertest');
var app = require('../app');

describe('GET /', function () {
  it('Should return a 200 status', function (done) {
    request(app)
      .get('/')
      .expect(200)
      .end(function (error) {
        if(error) throw error;
        done();
      });
  });
});

describe('lists', function () {
  describe('GET /lists', function () {
    it('Should return a 200 status', function (done) {
      request(app)
        .get('/')
        .expect(200)
        .end(function (error) {
          if(error) throw error;
          done();
        });
    });
  });
  describe('POST /lists', function () {
    it('Should return id', function (done) {
      request(app)
        .post('/lists')
        .send('name=A New List')
        .expect(/id/i, done);
    });
  });
});


describe('todos', function () {
  var list1;
  var todo1;

  before(function (done) {
    request(app)
      .post('/lists')
      .send('name=A New List')
      .end(function (err, res) {
        list1 = res.body.id;
        done();
      });
  });

  before(function (done) {
    request(app)
      .post('/lists/'+list1+'/todos')
      .send('name=New Todo&listID='+list1)
      .end(function (err, res) {
        todo1 = res.body.id;
        done();
      });
  });

  after(function (done) {
    request(app)
      .delete('/lists/'+list1+'/todos'+todo1)
      .end(function (err, res) {
        done();
      });
  });

  describe('GET /lists/:id/todos', function () {


    it('Should return todos', function (done) {
      request(app)
        .get('/lists/'+list1+'/todos')
        .expect(200)
        .expect(/todos/i)
        .expect(/name/i)
        .expect(/listID/i)
        .end(function (err, res) {
          if(err) throw err;
          done();
        });
    });
  });

  describe('POST /lists/:id/todos', function () {
    it('Should return id', function (done) {
      request(app)
        .post('/lists/'+list1+'/todos')
        .send('name=New Todo&listID='+list1)
        .expect(/id/i, done);
    });
  });

  describe('PUT /lists/:id/todos/:id', function () {
    it('Should return a 200 status');
  });

  describe('DELETE /lists/:id/todos/:id', function () {
    it('Should return a 204 status', function (done) {
      request(app)
      .delete('/lists/'+list1+'/todos/'+todo1)
      .expect(204)
      .end(function (err, res) {
        done();
      });
    });

  });
});
