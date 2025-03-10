var express = require('express');
var router = express.Router();
const db = require('../database/db');

router.use(express.json());

router.get('/',(req, res, next)=>{

    let course_id = req.query.course_id;
    console.log(course_id);
    

    const fetchCourseById = 'SELECT * FROM tblcourse c INNER JOIN tbldepartment d ON d.dept_id = c.department_id WHERE c.course_id = ?';

    db.query(fetchCourseById,[course_id],(err, result)=>{
        if(err) throw err;
        
        if(result.length === 0)
            return res.send('No course found');
        
        return res.json(result);
    })
})

module.exports = router;