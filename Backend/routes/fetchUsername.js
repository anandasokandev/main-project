var express = require('express');
var router = express.Router();
const db = require('../database/db');

// Middleware to parse JSON request bodies
router.use(express.json());

router.get('/', (req, res, next) => {

    
    let username  = req.query.username

    
    
    if (!username) {
        return res.status(400).send({ message: 'Username is required' });
    }

    try {
        const query = 'SELECT * FROM tbllogin WHERE username = ?';

        
        db.query(query, [username], (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send({ error: 'Database query failed', details: err });
            }

            
            if (result.length > 0) {
                return res.json({ message: 'Username already exists' }); 
            }

            return res.json({ message: 'Username is available' });
        });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ error: 'Internal Server Error', details: err });
    }
});

module.exports = router;
