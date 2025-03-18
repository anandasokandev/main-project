var express = require('express');
var router = express.Router();
const db = require('../../../database/db');

router.use(express.json());

router.post('/', (req, res, next) => {

  let { searchQuery, startdate, enddate, genderFilter } = req.body;

  // Initialize queryParams array to store the query parameters
  let queryParams = [];

  // Start constructing the query
  let query = `
    SELECT * FROM tbllogin l 
    INNER JOIN tbluser u ON u.login_id = l.login_id 
    WHERE l.status = 'approved' AND u.user_category = 'Career'
  `;

  // Conditional logic to build the query based on the provided filters
  if (searchQuery) {
    query += ' AND u.first_name LIKE ?'; // Using LIKE for partial matching
    queryParams.push(`%${searchQuery}%`); // Adding the search term with wildcards for partial matching
  }

  if (startdate) {
    query += ' AND u.created_at >= ?';
    queryParams.push(startdate);
  }

  if (enddate) {
    query += ' AND u.created_at <= ?';
    queryParams.push(enddate);
  }

  if (genderFilter) {
    query += ' AND u.gender = ?';
    queryParams.push(genderFilter);
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
