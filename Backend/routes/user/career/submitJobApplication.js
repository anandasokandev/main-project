var express = require('express');
var router = express.Router();
const db = require('../../../database/db');

router.use(express.json());

router.post('/', (req, res, next) => {
    const { login_id, job_id } = req.body;
    const form_status = 'Submitted';

    const jobFormQuery = `INSERT INTO tbljobform (login_id, job_id, form_status) VALUES (?, ?, ?)`;
    
    db.query(jobFormQuery, [login_id, job_id, form_status], (err, result) => {
        if (err) {
            console.error(err); // Log the error for debugging
            return res.status(500).json({ message: 'Internal Server Error', error: err.message });
        }

        if (result.affectedRows > 0) {
            return res.status(201).json({ message: 'Success' });
        } else {
            return res.status(400).json({ message: 'Failed' });
        }
    });
});

module.exports = router;
