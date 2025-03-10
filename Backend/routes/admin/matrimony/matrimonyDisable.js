const express = require('express');
const router = express.Router();
const db = require('../../../database/db');

router.use(express.json());

// PUT endpoint to update department details
router.put('/', (req, res, next) => {

    const login_id = req.body.login_id;

    console.log(req.body);
    
    const updateQuery = "UPDATE tblprofile SET status = 'disabled' WHERE login_id = ?";

    db.query(updateQuery, [login_id], (err, result) => {
        if (err) {
            console.error('Database query failed:', err);
            return res.status(500).json({ message: 'Database query failed', error: err });
        }

        if (result.affectedRows > 0) {
            return res.json({ message: 'Success' });
        } else {
            return res.json({ message: 'Failed' });
        }
    });
});

module.exports = router;
