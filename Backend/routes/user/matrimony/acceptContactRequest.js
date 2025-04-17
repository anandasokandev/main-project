var express = require('express');
var router = express.Router();
const db = require('../../../database/db');

router.use(express.json());

router.put('/', (req, res, next) => {
    
    let request_id = req.body;

    console.log(request_id);
    
    
    // Validate the request_id is provided
    if (!request_id) {
        return res.status(400).json({ message: 'Request ID is required' });
    }

    const fetchPreference = `UPDATE tblrequestcontact SET status = 'Yes' WHERE request_id = ?`;

    db.query(fetchPreference, [request_id.request_id], (err, result) => {
        if (err) {
            // Log the error and send a 500 response
            console.error('Database query error:', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }

        // Check if any rows were affected
        if (result.affectedRows > 0) {
            // Return success if rows were updated
            return res.json({ message: 'Success' });
        } else {
            // If no rows were updated (no such request_id)
            return res.json({ message: 'Failed' });
        }
    });
});

module.exports = router;
