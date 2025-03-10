var express = require('express');
var router = express.Router();
const db = require('../../../database/db');


router.use(express.json());

router.post('/',(req, res, next)=>{

    let maritalstatus = req.body.maritalstatus;
    let religion = req.body.religion;
    let caste = req.body.caste;
    let mothertoungue = req.body.mothertoungue;
    let height = req.body.height;
    let weight = req.body.weight;
    let bodytype = req.body.bodytype;
    let highesteducation = req.body.highesteducation;
    let occupation = req.body.occupation;
    let income = req.body.salary;
    let complexion = req.body.complexion;
    let loginid = req.body.loginid;
    let age = req.body.age;


    const profileQuery = 'INSERT INTO tblprofile (login_id, marital_status, religion, caste, mother_toungue, height, weight, body_type, education, occupation, income_range, complexion,age,status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?)';

    db.query(profileQuery, [loginid, maritalstatus, religion, caste, mothertoungue, height, weight, bodytype, highesteducation, occupation, income, complexion , age,'approved'],(err , result)=>{
        if(err) throw err;

        if(result.affectedRows > 0){
            return res.json({'message': 'Profile Created'});
        }else{
            return res.json({'message': 'Failed'});
        }
    })
})

module.exports = router;