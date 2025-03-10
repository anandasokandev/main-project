var express = require("express");
var router = express.Router();
const db = require("../../../database/db");

router.use(express.json());

router.get("/", (req, res) => {
  let { login_id, interest_loginid } = req.query;

  // Validate required fields
  if (!login_id || !interest_loginid) {
    return res.status(400).json({ message: "Missing required fields: login_id or interest_loginid" });
  }

  // Prepare the SQL query
  const fetchInterest = `SELECT * FROM tblinterest WHERE login_id = ? AND interest_loginid = ?`;

  // Execute the query
  db.query(fetchInterest, [login_id, interest_loginid], (err, result) => {
    if (err) {
      // Send database error response
      return res.status(500).json({ message: "Database error", error: err });
    }

    // Check the result
    if (result.length === 0) {
      // If no result found
      return res.json({ message: "Not Found" });
    } else {
      // If the record exists
      return res.json({ message: "Already exists" });
    }
  });
});

module.exports = router;
