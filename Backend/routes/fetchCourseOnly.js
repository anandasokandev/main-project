var express = require('express');
var router = express.Router();
const db = require('../database/db');

router.use(express.json());

router.get('/',(req, res, next)=>{

    const fetchCourse = "SELECT * FROM tblcourse";
    db.query(fetchCourse,(err, result)=>{
        if(err) 
            throw err;   

        if(result.length === 0)
            return res.status(404).send('No course found');
        
        return res.json(result);

    })
})

module.exports = router;