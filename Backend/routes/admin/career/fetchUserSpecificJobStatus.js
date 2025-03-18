const express = require('express');
const router = express.Router();
const db = require('../../../database/db');

router.get('/', (req, res, next) => {
  const login_id = req.query.login_id;

  // Ensure login_id is included in the query
  if (!login_id) {
    return res.status(400).json({ message: 'Login ID is required' });
  }

  // Start constructing the query
  let query = `
    SELECT * FROM tbllogin l 
    INNER JOIN tbljobform jf ON jf.login_id = l.login_id 
    INNER JOIN tbljob j ON j.job_id = jf.job_id 
    WHERE jf.login_id = ?
  `;

  // Execute the query
  db.query(query, [login_id], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ message: 'Database query failed', error: err });
    }

    if (results.length > 0) {
      return res.json({ message: 'Success', data: results });
    } else {
      return res.json({ message: 'Failed' });
    }
  });
});

module.exports = router;
