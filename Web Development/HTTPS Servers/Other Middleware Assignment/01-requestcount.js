const express = require('express');

const app = express();
let requestCount = 0;

app.use(function(req, res, next) {
  requestCount++;
  next();
});

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount', function(req, res) {
  res.status(200).json({ requestCount });
});

// Export app and reset function for tests
module.exports = { app, resetCount: () => requestCount = 0 };

// If this file is run directly, start the server
if (require.main === module) {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
}
