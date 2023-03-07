const express = require('express');
// Helper function to sort our data in ascending and descending order
const { sortData } = require('./sortData.js');
const termData = require('./terms.json');

const PORT = 3001;

const app = express();

// Helper function to sort termData by term and relevance in ascending or descending order
const sortHelper = (type) =>
  termData.sort(sortData('term', 'relevance', `${type}`));

// Route to get all terms, with optional sorting by term or relevance
app.get('/api/terms/', (req, res) => {
  // req.query is an object containing the query parameters sent in the request URL, such as /api/terms?sort=asc
  const hasQuery = Object.keys(req.query).length > 0;

  if (hasQuery && req.query.sort === 'dsc') {
    // Return termData sorted by term and relevance in descending order
    return res.json(sortHelper('dsc'));
  }

  if (hasQuery && req.query.sort === 'asc') {
    // Return termData sorted by term and relevance in ascending order
    return res.json(sortHelper('asc'));
  }

  // If there is no query parameter, return all terms in termData
  return res.json(termData);
});

// Route to get a single term by its name
app.get('/api/term/:term', (req, res) => {
  // req.params is an object containing route parameters, such as :term in the URL /api/term/:term
  // In this instance, req.params.term contains the requested term name in lowercase
  const requestedTerm = req.params.term.toLowerCase();

  for (let i = 0; i < termData.length; i++) {
    if (requestedTerm === termData[i].term.toLowerCase()) {
      // Return the first term object that matches the requested term name
      return res.json(termData[i]);
    }
  }

  // Return a message if the requested term name does not exist in termData
  return res.json('No term found');
});

// Route to get all terms in a specific category
app.get('/api/terms/:category', (req, res) => {
  // In this instance, req.params.category contains the requested category name in lowercase
  const requestedCategory = req.params.category.toLowerCase();
  const result = [];

  for (let i = 0; i < termData.length; i++) {
    const currentTermCategory = termData[i].category;
    if (requestedCategory === currentTermCategory) {
      // Add all term objects that match the requested category to the result array
      result.push(termData[i]);
    }
  }
  return res.json(result);
});

// Route to get a list of all categories represented in termData
app.get('/api/categories', (req, res) => {
  // Create an array of all category names in termData
  const categories = termData.map((term) => term.category);

  // Filter out duplicate category names
  const result = categories.filter((cat, i) => categories.indexOf(cat) === i);

  // Return the array of unique category names
  return res.json(result);
});

app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT} 🚀`)
);