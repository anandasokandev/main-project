var express = require('express');
var router = express.Router();
const db = require('../../../database/db');

router.use(express.json());

router.delete('/', (req, res, next) => {
    let course_id = req.query.course_id;

    // Check if dept_id is provided
    if (!course_id) {
        return res.status(400).json({ message: 'All field is required' });
    }

    // SQL query to delete the department by its ID
    const query = 'DELETE FROM tblcourse WHERE course_id = ?';

    // Execute the query
    db.query(query, [course_id], (err, result) => {
        if (err) {
            console.error('Error occurred while deleting:', err);
            return res.status(500).json({ message: 'Server error occurred while deleting the course.' });
        }

        // If no rows are affected, it means the department wasn't found
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'course not found.' });
        }

        // If the deletion is successful
        return res.json({ message: 'Success' });
    });
});

module.exports = router;
