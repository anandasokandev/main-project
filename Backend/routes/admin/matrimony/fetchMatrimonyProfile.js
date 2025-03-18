const express = require('express');
const router = express.Router();
const db = require('../../../database/db');

// Validation function for age
const validateAge = (age) => {
  return !isNaN(age) && age >= 0;
};

router.post('/', (req, res, next) => {
  let { age, religion, gender, status_profile } = req.body;
  
  // Input validation
  if (age && !validateAge(age)) {
    return res.status(400).json({ error: 'Invalid age provided' });
  }

  let query = `SELECT * FROM tbllogin l INNER JOIN tblprofile p ON l.login_id = p.login_id 
  INNER JOIN tbluser u ON u.login_id = p.login_id WHERE 1=1 AND l.status = 'approved'`; 
  let queryParams = [];
  
  
  if (age) {
    query += ' AND age = ?';
    queryParams.push(age);
  }

  if (religion) {
    query += ' AND religion = ?';
    queryParams.push(religion);
  }

  if (gender) {
    query += ' AND gender = ?';
    queryParams.push(gender);
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

