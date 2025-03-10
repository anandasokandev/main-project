const express = require('express');
const router = express.Router();
const db = require('../../../database/db');

router.use(express.json());

// PUT endpoint to update department details
router.put('/', (req, res, next) => {

    const course_id = req.body.course_id;
    const course_name = req.body.courseName;
    const course_desc = req.body.courseDesc;
    const course_code = req.body.courseCode;
    const course_duration = req.body.courseDuration;
    const department = req.body.department;


        // Validate the input fields
    if (!course_id || !course_code || !course_desc || !course_name || !course_duration || !department) {
        return res.status(400).json({ message: 'All feilds are required.' });
    }

    // SQL query to update department details
    const updateQuery = 'UPDATE tblcourse SET course_name = ?, course_code = ?, duration = ? , description = ? , department_id = ? WHERE course_id = ?';

    // Execute the update query
    db.query(updateQuery, [course_name, course_code, course_duration, course_desc, department, course_id], (err, result) => {
        if (err) {
            console.error('Database query failed:', err);
            return res.status(500).json({ message: 'Database query failed', error: err });
        }

        // Check if the update was successful
        if (result.affectedRows > 0) {
            return res.json({ message: 'Success' });
        } else {
            // In case no rows were updated, return a message
            return res.json({ message: 'No changes made or course not found.' });
        }
    });
});

module.exports = router;
