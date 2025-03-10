var express = require('express');
var router = express.Router();
const db = require('../../../database/db');

router.use(express.json());

router.get('/', async (req, res, next)=>{

    let jobcat_id = req.query.jobcat_id;
    try {
        const query = 'SELECT * FROM tbljobcategory WHERE jobcat_id = ?';
    
            db.query(query,[jobcat_id],(err,result)=>{
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