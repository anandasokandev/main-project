var express = require('express');
var router = express.Router();
const db = require('../../../database/db');

router.use(express.json());

router.delete('/', (req, res, next) => {

    let job_id = req.query.job_id;

    if (!job_id) {
        return res.status(400).json({ message: 'Job ID is required' });
    }

    const query = 'DELETE FROM tbljob WHERE job_id = ?';

    // Execute the query
    db.query(query, [job_id], (err, result) => {
        if (err) {
            console.error('Error occurred while deleting:', err);
            return res.status(500).json({ message: 'Server error occurred while deleting the job category.' });
        }

        // If no rows are affected, it means the department wasn't found
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Job not found.' });
        }

        // If the deletion is successful
        return res.json({ message: 'Success' });
    });
});

module.exports = router;
