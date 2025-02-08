var express = require('express');
var router = express.Router();
const db = require('../../database/db');

router.use(express.json());

router.post('/', (req, res) => {

    let deptId = req.body.department;
    let courseName = req.body.courseName;
    let courseCode = req.body.courseCode;
    let courseDuration = req.body.courseDuration;
    let courseDesc = req.body.courseDesc;

    const createCourse = 'INSERT INTO tblcourse (department_id, course_name, course_code, duration, description) VALUES (?,?,?,?,?)';

    // Perform database query to insert course
    db.query(createCourse, [deptId, courseName, courseCode, courseDuration, courseDesc], (err, result) => {
        if (err) {
            // Log the error and send 500 Internal Server Error
            console.error("Database error:", err);
            return res.status(500).send({ message: 'Database error', error: err });
        }

        // Check if row was inserted (affectedRows will be > 0 if successful)
        if (result.affectedRows > 0) {
            return res.status(201).send({ message: 'Success' });
        } else {
            return res.status(400).send({ message: 'Failed to create course' });
        }
    });
});

module.exports = router;
