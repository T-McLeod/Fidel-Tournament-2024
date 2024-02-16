const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// POST endpoint to handle submitted brackets
app.post('/submit-bracket', (req, res) => {
  const bracketData = req.body;
  console.log('Received bracket data:', bracketData);
  // Here you can process the received bracket data, such as storing it in a database
  // For demonstration, we'll just send back a success message
  res.status(200).send('Bracket submitted successfully!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});