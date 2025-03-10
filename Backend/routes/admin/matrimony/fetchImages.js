var express = require('express');
var router = express.Router();
const db = require('../../../database/db');

router.use(express.json());

router.get('/',(req , res ,next)=>{

    let login_id = req.query.login_id;


    const query = `SELECT * FROM tblphotos WHERE login_id = ?`;

    db.query(query,[login_id],(err, result)=>{
        if(err) throw err;
        if(result.length === 0 ){
            return res.json({message: 'Failed'});
        }

        if(result.length > 0){
            return res.json(result);
        }
    })
})

module.exports = router;