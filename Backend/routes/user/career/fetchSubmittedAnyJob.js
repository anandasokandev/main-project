var express = require('express');
var router = express.Router();
const db = require('../../../database/db');

router.use(express.json());

router.get('/', (req, res, next) => {
    const { login_id } = req.query;

    // Validate required query parameters
    if (!login_id ) {
        return res.status(400).json({ message: 'Missing required parameters: login_id' });
    }

    const jobFormQuery = `SELECT * FROM tbljobform WHERE login_id = ? AND ( form_status = 'Submitted' OR form_status = 'Rejected') `;

    db.query(jobFormQuery, [login_id], (err, result) => {
        if (err) {
            console.error(err); // Log the error for debugging
            return res.status(500).json({ message: 'Internal Server Error', error: err.message });
        }

        if (result.length > 0) {
            return res.status(200).json({ message: 'Success' });
        } else {
            return res.status(204).json({ message: 'Failed' }); // No content found
        }
    });
});

module.exports = router;
