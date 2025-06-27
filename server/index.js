const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors()); // Allow requests from React dev server
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
