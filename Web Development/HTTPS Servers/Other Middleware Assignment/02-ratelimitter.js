const express = require('express');
const app = express();

let numberOfRequestsForUser = {};

setInterval(() => {
  numberOfRequestsForUser = {};
}, 1000); // resets every 1 second

app.use((req, res, next) => {
  const userId = req.headers["user-id"];
  if (!userId) {
    return res.status(400).send("Missing user-id header");
  }

  if (!numberOfRequestsForUser[userId]) {
    numberOfRequestsForUser[userId] = 1;
  } else {
    numberOfRequestsForUser[userId]++;
  }

  if (numberOfRequestsForUser[userId] > 5) {
    return res.status(404).send("no entry");
  }

  next(); // allow the request to continue
});

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;
