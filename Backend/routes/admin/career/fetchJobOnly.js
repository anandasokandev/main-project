var express = require('express');
var router = express.Router();
const db = require('../../../database/db');

router.use(express.json());

router.get('/', (req, res, next)=>{

    try {
        const query = 'SELECT * FROM tbljob';
    
            db.query(query,(err,result)=>{
                if(err) 
                    throw err;   

                if(result.length === 0)
                    return res.json({message: 'No Job Category found'});
                
                return res.json(result);
            });
    }catch(err) {
        return res.status(500).send("Server error");
    }
    
})

module.exports = router;