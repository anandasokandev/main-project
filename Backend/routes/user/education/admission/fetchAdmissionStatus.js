var express = require('express');
var router = express.Router();
const db = require('../../../../database/db');

router.use(express.json());

router.post('/',(req, res, next)=>{
    let { status, startdate, enddate, login_id } = req.body;

  // Ensure login_id is included in the query
  if (!login_id) {
    return res.status(400).json({ message: 'Login ID is required' });
  }

  // Start constructing the query
  let query = `
    SELECT * FROM tbllogin l 
    INNER JOIN tbladmissionform af ON af.login_id = l.login_id 
    INNER JOIN tblcourse c ON c.course_id = af.course_id
    where af.login_id = ?
  `;

  let queryParams = [login_id];

  if (status) {
    query += ' AND af.form_status = ?';
    queryParams.push(status);
  }

  if (startdate) {
    query += ' AND af.submission_date >= ?';
    queryParams.push(startdate);
  }

  
  if (enddate) {
    query += ' AND af.submission_date <= ?';
    queryParams.push(enddate);
  }

  console.log('Generated Query:', query); 
  console.log('Query Parameters:', queryParams);

  // Execute the query
  db.query(query, queryParams, (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ message: 'Database query failed', error: err });
    }

    if (results.length > 0) {
      return res.json({ message: 'Records retrieved successfully', data: results });
    } else {
      return res.json({ message: 'No records found' });
    }
  });
})

module.exports = router;