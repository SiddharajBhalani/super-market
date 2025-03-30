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
        // console.log("result", result);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.post('/login', async (req, res) => {
    console.log("req", req.body);
    const {email, password} = req.body;
    // console.log("params", email, password);
    try {
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        // console.log("result", result);
        const user = result.rows[0];
        // console.log("user", user);

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

// Signup API
app.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;
    console.log(name, email, password)

    try {
        // Check if email already exists
        const existingUser = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (existingUser.rows.length > 0) {
            return res.status(400).json({ message: "Email already registered" });
        }

        // Insert new user into the database
        const result = await pool.query(
            "INSERT INTO users (name, email, password, created_at) VALUES ($1, $2, $3, NOW()) RETURNING *",
            [name, email, password]
        );
        console.log("result", result);

        res.status(201).json({ message: "User registered successfully", user: result.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

// call api for create order
app.post("/create-order", async (req, res) => {
    const {
        name,
        email,
        address,
        city,
        postalCode,
        phone,
    } = req.body;
    console.log(name, email, address, city, postalCode, phone)

    try {
        // Insert order into the database
        const result = await pool.query(
            `INSERT INTO orders 
            (name, email, address, city, postalCode, phone, created_at) 
            VALUES ($1, $2, $3, $4, $5, $6, NOW()) RETURNING *`,
            [
                name,
                email,
                address,
                city,
                postalCode,
                phone,
            ]
        );

        console.log("Order created:", result.rows[0]);

        res.status(201).json({ message: "Order placed successfully", order: result.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});


// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
