var express = require('express');
var router = express.Router();
const db = require('../../../database/db');
const moment = require('moment');
const currentDateTime = moment().format('YYYY-MM-DD HH:mm:ss');

router.use(express.json());

router.put('/', (req, res, next) => {
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


    let dt = currentDateTime;
    

    // Ensure the loginid is present in the body
    if (!loginid) {
        return res.status(400).json({ message: 'Login ID is required' });
    }

    // Create the SQL query for updating the profile
    const editProfileQuery = `
        UPDATE tblprofile
        SET marital_status = ?, religion = ?, caste = ?, mother_toungue = ?, 
            height = ?, weight = ?, body_type = ?, education = ?, 
            occupation = ?, income_range = ?, complexion = ?, age = ? , updated_at = ?
        WHERE login_id = ?
    `;

    // Execute the query with parameterized values to prevent SQL injection
    db.query(editProfileQuery, [maritalstatus, religion, caste, mothertoungue, 
        height, weight, bodytype, highesteducation, occupation, income, 
        complexion, age, dt, loginid], (err, result) => {
        
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error updating profile', error: err });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Profile not found' });
        }

        res.status(200).json({ message: 'Profile updated successfully' });
    });
});

module.exports = router;
