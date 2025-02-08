var express = require('express');
var router = express.Router();
const db = require('../../../database/db');

router.use(express.json());

router.get('/', (req, res, next) => {
    
    var status = 'Submitted';

    // Correct the typo in SQL query
    const fetchAdmission = 'SELECT * FROM tbladmissionform WHERE form_status = ?';

    // Execute the query with parameters
    db.query(fetchAdmission, [status], (err, result) => {
        if (err) {
            // Handle the error by sending a response with the error message
            return res.status(500).json({ error: err.message });
        }

        if(result.length === 0 ){
            return res.json({message: 'Failed'})
        }
        
        // If no error, send the result as a JSON response
        res.json(result.length);
    });
});

module.exports = router;
