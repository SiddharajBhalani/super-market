const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL connection
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'my_react_project',
    password: 'postgreSQL',
    port: 5432,
});

// Test route
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// API route to fetch data
app.get('/data', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users'); // Replace with your table name
        res.json(result.rows);
        console.log("result", result);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.get('/login', async (req, res) => {
    const {email, password} = req.body;

    try {
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        const user = result.rows[0];

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (user.password !== password) { // For simplicity, but hash passwords in production!
            return res.status(401).json({ message: 'Invalid password' });
        }

        res.json({ message: 'Login successful', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
