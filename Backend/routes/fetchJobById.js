var express = require('express');
var router = express.Router();
const db = require('../database/db');

router.use(express.json());

router.post('/',(req, res, next)=>{

    let jobcat_id = req.body.jobcat_id;

    const fetchJobByIdQuery = "SELECT * FROM tbljob WHERE jobcat_id = ?";

    db.query(fetchJobByIdQuery,[jobcat_id],(err, result)=>{

        if(err) return res.status(500).send({'message': 'Database Error', error: err});

        if(result.length > 0) return res.json(result);

        return res.status(400).send({'message': 'Job fetching failed'});
    })
})

module.exports = router;