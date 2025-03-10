var express = require('express');
var router = express.Router();
const db = require('../../../database/db');

router.use(express.json());

router.delete('/', (req, res, next) => {

    let jobcat_id = req.query.jobcat_id;

    // Check if dept_id is provided
    if (!jobcat_id) {
        return res.status(400).json({ message: 'Job Category ID is required' });
    }

    // SQL query to delete the department by its ID
    const query = 'DELETE FROM tbljobcategory WHERE jobcat_id = ?';

    // Execute the query
    db.query(query, [jobcat_id], (err, result) => {
        if (err) {
            console.error('Error occurred while deleting:', err);
            return res.status(500).json({ message: 'Server error occurred while deleting the job category.' });
        }

        // If no rows are affected, it means the department wasn't found
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Jobcategory not found.' });
        }

        // If the deletion is successful
        return res.json({ message: 'Success' });
    });
});

module.exports = router;
