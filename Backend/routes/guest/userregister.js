var express = require('express');
var router = express.Router();
const db = require('../../database/db');

// Middleware to parse JSON request bodies
router.use(express.json());

router.post('/', async (req, res, next) => {
    // Retrieve the user input from the request body
    let username = req.body.username;
    let password = req.body.password;
    let role = req.body.role || 'user'; // Assuming a default role
    let status = 'approved';
    let login_id = '';

    try {
        // Query to check if the username already exists
        const fetchUsernameQuery = 'SELECT * FROM tbllogin WHERE username = ?';

        // Perform the query to check if the username already exists
        const usernameResult = await new Promise((resolve, reject) => {
            db.query(fetchUsernameQuery, [username], (err, result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });

        // If the username already exists, return an error response
        if (usernameResult.length > 0) {
            return res.status(409).send({ error: 'Username already exists' });
        }

        // Query to insert the new user into tbllogin
        const insertLoginQuery = 'INSERT INTO tbllogin (username, password, role, status) VALUES (?, ?, ?, ?)';
        await new Promise((resolve, reject) => {
            db.query(insertLoginQuery, [username, password, role, status], (err, result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });

        // Query to get the login_id after inserting the user
        const selectLoginQuery = 'SELECT login_id FROM tbllogin WHERE username = ?';
        const loginResult = await new Promise((resolve, reject) => {
            db.query(selectLoginQuery, [username], (err, result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });

        // Extract login_id from the result
        login_id = loginResult[0].login_id;

        // Return success response
        return res.status(201).send({ message: 'User created successfully' });

    } catch (err) {
        // General error handling
        console.error(err);
        return res.status(500).send({ error: 'Internal Server Error', details: err.message });
    }
});

module.exports = router;
