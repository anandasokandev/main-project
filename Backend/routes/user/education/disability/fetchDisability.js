var express = require('express');
var router = express.Router();
var db = require('../../../../database/db');

router.use(express.json());

router.get('/',(req, res, next)=>{

    const fetchDisabilityCategory = 'SELECT * FROM disabilitycategories';

    db.query(fetchDisabilityCategory, (err, result)=>{
        if(err) throw err;
        return res.json(result);
    })
})

module.exports = router;