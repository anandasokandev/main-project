var express = require('express');
var router = express.Router();
const db = require('../database/db');

router.use(express.json());

router.post('/', (req, res, next) => {
    let jobCategoryName = req.body.jobCategoryName;
    let jobCategoryDesc = req.body.jobCategoryDesc;
    let qualification = req.body.qualification;

    const insertJobCategory = 'INSERT INTO tbljobcategory (jobcat_name, qualification, description) values (?,?,?)';

    db.query(insertJobCategory, [jobCategoryName, qualification, jobCategoryDesc], (err, result) => {
        if (err) return res.status(500).send({ 'message': 'Database error', error: err });

        if (result.affectedRows > 0) {
            return res.status(201).send({ 'message': 'Jobcategory created successfully' });
        }

        return res.status(400).send({ 'message': 'Jobcategory creation failed' });
    });
});

module.exports = router;
