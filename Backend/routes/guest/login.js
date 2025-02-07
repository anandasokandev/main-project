var express = require('express');
var router = express.Router();
const db = require('../../database/db');

// Middleware to parse JSON request bodies
router.use(express.json());

router.post('/', async (req, res, next) => {
    // Retrieve the user input from the request body
    let username = req.body.username;
    let password = req.body.password;

    // Check if both username and password are provided
    if (!username || !password) {
        return res.status(400).send({ error: 'Missing required fields' });
    }

    try {
        // Query to select login_id and password from tbllogin
        const selectLoginQuery = 'SELECT * FROM tbllogin WHERE username = ? AND password = ?';

        // Execute the query to find the user in the database
        db.query(selectLoginQuery, [username, password], (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send({ error: 'Internal Server Error' });
            }

            // If no user is found, return an error
            if (result.length === 0) {
                return res.status(401).send({ error: 'Invalid username or password' });
            }

            return res.json(result);
        });
        
    } catch (err) {
        
        console.error(err);
        return res.status(500).send({ error: 'Internal Server Error', details: err });
    }
});

module.exports = router;
