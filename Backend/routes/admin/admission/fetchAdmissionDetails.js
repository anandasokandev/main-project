var express = require('express');
var router = express.Router();
const db = require('../../../database/db');

router.use(express.json());

router.get('/', (req, res, next) => {
    var fromDate = req.query.fromDate;
    var toDate = req.query.toDate;
    var status = req.query.status;

    // Correct the typo in SQL query
    const fetchAdmission = 'SELECT * FROM tbladmissionform af INNER JOIN tbluser u ON af.login_id = u.login_id INNER JOIN tblcourse c ON c.course_id = af.course_id WHERE af.submission_date >= ? AND   af.submission_date <= ? AND af.form_status = ?';

    // Execute the query with parameters
    db.query(fetchAdmission, [fromDate, toDate, status], (err, result) => {
        if (err) {
            // Handle the error by sending a response with the error message
            return res.status(500).json({ error: err.message });
        }

        if(result.length === 0 ){
            return res.json({message: 'Failed'})
        }
        
        // If no error, send the result as a JSON response
        res.json(result);
    });
});

module.exports = router;
