var express = require('express');
var router = express.Router();
const db = require('../../../database/db');

router.use(express.json());

router.get('/',(req, res, next)=>{
    
    let login_id = req.query.login_id;

    const fetchInterestByUser = `SELECT * FROM tbllogin l INNER JOIN tbluser u ON l.login_id = u.login_id
    INNER JOIN tblprofile p ON p.login_id = l.login_id INNER JOIN tblinterest i ON i.login_id = p.login_id where i.interest_loginid = ? AND i.status = 'Declined'`

    db.query(fetchInterestByUser,[login_id],(err, result)=>{
        if(err) throw err;

        if(result.length === 0){
            return res.json({'message':'Not Found'});
        }

        if(result.length > 0){
            return res.json(result)
        }
    })
})

module.exports = router;