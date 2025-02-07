var express = require('express');
var router = express.Router();
const db = require('../database/db');

router.use(express.json());

router.post('/', (req, res, next)=>{

    let dept_name = req.body.deptName;
    let dept_description = req.body.deptDesc;
    let disabilitypercent = req.body.disabilitypercent;
    

    const checkDepartment = 'SELECT * FROM tbldepartment WHERE dept_name = ?';
    console.log(checkDepartment);
    

        db.query(checkDepartment,[dept_name],(err, result)=>{
            if(err) throw err;
            if(result.length == 0 )
            {
                const insertDepartment = 'INSERT INTO tbldepartment (dept_name, dept_description, disability_percent) values (?, ?, ?)';
                db.query(insertDepartment, [dept_name, dept_description, disabilitypercent],(err,result)=>{
                    console.log();
                    res.send({message: 'Success'});
                })
            }else{
                res.send({message: 'Failed'});
            }
           

    

        });

});


module.exports = router;