const express = require('express');
const router = express.Router();
const db = require('../database/db');


router.use(express.json());


router.put('/', (req, res, next) => {

    let login_id = req.body.login_id;
    let user_category = req.body.user_category;

   
    if (!login_id || !user_category) {
        return res.status(400).send({ message: 'Login ID and user category are required.' });
    }

    
    const updateQuery = 'UPDATE tbluser SET user_category = ? WHERE login_id = ?';

    db.query(updateQuery, [user_category, login_id], (err, result) => {
        if (err) {
            return res.status(500).send({ message: 'Database query failed', error: err });
        }

        if (result.affectedRows > 0) {
           
            return res.send({ message: 'Success' });
        } else {
            
            return res.status(404).send({ message: 'User not found' });
        }
    });
});

module.exports = router;
