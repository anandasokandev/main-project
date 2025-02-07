var express = require('express');
var router = express.Router();
const db = require('../database/db');

router.use(express.json());

router.get('/', async (req, res, next)=>{
    try {
        const query = 'SELECT * FROM tbldepartment';
    
            db.query(query,(err,result)=>{
                if(err) 
                    throw err;   

                if(result.length === 0)
                    return res.status(404).send('No department found');
                
                return res.json(result);
            });
    }catch(err) {
        return res.status(500).send("Server error");
    }
    
    
})


module.exports = router;