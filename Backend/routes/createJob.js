var express = require('express');
var router = express.Router();
const db = require('../database/db');

router.use(express.json());

router.post('/',(req, res, next)=>{

    let jobcat_id = req.body.jobcat_id;
    let job_name = req.body.job_name;
    let description = req.body.description;
    let disability_percent = req.body.disability_percent;

    const insertJobQuery = 'INSERT INTO tbljob (jobcat_id, job_name, description, disability_percent) values (?,?,?,?)';

    db.query(insertJobQuery, [jobcat_id, job_name, description, disability_percent],(err, result)=>{


        if(err) return res.status(500).send({'message': 'Database Error', error: err});

        if(result.affectedRows>0) return res.status(201).send({'message': 'Job Created Successfully'});

        return res.status(400).send({ 'message': 'Job creation failed' });
    })
})

module.exports = router;