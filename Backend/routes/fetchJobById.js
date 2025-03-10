var express = require('express');
var router = express.Router();
const db = require('../database/db');

router.use(express.json());

router.post('/', (req, res, next) => {

    let { jobcat_id } = req.body;

    
    console.log(jobcat_id);
    
    const fetchJobByIdQuery = "SELECT * FROM tbljob WHERE jobcat_id = ?";

    db.query(fetchJobByIdQuery, [jobcat_id], (err, result) => {
        if (err) {
            return res.status(500).send({ message: 'Database Error', error: err });
        }

        if (result.length > 0) {
            return res.json(result);
        }

        return res.json({ message: `No jobs found for job category ID: ${jobcat_id}` });
    });
});

module.exports = router;
