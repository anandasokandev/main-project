var express = require('express');
var router = express.Router();
const db = require('../../../database/db');


router.use(express.json());

router.post('/', (req, res, next) => {

  let {startDate, endDate, disabilitySubCategory, disabilityCategory, job} = req.body;

  // Initialize queryParams array to store the query parameters
  let queryParams = [];

  // Start constructing the query
  let query = `SELECT * FROM tbllogin l INNER JOIN tbluser u ON u.login_id = l.login_id INNER JOIN tbljobform jf ON jf.login_id = l.login_id INNER JOIN tbljob j ON j.job_id = jf.job_id WHERE 1=1 AND jf.form_status = 'Submitted'`;

  if (job) {
    query += ' AND jf.job_id = ?'; // Using LIKE for partial matching
    queryParams.push(job); // Adding the search term with wildcards for partial matching
  }
  // Conditional logic to build the query based on the provided filters
  if (startDate) {
    query += ' AND jf.submission_date >= ?';
    queryParams.push(startDate);
  }

  if (endDate) {
    query += ' AND jf.submission_date <= ?';
    queryParams.push(endDate);
  }

  if (disabilityCategory) {
    query += ' AND u.disability_category = ?';
    queryParams.push(disabilityCategory);
  }

  if (disabilitySubCategory) {
    query += ' AND u.disability_sub_category = ?';
    queryParams.push(disabilitySubCategory);
  }


  console.log('Generated Query:', query); // Log the query for debugging

  // Execute the query with the parameters
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
});

module.exports = router;
