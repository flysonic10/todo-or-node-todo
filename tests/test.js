var request = require('supertest');
var app = require('../app');

describe('Requests to root', function () {
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

describe('Requests to lists', function () {
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
