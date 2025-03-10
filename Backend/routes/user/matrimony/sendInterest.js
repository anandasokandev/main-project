var express = require('express');
var router = express.Router();
const db = require('../../../database/db');

router.use(express.json());

router.post('/', (req, res, next) => {
    const { login_id, interest_loginid , selectedMessage } = req.body;
    const status = 'Pending';

    const sendInterest = `INSERT INTO tblinterest (login_id, interest_loginid, message, status) VALUES (?, ?,?,?)`;

    db.query(sendInterest, [login_id, interest_loginid,selectedMessage,status], (err, result) => {
        if (err) {
            return next(err); // Properly handle errors by passing them to the error handler
        }

        // Check if at least one row was inserted
        if (result.affectedRows > 0) {
            return res.json({ message: 'Success' });
        } else {
            return res.json({ message: 'Failed' });
        }
    });
});

module.exports = router;
