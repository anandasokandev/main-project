const express = require('express');
const router = express.Router();
const db = require('../../../database/db');

router.use(express.json());

// PUT endpoint to update department details
router.put('/', (req, res, next) => {

    const login_id = req.body.login_id;

    // Validate the input fields
    if (!login_id) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    // SQL query to update department details
    const updateQuery = `UPDATE tbllogin SET status = 'disabled' WHERE login_id = ?`;

    // Execute the update query
    db.query(updateQuery, [login_id], (err, result) => {
        if (err) {
            console.error('Database query failed:', err);
            return res.status(500).json({ message: 'Database query failed', error: err });
        }

        // Check if the update was successful
        if (result.affectedRows > 0) {
            return res.json({ message: 'Success' });
        } else {
            // In case no rows were updated, return a message
            return res.json({ message: 'Failed' });
        }
    });
});

module.exports = router;
