var express = require('express');
var router = express.Router();
const db = require('../../../../database/db');

router.use(express.json());

router.delete('/', (req, res, next) => {
    
    const admission_id = req.query.id;

    const admissionQuery = `DELETE FROM tbladmissionform WHERE admission_id = ?`;
    

    db.query(admissionQuery, [admission_id], (err, result) => {
        if (err) {
            console.error('Error occurred while deleting:', err);
            return res.status(500).json({ message: 'Server error occurred while deleting the job category.' });
        }

        // If no rows are affected, it means the department wasn't found
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Failed' });
        }

        // If the deletion is successful
        return res.status(200).json({ message: 'Success' });
    });
});

module.exports = router;
