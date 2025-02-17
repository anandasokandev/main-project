var express = require('express');
var router = express.Router();
const db = require('../../../database/db');


router.use(express.json());

router.get('/',(req, res, next)=>{

    let loginid = req.query.loginid;
    const profileExistsQuery = 'SELECT * FROM tblprofile WHERE login_id = ?';

    db.query(profileExistsQuery, [loginid], (err , result)=>{

        console.log(loginid);
        
        
        if(err) throw err;

        if(result.length > 0){
            return res.json({message: 'Profile Found', data: result});
        }else{
            return res.json({'message': 'Failed'});
        }
    })
})

module.exports = router;