const express = require('express');
const cors = require('cors');
const path = require('path');
const mealsData = require('./data/mealsData.json');

const app = express();
const PORT = 5001;

app.use(cors());

app.get('/api/meals', (req, res) => {
    res.json(mealsData);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});