var express = require('express');
var router = express.Router();
const db = require('../../../database/db');

router.use(express.json());

router.get('/', (req, res, next) => {
    const { login_id, job_id } = req.query;

    // Validate required query parameters
    if (!login_id || !job_id) {
        return res.status(400).json({ message: 'Missing required parameters: login_id and job_id' });
    }

    const form_status = 'Submitted';

    const jobFormQuery = `SELECT * FROM tbljobform WHERE job_id = ? AND form_status = ? AND login_id = ?`;

    db.query(jobFormQuery, [job_id, form_status, login_id], (err, result) => {
        if (err) {
            console.error(err); // Log the error for debugging
            return res.status(500).json({ message: 'Internal Server Error', error: err.message });
        }

        if (result.length > 0) {
            return res.json({ message: 'Success' });
        } else {
            return res.json({ message: 'Form not found or not submitted' }); // No content found
        }
    });
});

module.exports = router;
