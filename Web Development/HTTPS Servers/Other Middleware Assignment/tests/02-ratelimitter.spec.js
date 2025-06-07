const app = require("../02-ratelimitter");
const request = require('supertest');

describe('GET /user', function () {
  const userId = 'testId';

  it('One request responds back correctly', function(done) {
    request(app)
      .get('/user')
      .set('user-id', userId)
      .then((response) => {
        expect(response.status).toBe(200);
        done();
      })
      .catch(done);
  });

  it('5 or more requests return back a 404', function(done) {
    const promises = [];
    for (let i = 0; i < 5; i++) {
      promises.push(request(app).get('/user').set('user-id', userId));
    }

    Promise.all(promises)
      .then(() => {
        return request(app)
          .get('/user')
          .set('user-id', userId);
      })
      .then((response) => {
        expect(response.status).toBe(404);
        done();
      })
      .catch(done);
  });

  it('5 or more requests and waiting returns a 200', function(done) {
    const promises = [];
    for (let i = 0; i < 5; i++) {
      promises.push(request(app).get('/user').set('user-id', userId));
    }

    Promise.all(promises)
      .then(() => {
        setTimeout(() => {
          request(app)
            .get('/user')
            .set('user-id', userId)
            .then((response) => {
              expect(response.status).toBe(200);
              done();
            })
            .catch(done);
        }, 2000);
      });
  });
});
