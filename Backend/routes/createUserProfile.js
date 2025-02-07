var express = require('express');
var router = express.Router();
const db = require('../database/db');

router.use(express.json());

router.post('/',(req, res, next)=>{

    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let email = req.body.email;
    let mobile = req.body.mobile;
    let dateofbirth = req.body.dateofbirth;
    let gender = req.body.gender;
    let pincode = req.body.pincode;
    let state = req.body.state;
    let district = req.body.district;
    let location = req.body.location;
    let disabilitytype = req.body.disabilitytype;
    let disabilitypercent = req.body.disabilitypercent;
    let profile = req.body.profile;
    let loginid = req.body.loginid;

    const createUserProfileQuery = 'INSERT INTO tbluser (first_name, last_name, email, phone, dob, gender, pincode, state, district, location, disability_type, disability_percent, profile_pic, login_id ) values( ?,?,?,?,?,?,?,?,?,?,?,?,?,? )';

    db.query(createUserProfileQuery,[firstname, lastname, email, mobile, dateofbirth, gender, pincode, state, district, location, disabilitytype, disabilitypercent, profile, loginid ],(err, result)=>{

        if(err) throw err;

        if(result.affectedRows > 0) {
            return res.send({'message': 'Success' });
        }else{
            res.send({message: 'Failed'});
        }


    })
})

module.exports = router;