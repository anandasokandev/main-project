const express = require('express');
const router = express.Router();
const db = require('../../../database/db');

// Use express.json() middleware to parse incoming JSON requests
router.use(express.json());

// PUT endpoint to update the status of the interest
router.put('/', (req, res, next) => {
    const { interest_id } = req.body;  // Expecting the ID to be sent in the request body

    // Validate the input fields
    if (!interest_id) {
        return res.status(400).json({ message: 'Interest ID is required.' });
    }

    // Prepare the SQL query to update the status of the interest
    const updateQuery = `UPDATE tblinterest SET status = 'Accepted' WHERE interest_id = ?`;

    // Execute the query
    db.query(updateQuery, [interest_id], (err, result) => {
        if (err) {
            console.error('Error updating interest:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        // Check if any rows were updated
        if (result.affectedRows > 0) {
            return res.json({ message: 'Interest successfully accepted.' });
        } else {
            return res.status(404).json({ message: 'Interest not found or already updated.' });
        }
    });
});

module.exports = router;
