const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Chainy API is running!');
});

app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello from Chainy API!' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
