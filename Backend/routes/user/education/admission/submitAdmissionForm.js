var express = require('express');
var router = express.Router();
const db = require('../../../../database/db');

router.use(express.json());

router.post('/', (req, res, next) => {

    var loginid = req.body.loginid;
    var courseid = req.body.courseid;
    var form_status = 'Submitted';

    // Corrected SQL query
    const admissionFormQuery = 'INSERT INTO tbladmissionform (login_id, course_id, form_status) VALUES (?, ?, ?)';
    
    db.query(admissionFormQuery, [loginid, courseid, form_status], (err, result) => {
        if (err) {
            // Handle error
            console.error(err);
            return res.status(500).json({'message': 'Database insertion failed'});
        }
        
        // If insertion is successful
        return res.status(200).json({'message': 'Form submitted successfully', 'result': result});
    });

});

module.exports = router;
