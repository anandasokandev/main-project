var express = require('express');
var router = express.Router();
const db = require('../../../database/db');

router.use(express.json());

router.post('/',(req, res, next)=>{

    const { job, disabilitysubcategory  } = req.body;

    const constraintQuery = `INSERT INTO tbljobmatch (job_id, disability_subcategory_id) VALUES (?,?) `;
    db.query(constraintQuery,[job, disabilitysubcategory],(err, result)=>{
        if(err) throw err;
        if(result.affectedRows > 0){
            return res.json({'message':'Success'});
        }
        if(result.affectedRows  === 0){
            return res.json({'message':'Failed'});
        }
    })
})

module.exports = router;