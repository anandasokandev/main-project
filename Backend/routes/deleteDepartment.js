var express = require('express');
var router = express.Router();
const db = require('../database/db');

router.use(express.json());

router.delete('/', (req, res, next) => {

    let dept_id = req.query.dept_id;

    // Check if dept_id is provided
    if (!dept_id) {
        return res.status(400).json({ message: 'Department ID is required' });
    }

    console.log('Department ID to delete:', dept_id);

    // SQL query to delete the department by its ID
    const query = 'DELETE FROM tbldepartment WHERE dept_id = ?';

    // Execute the query
    db.query(query, [dept_id], (err, result) => {
        if (err) {
            console.error('Error occurred while deleting:', err);
            return res.status(500).json({ message: 'Server error occurred while deleting the department.' });
        }

        // If no rows are affected, it means the department wasn't found
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Department not found.' });
        }

        // If the deletion is successful
        return res.json({ message: 'Success' });
    });
});

module.exports = router;
