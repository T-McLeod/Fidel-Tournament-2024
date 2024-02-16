// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.post('/api/postData', (req, res) => {
  // Handle POST request data here
  console.log(req.body);
  res.send('Data received successfully!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});