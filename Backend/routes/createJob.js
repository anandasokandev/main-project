var express = require('express');
var router = express.Router();
const db = require('../database/db');

router.use(express.json());

router.post('/', (req, res, next) => {
    
    // Destructuring request body
    const { jobcategory, jobname, jobDescription } = req.body;

    // Basic input validation
    if (!jobcategory || !jobname || !jobDescription) {
        return res.status(400).send({ 'message': 'Missing required fields' });
    }

    // SQL query to insert a new job
    const insertJobQuery = 'INSERT INTO tbljob (jobcat_id, job_name, description) VALUES (?, ?, ?)';

    // Execute the query
    db.query(insertJobQuery, [jobcategory, jobname, jobDescription], (err, result) => {
        if (err) {
            console.error('Database Error:', err); // Log error for server-side debugging
            return res.status(500).send({ 'message': 'Database Error', error: err });
        }

        // Check if the insertion was successful
        if (result.affectedRows > 0) {
            return res.json({ 'message': 'Job created successfully' });
        }

        return res.json({ 'message': 'Job creation failed' });
    });
});

module.exports = router;
