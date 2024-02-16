const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON request body
app.use(bodyParser.json());

// Endpoint to handle POST requests to submit bracket data
app.post('/submit-bracket', (req, res) => {
  const bracketData = req.body;

  // Store the bracket data on the server-side
  fs.writeFile(path.join(__dirname, 'bracket.json'), JSON.stringify(bracketData), (err) => {
    if (err) {
      console.error('Error storing bracket data:', err);
      res.status(500).send('Error storing bracket data');
    } else {
      console.log('Bracket data stored successfully:', bracketData);
      res.status(200).send('Bracket data stored successfully');
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});