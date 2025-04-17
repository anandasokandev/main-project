var express = require('express');
var router = express.Router();
const db = require('../../../database/db');

router.use(express.json());

router.get('/', (req, res, next) => {
    let { login_id, interest_loginid } = req.query;

    console.log(req.query);
    

    const fetchPreference = `SELECT * FROM tblrequestcontact rc INNER JOIN
    tbluser u ON u.login_id = rc.from_loginid WHERE rc.from_loginid = ? AND rc.to_loginid = ?`;
    
    db.query(fetchPreference, [login_id, interest_loginid], (err, result) => {
        if (err) {
            // Log the error and send a 500 response
            console.error('Database query error:', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }

        if (result.length > 0) {
            // Return the results if found
            return res.json({ message: 'Success', data: result });
        } else {
            // If no results found
            return res.json({ message: 'Failed' });
        }
    });
});

module.exports = router;
