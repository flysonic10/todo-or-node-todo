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
  describe('GET /lists/:id/todos', function () {
    it('Should return todos');
  });

  describe('POST /lists/:id/todos', function () {
    before(function (done) {
      request(app)
        .post('/lists')
        .send('name=A New List')
        .expect(/id/i)
        .end(function (err, res) {
          list1 = res.id;
          done();
        });
    });
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
    it('Should return a 200 status');
  });
});
