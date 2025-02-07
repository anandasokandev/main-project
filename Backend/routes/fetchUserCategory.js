var express = require('express');
var router = express.Router();
const db = require('../database/db');

router.use(express.json());

router.get('/', (req, res, next) => {
    let login_id = req.query.loginid; 

    if (!login_id) {
        return res.status(400).send({ 'message': 'loginid is required' });
    }

    const fetchUserCategoryQuery = 'SELECT user_category FROM tbluser WHERE login_id = ?';

    db.query(fetchUserCategoryQuery, [login_id], (err, result) => {
        if (err) {
            return res.status(500).send({ 'message': 'Database error', 'error': err.message });
        }

        // If no results are found or user_category is null
        if (result.length === 0 || result[0].user_category === 'null') {
            return res.status(400).send({ 'message': 'User category is null or user not found' });
        }

        // Send the user category as a response
        return res.status(200).send({
            'user_category': result[0].user_category
        });
    });
});

module.exports = router;
