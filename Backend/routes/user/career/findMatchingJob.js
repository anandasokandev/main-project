var express = require('express');
var router = express.Router();
const db = require('../../../database/db');

router.use(express.json());

router.get('/', (req, res, next) => {
    const disability_id = req.query.disability_id;
    const jobcat_id = req.query.jobcat_id;
    
    if (!disability_id || !jobcat_id) {
        return res.status(400).json({'message': 'Disability ID and Job Category ID are required'});
    }

    const jobQuery = `SELECT * FROM tbljobcategory jc 
                      INNER JOIN tbljob j ON jc.jobcat_id = j.jobcat_id 
                      INNER JOIN tbljobmatch jm ON jm.job_id = j.job_id 
                      INNER JOIN disabilitysubcategories dsc ON dsc.id = jm.disability_subcategory_id 
                      WHERE jm.disability_subcategory_id = ? 
                      AND jc.jobcat_id = ?`;

    db.query(jobQuery, [disability_id, jobcat_id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({'message': 'Server error', error: err});
        }

        if (result.length > 0) {
            return res.json({'message': 'Success', result});
        }

        return res.json({'message': 'No data found'});
    });
});

module.exports = router;
