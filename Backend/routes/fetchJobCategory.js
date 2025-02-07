var express = require('express');
var router = express.Router();
const db = require('../database/db');

router.use(express.json());

router.get('/',(req, res, next)=>{

    fetchJobCategoryQuery = 'SELECT * FROM tbljobcategory';

    db.query(fetchJobCategoryQuery,(err, result)=>{

        if(err) return res.status(500).send({'message': 'Database error', error: err});

        if(result.length > 0) {
            return res.json(result);
        }

        return res.status(400).send({ 'message': 'Job category fetching failed' });

    })
})

module.exports = router;