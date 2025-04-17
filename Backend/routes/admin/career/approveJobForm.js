var express = require('express');
var router = express.Router();
const db = require('../../../database/db');

router.use(express.json());

router.put('/', (req, res, next) => {
    const { id } = req.body; // Extracting the jobform_id from the request body

    console.log(req.body); // Logging the request body to verify the data

    const approveJobForm = `UPDATE tbljobform SET form_status = 'Approved' WHERE jobform_id = ?`;

   
    // Execute the query
    db.query(approveJobForm, [id], (err, result) => {
        if (err) {
            console.error("Error executing query: ", err); // Log the error for debugging
            return res.status(500).json({ 'message': 'Internal Server Error', error: err.message });
        }
        
        // Check if any row was affected
        if (result.affectedRows > 0) {
            return res.json({ 'message': 'Success', data: result });
        } else {
            return res.status(404).json({ 'message': 'Job form not found or already approved' });
        }
    });
});

module.exports = router;
