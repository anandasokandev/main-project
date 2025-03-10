var express = require('express');
var router = express.Router();
const db = require('../../../database/db');

router.use(express.json());

router.get('/',(req , res ,next)=>{

    let login_id = req.query.login_id;
    


    const query = `SELECT * FROM tbllogin l INNER JOIN tbluser u ON l.login_id = u.login_id INNER JOIN tblprofile p ON u.login_id = p.login_id
     INNER JOIN tblfamilydetails fd ON fd.login_id = u.login_id INNER JOIN tblbiodetails b ON 
     b.login_id = u.login_id WHERE u.login_id = ? AND l.status = 'Approved'  `;

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