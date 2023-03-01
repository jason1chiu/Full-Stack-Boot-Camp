const express = require('express');
const path = require('path');
const fs = require('fs');
// Helper method for generating unique ids
const uuid = require('./helpers/uuid');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET request for reviews
app.get('/api/reviews', (req, res) => {
  // Read the reviews file and parse its contents as JSON
  fs.readFile('./db/reviews.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json('Error reading reviews file');
    } else {
      const reviews = data.trim().split('\n').map(JSON.parse);
      console.info(`${req.method} request received to get reviews`);
      res.json(reviews);
    }
  });
});

// POST request to add a review
app.post('/api/reviews', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to add a review`);

  // Destructuring assignment for the items in req.body
  const { product, review, username } = req.body;

  // If all the required properties are present
  if (product && review && username) {
    // Variable for the object we will save
    const newReview = {
      product,
      review,
      username,
      review_id: uuid(),
    };

    // Convert the new review object to a string
    const newReviewString = `${JSON.stringify(newReview)},\n`;
  
    // Append the new review string to the existing reviews file
    fs.appendFile('./db/reviews.json', newReviewString, (err) => {
      if (err) {
        console.error(err);
        res.status(500).json('Error writing review to file');
      } else {
        console.log(`Review for ${newReview.product} has been written to JSON file`);
        const response = {
          status: 'success',
          body: newReview,
        };
        console.log(response);
        res.status(201).json(response);
      }
    });
  } else {
    res.status(500).json('Error in posting review');
  }
});

/* // POST request to add a review
app.post('/api/reviews', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to add a review`);

  // Destructuring assignment for the items in req.body
  const { product, review, username } = req.body;

  // If all the required properties are present
  if (product && review && username) {
    // Variable for the object we will save
    const newReview = {
      product,
      review,
      username,
      review_id: uuid(),
    };

    // Convert the data to a string so we can save it
    const reviewString = JSON.stringify(newReview);

    // Write the string to a file
    fs.appendFile(`./db/reviews.json`, `${reviewString}\n`, (err) =>
      err
        ? console.error(err)
        : console.log(
            `Review for ${newReview.product} has been written to JSON file`
          )
    );

    const response = {
      status: 'success',
      body: newReview,
    };

    console.log(response);
    res.status(201).json(response);
  } else {
    res.status(500).json('Error in posting review');
  }
}); */

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
