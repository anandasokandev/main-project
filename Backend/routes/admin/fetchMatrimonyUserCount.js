var express = require('express');
var router = express.Router();
const db = require('../../database/db');

router.get('/', (req, res) => {
    const fetchQuery = `
        SELECT COUNT(*) AS count 
        FROM tbllogin l 
        INNER JOIN tbluser u ON u.login_id = l.login_id 
        WHERE u.user_category = 'Matrimony'
    `;

    db.query(fetchQuery, (err, result) => {
        if (err) {
            console.error('Database query error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (result.length > 0) {
            return res.json({ count: result[0].count });
        } else {
            return res.json({ count: 0 });
        }
    });
});

module.exports = router;
