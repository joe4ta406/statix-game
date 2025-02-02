require('dotenv').config();

// server.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Simple route to test the server
app.get('/ping', (req, res) => {
  res.send('Pong!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
