var express = require('express');
var router = express.Router();
const db = require('../../../database/db');

router.use(express.json());

router.post('/', (req, res, next) => {

    let { login_id, interest_loginid } = req.body;
    const fetchPreference = `INSERT INTO tblrequestcontact (from_loginid, to_loginid) VALUES (?,?)`;

    db.query(fetchPreference, [login_id, interest_loginid], (err, result) => {
        if (err) {
            // Handle error and send a response
            console.error('Error executing query', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }

        if (result.affectedRows > 0) {
            // Successfully inserted
            return res.json({ message: 'Success', data: result });
        } else {
            // Insertion failed
            return res.json({ message: 'Failed' });
        }
    });
});

module.exports = router;
