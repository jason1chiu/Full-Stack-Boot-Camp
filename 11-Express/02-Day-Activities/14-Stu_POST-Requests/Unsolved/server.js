const express = require('express');

const PORT = 3001;

const app = express();

// TODO: Create a GET method for `/api/reviews` that logs when a user's request has been received
// GET request
app.get('/api/reviews', (req, res) => {
  // Let the client know that their request was received
  res.json(`${req.method} request received`);

  // Show the user agent information in the terminal
  console.info(req.rawHeaders);

  // Log our request to the terminal
  console.info(`${req.method} request received`);
});


// TODO: Create a POST request for `/api/reviews` that logs when a user's request has been received
// POST request
app.post('/api/reviews', (req, res) => {
  // Let the client know that their POST request was received
  res.json(`${req.method} request received`);

  // Show the user agent information in the terminal
  console.info(req.rawHeaders);

  // Log our request to the terminal
  console.info(`${req.method} request received`);
});

// TODO: Create a GET request for `api/upvotes` that logs when a user's request has been received
app.get('/api/upvotes', (req, res) => {
  // Let the client know that their request was received
  res.json(`${req.method} request received`);

  // Show the user agent information in the terminal
  console.info(req.rawHeaders);

  // Log our request to the terminal
  console.info(`${req.method} request received`);
});

// TODO: Create a POST request for `api/upvotes` that logs when a user's request has been received
app.post('/api/upvotes', (req, res) => {
  // Let the client know that their POST request was received
  res.json(`${req.method} request received`);

  // Show the user agent information in the terminal
  console.info(req.rawHeaders);

  // Log our request to the terminal
  console.info(`${req.method} request received`);
});

app.listen(PORT, () =>
  console.log(`Express server listening on http://localhost:${PORT}!`)
);
