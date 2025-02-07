var express = require('express');
var router = express.Router();
const db = require('../database/db');

router.use(express.json());

router.post('/',(req, res, next)=>{

    let department_id = req.body.department_id;

    const fetchCourseById = 'SELECT * FROM tblcourse WHERE department_id = ?';

    db.query(fetchCourseById,[department_id],(err, result)=>{
        if(err) throw err;
        
        if(result.length === 0)
            return res.status(404).send('No department found');
        
        return res.json(result);
    })
})

module.exports = router;