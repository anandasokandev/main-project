const express = require('express');
const router = express.Router();
const db = require('../../../database/db');

router.use(express.json());

// PUT endpoint to update department details
router.put('/', (req, res, next) => {

    const jobCategoryName = req.body.jobCategoryName;
    const jobCategoryDesc = req.body.jobCategoryDesc;
    const Qualification = req.body.qualification;
    const jobcate_id = req.body.jobcat_id;

    // Validate the input fields
    if (!jobCategoryDesc || !jobCategoryName || !Qualification) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    // SQL query to update department details
    const updateQuery = 'UPDATE tbljobcategory SET jobcat_name = ?, qualification = ? , description = ? WHERE jobcat_id = ?';

    // Execute the update query
    db.query(updateQuery, [jobCategoryName, Qualification, jobCategoryDesc, jobcate_id], (err, result) => {
        if (err) {
            console.error('Database query failed:', err);
            return res.status(500).json({ message: 'Database query failed', error: err });
        }

        // Check if the update was successful
        if (result.affectedRows > 0) {
            return res.json({ message: 'Success' });
        } else {
            // In case no rows were updated, return a message
            return res.json({ message: 'No changes made or job category not found.' });
        }
    });
});

module.exports = router;
