var express = require("express");
var router = express.Router();
const db = require("../../../database/db");

router.use(express.json());

router.delete("/", (req, res) => {

  console.log(req.body.login_id);
  
  
  const { login_id, interest_loginid } = req.query;
  
  // Validate required fields
  if (!interest_loginid || !login_id) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // SQL query to delete the interest
  const deleteInterest = `DELETE FROM tblinterest WHERE interest_loginid = ? AND login_id = ?`;
  db.query(deleteInterest, [interest_loginid, login_id], (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ message: "Database error", error: err });
    }

    // Check if any row was deleted
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Failed" });
    } else {
      return res.status(200).json({ message: "Success" });
    }
  });
});

module.exports = router;
