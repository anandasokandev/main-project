var express = require("express");
var router = express.Router();
const db = require("../../../database/db");

router.use(express.json());

router.get("/", (req, res) => {

  let { login_id } = req.query;

  // Validate required fields
  if (!login_id) {
    return res.status(400).json({ message: "Missing required fields: login_id" });
  }

  // Prepare the SQL query
  const fetchInterest = `SELECT * FROM tblinterest WHERE login_id = ?`;

  // Execute the query
  db.query(fetchInterest, [login_id], (err, result) => {
    if (err) {
      // Send database error response
      return res.status(500).json({ message: "Database error", error: err });
    }

    // Check the result
    if (result.length === 0) {
      // If no result found
      return res.json({ message: "Not Found" });
    }

    if (result.length > 0) {
      // If the record exists, include the data in the response
      return res.json({ message: "Interests found", data: result });
    }
  });
});

module.exports = router;
