var express = require('express');
var router = express.Router();
const db = require('../../../database/db');

router.use(express.json());


router.put('/', (req, res, next) => {
    
    var status = 'Admitted';
    var admissionId = req.body.admission_id;  
    var loginId = req.body.login_id;

   
    if (!admissionId) {
        return res.status(400).json({ message: 'Admission ID is required' });
    }

    
    const updateAdmission = `
        UPDATE tbladmissionform 
        SET form_status = ?, review_date = NOW() 
        WHERE admission_id = ? AND login_id = ?`;

    
    db.query(updateAdmission, [status, admissionId, loginId], (err, result) => {
        if (err) {
           
            return res.status(500).json({ error: err.message });
        }

    
        if (result.length === 0) {
            return res.status(404).json({ message: 'Admission ID not found or already updated' });
        }

      
        res.json({ message: 'Admission status updated successfully' });
    });
});

module.exports = router;
