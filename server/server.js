const express = require('express');
const cors = require('cors');
const path = require('path');
const mealsData = require('./data/mealsData.json');
const swaggerSetup = require('./swagger');

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

/**
 * @swagger
 * components:
 *   schemas:
 *     Meal:
 *       type: object
 *       required:
 *         - title
 *         - price
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the meal
 *         title:
 *           type: string
 *           description: The title of the meal
 *         price:
 *           type: number
 *           description: The price of the meal
 *       example:
 *         id: 1
 *         title: Sample Meal
 *         price: 20
 */

/**
 * @swagger
 * tags:
 *   name: Meals
 *   description: The meals managing API
 */

/**
 * @swagger
 * /api/meals:
 *   get:
 *     summary: Returns the list of all the meals
 *     tags: [Meals]
 *     responses:
 *       200:
 *         description: The list of the meals
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Meal'
 */
app.get('/api/meals', (req, res) => {
    res.json(mealsData);
});

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Logs in a user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 username:
 *                   type: string
 *                 email:
 *                   type: string
 *       401:
 *         description: Invalid email or password
 */
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    if (email === sampleUser.email && password === sampleUser.password) {
        res.json({ id: sampleUser.id, username: sampleUser.username, email: sampleUser.email });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
});

// Setup Swagger
swaggerSetup(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});