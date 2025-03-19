const express = require('express');
const router = express.Router();
const db = require('../../../../database/db');
const e = require('express');


router.post('/', (req, res, next) => {
  let { course , endDate, startDate, status, disabilitySubCategory} = req.body;
 
  let query = `SELECT * FROM tbllogin l INNER JOIN tbluser u ON l.login_id = u.login_id 
  INNER JOIN tbladmissionform af ON af.login_id = u.login_id INNER JOIN 
  tblcourse c ON c.course_id = af.course_id WHERE 1=1 AND l.status = 'approved'`; 
  let queryParams = [];
  

  if (course) {
    query += ' AND af.course_id = ?';
    queryParams.push(course);
  }

  if (endDate) {
    query += ' AND af.submission_date >= ?';
    queryParams.push(endDate);
  }

  if (startDate) {
    query += ' AND af.submission_date <= ?';
    queryParams.push(startDate);
  }

  if (status) {
    query += ' AND af.form_status = ?';
    queryParams.push(status);
  }

  if (disabilitySubCategory) {
    query += ' AND u.disability_sub_category = ?';
    queryParams.push(disabilitySubCategory);
  }

  console.log('Generated Query:', query);  // Debugging: Log the final query
  console.log('Query Parameters:', queryParams);  // Debugging: Log the query parameters

  db.query(query, queryParams, (err, results) => {
    if (err) {
      console.error('Database error:', err);  // Log the error in case of failure
      return res.json({ message: 'Failed'});
    }

    res.json(results);
  });
});

module.exports = router;

