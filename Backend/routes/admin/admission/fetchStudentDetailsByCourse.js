var express = require('express');
var router = express.Router();
const db = require('../../../database/db');

router.use(express.json());

router.get('/', (req, res, next) => {
    var course_id = req.query.course_id;
    var status = 'Admitted';

    // Correct the typo in SQL query
    const fetchAdmission = 'SELECT * FROM tbladmissionform af INNER JOIN tbluser u ON af.login_id = u.login_id INNER JOIN tblcourse c ON c.course_id = af.course_id INNER JOIN disabilitysubcategories dsc ON dsc.id = u.disability_sub_category INNER JOIN disabilitycategories dc ON dc.id = dsc.disability_category_id WHERE af.course_id = ? AND af.form_status = ?';

    // Execute the query with parameters
    db.query(fetchAdmission, [course_id, status], (err, result) => {
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
