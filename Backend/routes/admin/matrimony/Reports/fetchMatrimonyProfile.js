const express = require('express');
const router = express.Router();
const db = require('../../../../database/db');


router.post('/', (req, res, next) => {
  let { district , marital_status, gender, status, religion, caste} = req.body;
 
  let query = `SELECT * FROM tbllogin l INNER JOIN tbluser u ON l.login_id = u.login_id 
  INNER JOIN tblprofile p ON p.login_id = u.login_id WHERE 1=1 AND l.status = 'approved'`; 
  let queryParams = [];
  

  if (religion) {
    query += ' AND p.religion = ?';
    queryParams.push(religion);
  }

  if (gender) {
    query += ' AND u.gender = ?';
    queryParams.push(gender);
  }
  if (caste) {
    query += ' AND p.caste = ?';
    queryParams.push(caste);
  }
  if (marital_status) {
    query += ' AND p.marital_status = ?';
    queryParams.push(marital_status);
  }
  if (status) {
    query += ' AND p.status = ?';
    queryParams.push(caste);
  }

  if (district) {
    query += ' AND u.district = ?';
    queryParams.push(district);
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

