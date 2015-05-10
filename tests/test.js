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

  describe('POST /lists', function () {
    it('Should return id', function (done) {
      request(app)
        .post('/lists')
        .send('name=A New List')
        .expect(/id/i, done);
    });

  });
});
