var express = require('express');
var router = express.Router();
const db = require('../database/db');

router.use(express.json());

router.get('/', async (req, res, next)=>{

    let dept_id = req.query.dept_id;
    try {
        const query = 'SELECT * FROM tbldepartment WHERE dept_id = ?';
    
            db.query(query,[dept_id],(err,result)=>{
                if(err) 
                    throw err;   

                if(result.length === 0)
                    return res.json({message: 'No department found'});
                
                return res.json(result);
            });
    }catch(err) {
        return res.status(500).send("Server error");
    }
    
    
})


module.exports = router;