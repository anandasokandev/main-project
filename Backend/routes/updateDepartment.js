const express = require('express');
const router = express.Router();
const db = require('../database/db');

router.use(express.json());

// PUT endpoint to update department details
router.put('/', (req, res, next) => {

    const dept_id = req.body.dept_id;
    const dept_name = req.body.deptName;
    const dept_desc = req.body.deptDescription;

    
    // Validate the input fields
    if (!dept_id || !dept_desc || !dept_name) {
        return res.status(400).json({ message: 'Department ID, name, and description are required.' });
    }

    // SQL query to update department details
    const updateQuery = 'UPDATE tbldepartment SET dept_name = ?, dept_description = ? WHERE dept_id = ?';

    // Execute the update query
    db.query(updateQuery, [dept_name, dept_desc, dept_id], (err, result) => {
        if (err) {
            console.error('Database query failed:', err);
            return res.status(500).json({ message: 'Database query failed', error: err });
        }

        // Check if the update was successful
        if (result.affectedRows > 0) {
            return res.json({ message: 'Success' });
        } else {
            // In case no rows were updated, return a message
            return res.json({ message: 'No changes made or department not found.' });
        }
    });
});

module.exports = router;
