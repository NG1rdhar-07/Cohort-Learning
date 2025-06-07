const { app, resetCount } = require("../01-requestcount");
const request = require('supertest');

describe('GET /user request count tests', function() {
  beforeEach(() => {
    resetCount(); // reset counter before each test
  });

  it('One request responds with 1', function(done) {
    request(app)
      .get('/requestCount')
      .then(response => {
        expect(response.body.requestCount).toBe(1); // 1 request to /requestCount itself
        done();
      })
      .catch(done);
  });

  it('10 more requests log 11', function(done) {
    const promises = [];
    for (let i = 0; i < 10; i++) {
      promises.push(request(app).get('/user'));
    }

    Promise.all(promises)
      .then(() => request(app).get('/requestCount'))
      .then(response => {
        expect(response.body.requestCount).toBe(11); // 10 user + 1 requestCount
        done();
      })
      .catch(done);
  });
});
