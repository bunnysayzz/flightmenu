const express = require('express');
const cors = require('cors');
const path = require('path');
const mealsData = require('./data/mealsData.json');

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json()); // To parse JSON bodies

const sampleUser = {
    id: 1,
    username: 'azhar',
    email: 'azharsayzz@example.com',
    password: 'azhar@99' // In a real application, never store passwords in plain text
};

app.get('/api/meals', (req, res) => {
    res.json(mealsData);
});

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    if (email === sampleUser.email && password === sampleUser.password) {
        res.json({ id: sampleUser.id, username: sampleUser.username, email: sampleUser.email });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});